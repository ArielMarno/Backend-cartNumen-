const express = require("express");
const router = express.Router();
const productController = require("../controllers/productControllers");
const { check } = require("express-validator");
const validateProduct = require("../midlewares/validateProduct");


//READ: OBTENER DATOS

router.get("/", productController.getProducts);

router.get("/:id", productController.getProductById);

router.get("/find", productController.getProductByName);

//CREATE: CREAR DOCUMENTO

router.post("/register", validateProduct,  [
    check("url").not().isEmpty().withMessage("La imagen del producto es obligatoria."),
    check("name").not().isEmpty().withMessage("El nombre del producto es obligatorio."),
    check("price").not().isEmpty().withMessage("El precio del producto es obligatorio.")
] , productController.registerProduct);

//DELETE: BORRAR DOCUMENTO

router.delete("/delete/:id", productController.deleteProduct);

//UPDATE: ACTUALIZAR DOCUMENTO

router.put("/update/:id", productController.updateProduct);



module.exports = router;
