import {PORT, app} from "./config/server.js";
import { validateEmail, validatePassword } from "./utils/utils.js";

app.listen(PORT, ()=>{
    console.log(`Servidor en el puerto: ${PORT}`);
    console.log(`el email es: ${validateEmail("prueba@gmail.com")}`);
    console.log(`la password es: ${validatePassword("Lasmdso29.")}`);
});