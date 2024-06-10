export default function createIteratorObject(report) {
  const employees = [];
  for (const department in report.allEmployees) {
    if (report.allEmployees.hasOwnProperty(department)) {
      employees.push(...report.allEmployees[department]);
    }
  }

  return employees[Symbol.iterator]();
}
