var express =require('express');
var router = express.Router();
var userModel	= require.main.require('./models/user-model');



router.get('*', function(req, res, next){
	if(req.cookies['email'] == null){
		res.redirect('/logout');
	}else{
		next();
	}
});


router.get('/',function(req,res){

	userModel.getInfoStudent(req.cookies['email'], function(results){
		if(results.length != 0){
			res.render('home/student_dashboard',{results: results});
		}
		else{
		}
		});
	});


	//logout
	router.get('/', function(req, res){	
		if(req.cookies['username'] != null){
			userModel.getByUname(req.cookies['username'], function(result){
				res.render('home/index', {user: result});
			});
		}else{
			res.redirect('/logout');
		}
	});

// router.post('/', function(req, res){

	

// })


module.exports = router;