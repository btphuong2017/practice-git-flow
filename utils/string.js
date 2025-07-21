function capitalize(str) {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function toSnakeCase(str) {
  return str
    .replace(/\s+/g, '_')
    .replace(/[A-Z]/g, (match) => `_${match.toLowerCase()}`)
    .replace(/^_/, '')
    .toLowerCase();
}

module.exports = { capitalize };
