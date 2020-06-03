module.exports = {
  delay: ms => {
    return new Promise(res => {
      setTimeout(res, ms);
    });
  }
};
