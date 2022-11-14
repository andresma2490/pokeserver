exports.replaceDomain = (url) => {
  return url.replace(/(https:|)(^|\/\/)(.*?\/)/g, `${process.env.DOMAIN}/`);
};
