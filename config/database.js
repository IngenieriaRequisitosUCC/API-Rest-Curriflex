import mongoose from "mongoose";

const USER = 'root';
const PASS = 'root';
const DB = 'curriflex';

const URL_DB = `mongodb+srv://${USER}:${PASS}@curriflex-api.lckr6ym.mongodb.net/${DB}?retryWrites=true&w=majority`;

async function connectToDatabase() {
    await mongoose.connect(URL_DB);
}

connectToDatabase()
    .then(()=>console.log(`Connected to ${DB}`))
    .catch(err => console.log(err));