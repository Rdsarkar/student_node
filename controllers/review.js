var express =require('express');
var router = express.Router();
var userModel	= require.main.require('./models/user-model');


router.get('*',function(req,res,next){
    if(req.cookies['email'] == null){
		res.redirect('/logout');
	}else{
		next();
	}
})


router.get('/',function(req,res){
    if(req.cookies['email'] == null){
		res.redirect('/logout');
	}else{
		res.render('review/s_review');
	}
})


router.post('/',function(req,res){

    var review={
        review: req.body.review,
        email: req.cookies['email'], 
    }


    userModel.insert_review(review,function(status){
		if(status){
			res.redirect('/review');
		}
		else{
            res.redirect('/review');
		}
    })
    
})



module.exports = router;