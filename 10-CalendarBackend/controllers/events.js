const { response } = require("express");
const Event = require("../models/event");

const getEvents = async (req, res = response) => {
  const events = await Event.find().populate("user", "name");

  //correct response
  res.status(200).json({
    ok: true,
    events,
  });
};

const newEvent = async (req, res = response) => {
  const event = new Event(req.body);

  try {
    event.user = req.uid;
    const newEvent = await event.save();

    res.status(201).json({
      ok: true,
      event: newEvent,
    });
  } catch (error) {
    //error response
    res.status(500).json({
      ok: false,
      msg: "error",
    });
  }
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
