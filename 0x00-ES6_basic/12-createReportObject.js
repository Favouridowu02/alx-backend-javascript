export default function createReportObject(employeesList) {
  const newObj = {};
  newObj.allEmployees = employeesList;
  newObj.getNumberOfDepartments = (obj) => Object.keys(obj).length;
  return newObj;
}
