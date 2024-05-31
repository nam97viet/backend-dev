import express from "express";
const app = express();
const port = 4000;

app.get("/", (req, res) => {
    res.send("<h1>Hello,World!</h1>");
})

app.get("/about", (req, res) => {
    res.send("<h1>About Me</h1><p>My name is Nathan</p>")
})

app.get("/contact", (req, res) => {
    res.send("<h1>Contact Me</h1><p>Phone: +346-754-9828</p>")
})

app.listen(port, () => {
    console.log(`Server run on port ${port}.`)
})