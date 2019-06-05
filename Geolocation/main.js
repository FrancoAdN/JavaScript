const map = L.map('mapid');
map.setView([0, 0], 4);
const attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const tiles = L.tileLayer(tileUrl, { attribution });

tiles.addTo(map);

if ("geolocation" in navigator){
    console.log('GEO');
    navigator.geolocation.watchPosition( function(position){
        console.log(position.coords.latitude, position.coords.longitude);
        map.setView([position.coords.latitude, position.coords.longitude], 13);
        L.marker([position.coords.latitude, position.coords.longitude]).addTo(map);
    });
}else
    alert('No geolocation in navigator');