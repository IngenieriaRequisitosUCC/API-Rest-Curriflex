const {PORT, app} = require("./config/server.js");
const {router: userRouter} = require("./routes/user.routes.js");
const { validateEmail, validatePassword } = require("./utils/utils.js");

app.use('/user', userRouter);

app.listen(PORT, ()=>{
    console.log(`Servidor en el puerto: ${PORT}`);
    console.log(`el email es: ${validateEmail("prueba@gmail.com")}`);
    console.log(`la password es: ${validatePassword("Lasmdso29.")}`);
});