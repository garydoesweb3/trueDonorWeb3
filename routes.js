const routes = require('next-routes')();

routes
    .add('/campaigns/new', '/campaigns/new')   // keeps address from giving 404 err, must be adde before "wildcard" route
    .add('/campaigns/:address', '/campaigns/show')
    .add('/campaigns/:address/requests', '/campaigns/requests/index')
    .add('/campaigns/:address/requests/new', '/campaigns/requests/new');

module.exports = routes;