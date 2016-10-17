const pathToAssets = __dirname + '/../public/images/gallery/';
const DIRS = {
   'thumb-small':pathToAssets + 'thumbs/1x1/',
   'thumb-large':pathToAssets + 'thumbs/1x2/',
   'complete':pathToAssets + 'complete/',
   'descriptions':pathToAssets + 'descriptions/'
};
const DEST_DIRS = {
  thumbnails : {
    small: '/images/gallery/thumbs/1x1/',
    large: '/images/gallery/thumbs/1x2/'
  },
  complete : '/images/gallery/complete/'
};
const REGEXP = {
  thumbnails: new RegExp('^foto_chica_\\d+'),
  complete: new RegExp('^foto_grande_\\d+')
};

var fs = require('fs');

function getThumbnailsImagesPaths() {
  var thumbnailsPaths = {
    small: [],
    large: []
  };

  thumbnailsPaths.small = fs.readdirSync(DIRS['thumb-small']).map(function(filename) {
    return DEST_DIRS['thumbnails']['small'] + filename;
  });
  thumbnailsPaths.large = fs.readdirSync(DIRS['thumb-large']).map(function(filename) {
    return DEST_DIRS['thumbnails']['large'] + filename;
  });
  return thumbnailsPaths;
}

function getCompleteImagesPaths() {
  var completesPaths = {
    small: [],
    large: [],
    description: []
  };
  fs.readdirSync(DIRS['complete']).forEach(function(path) {
    if(REGEXP.thumbnails.test(path)){
      completesPaths.small.push(DEST_DIRS['complete'] + path);
    } else if(REGEXP.complete.test(path)){
      completesPaths.large.push(DEST_DIRS['complete'] + path);
    }
    completesPaths.description.push((fs.readFileSync(DIRS['descriptions'] + path.replace(/\.\w+$/,'.txt'), 'utf8')));
  });
  return completesPaths;
}

function prepareOutput() {
  var thumbnails = getThumbnailsImagesPaths();
  var completes = getCompleteImagesPaths();
  var output = [];

  for(var i = 0; i < thumbnails.small.length; i++) {
    output.push({
      thumbnailUrl: thumbnails.small[i],
      fullUrl: completes.small[i],
      description: completes.description[i],
      large: false
    });
  }

  for(var i = 0; i < thumbnails.large.length; i++) {
    output.splice(2*i+1, 0, {
      thumbnailUrl: thumbnails.large[i],
      fullUrl: completes.large[i],
      description: completes.description[i],
      large: true
    });
  }

  return output;
}

fs.writeFileSync(__dirname + '/../app/data/gallery.json', JSON.stringify(prepareOutput(), null, 2), 'utf-8');
