const nextRoutes = require('next-routes');

const routes = module.exports = nextRoutes(); // eslint-disable-line

const APP_ROUTES = [
  {
    page: 'index',
    pattern: '/',
  },
  {
    page: 'about',
    pattern: '/about',
  },
  {
    page: 'movie',
    pattern: '/movie/:id',
  },
];

APP_ROUTES.forEach(route => routes.add(route));
