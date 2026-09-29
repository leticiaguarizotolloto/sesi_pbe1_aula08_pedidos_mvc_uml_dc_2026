const express = require("express")
const router = express.Router()

const cliente = require("./controllers/cliente")
const pedido = require("./controllers/pedido")



const rotaInicial = (req, res) => {
    res.json("Pedidos MVC respondendo")
}
router.get('/',rotaInicial)
router.get('/clientes',Cliente.listar)
router.get('/pedidos',pedido.listar)

module.exports = router