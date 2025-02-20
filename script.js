const jwt = require('jsonwebtoken');

const generateToken = (data, secretKey) => {
  return jwt.sign(data, secretKey, { expiresIn: '2h' });
};

const validateToken = (token, secretKey) => {
  try {
    const decoded = jwt.verify(token, secretKey);
    return { valid: true, payload: decoded };
  } catch (error) {
    return { valid: false, message: error.message };
  }
};
const userData = { id: 456, name: "exampleUser" };
const mySecret = "mySecretKey@2025";

const generatedToken = generateToken(userData, mySecret);
console.log("Generated Token:", generatedToken);

const tokenCheck = validateToken(generatedToken, mySecret);
console.log(tokenCheck.valid ? "Payload decoded successfully:" : "Validation Error:", tokenCheck);

module.exports = { generateToken, validateToken };
