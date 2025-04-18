const Snack = require("../models/Snack");

const index = async (req, res) => {
  try {
    const snacks = await Snack.getAll();
    res.status(200).json(snacks);
  } catch (err) {
    res.status(500).json({ "error": err.message })
  }
}

const show = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const snack = await Snack.getOneById(id);
    res.status(200).json({data: snack});
  } catch (err) {
    res.status(404).json({ "error": err.message })
  }
}

const getTop = async (req, res) => {
  try {
    const snack = await Snack.getTopSnack();
    res.status(200).json(snack);
  } catch (err) {
    res.status(404).json({ "error": err.message })
  }
}

const create = async (req, res) => {
  try {
    const data = req.body
    const snack = await Snack.create(data);
    res.status(200).json(snack);
  } catch (err) {
    res.status(400).json({ "error": err.message })
  }
}

const update = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const data = req.body;
    const snack = await Snack.getOneById(id);
    const result = await snack.update(data);
    res.status(200).json(result);
  } catch (err) {
    res.status(404).json({ "error": err.message })
  }
}

const destroy = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const snack = await Snack.getOneById(id);
    await snack.destroy();
    res.status(204).end;
  } catch (err) {
    res.status(404).json({ "error": err.message })
  }
}

module.exports = {
  index, show, getTop, create, destroy, update
}
