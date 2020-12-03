const {Router} = require('express');
const routes = require('./controller');
const router = Router();




//Camara, leds, estado test

router.post('/error',routes.error)

router.post('/ledOn',routes.ledOn)

router.post('/ledConnected',routes.ledConnected)

router.post('/cameraOn',routes.cameraOn)

router.post('/cameraConnected',routes.cameraConnected)

router.post('/testComplited',routes.testComplited)

router.post('/videoCompleted',routes.videoComplited)

router.get('/deleteFromList',routes.deleteFromList)

// router.post('/bright',routes.sendBright)

// router.post('/gain',routes.sendGain)

router.post('/progress',routes.sendProgress)

module.exports = router;