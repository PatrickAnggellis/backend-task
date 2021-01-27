const bodyParser = require('body-parser')
const cors = require('cors')

module.exports = app => {
    // Permite interpretar qualquer dado no body
    app.use(bodyParser.json())
    app.use(cors({
        origin: '*'
    }))
}