import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json'; //tells web3 where the already deployed contract is

const instance = new web3.eth.Contract(      // creates instance of the deployed contract
    JSON.parse(CampaignFactory.interface),    // first argument
    '0x54ef751FdbF8C85b8500fE43156C0c8a5b0F4A98'     // second argument is the deployed contract address
);

export default instance;