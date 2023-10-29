const express = require('express');
const app = express();
const port = 3000;

app.use(express.static(__dirname + '/../client'));
app.use(express.urlencoded({ extended: true }));

/* Serve different HTML files based on routes
 * Do app.get for each html file
 * All such files to be in client folder so that 
 * __dirname + '/../client/fileName.html' can work properly
 */

app.get('/musicUpload.html', (req, res) => {
  res.sendFile(__dirname + '/../client/musicUpload.html');
});

/* Add more HTML files in this fashion
app.get('/fileName', (req, res) => {
  res.sendFile(__dirname + '/../client/fileName.html');
});
*/

// Define route handlers for each form
app.post('/selectionForm/process', (req, res) => {
    // Handle the form data from /selectionForm/process
    const formData = req.body;
    // Process the data
    res.send('Selection Form data received and processed.');
  });

// Define route handlers for each form
app.post('/albumForm/process', (req, res) => {
    // Handle the form data from /albumForm/process
    const formData = req.body;
    // Process the data
    res.send('Album Form data received and processed.');
  });
  // Define route handlers for each form

  app.post('/singleForm/process', (req, res) => {
    // Handle the form data from /singleForm/process
    const formData = req.body;
    // Process the data
    res.send('Single Form data received and processed.');
  });

/* Add more routes and handlers for other HTML files and their forms
app.post('/formName/process', (req, res) => {
    // Handle the form data from fileName.html (defined earlier in your app.get)
    const formData = req.body;
    // Process the data
    res.send('formName data received and processed.');
  });
*/

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
