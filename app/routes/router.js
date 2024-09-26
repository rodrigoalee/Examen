let express = require('express');
let router = express.Router();
    const usuarioController = require('../controllers/usuario.controller.js');
    const proyectoController = require('../controllers/proyecto.controller.js');
    const tareaController = require('../controllers/tarea.controller.js');

    router.post('/api/usuarios/create', usuarioController.create);
    router.get('/api/usuarios', usuarioController.retrieveAllUsuarios);
    router.get('/api/usuarios/:id_usuario', usuarioController.getUsuarioById);
    router.put('/api/usuarios/:id_usuario', usuarioController.updateById);
    router.delete('/api/usuarios/:id_usuario', usuarioController.deleteById);

    router.post('/api/proyectos/create', proyectoController.create);
    router.get('/api/proyectos', proyectoController.retrieveAllProyectos);
    router.get('/api/proyectos/:id_proyecto', proyectoController.getProyectoById);
    router.put('/api/proyectos/:id_proyecto', proyectoController.updateById);
    router.delete('/api/proyectos/:id_proyecto', proyectoController.deleteById);

    router.post('/api/tareas/create', tareaController.create);
    router.get('/api/tareas', tareaController.retrieveAllTareas);
    router.get('/api/tareas/:id_tarea', tareaController.getTareaById);
    router.put('/api/tareas/:id_tarea', tareaController.updateById);
    router.delete('/api/tareas/:id_tarea', tareaController.deleteById);
    module.exports = router;
