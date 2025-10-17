// Language Switcher Module
let currentLang = 'en';

const translations = typeof translationsData !== 'undefined' ? translationsData : {
    en: {
        //general
        langCode: "EN",
        doneButton: "Done",
        backToHome: "Back to Home",
        backBtn: "Back",
        nextBtn: "Next",
        submitBtn: "Submit",

        //homepage
        greeting: "Hello,",
        greetingSubtext: "Hope You're Having a Great Day!",
        healthStatus: "Health Status: ",
        statusExcellent: "Excellent",
        heartRate: "Heart Rate: ",
        bloodPressure: "Blood Pressure: ",
        Bmi: "Body Mass Index (BMI): ",
        healthcareContents: "Healthcare Contents",
        specializedHospital: "Specialized Stroke Hospital",
        gemsTooltip: "Complete tasks to earn diamonds.",

        //fast page
        fastTitle: "F.A.S.T.",
        fastIntroTitle: "F.A.S.T. test",
        fastIntroText: "is an easy way to detect some sudden signs and symptoms of a stroke and prompt immediate actions:",
        faceDroopingTitle: "Face Drooping",
        faceDroopingDesc: "Does one side of the face droop? Ask the person to smile. Is that face symmetrical?",
        armWeaknessTitle: "Arm Weakness",
        armWeaknessDesc: "Is one arm weak or numb? Ask the person to raise both arms. Does one arm drift downward?",
        speechDifficultyTitle: "Speech Difficulty",
        speechDifficultyDesc: "Is speech slurred, are they unable to speak or understand? Ask the person to repeat a simple sentence.",
        timeToCallTitle: "Time To CALL",
        timeToCallDesc: "Go to the hospital immediately!",
        hospitalButton: "Hospital",

        // Health Advisor page
        pageTitle: "Health Advisor",
        underDevelopmentText1: "This feature is currently under development. Our team is working hard to bring you personalized health advice and recommendations.",
        underDevelopmentText2: "Please check back soon for updates!",

        // Hospital Page
        hospitalTitle: "Hospitals",
        goldenHourTitle: "Golden Hour Saves Lives!",
        goldenHourDesc: "Act FAST — stroke treatment within 1 hour can prevent brain damage and death.",
        mapSectionTitle: "Map to Hospital",
        recommendedSectionTitle: "Recommended Hospitals Near You",
        callButton: "Call",

        //lifesyn
        lifeSyntitle: "Lifesyn",
        LSdescription1: "This feature is currently under development. We're creating an innovative life synchronization tool to help you manage your health journey.",
        LSdescription2: "Please check back soon for updates!",

        // Notifications Page
        notificationsTitle: "Notifications",
        newCount: "3 New",
        new: "NEW",
        all: "All",
        minAgo: "min ago",
        hourAgo: "hour ago",
        dayAgo: "day ago",
        markAllRead: "Mark All as Read",
        healthReminderTitle: "Health Reminder",
        healthReminderMsg: "Time for your daily blood pressure check! Don't forget to log your readings.",
        diamondsEarnedTitle: "Diamonds Earned!",
        diamondsEarnedMsg: "Congratulations! You've earned 50 diamonds for completing your weekly health tasks.",
        takeMedicationTitle: "Take Medication",
        takeMedicationMsg: "It's time to take your afternoon medication. Stay consistent with your health routine!",
        newHealthArticleTitle: "New Health Article",
        newHealthArticleMsg: "Check out our latest article: 'Understanding Stroke Prevention - 10 Essential Tips'",
        appointmentScheduledTitle: "Appointment Scheduled",
        appointmentScheduledMsg: "Your appointment at Royal Phnom Penh Hospital has been confirmed for October 20, 2025 at 10:00 AM.",
        milestoneReachedTitle: "Milestone Reached!",
        milestoneReachedMsg: "Amazing! You've maintained excellent health status for 30 consecutive days. Keep it up!",
        appUpdateAvailableTitle: "App Update Available",
        appUpdateAvailableMsg: "A new version of Strokify is available with improved features and bug fixes.",

        // Symptom Detector Page - High
        symptomDetectorTitle: "Symptom Detector",
        afterAnalysis: "After our analysis…",
        yourResult: "Your Result shows that:",
        currentRiskLevel: "Current Risk Level:",
        riskNormal: "Normal",
        riskModerate: "Moderate",
        riskHigh: "High",
        msgNormal: "Very good! Your health is in excellent condition.",
        msgModerate: "Moderate risk found. Be careful! Try to exercise more and eat regularly to improve your health.",
        msgHigh: "Go to the hospital immediately. Use the F.A.S.T. test to clarify. If these signs appear, acting within 3 hours can save your life and reduce brain damage.",
        fastBtn: "F.A.S.T.",

        // Symptom Detector Step 1
        heroBubbleStep1: "Let's start with your general questions …",
        stepProgressStep1: "Step 1/3",
        stepTitleStep1: "General Questions",
        yourAge: "Your Age",
        tipAge: "Fill in your age in (years old).",
        yourHeight: "Your Height",
        tipHeight: "Fill in your height in meter (m).",
        yourWeight: "Your Weight",
        tipWeight: "Fill in your weight in kilograms (kg).",
        yourBMI: "Your BMI",
        genderQuestion: "What is your gender?",
        tipSex: "Choose the option that corresponds to your sex.",
        maritalQuestion: "What is your current marital status?",
        tipMarital: "Choose the option that corresponds to your marital state.",
        selectOption: "Select options",
        male: "Male",
        female: "Female",
        neverMarried: "Never Married",
        everMarried: "Ever Married",
        meter: "m",
        kilogram: "kg",
        lsQ: "Lifestyle Questions",
        bmiUnderweight: "(Underweight)",
        bmiGood: "(Normal)",
        bmiOverweight: "(Overweight)",
        bmiObese: "(Obese)",

        // Symptom Detector Step 2
        heroBubbleStep2: "Keep going with your lifestyle factors …",
        stepProgressStep2: "Step 2/3",
        stepTitleStep2: "Lifestyle Factors",
        smokeQuestion: "Have you smoked over the past year?",
        tipSmoke: "Choose the option that corresponds to your smoking state.",
        workQuestion: "What is your main type of work?",
        tipWork: "Choose the option that corresponds to your work type state.",
        residenceQuestion: "What type of residence do you currently live in?",
        tipResidence: "Choose the option that corresponds to your residence state.",
        selectWorkType: "Select work type",
        neverSmoked: "Never smoked",
        smokes: "Smokes",
        neverWorked: "Never worked",
        children: "Children",
        govtJob: "Government job",
        selfEmployed: "Self-employed",
        privateJob: "Private",
        urban: "Urban",
        rural: "Rural",

        // Symptom Detector Step 3
        heroBubbleStep3: "Let's continue with your medical factors…",
        stepProgressStep3: "Step 3/3",
        stepTitleStep3: "Medical Factors",
        hypertensionQuestion: "Have you ever been told by a doctor that you have high blood pressure?",
        tipHypertension: "Choose the option that corresponds to your blood pressure state.",
        heartDiseaseQuestion: "Have you ever been told by a doctor that you have any kind of heart disease?",
        tipHeartDisease: "Choose the option that corresponds to your heart disease history.",
        glucoseQuestion: "Have you measured your average blood glucose level?",
        tipGlucose: "Choose the option that corresponds to your glucose state (Yes/No). If 'Yes', please clarify the exact amount of your average glucose level in (mg/dL).",
        yesKnow: "Yes – I know my average glucose level",
        noDontKnow: "No – I don't know my average glucose level",
        yes: "Yes",
        no: "No",
    },

    km: {
        //general
        langCode: "ខ្មែរ",
        doneButton: "បញ្ចប់",
        backToHome: "ត្រឡប់ទៅទំព័រដើម",
        backBtn: "ត្រឡប់ក្រោយ",
        nextBtn: "បន្ត",
        submitBtn: "បញ្ជូន",

        //homepage
        greeting: "សួស្តី,",
        greetingSubtext: "សូមឲ្យអ្នកមានសុខភាពល្អ!",
        healthStatus: "ស្ថានភាពសុខភាព: ",
        statusExcellent: "ល្អប្រសើរ",
        heartRate: "ចង្វាក់បេះដូង: ",
        bloodPressure: "សម្ពាធឈាម: ",
        Bmi: "សន្ទស្សន៍ម៉ាស់ខ្លួន (BMI): ",
        healthcareContents: "មាតិកាសុខភាព",
        specializedHospital: "មន្ទីរពេទ្យដៃគូ",
        gemsTooltip: "បំពេញភារកិច្ចសុខភាពដើម្បីទទួលបានពេជ្រ",

        // F.A.S.T. Test page
        fastTitle: "F.A.S.T.",
        fastIntroTitle: "តេស្ត F.A.S.T.",
        fastIntroText: "ជាវិធីងាយស្រួលមួយ ដើម្បីកំណត់រោគសញ្ញាដែលលេចឡើងភ្លាមៗនៃជំងឺដាច់សរសៃឈាមខួរក្បាល និងអាចធ្វើសកម្មភាពទាន់ពេលវេលា៖",
        faceDroopingTitle: "វៀចមុខមួយចំហៀង",
        faceDroopingDesc: "តើមុខរបស់អ្នកជម្ងឺមានធ្លាក់ ឬរៀចទេ? សូមឱ្យអ្នកជម្ងឺញញឹម ហើយសង្កេតមើលថា តើមុខទាំងសងខាងរបស់គាត់ស្មើរគ្នាទេ?",
        armWeaknessTitle: "ស្ពឹក ឬធ្ងន់ដៃមួយចំហៀង",
        armWeaknessDesc: "តើដៃរបស់អ្នកជម្ងឺមានមួយចំហៀងស្ពឹក ឬធ្ងន់ទេ? សូមឱ្យអ្នកជម្ងឺលើកដៃទាំងសងខាងឡើង តើមានដៃមួយចំហៀងណាធ្ងន់ ធ្លាក់ចុះក្រោមទេ?",
        speechDifficultyTitle: "ពិបាកនិយាយ ឬនិយាយមិនច្បាស់",
        speechDifficultyDesc: "តើអ្នកជម្ងឺពិបាកក្នុងការនិយាយ និយាយមិនច្បាស់ ឬពិបាកយល់ទេ? សូមឱ្យអ្នកជម្ងឺនិយាយ ឬអានតាមប្រយោគសាមញ្ញមួយ។",
        timeToCallTitle: "សូមទាក់ទង",
        timeToCallDesc: "ទៅមន្ទីរពេទ្យភ្លាមៗ!",
        hospitalButton: "មន្ទីរពេទ្យ",

        // Health Advisor page
        pageTitle: "ទីប្រឹក្សាសុខភាព",
        underDevelopmentTitle: "ទីប្រឹក្សាសុខភាព",
        underDevelopmentText1: "មុខងារនេះនៅក្នុងដំណាក់កាលអភិវឌ្ឍន៍។ ក្រុមការងារយើងកំពុងខិតខំធ្វើការដើម្បីផ្តល់យោបល់ និងអនុសាសន៍សុខភាពផ្ទាល់ខ្លួនដល់អ្នក។",
        underDevelopmentText2: "មុខងារនេះនឹងដំណើរការក្នុងពេលឆាប់ៗនេះ សូមតាមដានសម្រាប់ព័ត៌មានថ្មីៗ!",

        //Hospital Page
        hospitalTitle: "មន្ទីរពេទ្យ",
        goldenHourTitle: "Golden Hour Saves Lives!",
        goldenHourDesc: "សូមធ្វើសកម្មភាពជាបន្ទាន់!​ ការព្យាបាលជម្ងឺដាច់សរសៃឈាមខួរក្បាលក្នុងរយៈពេល3ម៉ោងអាចការពារការខូចខាតខួរក្បាល និងការស្លាប់បាន។",
        mapSectionTitle: "ផែនទីទៅកាន់មន្ទីរពេទ្យ",
        recommendedSectionTitle: "មន្ទីរពេទ្យដែលត្រូវបានណែនាំនៅជិតអ្នកបំផុត",
        callButton: "ទាក់ទង",

        //lifesyn
        lifeSyntitle: "ទម្លាប់ល្អ",
        LSdescription1: "មុខងារនេះកំពុងស្ថិតនៅក្នុងដំណាក់កាលការអភិវឌ្ឍ។ មុខងារនេះ ជាមុខងារសំខាន់ មាននាទីជួយអ្នកប្រើប្រាស់គ្រប់គ្រងដំណើរសុខភាពប្រចាំថ្ងៃឲ្យកាន់តែល្អប្រសើរ។",
        LSdescription2: "មុខងារនេះនឹងដំណើរការក្នុងពេលឆាប់ៗនេះ សូមតាមដានសម្រាប់ព័ត៌មានថ្មីៗ!",

        // Notifications Page
        notificationsTitle: "ការជូនដំណឹង",
        newCount: "3 សារថ្មី",
        new: "សារថ្មី",
        all: "ទាំងអស់",
        minAgo: "នាទីមុន",
        hourAgo: "ម៉ោងមុន",
        dayAgo: "ថ្ងៃមុន",
        markAllRead: "សម្អាតការជូនដំណឹងទាំងអស់",
        healthReminderTitle: "ការរំលឹកអំពីសុខភាព",
        healthReminderMsg: "ដល់ម៉ោងវាស់សម្ពាធឈាមប្រចាំថ្ងៃរបស់អ្នកហើយ! កុំភ្លេចកត់ត្រាលទ្ធផលរបស់អ្នកផងណា។",
        diamondsEarnedTitle: "ទទួលបានពេជ្រ!",
        diamondsEarnedMsg: "អបអរសាទរ! អ្នកទទួលបានពេជ្រ ៥០ ដោយបញ្ចប់ភារកិច្ចសុខភាពប្រចាំសប្ដាហ៍។",
        takeMedicationTitle: "ការរំលឹកអំពីការពិសារថ្នាំ",
        takeMedicationMsg: "ដល់ម៉ោងពិសារថ្នាំពេលរសៀលរបស់អ្នកហើយ។ សូមបន្តថែទាំសុខភាពរបស់អ្នកប្រចាំថ្ងៃ!",
        newHealthArticleTitle: "អត្ថបទសុខភាពថ្មី",
        newHealthArticleMsg: "សូមអានអត្ថបទថ្មីរបស់យើង៖ 'ការពារជំងឺដាច់សរសៃឈាមខួរក្បាល - គន្លឹះសំខាន់ៗ ១០។'",
        appointmentScheduledTitle: "ការណាត់ជួបជាមួយគ្រូពេទ្យ",
        appointmentScheduledMsg: "ថ្ងៃទី ២០ តុលា ២០២៥ ម៉ោង ១០:០០ ព្រឹក​ នឹងមានការណាត់ជួបគ្រូពេទ្យនៅមន្ទីរពេទ្យរាជធានីភ្នំពេញ។",
        milestoneReachedTitle: "សម្រេចគោលដៅ!",
        milestoneReachedMsg: "អស្ចារ្យណាស់! អ្នករក្សាស្ថានភាពសុខភាពល្អប្រសើរអស់រយៈពេល ៣០ ថ្ងៃជាប់គ្នា។ សូមបន្តទៅទៀត!",
        appUpdateAvailableTitle: "ការអាប់ដេតកម្មវិធីថ្មី",
        appUpdateAvailableMsg: "កម្មវិធី Strokify ជំនាន់ថ្មីមានមុខងារកែលម្អ និងការកែបញ្ហាកាន់តែប្រសើរឡើង!",

        // Symptom Detector Page
        symptomDetectorTitle: "កំណត់រោគសញ្ញា",
        afterAnalysis: "បន្ទាប់ពីការវិភាគរបស់យើងហើយ...",
        yourResult: "លទ្ធផលរបស់អ្នកបង្ហាញថា៖",
        currentRiskLevel: "កម្រិតហានិភ័យបច្ចុប្បន្នគឺ៖ ",
        riskNormal: "កម្រិតធម្មតា",
        riskModerate: "កម្រិតមធ្យម",
        riskHigh: "កម្រិតខ្ពស់",
        msgNormal: "ល្អណាស់! កម្រិតសុខភាពរបស់អ្នកស្ថិតក្នុងសភាពល្អប្រសើរ។",
        msgModerate: "រកឃើញហានិភ័យមធ្យម។ សូមប្រុងប្រយ័ត្ន! ព្យាយាមធ្វើលំហាត់ប្រាណឲ្យបានច្រើន និងបរិភោគអាហារឲ្យបានទៀងទាត់ដើម្បីពង្រឹងសុខភាពរបស់អ្នកឲ្យបានល្អប្រសើរជាងមុន។",
        msgHigh: "លទ្ធផលរបស់អ្នកបង្ហាញថា អ្នកមានហានិភ័យខ្ពស់! សូមទាក់ទងទៅមន្ទីរពេទ្យភ្លាមៗ។ ប្រើតេស្ត F.A.S.T. ដើម្បីបញ្ជាក់ឲ្យច្បាស់លាស់ ប្រសិនបើរោគសញ្ញាទាំងនេះលេចឡើង សូមការធ្វើសកម្មភាពក្នុងកំឡុងរយៈពេល 3ម៉ោង ដើម្បីអាចជួយសង្គ្រោះជីវិតអ្នក និងបន្ថយការខូចខាតនៃខួរក្បាល។",
        fastBtn: "F.A.S.T.",

        // Symptom Detector Step 1
        heroBubbleStep1: "តស់! ចាប់ផ្ដើមឆ្លើយសំណួរទូទៅអំពីអ្នក…",
        stepProgressStep1: "ជំហានទី 1/3",
        stepTitleStep1: "សំណួរទូទៅ",
        yourAge: "អាយុរបស់អ្នក",
        tipAge: "សូមបញ្ចូលអាយុរបស់អ្នកគិតជាឆ្នាំ។",
        yourHeight: "កម្ពស់របស់អ្នក",
        tipHeight: "សូមបញ្ចូលកម្ពស់របស់អ្នកជាម៉ែត្រ (m)។",
        yourWeight: "ទំងន់របស់អ្នក",
        tipWeight: "សូមបញ្ចូលទំងន់របស់អ្នកគិតជាគីឡូក្រាម (kg)។",
        yourBMI: "សន្ទស្សន៍ម៉ាស់ខ្លួន (BMI)",
        genderQuestion: "តើអ្នកជាភេទអ្វី?",
        tipSex: "ជ្រើសរើសជម្រើសដែលតំណាងឲ្យភេទរបស់អ្នក។",
        maritalQuestion: "តើស្ថានភាពអាពាហ៍ពិពាហ៍បច្ចុប្បន្នរបស់អ្នកជាអ្វី?",
        tipMarital: "ជ្រើសរើសជម្រើសដែលតំណាងឲ្យស្ថានភាពអាពាហ៍ពិពាហ៍របស់អ្នក។",
        selectOption: "ជ្រើសរើសជម្រើស",
        male: "ប្រុស",
        female: "ស្រី",
        neverMarried: "មិនទាន់រៀបការ",
        everMarried: "រៀបការហើយ",
        meter: "ម៉ែត្រ",
        kilogram: "គីឡូក្រាម",
        lsQ: "សំណួរទាក់ទងនឹងកត្តារស់នៅប្រចាំថ្ងៃ",
        bmiUnderweight: "(ទម្ងន់ស្រាល)",
        bmiGood: "(ធម្មតា)",
        bmiOverweight: "(លើសទម្ងន់)",
        bmiObese: "(លើសទម្ងន់ពេក)",

        // Symptom Detector Step 2
        heroBubbleStep2: "តស់! បន្តឆ្លើយសំណួរទាក់ទងនឹងកត្តារបៀបរស់នៅប្រចាំថ្ងៃរបស់អ្នក…",
        stepProgressStep2: "ជំហានទី 2/3",
        stepTitleStep2: "កត្តារបៀបរស់នៅ",
        smokeQuestion: "តើអ្នកបានជក់បារីក្នុងរយៈពេលមួយឆ្នាំចុងក្រោយនេះដែរឬទេ?",
        tipSmoke: "ជ្រើសរើសជម្រើសដែលតំណាងឲ្យស្ថានភាពជក់បារីរបស់អ្នក។",
        workQuestion: "តើការងាររបស់អ្នកជាប្រភេទណា?",
        tipWork: "ជ្រើសរើសជម្រើសដែលតំណាងឲ្យប្រភេទការងាររបស់អ្នក។",
        residenceQuestion: "តើអ្នកកំពុងរស់នៅក្នុងតំបន់ប្រភេទណា?",
        tipResidence: "ជ្រើសរើសជម្រើសដែលតំណាងឲ្យទីលំនៅបច្ចុប្បន្នរបស់អ្នក។",
        selectWorkType: "ជ្រើសប្រភេទការងារ",
        neverSmoked: "មិនធ្លាប់ជក់បារី",
        smokes: "ជក់បារី",
        neverWorked: "មិនធ្លាប់ធ្វើការ",
        children: "ធ្វើការជាមួយកុមារ",
        govtJob: "មន្ត្រីរាជការ",
        selfEmployed: "ធ្វើអាជីវកម្មដោយខ្លួនឯង",
        privateJob: "ឯកជន",
        urban: "ទីក្រុង",
        rural: "ជនបទ",

        // Symptom Detector Step 3
        heroBubbleStep3: "ជាបញ្ចប់ ឆ្លើយសំណួរទាក់ទងនឹងកត្តាវេជ្ជសាស្ត្ររបស់អ្នក…",
        stepProgressStep3: "ជំហានទី 3/3",
        stepTitleStep3: "កត្តាវេជ្ជសាស្ត្រ",
        hypertensionQuestion: "តើគ្រូពេទ្យធ្លាប់ប្រាប់អ្នកថា អ្នកមានជំងឺលើសឈាមដែរ ឬទេ?",
        tipHypertension: "ជ្រើសរើសជម្រើសដែលតំណាងឲ្យសភាពជំងឺលើសឈាមរបស់អ្នក។",
        heartDiseaseQuestion: "តើគ្រូពេទ្យធ្លាប់ប្រាប់អ្នកថា អ្នកមានជំងឺបេះដូងប្រភេទណាមួយដែរ ឬទេ?",
        tipHeartDisease: "ជ្រើសរើសជម្រើសដែលតំណាងឲ្យប្រវត្តិជំងឺបេះដូងរបស់អ្នក។",
        glucoseQuestion: "តើអ្នកធ្លាប់វាស់កម្រិតជាតិស្ករក្នុងឈាមរបស់អ្នកដែរ ឬទេ?",
        tipGlucose: "ជ្រើសរើសជម្រើសដែលតំណាងឲ្យសភាពជាតិស្ករឈាមរបស់អ្នក (បាទ/ចាស ឬ ទេ)។ ប្រសិនបើ 'បាទ/ចាស' សូមបញ្ជាក់ចំនួនជាក់លាក់នៃកម្រិតជាតិស្ករក្នុងឈាមជាមធ្យមរបស់អ្នកគិតជាមីលីក្រាមក្នុងដេស៊ីលីត្រ (mg/dL)។",
        yesKnow: "បាទ/ចាស – ខ្ញុំដឹងពីកម្រិតជាតិស្ករក្នុងឈាមជាមធ្យមរបស់ខ្ញុំ",
        noDontKnow: "ទេ – ខ្ញុំមិនដឹងអំពីកម្រិតជាតិស្ករក្នុងឈាមជាមធ្យមរបស់ខ្ញុំទេ",
        yes: "បាទ/ចាស",
        no: "ទេ",
    }
};

// Main translation function
function Translation() {
    currentLang = currentLang === 'en' ? 'km' : 'en';

    // Update language switcher text
    const langText = document.querySelector('.lang-text');
    if (langText) {
        langText.textContent = translations[currentLang].langCode;
    }

    // Update all translatable elements
    updateTranslations();

    // Save preference
    localStorage.setItem('preferred-language', currentLang);
}

// Update all elements with translations
function updateTranslations() {
    // Handle elements with data-key attribute
    const keyElements = document.querySelectorAll('[data-key]');
    keyElements.forEach(element => {
        const key = element.getAttribute('data-key');
        const translation = getTranslation(key);
        if (translation) {
            // Check if element has child nodes with data-key
            const hasTranslatableChildren = element.querySelector('[data-key]');

            if (hasTranslatableChildren) {
                // Only update text nodes, preserve child elements
                updateTextNodes(element, translation);
            } else {
                // No translatable children, safe to replace all text
                element.textContent = translation;
            }
        }
    });

    // Handle elements with data-en and data-km attributes (legacy support)
    const legacyElements = document.querySelectorAll('[data-en][data-km]');
    legacyElements.forEach(element => {
        const text = currentLang === 'en' ? element.getAttribute('data-en') : element.getAttribute('data-km');
        element.textContent = text;
    });
}

// Helper function to update only text nodes, preserving child elements
function updateTextNodes(element, translation) {
    // Get all child nodes
    const childNodes = Array.from(element.childNodes);

    // Find text nodes only
    childNodes.forEach(node => {
        if (node.nodeType === Node.TEXT_NODE) {
            node.textContent = translation;
        }
    });
}

// Get translation by key
function getTranslation(key) {
    return translations[currentLang][key] || key;
}

// Toggle language (alias for Translation)
function toggleLanguage() {
    Translation();
}

// Initialize language on page load
function initLanguage() {
    // Load saved language from localStorage or default to English
    const savedLang = localStorage.getItem('preferred-language') || 'en';
    currentLang = savedLang;

    // Update language text and content
    const langText = document.querySelector('.lang-text');
    if (langText) {
        langText.textContent = translations[currentLang].langCode;
    }

    // Apply translations immediately
    updateTranslations();
}

// Auto-run on every page load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLanguage);
} else {
    initLanguage();
}

// Export functions for external use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { Translation, toggleLanguage, getTranslation };
}