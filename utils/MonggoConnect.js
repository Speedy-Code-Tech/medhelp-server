import mongoose from "mongoose";
const URL ="mongodb+srv://hagupitsalenjohnjester:6SpNN2GMBVoMw50N@jester.qxwopi7.mongodb.net/"

mongoose.connect(URL).then(()=>{console.log("Connected");}).catch("failed");
