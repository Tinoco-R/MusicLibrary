import fs from 'fs';
import pkg from 'mssql';
const { pool,connect } = pkg;

const dbConfig = {
    server: "musiclibraryteam5.database.windows.net",
    database: "MusicLibraryDatabase",
    user: "MusicAdmin",
    password: "CoogMusic1!",
    port: 1433
};


// async function getUser() {
//     let pool;  // Declare the variable outside the try block
//     try {
//         pool = await sql.connect(dbConfig);  // Use the existing variable
//         const result = await pool.request().query("SELECT Username FROM [User] Where Role_ID = 2");
//         console.log(result.recordset);
//         return result 
//     } catch (err) {
//         console.error(err);
//     } finally {
//         if (pool) {
//             pool.close();
//         }
//     }
// }

// getUser();

// Define a function to fetch usernames from the database
async function fetchUsernames() {
    try {
        pool = await connect(dbConfig);  // Use the existing variable
        const result = await pool.request().query("SELECT Username FROM [User] Where Role_ID = 2");
        console.log(result.recordset)
        return result; // Assuming the data is an array of objects with a 'Username' property
    } catch (error) {
        console.error('Error fetching usernames:', error);
        return [];
    } finally {
        if (pool) {
            pool.close();
        }
    }
}

fetchUsernames();

  




