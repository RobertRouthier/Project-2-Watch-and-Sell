const express = require('express');
const routes = require('./controllers');
const sequelize = require('./config/connection.js');
const path = require('path');

const helpers = require('./utils/helpers');


const app = express();
const PORT = process.env.PORT || 3001;

// const SequelizeStore = require('connect-session-sequelize')(session.Store);

// // // Import express-session
// // const exphbs = require('express-handlebars');
// // const hbs = exphbs.create({ helpers });
// // const session = require('express-session');

// // Set up sessions
// const sess = {
//   secret: 'watchesonsale',
//   cookie: {
//         // Session will automatically expire in 5 minutes
//         expires: 30000
//   },
//   resave: true,
//   rolling: true,
//   saveUninitialized: true,
//   store: new SequelizeStore({
//     db: sequelize
//   }),
// };

// app.use(session(sess));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, 'public')));

// app.engine('handlebars', hbs.engine);
// app.set('view engine', 'handlebars');

app.use(routes);

// Connection link to db and server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});