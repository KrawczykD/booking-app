/* eslint-disable @typescript-eslint/no-var-requires */

/**
 * Generate file array for upload base on verison
 *
 *
 */

function getReleaseFilesByVersion(version) {
  if (!version) {
    version = require('../../package.json').version;
  }
  var filesArray = [
    {
      name: `app.${version}.css`
    },
    {
      name: `app.${version}.js`
    },
    {
      name: `app.${version}.js.map`
    },
    {
      name: `chunk-vendors.${version}.js`
    },
    {
      name: `chunk-vendors.${version}.js.map`
    }
  ];
  return filesArray;
}

/**
 * Claudinary config file and claudinary patch
 *
 */

var cdnConfig = {
  cloud_name: 'bouncycastlenetwork',
  api_key: '944295946387486',
  api_secret: 'D8hFxtIb5LPARllb9oQd7IA4vUM'
};

// replace cdnPatch with your cdn path example: samples/

exports.cdnPath = '';

exports.getFilesByVersion = getReleaseFilesByVersion;
exports.cdnConfig = cdnConfig;
