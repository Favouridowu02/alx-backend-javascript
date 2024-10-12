export default function hasValuesFromArray(set, arr = []) {
  let status = false;
  if (arr.length > 0) {
    arr.forEach((element) => {
      if (set.has(element) === false) {
        status = false;
      } else {
        status = true;
      }
      return null;
    });
  }
  return status;
}
