const User = require('./User');
const CrossSet = require('./CrossSet');

User.hasMany(CrossSet, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

CrossSet.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Project };
