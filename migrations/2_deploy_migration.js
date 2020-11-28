const SelfDestruct = artifacts.require('SelfDestruct');

module.exports = async (deployer, networks, accounts) => {
    await deployer.deploy(SelfDestruct);
}