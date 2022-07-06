const { Watch } = require('../models');

const watchData = [
    {
        name: 'Rolex Submariner DATE',
        model: '126610LN',
        // Data Truncated ERROR
        // price: '$20,000',
        // condition: 'Good',
        // location: 'USA',
        created_at: new Date(),
    },
    {
        name: 'Rolex Daytona',
        model: '116500LN',
        created_at: new Date(),
    },
   
];

const seedWatch = () => Watch.bulkCreate(watchData);

module.exports = seedWatch;