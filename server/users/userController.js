var db = require('../db'),
    jwt  = require('jwt-simple');

module.exports = {
  signin: function (req, res, next) {
    var username = req.body.email,
        password = req.body.password;
    // console.log("WHERE AM I")
    db.User.find({ where: {username: username, password : password } })
      .success(function(foundUser) {
        if (foundUser) {
          var user_id = foundUser.dataValues.id;
          var token = jwt.encode(foundUser, 'secret');
          res.json({token: token, user_id : user_id});
        } else {
          console.log("NO USER FOUND")
          return next(new Error('NO USER FOUND'));
        }
    });

    // var findUser = Q.nbind(User.findOne, User);
    // findUser({username: username})
    //   .then(function (user) {
    //     if (!user) {
    //       next(new Error('User does not exist'));
    //     } else {
    //       return user.comparePasswords(password)
    //         .then(function(foundUser) {
    //           if (foundUser) {
    //             var token = jwt.encode(user, 'secret');
    //             res.json({token: token});
    //           } else {
    //             return next(new Error('No user'));
    //           }
    //         });
    //     }
    //   })
    //   .fail(function (error) {
    //     next(error);
    //   });
  },

  signup: function (req, res, next) {
    db.User.create({
      username: req.body.email,
      password: req.body.password
    }).complete(function(err, results){
      console.log(results)
      var user_id = results.dataValues.id;
          var token = jwt.encode(foundUser, 'secret');
          res.json({token: token, user_id : user_id});

      res.sendStatus(201);
    });




    //     create,
    //     newUser;

    // var findOne = Q.nbind(User.findOne, User);

    // // check to see if user already exists
    // findOne({username: username})
    //   .then(function(user) {
    //     if (user) {
    //       next(new Error('User already exist!'));
    //     } else {
    //       // make a new user if not one
    //       create = Q.nbind(User.create, User);
    //       newUser = {
    //         username: username,
    //         password: password
    //       };
    //       return create(newUser);
    //     }
    //   })
    //   .then(function (user) {
    //     // create token to send back for auth
    //     var token = jwt.encode(user, 'secret');
    //     res.json({token: token});
    //   })
    //   .fail(function (error) {
    //     next(error);
    //   });
  },

  checkAuth: function (req, res, next) {
    // checking to see if the user is authenticated
    // grab the token in the header is any
    // then decode the token, which we end up being the user object
    // check to see if that user exists in the database
    var token = req.headers['x-access-token'];
    if (!token) {
      next(new Error('No token'));
    } else {
      var user = jwt.decode(token, 'secret');

      db.User.find({ where: {username: user.username} })
        .success(function(foundUser) {
          if (foundUser) {
            res.send(200);
          } else {
            res.send(401);
          }
      });

      // var findUser = Q.nbind(User.findOne, User);
      // findUser({username: user.username})
      //   .then(function (foundUser) {
      //     if (foundUser) {
      //       res.send(200);
      //     } else {
      //       res.send(401);
      //     }
      //   })
      //   .fail(function (error) {
      //     next(error);
      //   });
    }
  }
};