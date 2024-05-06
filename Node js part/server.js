// server.js
const express = require('express');
const app = express();
const PORT = 3000; 

// Body parser middleware to handle form data
app.use(express.urlencoded({extended: true}));

// Serve static files form the 'public' folder
app.use(express.static('public'));

//GET request to seve the order form
app.get('/', (req, res) => {
    res.sendFile(__dirnamedirname + '/public/index.html');
});

// POST request to handle form submission
app.post('/submit', (req, res) => {
// Assuming form has fields 'item1', 'item2', 'item3' for simplicity
    const{item1, item2, item3} = req.body;
// Calculate total (can be modified)
    const total = parseInt(item1) + parseInt(item2) + parseInt(item3);
// Send back the total in the response
    res.send('Total: $${total}');
});

/* Server listening
app.listen(PORT, () => {
    console.log('Server running on http://localhost:${PORT}');
});*/

app.listen(PORT || process.env.PORT, () => {
    const actualPort = PORT || process.env.PORT;  // Get the actual port used
    console.log(`Server running on http://localhost:${actualPort}`);
});


