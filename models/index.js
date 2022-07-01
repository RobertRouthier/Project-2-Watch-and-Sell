// Creating models 
const User = require('./User');
const Watch = require('./Watch');
const Comment = require('./Comment');
const Like = require('./Like');

User.hasMany(Watch, {
    foreignKey: 'user_id'
});

Watch.belongsTo(User, {
    foreignKey: 'user_id',
});

User.belongsToMany(Watch, {
    through: Like,
    as: 'liked_watch',
    foreignKey: 'user_id'
});

Watch.belongsToMany(User, {
    through: Like,
    as: 'liked_watch',
    foreignKey: 'watch_id'
});

Like.belongsTo(User, {
    foreignKey: 'user_id'
});
  
Like.belongsTo(Watch, {
    foreignKey: 'watch_id'
});

User.hasMany(Like, {
    foreignKey: 'user_id'
});
  
Watch.hasMany(Like, {
    foreignKey: 'watch_id'
});

Comment.belongsTo(User, {
    foreignKey: 'user_id'
  });
  
Comment.belongsTo(Watch, {
    foreignKey: 'watch_id'
});

User.hasMany(Comment, {
    foreignKey: 'user_id'
});
  
Watch.hasMany(Comment, {
    foreignKey: 'watch_id'
});

module.exports = {User, Watch, Like, Comment};