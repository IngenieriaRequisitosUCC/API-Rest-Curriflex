import {PORT, app} from "./config/server.js";
import {router as userRouter} from "./routes/user.routes.js";

app.use('/user', userRouter);

app.listen(PORT, ()=>{
    console.log(`Servidor en el puerto: ${PORT}`);
});