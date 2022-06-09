const router = require('express').Router()
const db = require('../models')


router.get('/new', (req,res) => {
    res.render('places/new')
})


//Read Index
router.get('/', (req,res) => {
    db.Place.find()
    .then((places) => {
        res.render('places/index', { places })
    })
    .catch(err => {
        console.log(err)
        res.render('error404')
    })
})

//Read one by id
router.get('/:id', (req, res) => {
  db.Place.findById(req.params.id)
  .populate('comments')
  .then(place => {
      console.log(place.comments)
      res.render('places/show', { place })
  })
  .catch(err => {
      console.log('err', err)
      res.render('error404')
  })
})

//Create one POST
router.post('/', (req, res) => {
    if(!req.body.pic){
        delete req.body['pic']
    }
    db.Place.create(req.body)
    .then(() => {
        res.redirect('/places')
    })
    .catch(err => {
        if (err && err.name == 'ValidationError'){
                let message = 'Validation Error: '
                for (let field in err.errors) {
                    message += `${field} was ${err.errors[field].value}. `
                    message += `${err.errors[field].message} `
                }
                res.render('places/new', { message })
        } else {
            console.log(err)
            res.render('error404')
        }
    })
})

//Update routes
router.get('/:id/edit', (req, res) => {
    res.send('Get edit form stub')
})


router.put('/:id', (req, res) => {
    res.send('PUT /places/:id stub')
})

//Delete routes

router.delete('/:id', (req, res) => {
    res.send('DELETE /places/:id stub')
})

router.post('/:id/rant', (req, res) => {
    res.send('GET /places/:id/rant stub')
})

router.delete('/:id/rant/:rantId', (req, res) => {
    res.send('GET /places/:id/:rantId stub')
})

module.exports = router