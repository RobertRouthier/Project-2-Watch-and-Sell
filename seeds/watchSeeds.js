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
    {
        name: 'Rolex GMT Master II',
        model: '126710BLRO',
        created_at: new Date(),
    },
    {
        name: 'Rolex Explorer II',
        model: '226570',
        created_at: new Date(),
    },
    {
        name: 'Rolex Skydweller',
        model: '326934',
        created_at: new Date(),
    },
    {
        name: 'Rolex Oyster Perpetual 41',
        model: '124300',
        created_at: new Date(),
    },
    {
        name: 'Rolex DateJust 41',
        model: '126333',
        created_at: new Date(),
    },
    {
        name: 'Rolex Day-Date 40',
        model: '228236',
        created_at: new Date(),
    },
];

const seedWatch = () => Watch.bulkCreate(watchData);

module.exports = seedWatch;