const {urlencoded} = require('express')
const express = require('express')
const app = express()

// call models
const pembayarab = require('../models/index').pembayaran
app.use(express.urlencoded({extended: true}))

// auth
const verifyToken = require('./verifyToken')
app.use(verifyToken)

//change status pembayaran to true
app.post('/:id_pembayaran', (req, res) => {
    let param = {id_pembayaran : req.params.id_pembayaran}
    let status = {status: 1}
    pembayaran.update(status, {where: param})
    .then(result => {
        res.json({
            message: 'status pembayaran diterima',
            data: result
        })
    })
    .catch(error => {
        res.json({
            message: error.message
        })
    })
})

module.exports = app