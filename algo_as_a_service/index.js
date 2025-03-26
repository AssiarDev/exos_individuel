import express from 'express';
import bubble  from './bubble.js';
import 'dotenv/config'

const app = express(); 
const port = process.env.PORT; 

app.use(express.json());

app.post('/', (req, res) => {
    const {sort_order, values} = req.body;
    const bubbleValues = bubble(values);
    res.json({
        sort_order,
        bubbleValues
    })

})

app.listen(port, () => {
    console.log(`Serveur demarrer sur le port: http://localhost:${port}`)
})