const express = require("express");
const fs = require('node.js');

const router = express.Router();

router.get("/",(req,res) => {
    //not generally how return data is displayed,
    //instead, opten returned as a JSON object and some frontend parses it, displays it pretty
    const teamname = req.query.teamname;
    const sport =req.query.sport;
    const content = teamname + " play " + sport;
    fs.appendFile('myData.txt', content, err => {
        if (err){
            console.error(err);
        }
    })
    res.send(
        "<html><head></head><body>" +
        "<p>Thank You for adding : " + req.query.teamname +
        " in sport: " + req.query.sport + "<p>" +
        "</body></html>"
    );
});

module.exports = router;