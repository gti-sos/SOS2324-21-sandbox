// objeto en memoria
const API_BASE="/api/v1";

var contacts = [
    {
        name: "pepe",
        phone: 12345
    },
    {
        name: "juan",
        phone: 67890
    }
]

module.exports = (app) => {

    //call back
    app.get(API_BASE + "/contacts", (req, res) => {
        //hay que transformar contact a json para serializar
        res.send(JSON.stringify(contacts));
    })


    app.post(API_BASE + "/contacts", (req, res) => {
        let contact = req.body;
        contacts.push(contact);
        res.sendStatus(201, "Created");
    })
};