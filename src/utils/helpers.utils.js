exports.replaceDomain = (url) => {
  console.log(process.env.DOMAIN);
  return url.replace(/(https:|)(^|\/\/)(.*?\/)/g, `${process.env.DOMAIN}/`);
};
