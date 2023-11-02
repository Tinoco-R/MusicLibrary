const sql = require("msnodesqlv8");

// Specify the DSN in the connection string
const connectionString = "DSN=NaimMusic";

// Create a connection to the database using the DSN
sql.open(connectionString, (err, connection) => {
    if (err) {
        console.error("Error connecting to the database:", err);
    } else {
        console.log("Connected to the database");

        // Now you can use the 'connection' object to execute queries
        // For example:
        connection.query("SELECT * FROM [User]", (queryErr, rows) => {
            if (queryErr) {
                console.error("Error executing query:", queryErr);
            } else {
                // Process the query results
                console.log("Query results:", rows);
            }
        });
    }
});

/*

const sql = require('mssql');


const config = {
    user: 'MusicAdmin',
    password: 'CoogMusic1!',
    server: 'tcp:music-lib-server5.database.windows.net,1433',
    database: 'music_library',
    pool: {
        max: 10,                        // Max connections at any given time
        min: 0,                         // Min connections
        idleTimeoutMillis: 30000,       // Max time a connection can remain idle before being removed (30s)
    },
};

const pool = new sql.ConnectionPool(config);

pool.connect().then(() => {
    const request = pool.request();

    request.query('SELECT * FROM [User]').then((result) => {
        const data = result.recordset;
        console.log('Retrieved data:', data)

        pool.close();
    }).catch((err) => {
        console.error('Error executing SELECT statement:', err)
        pool.close

    });
});

sql.query(connectionString, query, (err, rows) => {
    console.log(rows);
});
// Simulated data (replace with real data from your database)
const songData = {
    song: "apple song", genre: "Rap", rating: "0.0", views: "0"
};

// Sort it out by vies highest to lowest
songData.sort((a,b) => b.views - a.views);

const topTenSongs = songData.slice(0,10);

topTenSongs.forEach((song,index) => {
  //creates html for each song and fills in the data.
  const songElement = document.createElement("div");
  songElement.innerHTML = `
      <h2>${song.song}</h2>
      <p>Genre: ${song.genre}</p>
      <p>Rating: ${song.rating}</p>
      <p>Views: ${song.views}</p>
  `;
  // appends each of the song within the div element
  document.getElementbyID("song-list").appendChild(songElement);
    
});
*/