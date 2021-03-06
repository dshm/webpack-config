const spriteTPL = require("../sprite.tpl");

module.exports = {
  src: {
    cwd: "./src/images/png-ico",
    glob: "*.png"
  },
  target: {
    image: "./src/images/sprite.png",
    css: [["./src/styles/sprite.scss", { format: "custom_format" }]]
  },
  apiOptions: {
    cssImageRef: "../images/sprite.png"
  },
  retina: "@2x",
  spritesmithOptions: {
    padding: 5
  },
  customTemplates: {
    custom_format_retina: spriteTPL
  }
};
