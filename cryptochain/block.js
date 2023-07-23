class Block{
    constructor({timestamp, last_hash, data, hash}){
        this.timestamp = timestamp;
        this.last_hash = last_hash;
        this.data = data;
        this.hash = hash;
    }
}
const Block1 = new Block({timestamp: '01', last_hash: 'foo-last', data: 'foo-data', hash: 'foo-hash'});

console.log(Block1)