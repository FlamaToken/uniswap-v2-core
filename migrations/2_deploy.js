var Factory = artifacts.require("IgniswapFactory.sol");
const MultiCall = artifacts.require("Multicall.sol");

module.exports = function(deployer) {
  // deployment steps
  const feeSetter = '0x977f262FfDFED0eDb24f0390817AC0C324A37971'
  deployer.deploy(Factory, feeSetter);
  //deployer.deploy(MultiCall);
  
};
