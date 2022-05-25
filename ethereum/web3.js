import Web3 from "web3"; 

let web3;    // 'let' means we want to be able to reassign a variable

if(typeof window !== "undefined" && typeof window.ethereum !== "undefined") {    // typeof sees if a variable is defined
    // we are in the browser and metamask is running.
    window.ethereum.request({ method: "eth_requestAccounts" });
    web3 = new Web3(window.ethereum);
} else {
    // We are on the server *OR* the user is not running metamask.
    const provider = new Web3.providers.HttpProvider(
        "https://rinkeby.infura.io/v3/52924012b54c48d2a0f35b2ab4145ef4"
        );
    web3 = new Web3(provider);
}

export default web3;