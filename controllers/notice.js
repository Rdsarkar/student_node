var express =require('express');
var router = express.Router();
var userModel	= require.main.require('./models/user-model');

// router.get('/',function(req,res){
//     res.render('notice/s_view_notice.ejs');
// });


router.get('/', function(req, res){	
	if(req.cookies['email'] != null){
		userModel.noticeInfo (req.cookies['email'], function(results){
			console.log(results);
			console.log('data shows');
			res.render('notice/s_view_notice.ejs', {results: results});
		});
	}else{
		res.redirect('/logout');
	}
});




module.exports = router;