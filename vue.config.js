module.exports = {
  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      args[0].title = "Vue.js v3 | Ben Broadley";
      return args;
    });
  },
};
