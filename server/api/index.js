const app = require("../index")
const { CheckIn } = require("../../db")

app.get("/api/entries", async (req, res, next) => {
  try {
    let entries = await CheckIn.findAll()
    res.send(entries)
  } catch(err){
    next(err)
  }
})

app.post("/api/entry", async (req, res, next) => {
  try {
    await CheckIn.create(req.body)
  } catch(err) {

  }
})
