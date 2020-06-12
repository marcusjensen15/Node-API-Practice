module.exports = function(app, db) {

  app.post('/notes', (req,res) => {
    //create note here. when the app recieves a post request to the /notes route, it will execute the code below

    //it passes in the req object (the json of the request). the res is the reply.
    console.log(req.body);
    res.send('Hello World');
  })
}
