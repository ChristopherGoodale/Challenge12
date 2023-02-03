import mysql2 from "mysql2";


const db = mysql2.createConnection(
    {
        host: 'localhost',
        //MySQL username,
        user: 'root',
        //MySQL password
        password: 'root',
        database: 'tracker',
    },
);

const addEmployee = (firstName, lastName, roleID, managerID) => {
    db.query(`Insert into 
        employees 
            (firstname, lastname, roleid, managerid) 
        values
            ('${firstName}','${lastName}',${roleID},${managerID})`, function (err, results) {
        if (err !== null) {
            console.log(err)
        }
        console.table(results);
    })
    //.catch(err => console.log(err));
    console.log("Success");
    db.end();
}
//export default addEmployee;
export default addEmployee;