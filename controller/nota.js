const { Nota } = require('../models');
const controller = {};


controller.getNota = async (Notaid = null) => {
let result = [];
    if(Notaid){
        Nota.findByPk(Notaid);
       
    } else {
        result = await Nota.findAll();
    }

    return result;
 };

 controller.save = async (nota) =>{
     return  await Usuario.create(nota);
 };


 controller.edit = async (Notaid, nota) =>{
    return await Nota.update(Notaid, nota);
 }

 controller.edit = async (Notaid, nota) =>{
     await Usuario.update(nota,{
        where: { Notaid },
    });

    return await controller.getNota(Notaid);
 }

 controller.remove = async (Notaid, nota) =>{
    try{

   return await Nota.destroy(Notaid);
    } catch (error){
        console.log(error);
        throw new Error(error);
    }
};  
 
module.exports = controller;