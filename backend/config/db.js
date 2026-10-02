// import mongoose from "mongoose";

// export const connectDB = async () =>{
//     await mongoose.connect(
//       "mongodb+srv://samitsankhla_db_user:MF8XWlUW3AOJxn1P@cluster0.zxaqvqh.mongodb.net/RealState",
//     ).then(() =>{
//         console.log("DB CONNECTED")
//     })
// }

import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("DB CONNECTED");
  } catch (err) {
    console.error("DB Connection Error:", err.message);
    process.exit(1);
  }
};



