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

const viewDepartments = () => {
    db.query("Select * from departments;", function (err, results) {
        if (err !== null) {
            console.log(err)
        }
        console.table(results);
    })
    //.catch(err => console.log(err));
    console.log("Success");
}
//export default viewDepartments;
export default viewDepartments;