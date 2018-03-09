const nextRoutes = require('next-routes');

const routes = module.exports = nextRoutes(); // eslint-disable-line

const APP_ROUTES = [
  {
    page: 'index',
    pattern: '/',
  },
  {
    page: 'About',
    pattern: '/about',
  },
  {
    page: 'movie/List',
    pattern: '/movie/list',
  },
  {
    page: 'movie/Description',
    pattern: '/movie/:id',
  },
];

APP_ROUTES.forEach(route => routes.add(route));
