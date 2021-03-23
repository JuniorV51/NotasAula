const jwt = require('jsonwebtoken');
const { Usuario } = require('../models');
const { secret } = require('../config/seguranca');
const controller = {};


controller.getUsuario = async (id = null) => {
    let result = [];
        if(id){
          result = await Usuario.findByPk(id);
        } else {
          result = await Usuario.findAll();
        }
    
        return result;
     };
    
     controller.save = async (usuario) =>{
         try{
         return  await Usuario.create(usuario);
         } catch (error) {
             throw new Error( error);
         }
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
    
     controller.remove = async (id) =>{
        try{
    
       return await Usuario.destroy(id);
        } catch (error){
            console.log(error);
            throw new Error(error);
        }
    };  
     
    controller.login = async (email, senha ) => {
        try{
            const usuario = await Usuario.findOne({ where: { email } });

            if(usuario.senha != senha) return false;

            return jwt.sign({id: usuario.id}, secret, {
                expiresIn: '24h',
            });
        } catch (error) {
            console.log(error);
            throw new Error(error);
        }
    };


    module.exports = controller;