import signUpUser from './4-user-promise';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return signUpUser(firstName, lastName)
    .then((user) => {
      console.log(`${user.firstName} ${user.lastName}`);
    })
    .catch(() => console.log('Signup system offline'))
    .finally(() => console.log(`Upload of ${fileName} complete`));
}
