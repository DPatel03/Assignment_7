
document.getElementById('navigator-info').addEventListener('click', function() {
    alert(`App Name: ${navigator.appName}\nProduct: ${navigator.product}\nApp Version: ${navigator.appVersion}\nUser Agent: ${navigator.userAgent}\nPlatform: ${navigator.platform}\nLanguage: ${navigator.language}`);
});

document.getElementById('window-info').addEventListener('click', function() {
    alert(`Inner Height: ${window.innerHeight}\nInner Width: ${window.innerWidth}`);
});

document.getElementById('screen-info').addEventListener('click', function() {
    alert(`Screen Width: ${screen.width}\nScreen Height: ${screen.height}\nAvailable Width: ${screen.availWidth}\nAvailable Height: ${screen.availHeight}\nColor Depth: ${screen.colorDepth}\nPixel Depth: ${screen.pixelDepth}`);
});

document.getElementById('location-info').addEventListener('click', function() {
    alert(`Href: ${location.href}\nHostname: ${location.hostname}\nPathname: ${location.pathname}\nProtocol: ${location.protocol}`);
});

document.getElementById('geolocation-info').addEventListener('click', function() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            alert(`Latitude: ${position.coords.latitude}\nLongitude: ${position.coords.longitude}`);
        });
    } else {
        alert('Geolocation is not supported by this browser.');
    }
});
