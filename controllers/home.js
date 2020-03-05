var express =require('express');
var router = express.Router();
var userModel	= require.main.require('./models/user-model');



router.get('*', function(req, res, next){
	if(req.cookies['email'] == null){
		res.redirect('/login');
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

// router.post('/', function(req, res){

	

// })


module.exports = router;