// Create the "map" object with the mapboxgl.Map constructor, referencing
// the container div

mapboxgl.accessToken = 'pk.eyJ1IjoiYXh4b3UiLCJhIjoiY2pqb2hzMWM1N240cTN3cDFkNnB5cWpoMSJ9.6CdzlLixKNbLyI9hrrXV8Q';

let map = new mapboxgl.Map({
    container: 'map',
    center: [5.7245, 45.1885],
    zoom: 15,
    minZoom: 11,
    style: 'mapbox://styles/axxou/ckelqt6dq0kh119o2zjclxmp8',
});

map.addControl(new mapboxgl.NavigationControl());