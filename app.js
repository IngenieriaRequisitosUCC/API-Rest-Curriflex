const {PORT, app} = require("./config/server.js");
const {router: userRouter} = require("./routes/user.routes.js");

app.use('/user', userRouter);

app.listen(PORT, ()=>{
    console.log(`Servidor en el puerto: ${PORT}`);
});