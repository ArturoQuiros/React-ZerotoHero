//obtener evens
//  Auth Routes on  /api/events
const { Router, application } = require("express");
const { check } = require("express-validator");
const { validarCampos } = require("../middlewares/auth-validator");
const { validateJWT } = require("../middlewares/jwt-validator");

const router = Router();

//controllers

const {
  getEvents,
  newEvent,
  updateEvent,
  deleteEvent,
} = require("../controllers/events");

//todas tiene que pasar por la validación del JWT
router.get("/", validateJWT, getEvents);
router.post("/", validateJWT, newEvent);
router.put("/:id", validateJWT, updateEvent);
router.delete("/:id", validateJWT, deleteEvent);

module.exports = router;
