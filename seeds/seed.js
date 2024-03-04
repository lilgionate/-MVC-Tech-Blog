// Add requirments for this code block
const sequelize = require('../config/connection');
const { User, Post, Comment } = require('../models');
const userData = require('./userData.json');
const postData = require('./postData.json');
const commentData = require('./commentData.json');

// Seed all 3 tables within th DB
const seedDatabase = async () => {
    await sequelize.sync({ force: true });
    const users = await User.bulkCreate(userData, {
        indivdualHooks: true,
        returning: true,
    });

    const posts = await Post.bulkCreate(postData, {
        indivdualHooks: true,
        returning: true,
    });

    const comment = await Comment.bulkCreate(commentData, {
        indivdualHooks: true,
        returning: true,
    });

    process.exit(0);
};

seedDatabase();
