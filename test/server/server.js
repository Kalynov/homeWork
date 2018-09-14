var mysql = require("mysql")
var express = require("express")
var app = express()

var connection = mysql.createConnection({
    host : "localhost",
    user: "root",
    password: "root",
    database:"db1",
    port : "3306"
})

connection.connect(function(err){
    if(!err){
        console.log("Datebase is connected");
    }else{
        console.log("error connecting database"+err);
    }
});


app.get('/list',(req,res)=>{
    var array = [];
    var _obj={};
    var str = "";
    r = connection.query("select userName,email,massange from users",(err,rows,fields)=>{
        if(!err){
            for(var i in rows){
                _obj.userName = rows[i].userName;
                _obj.email = rows[i].email;
                _obj.massange = rows[i].massange;
                array.push(_obj)

                str += "userName: " + rows[i].userName +" eMail:" +rows[i].email + " massenge:" +rows[i].massange + "#"

            }
            console.log(array);
            res.send(array)
        }else{
            console.log("error while performing Query.");
        }
    });
});

app.get('/',(req,res)=>{
    str ="index.html";
    res.sendfile(str);
});
app.get('/logo.svg',(req,res)=>{
    str ="logo.svg";
    res.sendfile(str);
});
app.get('/ellipse.svg',(req,res)=>{
    str ="ellipse.svg";
    res.sendfile(str);
});
app.get('/js',(req,res)=>{
    str ="script.js";
    res.sendfile(str);
});

app.get('/form',(req,res)=>{
    console.log("страница формы обновилась")
    str ="form.html";
    res.sendfile(str);
    
});

app.get('/add',(req,res)=>{
    console.log("Начало выполнения /add!")
    console.log(req.query)
    r = connection.query("insert into users(userName,email,massange) values('"+req.query.userName+"', '"+req.query.email+"', '"+req.query.massange+"')",
    (err,rows,fields)=>{
        if (!err){
            console.log(req.query)
            res.send("ready");
        }else{
            //console.log(r)
            console.log(req.query)
            console.error("error while performing Query.");
        }
    })
});

app.listen(3000,()=>{
    console.log("Example app listening on port 3000!");
});
/* connection.end(); */