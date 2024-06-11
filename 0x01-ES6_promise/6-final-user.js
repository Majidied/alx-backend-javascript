export default function handleProfileSignup(firstName, lastName, fileName) {
  const signUp = signUpUser(firstName, lastName)
    .then((user) => {
      console.log(`${user.firstName} ${user.lastName}`);
      return { firstName: user.firstName, lastName: user.lastName };
    })
    .catch(() => {
      console.log("Signup system offline");
      throw new Error("Signup system offline");
    });

  const upload = new Promise((resolve, reject) => {
    console.log(`Upload of ${fileName} complete`);
    reject(new Error(`${fileName} cannot be processed`));
  });

  return Promise.allSettled([signUp, upload]);
}
