export default function createIteratorObject(report) {
  const employees = [];
  for (const department in report.allEmployees) {
    if (Object.prototype.hasOwnProperty.call(report.allEmployees, department)) {
      employees.push(...report.allEmployees[department]);
    }
  }

  return employees[Symbol.iterator]();
}
