// Write your solution in this file!
let employee = {
    name: 'Sam',
    streetAddress: '11 Broadway',

}
let copyOf = {...employee}
function updateEmployeeWithKeyAndValue(employee, key, value) {
    return copyOf

}
//employee.streetAddress = '12 Broadway'
function  destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    //employee['streetAddress'] = "12 Broadway"
    employee.streetAddress = '12 Broadway'
    return employee

}
let newEmployee = {...employee}
 //newEmployee.delete = 'name'
function  deleteFromEmployeeByKey(employee, key) {
  delete newEmployee ["name"]
    return newEmployee

}
function  destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee["name"]
    return employee
}