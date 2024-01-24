const express = require("express")
const app = express()
const port = 3000
const offices = [
    {
        id: 1,
        number: "100"
    },
    {
        id: 2,
        number: "200"
    },
    {
        id: 3,
        number: "300"
    },
    {
        id: 4,
        number: "400"
    }
]


app.get('/', (req, res) => {
    res.set({
        "Content-Type": "application/json",
    })
    res.json(JSON.stringify(offices))
})

app.listen(port, () => {
    console.log(`Мы начали прослушивать ${port} порт.`)
})
