// require('proj4leaflet');
// require('mapbox.js');
var request = require('superagent');

var accessToken = 'pk.eyJ1IjoidG9tYXNvcyIsImEiOiJjaWo5eDBhYjIwMDNzdWxtNGI3djYyN3kwIn0.s5d5WYpNNZJ-yIFwKXhxNQ';

var crs = new L.Proj.CRS(
  'EPSG:32633',
  '+proj=utm +zone=33 +ellps=WGS84 +datum=WGS84 +units=m +no_defs',
  {
    resolutions: [
      8192, 4096, 2048, 1024, 512, 256, 128
    ],
    origin: [0, 0]
  }
);

L.mapbox.accessToken = accessToken;

var map = L.mapbox.map('map', 'tomasos.f0f39342').setView([61.31426439067928, 6.187705993652344], 8);


// Snowdepth
// http://gridwms.nve.no/WMS_server/wms_server.aspx?time=2016-01-11&nocache=0.6463998854160309
// &SERVICE=WMS&REQUEST=GetMap&FORMAT=image/png&TRANSPARENT=TRUE&STYLES=&VERSION=1.1.1&LAYERS=sd
// &WIDTH=1439&HEIGHT=732&SRS=EPSG:32633&BBOX=-383655.77139954286,6419386.466852932,591028.844636356,6915195.458470915

var snowDepth = L.tileLayer.wms('http://gridwms.nve.no/WMS_server/wms_server.aspx', {
  format: 'image/png',
  transparent: 'true',
  layers: 'sd',
  crs: crs,
  opacity: 0.0,
  tileSize: 256
}).addTo(map);

var newSnow7 = L.tileLayer.wms('http://gridwms.nve.no/WMS_server/wms_server.aspx', {
  format: 'image/png',
  transparent: 'true',
  layers: 'fswwk',
  crs: crs,
  opacity: 0.0,
  tileSize: 256
}).addTo(map);

var temperature = L.tileLayer.wms('http://gridwms.nve.no/WMS_server/wms_server.aspx', {
  format: 'image/png',
  transparent: 'true',
  layers: 'tm',
  crs: crs,
  opacity: 0.0,
  tileSize: 256
}).addTo(map);

// var avalance = L.esri.featureLayer({
//   url: 'http://gis2.ngi.no/arcgisprodpub/rest/services/Skred/BratteOmr/MapServer/export'
// }).addTo(map);

var polyline = L.polyline([]).addTo(map);

var distance = 0;
var previousPoint = null;

var showSnowDepth = false;

document.getElementById('snowdepth').onclick = function () {
    var enable = this.className !== 'active';
    snowDepth.setOpacity(enable ? 0.3 : 0);
    this.className = enable ? 'active' : '';
    return false;
};

document.getElementById('newSnow7').onclick = function () {
    var enable = this.className !== 'active';
    newSnow7.setOpacity(enable ? 0.3 : 0);
    this.className = enable ? 'active' : '';
    return false;
};

document.getElementById('temperature').onclick = function () {
    var enable = this.className !== 'active';
    temperature.setOpacity(enable ? 0.3 : 0);
    this.className = enable ? 'active' : '';
    return false;
};

map.on('click', function(e) {
  var lat = e.latlng.lat;
  var lng = e.latlng.lng;
  var newPoint = L.latLng(lat, lng);
  polyline.addLatLng(newPoint);

  if(previousPoint) {
    distance += previousPoint.distanceTo(newPoint);
  }
  console.log(distance);

  previousPoint = newPoint;
  
  // request
  //   .get('https://api.mapbox.com/v4/surface/mapbox.mapbox-terrain-v1.json?layer=contour&fields=ele&points=-116.64267,36.23935;-116.64898,36.24107&access_token=' + accessToken)
  //   .end(function(err, res) {
  //   console.log(res);
  // });

});

map.on('dblclick', function(e) {

});


