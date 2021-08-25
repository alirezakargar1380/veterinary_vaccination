const app = require("./app")
const log = require("./app/utils/log.utility")

app.listen(4999, () => {
  log.info("app is running on port 4999")
})