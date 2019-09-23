"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class IndexController {
    index(req, res) {
        res.send('que tall'); //para enviar un msj 
        res.json({ text: 'Api mensaje' }); //enviar un mensaje api
    }
}
exports.indexController = new IndexController();
