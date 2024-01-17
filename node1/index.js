
import connectdb from './config/db.js';
import dotenv from 'dotenv';
import express  from 'express';
import cors from 'cors';
import apiRoutes from './routes/apiRoutes.js'



const app = express()

//dotenv config
dotenv.config();

//cors middleware
app.use(cors())

app.use(express.json()) //this middleware is used for post api 

const PORT = process.env.PORT;

connectdb();

app.use("/api/v1/", apiRoutes)

// app.get("/", (req,res) => {
//     res.send("express server is running");
//   });

// app.post('/add',(req,res)=>{
//     const {name,email,city} =req.body;
//     res.status(200).send({
//         success:true,
//         message:"user enter successfully",
//         user:{
//             name:name,
//             email:email,
//             city:city,
//         }
//     })
// })


app.listen(PORT, () => console.log(`server is running at ${PORT}`));

