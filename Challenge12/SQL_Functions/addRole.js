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

const addRole = (title, salary, departmentID) => {
    console.log("this is in the addrole f(x)", title, salary, departmentID)
    db.query(`Insert into 
        role 
            (title, salary,departmentid) 
        values
            ('${title}',${salary},${departmentID})`, function (err, results) {
        if (err !== null) {
            console.log(err)
        }
        console.table(results);
    })
    //.catch(err => console.log(err));
    console.log("Success");
}
//export default addRole;
export default addRole;