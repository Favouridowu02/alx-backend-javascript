export default function cleanSet(set, startString) {
  let joinstring = '';
  for (const value of set) {
    if (startString !== '' && value.startsWith(startString)) {
      if (joinstring === '') {
        joinstring = joinstring.concat(value.replace(startString, ''));
      } else {
        joinstring = joinstring.concat('-', value.replace(startString, ''));
      }
    }
  }
  return joinstring;
}
