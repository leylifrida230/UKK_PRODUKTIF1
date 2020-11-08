const express = require("express")
const app = express()

//call router
let pelanggan = require('./router/Pelanggan')
let penggunaan = require('./router/Penggunaan')
let tagihan = require('./router/Tagihan')
let pembayaran = require('./router/Pembayaran')
let admin = require('./router/Admin')
let level = require('./router/Level')
let tarif = require('./router/Tarif')

// use router
app.use('/pelanggan', pelanggan)
app.use('/penggunaan', penggunaan)
app.use('/tagihan', tagihan)
app.use('/pembayaran', pembayaran)
app.use('/admin', admin)
app.use('/level', level)
app.use('/tarif', tarif)


app.listen(8000, () => {
    console.log('ahh mantab')
})