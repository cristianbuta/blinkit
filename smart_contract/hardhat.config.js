require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity:'0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/nHj3hP3vPzwjkCJhoalrP7eXtMNO7BZB',
      accounts: ['207bb24987eb9998924f9b4077343db92cbe08750bcde1034de3d6cefaa7b22e']
    }
  }
}