// require('proj4leaflet');
// require('mapbox.js');

var crs = new L.Proj.CRS('EPSG:32633',
'+proj=utm +zone=33 +ellps=WGS84 +datum=WGS84 +units=m +no_defs',
{
resolutions: [
  8192, 4096, 2048, 1024, 512, 256, 128
],
origin: [0, 0]
}
);
L.mapbox.accessToken = 'pk.eyJ1IjoidG9tYXNvcyIsImEiOiJjaWo5eDBhYjIwMDNzdWxtNGI3djYyN3kwIn0.s5d5WYpNNZJ-yIFwKXhxNQ';
var map = L.mapbox.map('map', 'tomasos.f0f39342').setView([61.31426439067928, 6.187705993652344], 10);


// Snowdepth
// http://gridwms.nve.no/WMS_server/wms_server.aspx?time=2016-01-11&nocache=0.6463998854160309
// &SERVICE=WMS&REQUEST=GetMap&FORMAT=image/png&TRANSPARENT=TRUE&STYLES=&VERSION=1.1.1&LAYERS=sd
// &WIDTH=1439&HEIGHT=732&SRS=EPSG:32633&BBOX=-383655.77139954286,6419386.466852932,591028.844636356,6915195.458470915

/*var snowDepth = L.tileLayer.wms('http://gridwms.nve.no/WMS_server/wms_server.aspx', {
  format: 'image/png',
  transparent: 'true',
  layers: 'sd',
  crs: crs,
  opacity: 0.3,
  tileSize: 2048
}).addTo(map);*/
