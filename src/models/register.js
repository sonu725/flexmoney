const mongoose=require("mongoose");
const studentschema=new mongoose.Schema({
    firstname:{
        type: String,
        required: true
    },
    lastname:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    gender:{
        type: String,
        required: true
    },
    phone:{
        type: Number,
        min:10,
        required: true,
        unique: true
    },
    batches:{
        type: String,
        required: true
    },
    age:{
        type: Number,
        required: true
    },
    date:{
        type: Date,
        required: true
    }
});

const Register = new mongoose.model("Register",studentschema);
module.exports=Register;