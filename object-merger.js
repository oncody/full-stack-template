function merge(source, target) {
  for(let key of Object.keys(target)) {
    let value = target[key];
    if(Array.isArray(value)) {
      if(!source[key]) {
        source[key] = [];
      }

      for(let element of value) {
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
