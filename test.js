
const { 
    time , 
    loadFixture,
} = require ("@nomicfoundation/hardhat-network-helpers");

//console.log (time);
//console.log (loadFixture); 


//console.log (time.days);

const {anyValue} = require ("@nomicfoundation/hardhat-chai-matchers/withArgs");
console.log (anyValue);

const {expect} = require ("chai");
const {ethers} = require ("hardhat");

//console.log (expect);

describe ("MyTest", function(){
  async function runEveryTime (){
    const ONE_YEAR_IN_SECONDS = 365*24*60*60;
    const ONE_GEWI = 1000000000;

    const lockedAmount = ONE_GEWI;
    const unlockedTime = (await time.latest()) + ONE_YEAR_IN_SECONDS;
    //console.log (ONE_YEAR_IN_SECONDS, ONE_GEWI);
    //console.log (unlockedTime);


   // const [owner, otherAccount] = await ethers.getSigners(); 
   // const [owner, act1, act2, act3] = await ethers.getSigners(); 
    console.log (owner);
   //console.log (otherAccount);

   //console.log (unlockedTime, lockedAmount, owner, otherAccount);

   //console.log ("hey");
   const MyTest = await ethers.getContractFactory ("MyTest");
   const myTest = await MyTest.deploy (unlockedTime, {value: lockedAmount});
   //console.log (myTest);
   
   return {myTest, unlockedTime, lockedAmount, otherAccount};


}

  describe ("Deployment", function(){
  //checking unlocked time
    it ("Should Check Unlocked time", async function (){
        const {myTest, unlockedTime} = await loadFixture (runEveryTime)
        
        //console.log (unlockedTime);
        //console.log (myTest);

        //expect (await myTest.unlockedTime()).to.equal(unlockedTime)
    }); 
  });

  runEveryTime()
})