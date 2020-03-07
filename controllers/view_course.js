var express =require('express');
var router = express.Router();
var userModel	= require.main.require('./models/user-model');



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

router.get('/delete/:id',function(req,res){

    var id={id:req.params.id};

    userModel.courseDelete(id, function(status){
        if(status){

			console.log('delete homona');
           
           res.redirect('/view_course');
       }else{
           res.send('/view_course');
       }
   });




});






module.exports = router;