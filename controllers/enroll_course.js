var express =require('express');
var router = express.Router();
var userModel	= require.main.require('./models/user-model');

// var datetime = new Date();
//     console.log(datetime);


router.get('*', function(req, res, next){
	if(req.cookies['email'] == null){
		res.redirect('/logout');
	}else{
		next();
	}
});


	
router.get('/', function(req, res){	
	userModel.enrollCourse(function(results){
		res.render('enroll_course/s_enroll_course.ejs', {results: results});
			});
	
});


router.post('/',function(req,res){

	var enrolling={
		course_type: req.body.course_type,
		batch: req.body.batch,
		subject: req.body.subject,
		payment: req.body.payment,
		time: req.body.time,
		day: req.body.day,
		email: req.cookies['email']
	}

    userModel.enrolling(enrolling,function(status){
			if(status){
				console.log('showing status ture')
				res.redirect('/view_course');
			}else{
				res.redirect('/enroll_course');
			}

	})
})
	
module.exports = router;