const UserModel = require('../models/user');

const storeUserData = async (req, res) => {
  try {
    console.log('Receiving data:', req.body);
    res.status(201).json({
      message: 'sucessfully get data',
      success: true,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Internal Server Error',
      success: false,
    });
  }
};  

module.exports = {
  storeUserData,
};
