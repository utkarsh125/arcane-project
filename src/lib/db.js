import mongoose from "mongoose";

let isConnected = false;

async function connect() {
  mongoose.set('strictQuery', true);

  if (isConnected) {
    console.log('MongoDb is already connected');
    return;
  }
  console.log("Env uri is: ",process.env.MONGO_URI )

  try {
    await mongoose.connect(process.env.MONGO_URI, {
      dbName: "arcane",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    isConnected = true;
    console.log("MongoDB connected successfully");

  } catch (error) {
    console.log("Something goes wrong!");
    console.log(error);
  }
}

module.exports = { connect };
