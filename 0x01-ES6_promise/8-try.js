export default function divideFunction(numerator, denominator) {
  return new Promise((resolve, reject) => {
    try {
      resolve(numerator / denominator);
    } catch (error) {
      reject(error);
    }
  });
}
