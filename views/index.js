import express from "express";
const app = express();
import morgan from "morgan";
const port = 3000; 

app.use(express.static("public"));






app.listen(port, () => {
    console.log (`Server Listening on port: ${port}.`);
});

app.get("/about/:name", (req, res) => {
    res.render("about", {

    })
})

app.get("/download", (req, res) => {
      res.download("./public/img/cat.webp.jpg", [cat.webp.jpg], []);
})




app.post("/home.ejs", (req, res) =>{
    console.log(req.body);
   res.send(`"Success!" ${req.params.home} `);
})

