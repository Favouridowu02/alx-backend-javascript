export default function createInt8TypedArray(length = 0, position = 0, value = 0) {
  let dataView;
  let buffer;
  try {
    buffer = new ArrayBuffer(length);
    dataView = new DataView(buffer);
    dataView.setInt8(position, value);
  } catch (NumberFormatException) {
    return 'Position outside range';
  }
  return dataView;
}
