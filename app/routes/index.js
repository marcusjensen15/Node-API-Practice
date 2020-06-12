// index.js is our master route file. we bring all routes togeather here

const noteRoutes = require('./note_routes');

module.exports = function(app, db){
  noteRoutes(app,db);
}
