//It tells where block is present and creates a constant class block
const Block = require('./block');
const { GENESIS_DATA } = require('./config');

//Describe what you want to do or describe what is it
describe('Block', () => {
    //constant property
  const timestamp = 'a-date';
  const lastHash = 'foo-hash';
  const hash = 'bar-hash';
  const data = ['blockchain', 'data'];
  //block property
  const block = new Block({ timestamp, lastHash, hash, data });

  //It describe what feature to be added or what has to be present
  it('has a timestamp, lastHash, hash, and a data property', () => {
    //block property = constant property
    expect(block.timestamp).toEqual(timestamp);
    expect(block.lastHash).toEqual(lastHash);
    expect(block.hash).toEqual(hash);
    expect(block.data).toEqual(data);
  });

  //test genesis data feature
  describe('genesis', () =>{
    const genesisBlock = Block.genesis();

    it('return a block data same as genesis', () => {
      expect(genesisBlock instanceof Block).toBe(true);
    });

    it('Same genesis block is same as genesis block', () => {
      expect(genesisBlock).toEqual(GENESIS_DATA)
    });
  });
});