export default function createIteratorObject(report) {
  const employees = [];
  for (let department in report.allEmployees) {
    employees.push(...report.allEmployees[department]);
  }

  return employees[Symbol.iterator]();
}
