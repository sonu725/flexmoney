const mongoose=require("mongoose");
mongoose.set('strictQuery', true);
mongoose.connect("mongodb://localhost:27017/yogaregistrations", {
}).then(()=>console.log(`connection successful`))
.catch((e)=>console.log(e));