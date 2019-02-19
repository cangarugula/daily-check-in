const express = require("express")
const app = express()
const { syncAndSeed, CheckIn } = require("../db")
const path = require("path")


const PORT = "3000" || process.env.PORT

app.use("/dist", express.static(path.join(__dirname, "..", "dist")))

app.use('/public', express.static(path.join(__dirname, "..", "public")))

app.get("/", (req, res, next) => {
  res.sendFile(path.join(__dirname, "..", "public","index.html"))
})


app.get('/api/entries', async (req, res, next) => {
  try {
    let entries = await CheckIn.findAll()
    res.send(entries)
  } catch(err){
    next(err)
  }
})


app.listen(PORT, ()=> {
  console.log(`listening on port ${PORT}`)
  syncAndSeed()
})

module.exports = app
