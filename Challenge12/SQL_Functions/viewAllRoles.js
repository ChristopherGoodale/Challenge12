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

const viewRoles = () => {
    db.query("Select * from roles;", function (err, results) {
        if (err !== null) {
            console.log(err)
        }
        console.table(results);
    })
    //.catch(err => console.log(err));
    console.log("Success");
    db.end();
}
//export default viewRoles;
export default viewRoles;