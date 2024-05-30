import mongoose from "mongoose";

export  const connectDB = async () =>{
    await mongoose.connect('mongodb+srv://faharkhaan:evolution@cluster0.vyds9bc.mongodb.net/food-delivery-app ').then(()=>console.log("DB Connected")); 
}