const loginRouter = require("../routes/login")
const homeRouter = require("../routes/home")

const route = app => {
    // [GET] /login
    app.use("/login", loginRouter)

    // [GET] /
    app.use("/", homeRouter)
}
module.exports = route
