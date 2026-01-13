const mongoose = require('mongoose');
const Internship = require('./models/Internship');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/tech-internship-hub';

mongoose.connect(MONGODB_URI)
    .then(() => console.log('✅ Connected to MongoDB for Seeding'))
    .catch(err => {
        console.error('❌ MongoDB Connection Error:', err);
        process.exit(1);
    });

const importData = async () => {
    try {
        // Read JSON file
        const dataPath = path.join(__dirname, '../src/data/internships.json');
        const rawData = fs.readFileSync(dataPath, 'utf-8');
        const internships = JSON.parse(rawData);

        // Clear existing data
        await Internship.deleteMany();
        console.log('🗑️  Cleared existing data');

        // Insert new data
        await Internship.insertMany(internships);
        console.log(`🌱 Successfully imported ${internships.length} internships!`);

        process.exit();
    } catch (error) {
        console.error('❌ Error with data import:', error);
        process.exit(1);
    }
};

importData();
