const { expect } = require("chai");
const { ethers } = require("hardhat");

const tokens = (n) => {
  return ethers.utils.parseUnits(n.toString(), "ether");
};

describe("Discord", () => {
  let Discord, deployer, user;
  let discord;
  beforeEach(async () => {
    [deployer, user] = await ethers.getSigners();
    Discord = await ethers.getContractFactory("Discord");
    discord = await Discord.deploy("Discord", "DC");
  });
  describe("development", () => {
    it("Sets the name", async () => {
      let name = await discord.name();
      expect(name).to.equal("Discord");
    });
    it("Sets the symbol", async () => {
      let symbol = await discord.symbol();
      expect(symbol).to.equal("DC");
    });
    it("Sets the owner", async () => {
      let owner = await discord.owner();
      expect(owner).to.equal(deployer.address);
    });
  });
});
