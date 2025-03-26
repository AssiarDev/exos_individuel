const express = require('express');
const app = express(); 
const port = 3001; 

app.use(express.json());

app.post('/', (req, res) => {
    const {sort_order, values} = req.body;
    res.json({
        sort_order,
        values
    })

})

app.listen(port, () => {
    console.log(`Serveur demarrer sur le port: http://localhost:${port}`)
})