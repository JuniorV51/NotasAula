const { Checklist } = require('../models');
const controller = {};


controller.getChecklist = async (idchec = null) => {
let result = [];
    if(idchec){
        Checklist.findByPk(id);
       
    } else {
        result = await Checklist.findAll();
    }

    return result;
 };

 controller.save = async (checklist) =>{
     return  await Checklist.create(checklist);
 };


 controller.edit = async (idchec, checklist) =>{
    return await Checklist.update(idchec, checklist);
 }

 controller.edit = async (idchec, checklist) =>{
     await Checklist.update(checklist,{
        where: { idchec },
    });

    return await controller.getChecklist(idchec);
 }

 controller.remove = async (idchec, checklist) =>{
    try{

   return await Checklist.destroy(idchec);
    } catch (error){
        console.log(error);
        throw new Error(error);
    }
};  
 
module.exports = controller;