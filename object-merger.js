function merge(source, target) {
  for (const key of Object.keys(target)) {
    const value = target[key];
    if (Array.isArray(value)) {
      if (!source[key]) {
        source[key] = [
        ];
      }

      for (const element of value) {
        source[key].push(element);
      }
    } else {
      source[key] = value;
    }
  }

  return source;
}

module.exports = {
  merge
};
