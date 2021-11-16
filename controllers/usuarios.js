const Usuario = require("../models/usuario");


const usuariosGet = async (req, res) => {

    try{
        const usuarios = await Usuario.find({});
        res.status(200).json({
            msg: 'GET USUARIOS',
            usuarios   
        })
    }catch(err){
        console.log(err);
        return false;
    }

}

const usuariosPost = async (req, res) => {

    const body = req.body

    try{
        const usuario = new Usuario(body)
        await usuario.save()
        res.status(200).json({
            msg: 'POST USUARIOS',
            usuario
        })
    }catch(err){
        console.log(err);
        return false;
    }

}


const usuariosPut = async (req, res) => {

    const { id } = req.params;

    try{
        await Usuario.updateOne({_id:id}, req.body );
        res.status(200).json({
            msg: 'Put API - usuariosPUT',
            id
        })
    }catch(err){
        console.log(err);
        return false;
    }

}


const usuariosDelete = async (req, res) => {

    const { id } = req.params

    const usuario = new Usuario({_id:id});
    
    try{
        await usuario.deleteOne();
        res.status(200).json({
            msg: 'Delete API - usuariosDELETE',
            id
        })
    }catch(err){
        console.log(err);
        return false;
    }
}


module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete
}


