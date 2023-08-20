const HeadquarterController = require('../../mission_manager/v1/controllers/headquarter_controller');
const ForceController = require('../../mission_manager/v1/controllers/force_controller');
const SoldierController = require('../../mission_manager/v1/controllers/soldier_controller');


module.exports = router => {
  // Headquarter routes
  router.get('/v1/headquarters', HeadquarterController.index);
  router.get('/v1/headquarters/:id', HeadquarterController.show);
  router.post('/v1/headquarters', HeadquarterController.create);
  router.put('/v1/headquarters/:id', HeadquarterController.update);
  router.delete('/v1/headquarters/:id', HeadquarterController.delete);

  // Force routes
  router.get('/v1/forces', ForceController.index);
  router.get('/v1/forces/:id', ForceController.show);
  router.post('/v1/forces', ForceController.create);
  router.put('/v1/forces/:id', ForceController.update);
  router.delete('/v1/forces/:id', ForceController.delete);

  // Soldier routes
  router.get('/v1/soldiers', SoldierController.index);
  router.get('/v1/soldiers/:id', SoldierController.show);
  router.post('/v1/soldiers', SoldierController.create);
  router.put('/v1/soldiers/:id', SoldierController.update);
  router.delete('/v1/soldiers/:id', SoldierController.delete);

  router.get("/v1/check", (req, res) => {
    res.status(200).send({
      success: true,
      message: "V1 route contacted"
    });
  });

}

