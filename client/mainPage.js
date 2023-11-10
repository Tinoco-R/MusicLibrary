const sql = require("mssql");

const dbConfig = {
    server: "music-lib-server5.database.windows.net",
    database: "MUSIC_LIB_DB",
    user: "MusicAdmin",
    password: "CoogMusic1!",
    port: 1433
};

async function getUser() {
    let pool;  // Declare the variable outside the try block
    try {
        pool = await sql.connect(dbConfig);  // Use the existing variable
        const result = await pool.request().query("SELECT * FROM [Artist]");
        console.log(result.recordset);
    } catch (err) {
        console.error(err);
    } finally {
        if (pool) {
            pool.close();
        }
    }
}

getUser();




