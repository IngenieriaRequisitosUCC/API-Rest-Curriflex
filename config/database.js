import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config("../");
const USER = process.env.USER;
const PASS = process.env.PASS;
const DB = process.env.DB;

const URL_DB = `mongodb+srv://${USER}:${PASS}@curriflex-api.lckr6ym.mongodb.net/${DB}?retryWrites=true&w=majority`;

async function connectToDatabase() {
    await mongoose.connect(URL_DB);
}

connectToDatabase()
    .then(()=>console.log(`Connected to ${DB}`))
    .catch(err => console.log(err));