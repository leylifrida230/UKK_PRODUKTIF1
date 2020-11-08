const {urlencoded} = require('express')
const express = require("express")
const app = express()

//call model tagihan
const tagihan = require('../models/index').tagihan
//middleware req body
app.use(express.urlencoded({ extended: true }))

app.get('/', async (req,res) => {
    tagihan.findAll() //get data
    .then(result => {
        res.json(result)
    })
    .catch(error => {
        res.json({
            message: error.message
        })
    })
})

app.post('/', async (req,res) => {
    let data = {
        id_penggunaan: req.body.id_penggunaan,
        bulan: req.body.bulan,
        tahun: req.body.tahun,
        jumlah_meter: req.body.jumlah_meter,
        status: req.body.status
    }
    tagihan.create(data)
    .then(result => {
        res.json({
            message: 'data inserted',
            data : result
        })
    })
    .catch(error => {
        res.json({
            message: error.message
        })
    })
})

app.put('/', async (req,res) => {
    let param = { id_tagihan : req.body.id_tagihan }
    let data = {
        id_penggunaan: req.body.id_penggunaan,
        bulan: req.body.bulan,
        tahun: req.body.tahun,
        jumlah_meter: req.body.jumlah_meter,
        status: req.body.status
    }
    tagihan.update(data, {where:param})
    .then(result => {
        res.json({
            message : 'data updated',
            data : result
        })
    })
    .catch(error => {
        res.json({
            message: error.message
        })
    })
})

app.delete('/:id_tagihan', async (req,res) => {
    let id_tagihan = req.params.id_tagihan //variabel
    //object
    let param = {
        id_tagihan : id_tagihan
    }

    tagihan.destroy({ where : param })
    .then(result => {
        res.json({
            message : 'data destroyed',
            data : result
        })
    })
    .catch(error => {
        res.json({
            message : error.message
        })
    })
})

module.exports = app