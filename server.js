const db = require('./db/connection');
const express = require('express');
const inputCheck = require('./utils/inputCheck');
const PORT = process.env.PORT || 3001;
const app = express();
const apiRoutes = require('./routes/apiroutes');

// express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/api', apiRoutes);

//DEFAULT reponse for any other request (NOT FOUND)
app.use((req, res) =>{
    res.status(404).end();
});

//start server after DB connection 
db.connect(err => {
  if (err) throw err; 
  console.log('Database connected.');
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
});
