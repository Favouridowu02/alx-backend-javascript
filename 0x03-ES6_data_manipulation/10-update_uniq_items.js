export default function updateUniqueItems(map = new Map()) {
  for (const [key, value] of map.entries()) {
    if (value === 1) {
      map.set(key, 100);
    }
  }
  return map;
}
