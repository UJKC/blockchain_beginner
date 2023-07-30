const { GENESIS_DATA } = require('./config');
const cryptoHash = require('./crypto-hash');

class Block{
    constructor({timestamp, lastHash, data, hash}){
        this.timestamp = timestamp;
        this.lastHash = lastHash;
        this.data = data;
        this.hash = hash;
    }

    static genesis() {
        return new this(GENESIS_DATA);
      }
    
      static mineBlock({ lastBlock, data }) {
        const timestamp = Date.now();
        const lastHash = lastBlock.hash;
        return new this({
          timestamp: Date.now(),
          lastHash: lastBlock.hash,
          data,
          hash: cryptoHash(timestamp, lastHash, data)
        });
      }
    }
//const Block1 = new Block({timestamp: '01', last_hash: 'foo-last', data: 'foo-data', hash: 'foo-hash'});
//console.log("BLOCK!", Block1)

module.exports = Block;