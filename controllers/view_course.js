var express =require('express');
var router = express.Router();
var userModel	= require.main.require('./models/user-model');

// router.get('*', function(req, res, next){
// 	if(req.cookies['email'] == null){
// 		res.redirect('/logout');
// 	}else{
// 		next();
// 	}
// });




router.get('/', function(req, res){	
	if(req.cookies['email'] != null){
		userModel.courseInfo (req.cookies['email'], function(results){
			console.log(results);
			console.log('data shows');
			res.render('view_course/s_view_course.ejs', {results: results});
		});
	}else{
		res.redirect('/logout');
	}
});






module.exports = router;