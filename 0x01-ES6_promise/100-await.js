export default async function asyncUploadUser() {
  const user = await signUpUser('Bob', 'Dylan');
  const photo = await uploadPhoto('photo.jpg');
  return { user, photo };
}
