import mongoose from "mongoose";
const URL='mongodb://127.0.0.1:27017/acer'

const connectdb=()=>{
    mongoose.connect(URL)
    console.log('Connected with db successfully')

}

export default connectdb;