const controller = {};

controller.getById= async (model, id) => {
   return  await model.findByPk(id);
};

controller.getAll = async (model) => {
    return await model.findAll(where);
};

controller.save = async (model, objeto) =>{
    try{

    return await model.create(objeto);
    } catch (error) {
        console.log(error);
    }
};

controller.edit = async (model, objeto, id) =>{
    try{
    await model.update(objeto, { where: { id } });
        
        return await controller.getById(model, id);
    } catch(error){
        console.log(error);
    }
};

controller.remove = async (model,  id) =>{
    try{
    return await model.destroy({ where: { id } });
    } catch(error){
        console.log(error);
    }
};

module.exports = controller;