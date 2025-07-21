function capitalize(str) {
  str = str.trim();
  return str.charAt(0).toUpperCase() + str.slice(1);
}

module.exports = { capitalize };
