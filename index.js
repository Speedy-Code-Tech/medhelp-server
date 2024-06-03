import express from 'express'

//UTILS
import './utils/MonggoConnect.js'
const app = express()

app.listen(9000,()=>{console.log("Listening on Port 9000");})