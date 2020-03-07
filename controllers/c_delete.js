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


	
router.get('/:cid', function(req, res){	
	userModel.getBycId(req.params.cid,function(results){
		res.render('enroll_course/s_enroll_course.ejs', {results: results});
			});
	
});




router.post('/:cid', function(req, res){
    
    
    var courses={

        fname: req.body.fname,
        sname: req.body.sname,
        password: req.body.password,
        SPhoneNumber: req.body.SPhoneNumber,
       

    }


	userModel.delete(req.params.cid, function(status){
		if(status){
			res.redirect('/view_course');
		}else{
			res.redirect('/view_course'+req.params.cid);
		}
	});
})


// router.post('/',function(req,res){

// 	var enrolling={
// 		course_type: req.body.course_type,
// 		batch: req.body.batch,
// 		subject: req.body.subject,
// 		payment: req.body.payment,
// 		time: req.body.time,
// 		day: req.body.day,
// 		email: req.cookies['email']
// 	}

//     userModel.enrolling(enrolling,function(status){
// 			if(status){
// 				console.log('showing status ture')
// 				res.redirect('/view_course');
// 			}else{
// 				res.redirect('/enroll_course');
// 			}

// 	})
// })
	
module.exports = router;