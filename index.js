let cool = require('cool-ascii-faces');
let express = require('express');

let app = express();

const PORT = (process.env.PORT || 23000);

app.use("/static/", express.static("./public"));

app.get('/cool', (req,res)=> {
    res.send(`<html><body><h1>${cool()}</h1></body></html`);
});

app.listen(PORT, () =>{
    console.log(`Server listening on port ${PORT}`)
});

console.log(`Server inicializing...`);
