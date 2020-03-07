var express =require('express');
var router = express.Router();
var userModel	= require.main.require('./models/user-model');

router.get('/',function(req,res){
    res.render('view_course/s_view_course.ejs');
});





module.exports = router;