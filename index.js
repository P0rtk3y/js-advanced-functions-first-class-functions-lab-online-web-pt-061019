// Code your solution in this file!
const returnFirstTwoDrivers = function(driverArr){
  return driverArr.slice(0, 2);
}

const returnLastTwoDrivers = function(driverArr){
  return driverArr.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function(int){
  return function(fare){
    return fare * int;
  }
}

const fareDoubler = createFareMultiplier(2);
<<<<<<< HEAD
const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = function(driverArr, fn){
    return fn(driverArr);
}
=======
const fareTripler = createFareMultiplier(3);
>>>>>>> 0a50801b35aa052fbffc44d7d94e7776b3ffb4bd
