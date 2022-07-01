const { Watch } = require('../models');

const watchData = [
    {
        name: 'Rolex Submariner',
        model: '126600LN',
        created_at: new Date(),
    },
    // {
    //     name: 'Rolex Submariner',
    //     model: '126600LN',
    //     price: '$20,000',
    //     condition: 'Good',
    //     location: 'USA',
    //     created_at: new Date(),
    // },
    // {
    //     name: 'Rolex Submariner',
    //     model: '126600LN',
    //     price: '$20,000',
    //     condition: 'Good',
    //     location: 'USA',
    //     created_at: new Date(),
    // },
    // {
    //     name: 'Rolex Submariner',
    //     model: '126600LN',
    //     price: '$20,000',
    //     condition: 'Good',
    //     location: 'USA',
    //     created_at: new Date(),
    // },
    // {
    //     name: 'Rolex Submariner',
    //     model: '126600LN',
    //     price: '$20,000',
    //     condition: 'Good',
    //     location: 'USA',
    //     created_at: new Date(),
    // },
];

const seedWatch = () => Watch.bulkCreate(watchData);

module.exports = seedWatch;