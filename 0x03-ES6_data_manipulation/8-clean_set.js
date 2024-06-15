export default function cleanSet(set, startString) {
  if (!set || !startString) {
    return '';
  }
  const cleanArray = [];
  set.forEach((element) => {
    if (element && element.startsWith(startString)) {
      cleanArray.push(element.slice(startString.length));
    }
  });
  return cleanArray.join('-');
}
