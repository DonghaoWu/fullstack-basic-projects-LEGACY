const mongoose = require('mongoose');

//config is a dependency
const config = require('config');
//config.get('mongoURI') is get the value of
//variable call mongoURI in default.json
const db = config.get('mongoURI');

//connectDB is a function, invoke it will connect to mongo database.
const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify:false,
    });
    console.log('MongoDB Connected...');
  } catch (err) {
    console.log(err.message);
    //Exit process with failure
    process.exit(1);
  }
};

module.exports = connectDB;
