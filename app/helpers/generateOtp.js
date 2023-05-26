const generateRandomOtp = () => Math.floor(1000 + Math.random() * 9000)|| 1234;

module.exports = { generateRandomOtp };