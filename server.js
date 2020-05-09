  
const express = require('express');
const app = express();
const path = require("path")
const routes = require('./routes');

const PORT = process.env.PORT || 4000;

// require db connection
require('./models');

// configure body parser for AJAX requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// add this line
app.use(express.static(path.join(__dirname, "client", "build")))

app.use(routes);

// Bootstrap server
app.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}.`);
});