let raceNumber = Math.floor(Math.random() * 1000);

let early = true;

let runnerAge = 18;

if (runnerAge > 18 && early){
  raceNumber += 1000;
  } 
if (runnerAge > 18 && early){
    console.log(`Your number is ${raceNumber} - Race will begin at 9:30am.`);
  } else if (runnerAge > 18 && !early){
    console.log(`Your number is ${raceNumber} - You will race at 11:00am.`);
  }  else if (runnerAge < 18){
    console.log(`Your race number is - ${raceNumber} .You will race at 12:30pm.`);
  } else{
    console.log('Please approach the registration desk.')
  }



