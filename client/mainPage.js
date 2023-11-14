// let data = []

// const dbConfig = {
//     server: "musiclibraryteam5.database.windows.net",
//     database: "MusicLibraryDatabase",
//     user: "MusicAdmin",
//     password: "CoogMusic1!",
//     port: 1433
// };

// require (["mssql"], async function(mssql){
//     let pool
//     try {
//         pool = await mssql.connect(dbConfig);  // Use the existing variable
//         const result = await pool.request().query("SELECT Username FROM [User] Where Role_ID = 2 ");
//         console.log(result.recordset); // Assuming the data is an array of objects with a 'Username' property
//         data = result;
//     } catch (error) {
//         console.error('Error fetching usernames:', error);
//         return [];
//     } finally {
//         if (pool) {
//             pool.close();
//         }
//     }
// });



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

// async function fetchUsernames() {
//     let pool
//     try {
//         pool = await sql.connect(dbConfig);  // Use the existing variable
//         const result = await pool.request().query("SELECT Username FROM [User] Where Role_ID = 2 ");
//         console.log(result.recordset); // Assuming the data is an array of objects with a 'Username' property
//         return result;
//     } catch (error) {
//         console.error('Error fetching usernames:', error);
//         return [];
//     } finally {
//         if (pool) {
//             pool.close();
//         }
//     }
// }

// Use the fetchUsernames functio

document.addEventListener('DOMContentLoaded', async () => {
    // Fetch usernames from the database
    let data = [];

    fetch("http://localhost:8080/").then(x => x.json()).then( x => {
        const userList = document.getElementById('Recommended');
        
    // Loop through the array and create list items for each username
    x.data.forEach(user => {
        // Create a new LI element
        const listItem = document.createElement('li');
        listItem.classList.add("song-item");
    
        // Create a new LI element
        const artistBox = document.createElement('div');
        artistBox.classList.add("Rec-box");
    
        // Create a new div for the artist info
        const artistInfo = document.createElement('div');
        artistInfo.classList.add("song-info");

        // Create an H2 element for the artist name
        const artistName = document.createElement('h2');
        artistName.textContent = user["Username"];

        // Append the artist box, info, and name to the LI element
        artistInfo.appendChild(artistName);
        listItem.appendChild(artistBox);
        listItem.appendChild(artistInfo);

        // Append the LI element to the UL
        userList.appendChild(listItem);

        });
    })

    });


    