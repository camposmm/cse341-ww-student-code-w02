/**
 * @swagger
 * /api/temples:
 *   post:
 *     tags:
 *       - Temples
 *     description: Create a new temple
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/definitions/Temple'
 */

const express = require('express');
const router = express.Router();
const Temple = require('../models/temple');

// GET all temples
router.get('/', async (req, res) => {
  const temples = await Temple.find();
  res.json({ temples });
});

// GET temple by ID
router.get('/:id', async (req, res) => {
  const temple = await Temple.findById(req.params.id);
  temple ? res.json(temple) : res.status(404).send('Temple not found');
});

// POST new temple
router.post('/', async (req, res) => {
  const temple = new Temple(req.body);
  await temple.save();
  res.status(201).json(temple);
});

// PUT update temple
router.put('/:id', async (req, res) => {
  const updated = await Temple.findByIdAndUpdate(req.params.id, req.body, { new: true });
  updated ? res.json(updated) : res.status(404).send('Temple not found');
});

// DELETE temple
router.delete('/:id', async (req, res) => {
  const deleted = await Temple.findByIdAndDelete(req.params.id);
  deleted ? res.json({ message: 'Deleted successfully' }) : res.status(404).send('Not found');
});

module.exports = router;