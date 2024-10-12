export default function hasValuesFromArray(set, arr) {
  let status = false;
  arr.forEach((element) => {
    if (set.has(element) === false) {
      return false;
    }
    status = true;
    return null;
  });
  return status;
}
