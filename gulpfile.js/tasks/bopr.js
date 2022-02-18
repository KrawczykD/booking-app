/* eslint-disable @typescript-eslint/no-var-requires */

const gulp = require('gulp');
const htmlReplace = require('gulp-html-replace');
const version = require('../../package.json').version;
const cloudinary = require('cloudinary').v2;

// Settings for Release
var releaseSettings = require('../shared/releasesettings');
var getCloudinarySearchExpression = require('../shared/getCloudinaryFilterExpression').getCloudinaryFilterExpression;
const cloudinaryFolder = releaseSettings.cdnPath;
const cloudinaryConfig = releaseSettings.cdnConfig;
cloudinary.config(cloudinaryConfig);

const boprReleasePath = './bopr/release/';
// WIP-Start for bopr release
const bopr = {
  path: './bopr',
  template: 'template',
  releaseFolder: 'release'
};

/**
 * Generate bopr/relase folder based on bopr/template Default.aspx file including all required cdn links
 */

async function releaseBOPR() {
  // Get File List from Cloudinary for latest version
  var fileList = releaseSettings.getFilesByVersion(version);
  var cssfiles = fileList.filter((x) => x.name.indexOf('.css') !== -1);
  var jsfiles = fileList.filter((x) => x.name.indexOf('.js') !== -1 && x.name.indexOf('.map') == -1);
  let cloudinarySearchExpression = getCloudinarySearchExpression(fileList, cloudinaryFolder);
  var searchResult = await cloudinary.search.expression(cloudinarySearchExpression).execute();
  var files = searchResult.resources;
  console.log(files.length);
  // build script and link tags
  var cdnscripts = '';
  var cdnstyles = '';
  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    const filepath = file.secure_url;
    console.log(filepath);
    if (filepath.indexOf('.css') !== -1) {
      //This is a css file
      cdnstyles += `<link rel="stylesheet" href="${filepath}" >`;
    }
    if (filepath.indexOf('.js') !== -1 && filepath.indexOf('.map') == -1) {
      //This is a js file
      cdnscripts += `<script src="${filepath}"></script>`;
    }
  }
  console.log(cdnstyles, cdnscripts);
  // populate them in template
  return gulp
    .src([bopr.path + '/' + bopr.template + '/Default.aspx'])
    .pipe(
      htmlReplace({
        cdnscripts: cdnscripts,
        cdnstyles: cdnstyles
      })
    )
    .pipe(gulp.dest(boprReleasePath));
}
// WIP-End for bopr release
const boprRelease = gulp.series(releaseBOPR);

exports.bopr = boprRelease;
