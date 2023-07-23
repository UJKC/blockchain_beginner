//It tells where block is present and creates a constant class block
const Block = require('./block');

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
});