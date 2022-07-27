const { response } = require("express");

const getEvents = (req, res = response) => {
  //correct response
  res.status(200).json({
    ok: true,
    msg: "get events",
  });
};

const newEvent = (req, res = response) => {
  //correct response
  res.status(201).json({
    ok: true,
    msg: "new event",
  });
};

const updateEvent = (req, res = response) => {
  //correct response
  res.status(200).json({
    ok: true,
    msg: "update event",
  });
};

const deleteEvent = (req, res = response) => {
  //correct response
  res.status(200).json({
    ok: true,
    msg: "delete event",
  });
};

module.exports = {
  getEvents,
  newEvent,
  updateEvent,
  deleteEvent,
};
