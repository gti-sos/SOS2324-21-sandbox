let cool = require('cool-ascii-faces');
let bodyParser = require('body-parser');
let express = require('express');
let contactAPI = require('./api-contacts');

let app = express();

const PORT = (process.env.PORT || 10000);

app.use(bodyParser.json()); //cada vez que llegue un json lo convierte en un objeto

contactAPI(app);

app.use(express.static("./public"));

app.get('/cool', (req,res)=> {
    res.send(`<html><body><h1>${cool()}</h1></body></html`);
});

// --------------------------------------

app.listen(PORT, () =>{
    console.log(`Server listening on port ${PORT}`)
});

console.log(`Server inicializing...`);