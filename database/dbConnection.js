const mongoose = require("mongoose");
require("dotenv").config(); 


const dbConnect = async ()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL)
    }catch(error){
        throw new Error("No fue posible conectarse a la base de datos.")
    }
};

module.exports = dbConnect;