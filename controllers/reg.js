var express 	= require('express');
var router 		= express.Router();
var userModel	= require.main.require('./models/user-model');



router.get('/',function(req,res){

    res.render('reg/reg');
});


router.post('/',function(req, res){

    var student_data={
       
       fname: req.body.fname,
       sname: req.body.sname,
       email: req.body.email,
       password: req.body.password,
       SPhoneNumber: req.body.SPhoneNumber,
       pname: req.body.pname,
       PPhoneNumber: req.body.PPhoneNumber,
       Pemail: req.body.Pemail,
       
    };


    userModel.studentInsert(student_data,function(status){
        if(status){
            res.render('login/login.ejs');
        }

        else
        {
            res.redirect('reg/reg');
        }
    })


});

module.exports = router;