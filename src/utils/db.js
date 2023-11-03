import mongoose from "mongoose";

const connect = async () => {
  
  try {
    // await mongoose.connect("mongodb+srv://lamadev:lamadev@cluster0.hyimmin.mongodb.net/test");
    await mongoose.connect(process.env.MONGO);
    
  } catch (error) {
    throw new Error("Connection failed!");
  }
};

export default connect;