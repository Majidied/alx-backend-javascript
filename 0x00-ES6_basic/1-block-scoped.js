/* eslint-disable no-unused-vars */
/* eslint-disable no-var */
export default function taskBlock(trueOrFalse) {
    const task = false;
    const task2 = true;
  
    if (trueOrFalse) {
      const task = true;
      const task2 = false;
    }
  
    return [task, task2];
  }