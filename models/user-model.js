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
        var sql = "update studentreg set semail=?, spass=?, sphone=? where sid=? ";
        db.execute(sql, [student_data.email, student_data.password, student_data.SPhoneNumber,student_data.sid ], function(result){
            if(result){
                callback(ture);
            }
            else{
                callback(false);
            }
        });
    },
    
    
	
	
	
	
	
}
