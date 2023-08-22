const sequelize = require('../config/connection');
const { User, CrossSet } = require('../models');

const userData = require('./userData.json');
const CrossSetData = require('./CrossSetData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  const CrossSets = await CrossSet.bulkCreate(CrossSetData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();
console.log('Seeds Loaded!');
