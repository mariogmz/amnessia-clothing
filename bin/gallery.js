var fs = require('fs');
var pathToAssets = __dirname + '/../public/images/gallery/';
var dirs = {
   'thumb-small':pathToAssets + 'thumbs/1x1/',
   'thumb-large':pathToAssets + 'thumbs/1x2/',
   'full':pathToAssets + 'thumbs/1x2/'
};

var smallThumbs = fs.readdirSync(dirs['thumb-small']).map(function(filename) {
  return 'gallery/thumbs/1x1/' + filename;
});
var largeThumbs = fs.readdirSync(dirs['thumb-large']).map(function(filename) {
  return 'gallery/thumbs/1x2/' + filename;
});;
var full = fs.readdirSync(dirs['full']).map(function(filename) {
  return 'gallery/complete/' + filename;
});;

fs.writeFileSync(__dirname + '/../app/data/gallery.json', JSON.stringify({small: smallThumbs, large: largeThumbs, full: full}), 'utf-8');
