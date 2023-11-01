const dbConfig = {
    user: 'MusicAdmin',
    password: 'CoogMusic1!',
    server: 'tcp:music-lib-server5.database.windows.net',
    database: 'Music_Lib_DB',
    pool: {
        max: 10,                        // Max connections at any given time
        min: 0,                         // Min connections
        idleTimeoutMillis: 30000,       // Max time a connection can remain idle before being removed (30s)
    },
    options: {
        encrypt: true,
        trustServerCertificate: true,   // In prod ideally set to false
        connectionTimeout: 15000,       // Time to wait for a connection to DB server before timeout (15s)
        requestTimeout: 15000,          // Time to wait for a DB query request before timeout (15s)
        retryConnectionMax: 3,          // Maximum number of times to retry connecting to the server
        retryConnectionInterval: 1000,  // Interval between retry attempts
        enableArithAbort: true,         // Handles divide by 0 errors / numeric overflows during query execution
        enableArithIgnore: false,       // Causes DB to ignore certain arithmetic errors and to continue executing query despite errors
    },
};

module.exports = dbConfig;              // To be exported and used in node.js app