import express from 'express';

const app = express()
const port = process.env.PORT || 5001;

app.get('/', (req, res) => {
    console.log(`${req.ip} is asking for hello`)
    res.send('Here is some hello for you')
})
app.get('/water', (req, res) => {
    console.log(`${req.ip} is asking for water`)
    res.send('Here is some water for you')
})
app.get('/food', (req, res) => {
    console.log(`${req.ip} is asking for food`)
    res.send('Here is some food for you')
})
//  172.16.19.78:3000/water

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})