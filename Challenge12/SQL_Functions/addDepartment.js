import mysql2 from "mysql2";
const db = mysql2.createConnection(
    {
        host: 'localhost',
        //MySQL username,
        user: 'root',
        //MySQL password
        password: 'root',
        database: 'tracker',
    },);

const addDepartments = (departmentName) => {
    console.log(departmentName);
    db.query(`Insert into departments
        (name) 
    values
        ('${departmentName}');`, function (err, results) {
        if (err !== null) {
            console.log(err)
        }
        console.table(results);
    })
    //.catch(err => console.log(err));
    console.log("Success");
    db.end();
}
//export default viewDepartments;
export default addDepartments;