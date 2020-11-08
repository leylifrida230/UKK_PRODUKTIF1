const {urlencoded} = require('express')
const express = require("express")
const app = express()
const md5 = require('md5')

//call model 
const admin = require('../models/index').admin
//middleware req body
app.use(express.urlencoded({ extended: true }))

app.get('/', async (req,res) => {
    admin.findAll({
        include: ['level']
    }) //get data
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
        username: req.body.username,
        password: md5(req.body.password),
        nama_admin: req.body.nama_admin,
        id_level: req.body.id_level
    }
    admin.create(data)
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
    let param = { id_admin : req.body.id_admin }
    let data = {
        username: req.body.username,
        password: md5(req.body.password),
        nama_admin: req.body.nama_admin,
        id_level: req.body.id_level
    }
    admin.update(data, {where:param})
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

app.delete('/:id_admin', async (req,res) => {
    let id_admin = req.params.id_admin //variabel
    //object
    let param = {
        id_admin : id_admin
    }

    admin.destroy({ where : param })
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