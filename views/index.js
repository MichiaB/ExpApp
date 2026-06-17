const express = require("express");
const app = express();
const port = 3000; 



app.listen(port, () => {
    console.log (`Server Listening on port: ${port}.`);
});


app.post("/home.ejs", (req, res) =>{
    console.log(req.body);
   res.send("Welcome");
})

