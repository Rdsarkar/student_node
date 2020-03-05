var express =require('express');
var router = express.Router();
var userModel	= require.main.require('./models/user-model');

router.get('/',function(req,res){

    res.render('login/login.ejs');

});

router.post('/', function(req, res){


    var userdata={

        email: req.body.email,
        password: req.body.password

    };

    userModel.studentLogin(userdata,function(status){
        if(status){
            res.cookie('email', req.body.email);
            // console.log("DSFSDFV")
         res.redirect('/home');
        }
        else{
            res.redirect('/login');
            // console.log("False")
        }
    
    })
    

})


module.exports = router;