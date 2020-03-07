var express =require('express');
var router = express.Router();
var userModel	= require.main.require('./models/user-model');


router.get('*',function(req,res){
    if(req.cookies['email'] == null){
		res.redirect('/logout');
	}else{
		res.render('msg/msg');
	}
})


router.post('/',function(req,res){

    var msgr={
        msg: req.body.msg,
        email: req.cookies['email'], 
    }


    userModel.insert_msg(msgr,function(status){
		if(status){
			res.redirect('/msg');
		}
		else{
            res.redirect('/msg');
		}
    })
    
})



module.exports = router;