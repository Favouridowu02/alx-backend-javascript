export default function cleanSet(set, startString) {
  let joinstring = '';
  for (const value of set) {
    if (value.startsWith(startString)) {
      if (startString !== '' && joinstring === '') {
        joinstring = joinstring.concat(value.replace(startString, ''));
      } else if (startString !== '') {
        joinstring = joinstring.concat('-', value.replace(startString, ''));
      }
    }
  }
  return joinstring;
}
