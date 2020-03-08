var express =require('express');
var router = express.Router();
var userModel	= require.main.require('./models/user-model');

router.get('/',function(req,res){
    if(req.cookies['email'] != null){
        res.render('update/s_edit.ejs');
    }else{
        res.redirect('/logout');    
    }
    
    
});

router.post('/',function(req,res){

    var student_data={

        fname: req.body.fname,
        sname: req.body.sname,
        password: req.body.password,
        SPhoneNumber: req.body.SPhoneNumber,
        email: req.cookies['email']

    }

    userModel.update(student_data,function(status){

        if(status){
           
            res.redirect('/home');
        }

        else
        {
            
            res.redirect('update/s_edit.ejs');
        }

    })


});



module.exports = router;