const SimpleStorage = artifacts.require('./SimpleStorage.sol')
const BigNumber = web3.BigNumber

require('chai')
  .use(require('chai-as-promised'))
  .use(require('chai-bignumber')(BigNumber))
  .should()

contract('SimpleStorage', accounts => {
  let storage = null
  const _creator = accounts[0]

  beforeEach(async function() {
    storage = await SimpleStorage.new({ from: _creator })
  })

  it('Should store and get a value correctly', async function() {
    await storage.set(42, { from: _creator })
    const value = await storage.get()
    value.should.be.bignumber.equal(42)
  })
})
