const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
const compiledFactory = require('./build/CampaignFactory.json'); //only the factory will be deployed from this file

const provider = new HDWalletProvider(
    'liar clutch assume milk message repair ball super power metal crisp actual',
    'https://rinkeby.infura.io/v3/52924012b54c48d2a0f35b2ab4145ef4'
);
const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();

    console.log('Attempting to deploy from account', accounts[0]);

    const result = await new web3.eth.Contract(JSON.parse(compiledFactory.interface)) //compiledFactory's interface must be parsed
    .deploy({ data: compiledFactory.bytecode })
    .send({ gas: '1000000', from: accounts[0] });

    console.log('Contract deployed to', result.options.address);
};
deploy();