class Block{
    constructor({timestamp, lastHash, data, hash}){
        this.timestamp = timestamp;
        this.lastHash = lastHash;
        this.data = data;
        this.hash = hash;
    }
}
//const Block1 = new Block({timestamp: '01', last_hash: 'foo-last', data: 'foo-data', hash: 'foo-hash'});

module.exports = Block;