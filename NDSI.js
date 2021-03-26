var dataset = ee.ImageCollection("LANDSAT/LC8_L1T_8DAY_NDSI")
                  .filterDate('2015-03-03', '2015-12-12');
var dataset = dataset.median()
var colorized = dataset.select('NDSI');
var colorizedVis = {
  palette: ['000088', '0000FF', '8888FF', 'FFFFFF'],
};
Map.setCenter(74.36334186569782,36.78246974253822, 11);
Map.addLayer(colorized, colorizedVis, 'Colorized');
