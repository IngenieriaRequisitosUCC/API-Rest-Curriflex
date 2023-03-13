import {PORT, app} from "./config/server.js";

app.listen(PORT, ()=>{
    console.log(`Servidor en el puerto: ${PORT}`);
});