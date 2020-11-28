const SelfDestruct = artifacts.require("SelfDestruct.sol");

module.exports = async (callbacks) => {
    const selfDestuct = await SelfDestruct.deployed();
    await selfDestuct.setValue.call();
    await selfDestuct.killContract.call();
    console.log("Contract destroyed!");
     // This call will throw an excepion as contract is destroyed
    await selfDestuct.setValue.call();
}