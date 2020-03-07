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


	
router.get('/', function(req, res){	
	userModel.enrollCourse(function(results){
		console.log('data shows in dorpdownbox');
		res.render('enroll_course/s_enroll_course.ejs', {results: results});
			});
	
});


router.post('/',function(req,res){
    userModel
})
	
module.exports = router;