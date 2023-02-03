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

const updateEmployee = (columnSet, value, columnWhere, conditionWhere) => {
    db.query(`UPDATE employees
    SET ${columnSet} = ${value}, 
    WHERE ${columnWhere} = '${conditionWhere}';`, function (err, results) {
        if (err !== null) {
            console.log(err)
        }
        console.table(results);
    })
    //.catch(err => console.log(err));
    console.log("Success");
}
//export default updateEmployee;
export default updateEmployee;