const mssql = require("msssql");

const db = mssql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "test",
});

db.connect(err => {
    if (err) { throw err; }
    console.log("DB connection OK");
});

db.query("select * FROM 'users'", (err, results) => {
    if (err) {throw err; }
    console.log(results)
});