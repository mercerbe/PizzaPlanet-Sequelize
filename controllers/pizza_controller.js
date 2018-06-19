//dependencies
const express = require('express');
//router
const router = express.Router();
const models = require('../models');


//sequelize
const sequelizeConnection = models.sequelize;
sequelizeConnection.sync();

//++++++++++++++++++++controller routes +++++++++++++++++++++//

//main redirect
router.get('/', (req, res) => {
  res.redirect('/index');
})

//render all
router.get('/index', (req, res) => {
  models.Pizza.findAll({})
    .then((data) => {
      let hbObj = { Pizza: data };
      res.render('index', hbObj);
    })
})

//create new pizza
router.post('/pizza/create', (req, res) => {
  models.Pizza.create(
    {
      pizza_name: req.body.pizza_name,
      devoured: false
    }
  )
    .then(() => {
      res.redirect('/index'); //after create pizza, reload index page
    })
})

//devour pizza
router.post('/pizza/devour/:id', (req, res) => {
  models.Pizza.findOne(
    {
      where: {id: req.params.id}
    }
  )
    .then((devoured) => {
      devoured.update(
        {
          devoured: true
        }
      )
    })
      .then(() => {
        res.redirect('/index');
      })
})

module.exports = router;
