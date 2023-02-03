import inquirer from 'inquirer';
import mysql2 from 'mysql2';
import addDepartments from './SQL_Functions/addDepartment.js';
import addEmployee from './SQL_Functions/addEmployee.js';
import addRole from './SQL_Functions/addRole.js';
import updateEmployee from './SQL_Functions/updateEmployee.js';
import viewAllDepartments from './SQL_Functions/viewAllDepartments.js';
import viewAllEmployees from './SQL_Functions/viewAllEmployees.js';
import viewAllRoles from './SQL_Functions/viewAllRoles.js';

//$.getscript('./SQL_Functions/addDepartment.js', function(){
//   addDepartments();
//});

// const db = mysql2.createConnection(
//     {
//         host: 'localhost',
//         //MySQL username,
//         user: 'root',
//         //MySQL password
//         password: 'root',
//         database: 'tracker',
//     },
//     console.log('Connected to the tracker database.')
// );

const questions = [
    {
        type: 'list',
        message: 'What would you like to do?',
        name: 'choice',
        choices: [
            { name: "add department", value: "ADD_DEPARTMENTS" },
            { name: "add employee", value: "ADD_EMPLOYEE" },
            { name: "add role", value: "ADD_ROLE" },
            { name: "update employee", value: "UPDATE_EMPLOYEES" },
            { name: "view all departments", value: "VIEW_DEPARTMENTS" },
            { name: "view all employees", value: "VIEW_EMPLOYEES" },
            { name: "view all roles", value: "VIEW_ROLES" },
        ]
    },
]

inquirer
    .prompt(questions)
    .then((response) => {
        response.choice
        console.log({ response })
        if (response.choice === "VIEW_DEPARTMENTS") {
            viewAllDepartments();
        } else if (response.choice === "ADD_DEPARTMENTS") {
            const addDep = [
                {
                    type: 'input',
                    name: 'departmentName',
                    message: 'What is the name of the department to add?'
                },]

            inquirer
                .prompt(addDep)
                .then(({ departmentName }) => {
                    addDepartments(departmentName);
                })
        } else if (response.choice === "ADD_EMPLOYEE") {
            const addEmp = [
                {
                    type: 'input',
                    name: 'firstName',
                    message: 'What is first name of the employee?'
                },
                {
                    type: 'input',
                    name: 'lastName',
                    message: 'What is the last name of the employee?',
                },
                {
                    type: 'input',
                    name: 'roleID',
                    message: 'What is the roleID of this employee?',
                },
                {
                    type: 'input',
                    role: 'managerID',
                    message: "What is the ID of this employee's manager?"
                },]

            inquirer
                .prompt(addEmp)
                .then(({ firstName, lastName, roleID, managerID }) => {
                    addEmployee(firstName, lastName, roleID, managerID);
                })
        } else if (response.choice === "ADD_ROLE") {
            const addRole = [
                {
                    type: 'input',
                    name: 'title',
                    message: 'Please enter the title for the position.',
                },
                {
                    type: 'input',
                    name: 'salary',
                    message: 'What is the salary for the listed position?',
                },
                {
                    type: 'input',
                    role: 'departmentID',
                    message: "What is the Department ID?"
                },]

            inquirer
                .prompt(addRole)
                .then(({ title, salary, departmentID }) => {
                    console.log(title, salary, departmentID)
                    addRole(title, salary, departmentID);
                })
        } else if (response.choice === "UPDATE_EMPLOYEES") {
            const updateEmp = [
                {
                    type: 'input',
                    name: 'tableName',
                    message: 'Which table needs to be updated?'
                },
                {
                    type: 'list',
                    name: 'columnSet',
                    message: 'What records need to be updated in employees?',
                    name: 'choiceColumnsEmployees',
                },
                {
                    type: 'input',
                    name: 'value',
                    message: 'What should the column value be?',
                },
                {
                    type: 'input',
                    role: 'columnWhere',
                    message: "Please specify if there is another column you want to filter results by."
                }, {
                    type: 'input',
                    role: 'conditionWhere',
                    message: "Only update where the column equals a certain value?"
                },]

            inquirer
                .prompt(updateEmp)
                .then(({ columnSet, value, columnWhere, conditionWhere }) => {
                    updateEmployee(columnSet, value, columnWhere, conditionWhere);
                })
        } else if (response.choice === "VIEW_EMPLOYEES") {
            viewAllEmployees();
        } else if (response.choice === "VIEW_ROLES") {
            viewAllRoles();
        } else {
            console.log("Error!");
        }
    });