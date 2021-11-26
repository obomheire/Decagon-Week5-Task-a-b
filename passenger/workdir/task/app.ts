import { Console, count } from "console"
const taskOne = (passengers: number, shuffle: number) => {
  let onbordPassenger: {}[] = [];
  let reservation: {}[] = [];

  for (let i = 0; i < passengers; i++) {
    let trip: {
      name: string;
      location: string;
    } = {
      name: "",
      location: "",
    };
    trip.name = `passenger${i + 1}`;
 
    switch(i % 5){
      case 0:
      trip.location = "Abuja";
      break;
      case 1:
      trip.location = "Benue";
      break;
      case 2:
      trip.location = "Katsina";
      break;
      case 3:
      trip.location = "Lagos";
      break;
      default:
        trip.location = "Sambisa";
    }

    reservation.push(trip);
    // console.log(reserveArray)
    
    if (reservation.length === 5) {
      onbordPassenger.push(reservation);
      reservation = [];
    }
  }
  console.log(onbordPassenger)
  //    console.log(array)
  interface Sum {
    name: string;
    location: string;
  }
  let tripResult: {}[] = [];
  for (let i of onbordPassenger) {
    let sum = tripResult.concat(i) as Sum[];
    tripResult = sum;
  }
  // console.log(tripResult)
  let tripOutput: {
    boarded: {}[];
    reservation: {}[];
    count: number;
  } = {
    boarded: [],
    reservation: reservation,
    count: 1,
  };
  //   console.log(output)
  if (tripResult.length === 0) {
    tripOutput.count--;

  } else if (tripResult.length <= 50) {
    tripOutput.boarded = tripResult;
  } else {
    while (tripResult.length > 50 && shuffle > 0) {
      tripResult.splice(0, 50);
      shuffle--;
      tripOutput.count++;
    }
    tripOutput.boarded = tripResult.splice(0, 50);
    tripOutput.reservation = tripResult.concat(reservation);
  }
  
  return tripOutput;

};
console.log(taskOne(15, 2));
export default taskOne;