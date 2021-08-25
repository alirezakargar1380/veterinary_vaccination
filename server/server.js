const app = require("./app")
const log = require("./app/utils/log.utility")

const PORT = process.env.APP_PORT || 4999

app.listen(PORT, () => {
  log.info(`app is running on port ${PORT}`)
})