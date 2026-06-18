import express from "express";
const app = express();
import morgan from "morgan";
const port = 3000; 

app.use(express.static("public"));




app.get("/download", (req, res) => {
    const filePath = path.resolve("public/img/cat.webp.jpg");

    res.download(filePath, (err) => {
        if (err) {
            console.log("Download error:", err); 
            res.status(500).send("File could not be downloaded.")
        }
    });
});

app.listen(port, () => {
    console.log (`Server Listening on port: ${port}.`);
});


app.get("/", (req, res) => {
    res.render("home.ejs");
});


app.get("/about/:name", (req, res) => {
    res.render("about", {

    })
})





app.post("/home.ejs", (req, res) =>{
    console.log(req.body);
   res.send(`"Success!" ${req.params.home} `);
});

