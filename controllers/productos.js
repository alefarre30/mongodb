const Producto = require("../models/producto");


const productosGet = async (req, res) => {

    try{
        const productos = await Producto.find({});
        res.status(200).json({
            msg: 'GET PRODUCTOS',
            productos
        })
    }catch(err){
        console.log(err);
        return false;
    }

}

const productosPost = async (req, res) => {

    const body = req.body

    try{
        const producto = new Producto(body)
        await producto.save()
        res.status(200).json({
            msg: 'POST PRODUCTO',
            producto
        })
    }catch(err){
        console.log(err);
        return false;
    }

}

const productosPut = async (req, res) => {

    const { id } = req.params;

    try{
        await Producto.updateOne({_id:id}, req.body );
        res.status(200).json({
            msg: 'Put API - PRODUCTOS',
            id
        })
    }catch(err){
        console.log(err);
        return false;
    }

}


const productosDelete = async (req, res) => {

    const { id } = req.params

    const producto = new Producto({_id:id});
    
    try{
        await producto.deleteOne();
        res.status(200).json({
            msg: 'Delete API - PRODUCTO',
            id
        })
    }catch(err){
        console.log(err);
        return false;
    }
}


module.exports = {
    productosGet,
    productosPost,
    productosPut,
    productosDelete
}


