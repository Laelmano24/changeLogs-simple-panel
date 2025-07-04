import express from "express"
import cookieParser from "cookie-parser"
import axios from "axios"
import { join, dirname } from "path"
import { fileURLToPath } from "url"
import "dotenv/config"

const __dirname = dirname(fileURLToPath(import.meta.url))
const { PORT, PASSWORD, WEBHOOKURL } = process.env
const app = express()

function verifyUser(req, res, next) {
  if (req.path.startsWith("/login")) return next()
  const { password } = req.cookies
  if (!password) return res.redirect("/login")
  if (password !== PASSWORD) {
    res.setHeader("Content-Type", "video/mp4")
    return res.sendFile(join(__dirname, "assets", "KKKKK.mp4"))
  }
  next()
}

app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
app.use("/", verifyUser, express.static(join(__dirname, "public")))

app.post("/", verifyUser, async (req, res) => {
  const { title, content, pingAll } = req.body
  if (!title || !content) return res.status(401).send("the information does not exist")

  const template = `
${pingAll == "on" ? "||@everyone||" : ""}
## ${title}:
ㅤ
\`\`\`
${content}
\`\`\`
ㅤ
`

  await axios.post(WEBHOOKURL, { content: template })

  return res.redirect("/")
})

app.post("/login", (req, res) => {
  const { password } = req.body
  if (!password) return res.send("Something went wrong")

  res.cookie('password', password, {
    maxAge: 1000 * 60 * 60 * 24 * 30,
    httpOnly: true
  })

  return res.redirect("/")
})

app.get("/login", (req, res) => {
  return res.status(200).sendFile(join(__dirname, "assets", "login.html"))
})

app.listen(PORT || 3000, () => {
  console.log("Server on!")
})