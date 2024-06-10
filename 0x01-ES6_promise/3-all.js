import uploadPhoto from './utils.js';
import createUser from './utils.js';

export default async function handleProfileSignup() {
  try {
    const values_1 = await Promise.all([uploadPhoto(), createUser()]);
    console.log(values_1[0].body, values_1[1].firstName, values_1[1].lastName);
  } catch {
    return console.log('Signup system offline');
  }
}
