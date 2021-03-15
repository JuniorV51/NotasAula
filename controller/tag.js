const { Tag } = require('../models');
const controller = {};


controller.getTag = async (idtag = null) => {
let result = [];
    if(idtag){
        Tag.findByPk(idtag);
       
    } else {
        result = await Tag.findAll();
    }

    return result;
 };

 controller.save = async (tag) =>{
     return  await Tag.create(tag);
 };


 controller.edit = async (idtag, tag) =>{
    return await Tag.update(idtag, tag);
 }

 controller.edit = async (idtag, tag) =>{
     await Tag.update(tag,{
        where: { idtag },
    });

    return await controller.getTag(idtag);
 }

 controller.remove = async (idtag, tag) =>{
    try{

   return await Tag.destroy(idtag);
    } catch (error){
        console.log(error);
        throw new Error(error);
    }
};  
 
module.exports = controller;