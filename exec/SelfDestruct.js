const SelfDestruct = artifacts.require("SelfDestruct.sol");

module.exports = async (callbacks) => {
    const selfDestuct = await SelfDestruct.deployed();
    await selfDestuct.increment();
    console.log(
        (await selfDestuct.value.call()).toString()
    )
    await selfDestuct.killContract();
    console.log("Contract destroyed!");
     // This call will throw an excepion as contract is destroyed
    await selfDestuct.value.call();
    // callbacks()
}