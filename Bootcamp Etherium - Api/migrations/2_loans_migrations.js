const Migrations = artifacts.require("Loans");

module.exports = function (deployer) {
  deployer.deploy(Migrations);
};
