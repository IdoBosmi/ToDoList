const config = {
    dbURI: process.env.MONGODB_URI || 'mongodb://localhost:27017/your_database_name',
    // Add other configuration settings as needed
  };
  
  module.exports = config;