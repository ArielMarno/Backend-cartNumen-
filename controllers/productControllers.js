
const Product = require("../models/Product");
const { validationResult } = require('express-validator');

//Listar productos (Read)
const getProducts = async (req, res) =>{
	const products = await Product.find();	
	res.status(200).json({products: products, msg: "Ok"}); 
}

//Obtener productos por ID (Read) 

const getProductById = async (req, res) =>{
	
	const product = await Product.findById(req.params.id);

	if(product !== undefined && product !== null) {
		res.status(200).json({product: product, msg: "Ok"});	
	}
	else{
		res.status(404).json({user: null, msg: "El producto no fue encontrado"})
	};
};

//Obtener producto por nombre (Read)

const getProductByName = async (req, res) =>{
    const product = await Product.findOne({ name: req.query.product});

    if(product !== undefined && product !== null){
        res.status(200).json({product: product, msg: "Ok."});
    }else{
        res.status(404).json({ product: null, msg: "El nombre de producto no ha sido encontrado."})
    }
};

//Agregar nuevo producto (Create)

const registerProduct = async (req, res) =>{
    try{
		const validationError = validationResult(req.body);
		if(validationError.isEmpty()){
			const product = new Product(req.body);
            await product.save();
			res.status(201).json({ product: product, msg: "El producto fue agregado exitosamente.",});
		}else{
			res.status(400).json({msg: "Error en el registro del producto.", validationError});
		}
    }catch(error){
        res.status(500).json({ product: null, msg: "Ocurrio un error al agregar el producto -" + error.message,});
    }
};

//Actualizar producto (Update)

const updateProduct= async (req, res)=>{
	try{
		await Product.findByIdAndUpdate(req.params.id, req.body)
		res.status(201).json({msg: "Producto actualizado."})
		
	}catch(error){
		res.status(500).json({msg: "Error al actualizar -"+ error.message})
	}
};

//Eliminar producto (Delete)

const deleteProduct= async (req, res)=>{
	try{
		await Product.findByIdAndDelete(req.params.id);
		res.status(200).json({msg:"Producto eliminado."})
	}catch(error){
		res.status(500).json({msg: "Ocurrio un error al eliminar el producto."+ error.message})
}
	
}


module.exports = { getProducts, getProductById, getProductByName, registerProduct, updateProduct, deleteProduct };