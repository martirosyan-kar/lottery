const HDWalletProvider = require("truffle-hdwallet-provider");
const Web3 = require("Web3");

const { interface, bytecode } = require("./compile");

const provider = new HDWalletProvider(
  "crater leopard left candy response crop exile bachelor rival walnut yellow upper",
  "https://rinkeby.infura.io/zJNxCKZ4KU5PaP1uFlhV"
);

const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();
  console.log("Deploying", accounts[0]);

  const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({
      data: bytecode
    })
    .send({ from: accounts[0], gas: "1000000" });
  console.log(interface);
  console.log(result.options.address);
};
deploy();
