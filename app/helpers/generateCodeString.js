const char = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

const generateString = () => {
    let result = ' ';
    const length = char.length;
    for (let i = 0; i < 7; i++) {
        result += char.charAt(Math.floor(Math.random() * length));
    }
    return result;
}

module.exports = { generateString }