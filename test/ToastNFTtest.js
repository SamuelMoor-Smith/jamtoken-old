const Toast = artifacts.require('./ToastNFT.sol')

require('chai')
  .use(require('chai-as-promised'))
  .should()

contract('Toast', (accounts) => {
  let contract

  before (async () => {
    contract = await Toast.deployed()
  })

  describe('deployment', async() => {
    it ('deploys successfully', async() => {
      contract = await Toast.deployed()
      const address = contract.address
      console.log(address)
      assert.notEqual(address,0x0)
      assert.notEqual(address,'')
      assert.notEqual(address,null)
      assert.notEqual(address,undefined)
    })

    it('has a name', async() => {
      const name = await contract.name()
      assert.equal(name, 'Toast')
    })

    it('has a symbol', async() => {
      const name = await contract.name()
      assert.equal(symbol, 'TOAST')
    })
  })
})
