const { Usuario } = require('../models');
const controller = {};


controller.getUsuario = async (id = null) => {
let result = [];
    if(id){
        Usuario.findByPk(id);
       
    } else {
        result = await Usuario.findAll();
    }

    return result;
 };

 controller.save = async (usuario) =>{
     return  await Usuario.create(usuario);
 };


 controller.edit = async (id, usuario) =>{
    return await Usuario.update(id, usuario);
 }

 controller.edit = async (id, usuario) =>{
     await Usuario.update(usuario,{
        where: { id },
    });

    return await controller.getUsuario(id);
 }

 controller.remove = async (id, usuario) =>{
    try{

   return await Usuario.destroy(id);
    } catch (error){
        console.log(error);
        throw new Error(error);
    }
};  
 
module.exports = controller;