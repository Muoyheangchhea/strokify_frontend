let map;

function initMap() {
    // Default map center (e.g., if geolocation is not available)
    const defaultCenter = { lat: 11.5564, lng: 104.9282 }; // Center of Phnom Penh

    // Check for user's location
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const userLocation = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                };
                createMap(userLocation);
            },
            () => {
                // User denied or failed to get location
                alert('Location access is required to show nearby hospitals.');
                createMap(defaultCenter);
            }
        );
    } else {
        // Browser doesn't support Geolocation
        alert('Your browser does not support geolocation.');
        createMap(defaultCenter);
    }
}

function createMap(center) {
    map = new google.maps.Map(document.getElementById('map'), {
        center: center,
        zoom: 13,
        fullscreenControl: false,
        streetViewControl: false,
        mapTypeControl: false,
    });

    // Add a marker for the user's location
    new google.maps.Marker({
        position: center,
        map: map,
        title: 'Your Location',
        icon: {
            url: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'
        }
    });

    // Hospital locations
    const hospitals = [
        { lat: 11.5714, lng: 104.9168, name: 'Sunrise Japan Hospital Phnom Penh' },
        { lat: 11.5540, lng: 104.8872, name: 'Royal Phnom Penh Hospital' },
        { lat: 11.5430, lng: 104.9080, name: 'Royal Angkor Hospital' },
    ];

    // Create markers for each hospital
    hospitals.forEach(hospital => {
        new google.maps.Marker({
            position: { lat: hospital.lat, lng: hospital.lng },
            map: map,
            title: hospital.name,
            icon: {
                url: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png'
            }
        });
    });
}