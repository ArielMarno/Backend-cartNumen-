const Product = require('../models/Product');

const validateProduct = async (req, res, next) => {
    const product = await Product.findOne({product: req.body.product})
    
    if (product) {
        res.status(400).json({msg: "Ya existe en la base de datos."})
    } else {
        next();
    }
}

module.exports = validateProduct;