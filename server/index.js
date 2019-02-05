const express = require("express")
const app = express()
const { syncAndSeed } = require("../db")
const path = require("path")


const PORT = "3000" || process.env.PORT

app.use("/dist", express.static(path.join(__dirname, "..", "dist")))

app.get("/", (req, res, next) => {
  res.sendFile(path.join(__dirname, "..", "public","index.html"))
})

app.listen(PORT, ()=> {
  console.log(`listening on port ${PORT}`)
  syncAndSeed()
})
