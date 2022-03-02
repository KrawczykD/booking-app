// eslint-disable-next-line @typescript-eslint/no-var-requires
const pjson = require('./package.json');
const version = pjson.version;

module.exports = {
  filenameHashing: true,
  configureWebpack: (config) => {
    (config.output.filename = `[name].${version}.js`), (config.output.chunkFilename = `[name].${version}.js`);
  },
  css: {
    extract: {
      filename: `[name].${version}.css`
    }
  },
  chainWebpack: (config) => {
    config.plugin('html').tap((args) => {
      //console.log(args);
      var currentTitle = args[0].title;
      args[0].title = currentTitle + ' | Feature Page Title';
      args[0].minify = {
        removeComments: false,
        collapseWhitespace: false
      };
      return args;
    });

    config.plugin('copy').tap(([options]) => {
      options[0].ignore.push('bopr/**');
      return [options];
    });

    config.externals({
      leaflet: 'L'
    });

    config.module
      .rule('mjs')
      .test(/\.mjs$/)
      .type('javascript/auto')
      .include.add(/node_modules/)
      .end();
  }
};
