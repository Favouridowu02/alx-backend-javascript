export default function getStudentIdsSum(arr = []) {
  if (Array.isArray(arr)) {
    return arr.reduce((accumulator, obj) => (obj.id + accumulator), 0);
  }
  return 0;
}
