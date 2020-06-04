const express=require("express");
const bodyParser=require("body-parser");
const cookieParser=require("cookie-parser");

const app =express();
let router=express.Router();
app.use(cookieParser());
app.use(bodyParser.json());

app.use(express.static(__dirname+"/public"));   // 静态服务

app.use("/data",(req,res)=>{    // 也可以使用use来书写路由
	res.send("this is data"); 
})

app.get("/name",(req,res)=>{
	res.send("my name is hejiamin");
})

app.get("/go",(req,res)=>{
	res.redirect(301,"http://www.example.com");
})

app.get("/article",(req,res)=>{
	res.sendFile(__dirname+"/views/article.html")
})

router.get("/",(req,res)=>{
	res.send("user 的根目录");
})
router.get("/name",(req,res)=>{
	res.json({name:"hejiamin",age:22});
})

app.use("/user",router);   // 前置url


app.listen(3000,()=>{
	console.log("server is running on port 3000");
})