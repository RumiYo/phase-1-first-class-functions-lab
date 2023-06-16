// Code your solution in this file!
const returnFirstTwoDrivers = function(driversNames){
    const firstTwo = driversNames.slice(0,2);
    return firstTwo;
};

const returnLastTwoDrivers = function(driversNames){
    const lastTwo = driversNames.slice(-2);
    return lastTwo;
};
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
/*
function createFareMultiplier(distance, fareMultiplier){
    function fareMultiplier(distance){
        const multipliedFare = distance * distance;
        return multipliedFare;
    }
    return fareMultiplier;
}
*/

function createFareMultiplier(num1){
    return function fareMultiplier(num2){
        const multipliedFare = num1 * num2;
        return multipliedFare;
    }
}

/*
function fareDoubler(fare){
    const doubledFare = fare * 2;
    return doubledFare;
}

function fareTripler(fare){
    const tripledFare = fare * 3;
    return tripledFare;
}
*/ 
const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);


function selectDifferentDrivers(arrayOfDrivers, returnFirstTwoDrivers, returnLastTwoDrivers){
    const selectedDrivers = returnFirstTwoDrivers(arrayOfDrivers);
    return selectedDrivers;
}
