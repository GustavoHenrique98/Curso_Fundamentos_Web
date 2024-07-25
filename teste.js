const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.sendFile('treino.html', {root: __dirname});
})

app.listen(3000,()=>{
    console.log(`Servidor rodando em hhtp://localhost:3000/`);
})