import express from "express";

const app = express();
const port = 4000;

app.get("/", (req, res) => {
    const data = {
        title: "EJS Tags",
        seconds: new Date().getSeconds(),
        items: ["apple", "orange", "banana"],
        htmlContent: "<strong>This is some strong text.</strong>",
    };
    res.render("index.ejs", data);
});

app.listen(port, () => {
    console.log(`Server run on ${port}.`);
});