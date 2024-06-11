export default function loadBalancer(chinaDownload, USDownload) {
  return Promise.all([chinaDownload, USDownload]).then((values) => {
    console.log(`China [${values[0].body}] response received`);
    console.log(`US [${values[1].body}] response received`);
  });
}
