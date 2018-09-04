const path = require('path');
const fs = require('fs');
const express = require('express');

const app = express();
const basePath = path.join(__dirname + "/dist");
const bodyParser = require("body-parser");
var cors = require('cors')
var corsOptions = {
    origin: 'http://example.com',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors())
app.get(`/`, (req, res) => {
    let linkList = "";
    let resPage = fs.readFileSync("links.html", "utf-8");
    console.log(resPage);
    fs.readdir(basePath, (err, files) => {
        files.forEach((file) => {
            linkList += `<li><a href="/${file}" target="blank">${file}</a></li>`;
        })
        res.send(resPage.replace("placeHolder", linkList));
    });

});
app.post("/api/login", (req, res) => {

    let currentlist = require("./user.json");
    currentlist.forEach(element => {
        if (element.userName == req.body.userName && element.password == req.body.password) {
            res.status(201).send(JSON.stringify(element));
        }
      

    });

  res.status(201).send(null);
});



fs.readdir(basePath, (err, files) => {
    files.forEach((file) => {
        app.use(express.static(`${basePath}/${file}`));
        app.get(`/${file}`, (req, res) => {
            res.sendFile(`${basePath}/${file}/index.html`);
        });
    })
});


app.post("/api/user", (req, res) => {
    // if (legalTz(req.body.tz) && req.body.age > 0 && req.body.age < 120 && req.body.name.length > 3 && req.body.name.length < 15 && typeof (req.body.isMale) == "boolean" && validCountry(req.body.country))
    if (req.body.firstName.length >= 2 && req.body.firstName.length < 15 && req.body.lastName.length >= 2 && req.body.lastName.length < 15 && req.body.userName.length >= 3 && req.body.userName.length < 15 && req.body.password.length >= 5 && req.body.password.length < 10) {

        let currentlist = require("./user.json");
        currentlist.push(req.body);
        fs.writeFileSync("user.json", JSON.stringify(currentlist));
        res.status(201).send(JSON.stringify(currentlist));




    }
    else res.status(400)

}
)
//curl -v -X GET -H "Content-type: application/json" -d "{\"123411\",\"sasd\" }" http://localhost:3500/api/login
const port = process.env.PORT || 3500;
app.listen(port, () => { console.log(`OK`); });