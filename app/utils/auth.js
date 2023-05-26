const jwt = require('jsonwebtoken');
const { jwtSecretKey } = require('../config');

const generateToken = (data) => {
    return jwt.sign(
        {
            time: Date(),
            ...data
        },
        jwtSecretKey,
        {
            expiresIn: "1d",
        });
}

const verifyToken = (token) => {
    try {
        const verifiedData = jwt.verify(token, jwtSecretKey);
        return verifiedData ? verifiedData : false;
    } catch (error) {
        return false;
    }
}

module.exports = {
    generateToken,
    verifyToken,
};