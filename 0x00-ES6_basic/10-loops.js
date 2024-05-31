export default function appendToEachArrayValue(array, appendString) {
  for (let value of array) {
    appendString + value;
  }

  return array;
}
