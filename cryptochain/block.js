const { GENESIS_DATA } = require('./config');

class Block{
    constructor({timestamp, lastHash, data, hash}){
        this.timestamp = timestamp;
        this.lastHash = lastHash;
        this.data = data;
        this.hash = hash;
    }

    static genesis(){
        return new this(GENESIS_DATA);
    }
}
const Block1 = new Block({timestamp: '01', last_hash: 'foo-last', data: 'foo-data', hash: 'foo-hash'});
console.log("BLOCK!", Block1)

module.exports = Block;