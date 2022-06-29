// Model Dependancies 
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// Create POST model (Create)
class Watch extends Model {
    static uplike(body, models) {
        return models.Like.create({
            user_id: body.user_id,
            watch_id: body.watch_id
        }).then(() => {
            return Watch.findOne({
                where: {
                    id: body.watch_id
                },
                attributes: [
                    'id',
                    'name',
                    'model',
                    'price',
                    'condition',
                    'location',
                    'user_id',
                    [sequelize.literal('(SELECT COUNT(*) FROM like WHERE watch.id = like.watch_id)'), 'vote_count']
                ]
            });
        });
    } 
}
// Create Columns for POST 
Watch.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        model: {
            type: DataTypes.STRING,
            allowNull: false
        },
        price: {
            type: DataTypes.FLOAT,
            allowNull: true
        },
        condition: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        location: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
              model: 'user',
              key: 'id'
            }
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'watch'
    }
);

module.exports = Watch;