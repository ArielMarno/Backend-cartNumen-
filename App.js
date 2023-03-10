
const controllers = require("./controllers/productControllers")
const express = require('express')
const app = express();
const port = 8080

const productRouter = require("./routes/productsRoutes");

const dbConnect = require("./database/dbConnection")

app.use("/products", productRouter);


//Levantar Server
app.listen(port, ()=>{
    console.log(`Servidor ejecutandose en http://localhost:${port}`);
});

dbConnect();