const crypto = require('crypto');

const cryptoHash = (...inputs) => {
    const hash = crypto.createHash('sha256');

    //updates hash with given data
    hash.update(inputs.sort().join(' '));

    //retuens hash with hexadecimal
    return hash.digest('hex');
}

module.exports = cryptoHash;