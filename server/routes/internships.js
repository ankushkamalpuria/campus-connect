import express from 'express';
const router = express.Router();
import Internship from '../models/Internship.js';

// GET all internships
router.get('/', async (req, res) => {
    try {
        const internships = await Internship.find().sort({ id: 1 });
        res.json(internships);
    } catch (err) {
        console.error("Error fetching internships:", err); // Improved error logging
        res.status(500).json({ message: err.message });
    }
});

// GET search/filter (Example implementation, though frontend filter is robust)
router.get('/search', async (req, res) => {
    const { q, category } = req.query;
    let query = {};

    if (category && category !== 'All') {
        query.category = category;
    }

    if (q) {
        query.$or = [
            { company: { $regex: q, $options: 'i' } },
            { role: { $regex: q, $options: 'i' } }
        ];
    }

    try {
        const internships = await Internship.find(query);
        res.json(internships);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

export default router;

