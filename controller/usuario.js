const jwt = require('jsonwebtoken');
const bcrypt = require("bcrypt");
const { Usuario, Nota, Checklist, Tag, sequelize } = require('../models');
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
            const usuario = await Usuario.scope('login').findOne({ where: { email } });
            const senhaCorreta = await bcrypt.compare(senha, usuario.senha);

            if(senhaCorreta) return false;

            return jwt.sign({id: usuario.id}, secret, {
                expiresIn: '24h',
            });
        } catch (error) {
            console.log(error);
            throw new Error(error);
        }
    };

    controller.edit = async ({ usuarioId, titulo = null, descricao = null, checklist = [], tags = []})  => {
        const transaction = await sequelize.transaction();
        try {
            let {dataValues} = await Nota.edit({
                usuarioId, 
                titulo,
                descricao,
            }, 
            {
              transaction,
            }
            );
    
            let notaSalva = dataValues;
            let checklistsSalvos = [];
    
                if(checklist.length > 0) {
            for(let checklist of checklist){
                checklist = {...checklist, notaId: notaSalva.id};
    
    
                const checklistEdit = await Checklist.edit(checklist, {
                   transaction,
                });
                checklistsEdit.push(checklistEdit);
            }
    
            let tagsEdit = [];
        
        }   
            if(tags.length > 0) {
            for(let tag of tag){
                tag = {...tag, notaId: notaSalva.id};
    
                const tagEdit = await Tag.edit(tag,{
                    transaction,
                });
                tagsSalvas = [...tagsEdit, tagEdit];
            }
        }
    
             notaEdit = { ...notaEdit, Checklist: checklistsEdit, tags: tagsEdit};
            await transaction.commit();
    
    
            return notaEdit;
        } catch (error) {
            console.log(error);
            await transaction.rollback();
        }
    }


    module.exports = controller;