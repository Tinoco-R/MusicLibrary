const http = require("http")
const url = require("url")
const sql = require("mssql");

const dbConfig = {
    server: "musiclibraryteam5.database.windows.net",
    database: "MusicLibraryDatabase",
    user: "MusicAdmin",
    password: "CoogMusic1!",
    port: 1433
};
// main.js
document.addEventListener("DOMContentLoaded", async function () {
    try {
        // Fetch usernames from the server
        const response = await fetch('/api/getUsernames');

        // Log the response to the console
        console.log(response);

        // Continue with the rest of your code...
    } catch (error) {
        console.error('Error fetching usernames:', error);
    }
});

/*
async function getUser() {
    let pool;  // Declare the variable outside the try block
    try {
        pool = await sql.connect(dbConfig);  // Use the existing variable
        const result = await pool.request().query("SELECT Username FROM [User] Where Role_ID = 2");
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

*/



