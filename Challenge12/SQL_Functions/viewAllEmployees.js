import mysql2 from "mysql2";

const db = mysql2.createConnection(
    {
        host: 'localhost',
        //MySQL username,
        user: 'root',
        //MySQL password
        password: '',
        database: 'tracker',
    },
);

const viewEmployees = () => {
    db.query("Select * from employees;", function (err, results) {
        if (err !== null) {
            console.log(err)
        }
        console.table(results);
    })
    //.catch(err => console.log(err));
    console.log("Success");
    db.end();
}
//export default viewEmployees;
export default viewEmployees;