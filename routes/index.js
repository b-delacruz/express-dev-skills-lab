import { Router } from 'express'

const router = Router()

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { 
    title: 'Welcome (:',
    time: req.time, 
  })
})

router.get('/thanks', function(req, res) {
  res.render('index', { title: 'Thanks :) ' })
})


export { 
  router
}
