# express 

1. 创建
```
   const app = express();
   app.listen()
```

2. router
```
    const router = express.Router();
    router.get()
    router.post()
    app.use("/user",  router)  
```

3. 静态服务
```
    app.use(express.static(__dirname+"/public"))
```