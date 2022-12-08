const hre = require ("hardhat");

//console.log (hre);

async function main (){

 const currentTimeStampInSeconds = Math.round (Date.now()/ 1000);
 const ONE_YEAR_IN_SECONDS = 365*24*60*60;
 const unlockedTime = currentTimeStampInSeconds + ONE_YEAR_IN_SECONDS;

 const lockedAmount = hre.ethers.utils.parseEther ("1");

 //console.log (currentTimeStampInSeconds);
 //console.log (ONE_YEAR_IN_SECONDS);
 //console.log (unlockedTime);
 //console.log (lockedAmount);

   // const MyTest = await hre.ethers.getContractFactory ("MyTest");
    //const myTest = await MyTest.deploy (unlockedTime, {value: lockedAmount})

    await myTest.deployed();

    console.log ('Contract contain 1 ETH & Address: ${myTest.address}')
    console.log (myTest);
}

//seconds are used in blockchain

main().catch ((error)=>{
 console.log (error);
 process.exitCode = 1;
});