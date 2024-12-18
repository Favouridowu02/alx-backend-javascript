const weakMap = new WeakMap();
function queryAPI(endpoint) {
  if (weakMap.has(endpoint)) {
    weakMap.set(endpoint, weakMap.get(endpoint) + 1);
  } else {
    weakMap.set(endpoint, 1);
  }
  if (weakMap.get(endpoint) >= 5) {
    throw new Error('Endpoint load is high');
  }
  return weakMap.get(endpoint);
}
export { weakMap, queryAPI };
