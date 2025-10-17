document.addEventListener('DOMContentLoaded', () => {
  /* ---------- helpers ---------- */
  const normNum = (v) => parseFloat(String(v).replace(',', '.'));

  const classifyBMI = (bmi) => {
    if (!isFinite(bmi)) return { text: '—', cls: '' };
    if (bmi < 18.5) return { text: `${bmi.toFixed(1)} (Underweight)`, cls: 'bmi-warn' };
    if (bmi < 25) return { text: `${bmi.toFixed(1)} (Good)`, cls: 'bmi-ok' };
    if (bmi < 30) return { text: `${bmi.toFixed(1)} (Overweight)`, cls: 'bmi-warn' };
    return { text: `${bmi.toFixed(1)} (Obese)`, cls: 'bmi-bad' };
  };

  const mergeStore = (key, obj) => {
    const prev = JSON.parse(localStorage.getItem(key) || '{}');
    localStorage.setItem(key, JSON.stringify({ ...prev, ...obj }));
  };

  /* ---------- map form values to backend 0/1 and one-hot ---------- */
  const mapFormToBackend = (data) => {
    return {
      sex: data.sex === '1' ? 1 : 0,
      age: parseInt(data.age) || 0,
      hypertension: data.hypertension === '1' ? 1 : 0,
      heart_disease: data.heart_disease === '1' ? 1 : 0,
      ever_married: data.marital === '1' ? 1 : 0,
      Residence_type: data.residence === '1' ? 1 : 0,
      avg_glucose_level: parseFloat(data.glucose_mgdl) || 0,
      bmi: parseFloat(data.bmi) || 0,
      smoking_status: data.smoke === '1' ? 1 : 0,
      work_Govt_job: data.work === 'Govt_job' ? 1 : 0,
      work_Never_worked: data.work === 'Never_worked' ? 1 : 0,
      work_Private: data.work === 'Private' ? 1 : 0,
      work_Self_employed: data.work === 'Self-employed' ? 1 : 0,
      work_children: data.work === 'children' ? 1 : 0
    };
  };

  /* ---------- Info Modal ---------- */
  const modal = document.getElementById('infoModal');
  const contentBox = document.getElementById('infoContent');
  let currentSourceBtn = null;

  function openInfo(html, sourceBtn) {
    if (!modal || !contentBox) return;
    contentBox.innerHTML = html;
    modal.hidden = false;
    document.body.classList.add('modal-open');
    currentSourceBtn = sourceBtn || null;
  }

  function closeInfo() {
    if (!modal) return;
    modal.hidden = true;
    document.body.classList.remove('modal-open');
    currentSourceBtn = null;
  }

  document.addEventListener('click', (e) => {
    if (e.target.closest('[data-close]')) {
      closeInfo();
      return;
    }
    const btn = e.target.closest('.info-btn');
    if (!btn) return;
    if (currentSourceBtn === btn && !modal.hidden) {
      closeInfo();
      return;
    }
    let html = '';
    const tipId = btn.getAttribute('aria-describedby');
    if (tipId) {
      const tip = document.getElementById(tipId);
      if (tip) html = tip.innerHTML.trim();
    }
    if (!html && btn.dataset.info) html = btn.dataset.info;
    if (html) openInfo(html, btn);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.hidden) closeInfo();
  });

  /* ---------- STEP 1 and STEP 2 ---------- */
  const lifestyleForm = document.getElementById('lifestyleForm');
  if (lifestyleForm) {
    const heightEl = document.getElementById('heightInput');
    const weightEl = document.getElementById('weightInput');
    const bmiOut = document.getElementById('bmiChip');

    if (heightEl && weightEl && bmiOut) {
      bmiOut.setAttribute('aria-live', 'polite');
      const saved = JSON.parse(localStorage.getItem('strokify_lifestyle') || '{}');
      if (saved.height_m) heightEl.value = saved.height_m;
      if (saved.weight_kg) weightEl.value = saved.weight_kg;

      const updateBMI = () => {
        const h = normNum(heightEl.value);
        const w = normNum(weightEl.value);
        const bmi = (h > 0 && w > 0) ? w / (h * h) : NaN;
        const { text, cls } = classifyBMI(bmi);

        // Extract numeric value and label separately
        const match = text.match(/^([\d.]+)\s*\(([^)]+)\)/);
        const bmiNumber = match ? match[1] : '—';
        const bmiLabel = match ? match[2] : '';

        // Update display: keep numeric + translated part separate
        bmiOut.innerHTML = `${bmiNumber} <span data-key="bmi${bmiLabel.replace(/\s/g, '')}">(${bmiLabel})</span>`;

        // Update CSS classes
        bmiOut.classList.remove('bmi-ok', 'bmi-warn', 'bmi-bad');
        if (cls) bmiOut.classList.add(cls);

        // Store values
        mergeStore('strokify_lifestyle', {
          height_m: heightEl.value,
          weight_kg: weightEl.value,
          bmi: text
        });

        // Re-apply translation immediately if available
        if (typeof updateTranslations === 'function') {
          updateTranslations();
        }
      };


      heightEl.addEventListener('input', updateBMI);
      weightEl.addEventListener('input', updateBMI);
      heightEl.addEventListener('change', updateBMI);
      weightEl.addEventListener('change', updateBMI);
      updateBMI();
    }

    lifestyleForm.addEventListener('submit', (e) => {
      e.preventDefault();
      if (!lifestyleForm.checkValidity()) {
        lifestyleForm.querySelector(':invalid')?.focus();
        return;
      }
      const data = Object.fromEntries(new FormData(lifestyleForm).entries());
      const bmiText = document.getElementById('bmiChip')?.textContent;
      if (bmiText) data.bmi = bmiText;
      mergeStore('strokify_lifestyle', data);

      if (document.getElementById('heightInput')) {
        window.location.href = 'symptom_detector-2.html';
      } else {
        window.location.href = 'symptom_detector-3.html';
      }
    });
  }

  /* ---------- STEP 3: medical ---------- */
  const medicalForm = document.getElementById('medicalForm');
  if (medicalForm) {
    const glucoseSelect = document.getElementById('glucoseSelect');
    const glucoseGroup = document.getElementById('glucoseGroup');
    const glucoseInput = document.getElementById('glucoseInput');

    const savedMed = JSON.parse(localStorage.getItem('strokify_medical') || '{}');
    for (const [k, v] of Object.entries(savedMed)) {
      if (medicalForm.elements[k]) medicalForm.elements[k].value = v;
    }

    const toggleGlucose = () => {
      if (!glucoseSelect || !glucoseGroup || !glucoseInput) return;
      const show = glucoseSelect.value === 'yes';
      glucoseGroup.hidden = !show;
      glucoseSelect.setAttribute('aria-expanded', String(show));
      if (show) glucoseInput.setAttribute('required', 'required');
      else {
        glucoseInput.removeAttribute('required');
        glucoseInput.value = '';
      }
    };
    if (glucoseSelect) {
      glucoseSelect.addEventListener('change', toggleGlucose);
      toggleGlucose();
    }

    medicalForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      if (!medicalForm.checkValidity()) {
        medicalForm.querySelector(':invalid')?.focus();
        return;
      }

      const medData = Object.fromEntries(new FormData(medicalForm).entries());
      mergeStore('strokify_medical', medData);

      const combinedData = {
        ...JSON.parse(localStorage.getItem('strokify_lifestyle') || '{}'),
        ...JSON.parse(localStorage.getItem('strokify_medical') || '{}')
      };

      const mappedData = mapFormToBackend(combinedData);

      const feature_order = [
        "sex", "age", "hypertension", "heart_disease", "ever_married",
        "Residence_type", "avg_glucose_level", "bmi", "smoking_status",
        "work_Govt_job", "work_Never_worked", "work_Private",
        "work_Self-employed", "work_children"
      ];

      const orderedData = {};
      feature_order.forEach(key => {
        orderedData[key] = mappedData[key] !== undefined ? mappedData[key] : 0;
      });

      console.log('Data to send:', orderedData);

      const submitBtn = medicalForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;
      submitBtn.textContent = 'Analyzing...';
      submitBtn.disabled = true;

      try {
        const response = await fetch('http://127.0.0.1:5000/api/symptoms/detect', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(orderedData)
        });

        if (!response.ok) {
          throw new Error(`Server returned ${response.status}: ${response.statusText}`);
        }

        const result = await response.json();
        console.log('Backend response:', result);

        localStorage.setItem('strokify_result', JSON.stringify(result));

        // ✅ Go to result page instead of alert
        window.location.href = 'sd_result.html';

      } catch (err) {
        console.error('Error sending data to backend:', err);
        alert('Error connecting to the server. Please try again later.');
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
      }
    });
  }
});
