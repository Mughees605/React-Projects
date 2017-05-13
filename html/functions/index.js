let functions = require('firebase-functions')
let firebase = require('firebase-admin')
const cors = require('cors')({origin: true})
const config = require('./config.json')

//firebase.initializeApp(functions.config().firebase)
firebase.initializeApp({
  credential: firebase.credential.cert(config),
  databaseURL: 'https://pipeline-ca3e1.firebaseio.com',
})

exports.login = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
    if (req.method === 'POST') {
      if (req.body.token) {
        firebase.auth().createCustomToken(req.body.token).then(customToken => {
          res.status(200).json({'firebaseJWT': customToken})
        })
      } else {
        res.status(400).json({message: 'Token is required'})
      }
    } else {
      res.status(400).json({message: 'Invalid method'})
    }
  })
})
