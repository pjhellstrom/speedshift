const router = require("express").Router();
const shiftController = require("../../controllers/shiftController");

// Matches with "/employee"  get all avaliavle shifts
router
  .route("/employee")
  .get(shiftController.findAll)

// Matches with "/employee/:id" find all emplyee's shift
router
  .route("/employee/shift/:id")
  .get(shiftController.findById)


// Matches with "/manager"  get all shifts

router
.route("/manager")
.get(shiftController.findAll)

// Matches with "/manager/addshift"  create a shift

router
.route("/manager/addshift")
.post(shiftController.create)

// Matches with "/manager/addemployee"  create a employee
router
.route("/manager/addemployee")
.post(userController.create)

// Matches with "/manager/:id" update the capacity of on shift
.route("/manager/shift/:id")
.update(shiftController.findById)

// Matches with "/manager/:id" delete user
.route("/manager/deleteuser/:id")
.delete(userController.findById)

// Matches with "/manager/:id" delete shift
.route("/manager/deleteshift/:id")
.delete(shiftController.findById)

module.exports = router;