const express = require('express');

const router = express.Router();
const Users = require('./userDb')
const Posts = require('../posts/postDb')

router.post('/', (req, res) => {
  // do your magic!
});

router.post('/:id/posts', (req, res) => {
  // do your magic!
});

// GET all users
router.get('/', (req, res) => {
  // do your magic!
  Users.get()
    .then(users => {
      res.status(200).json(users)
    })
    .catch(err => {
      console.log('GET all users err', err)
      res.status(500).json({ errorMessage: 'could not find users' })
    })
});


// GET user by id
router.get('/:id', (req, res) => {
  // do your magic!
  const id = Number(req.params.id)


  Users.getById(id)
    .then(user => {
      if (user.length > 0) {
        res.status(200).json(user)
      } else {
        res.status(400).json({ message: "invalid user id" })
      }
    })
    .catch(err => {
      console.log('GET user by id err', err)
    })
});

router.get('/:id/posts', (req, res) => {
  // do your magic!
  const id = Number(req.params.id)


});

router.delete('/:id', (req, res) => {
  // do your magic!
});

router.put('/:id', (req, res) => {
  // do your magic!
});

//custom middleware

function validateUserId(req, res, next) {
  // do your magic!
}

function validateUser(req, res, next) {
  // do your magic!
}

function validatePost(req, res, next) {
  // do your magic!
}

module.exports = router;
