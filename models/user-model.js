var db = require('./db');

module.exports= {
	
	
	studentInsert: function(student_data,callback){
        var sql = "insert into studentreg values (?,?,?,?,?,?,?,?,?)";
        db.execute(sql, [null, student_data.fname, student_data.sname, student_data.email, student_data.password, student_data.SPhoneNumber, student_data.pname, student_data.PPhoneNumber, student_data.Pemail],function(status){
            if(status){
                callback(true);
            }
            else{
                callback(false);
            }
        });
    },

    getInfoStudent: function(email, callback){
        var sql = "select * from studentreg where semail = ?";
        db.getResults(sql, [email],function(results){
            if(results){
                callback(results);
               
            }
            else{
                callback([]);

            }
        });
        
    },

	
	
	studentLogin: function(student_data,callback){

        var sql = "select * from studentreg where semail=? and spass=?";
            db.getResults(sql, [student_data.email, student_data.password], function(result){
                if(result.length > 0){
                    callback(true);
                }
                else{
                    callback(false);
                }
            });

    },
    
    update: function(student_data,callback){

        var sql = "update studentreg set sname=?, sinstitution=?, spass=?, sphone=? where semail=?";
        db.execute(sql, [student_data.fname, student_data.sname, student_data.password, student_data.SPhoneNumber, student_data.email], function(results){
            if(results){
                callback(true);
            }
            else{ 
                callback(false);
            }
        });
    },
    
    

   
    enrollCourse: function(callback){
        var sql = "select * from choosecourse";
        db.getResults(sql,null,function(results){
            if(results.length > 0){
                callback(results);
                console.log(results);

                
            }
            else{

                console.log('help!!');
                callback([]);
    
            }
        });
        
    },



    enrolling:function(enrolling,callback){

        var sql="insert into courses values (?,?,?,?,?,?,?,?)";
            db.execute(sql,[null,enrolling.course_type, enrolling.batch, enrolling.subject, enrolling.payment, enrolling.time, enrolling.day, enrolling.email],function(status){
                if(status){

                    console.log(enrolling);
                    callback(true);
                }
                else{
                    console.log('not going');
                    callback(false);
                }

            })






    },


    courseInfo:function(email, callback){
        var sql = "select * from courses where semail= ?";
	    db.getResults(sql, [email],function(results){
		if(results){
			callback(results);
			console.log(results);
			
		}
		else{
			callback([]);

		}
	});


    
    },



    noticeInfo:function(email, callback){
        var sql = "select * from notice where semail= ?";
	    db.getResults(sql, [email],function(results){
		if(results){
			callback(results);
			console.log(results);		   
		}
		else{
			callback([]);

		}
	});

    },

    insert_msg:function(msgr,callback){

        var sql="insert into msg values (?,?,?)";
            db.execute(sql,[null,msgr.msg,msgr.email],function(status){
                if(status){

                    console.log(msgr);
                    callback(true);
                }
                else{
                    console.log('not going');
                    callback(false);
                }

            })


    },

    courseDelete: function(id, callback){
		var sql = "delete from courses where cid=?";
		db.execute(sql, [id.id], function(status){
			if(status){
				callback(true);
			}else{
                console.log('hoi nai');
				callback(false);
			}
		});
	},



	
}
