const returnFirstTwoDrivers = function(driversArray) {
    return driversArray.slice(0, 2);
};

const returnLastTwoDrivers = function(driversArray) {
    return driversArray.slice (-2);
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function(x) {
    return function(fare) {
        return fare * x
    };
};

const fareDoubler = function(createFareMultiplier) {
    return createFareMultiplier * 2
};

const fareTripler = function(createFareMultiplier) {
    return createFareMultiplier * 3
};

const selectDifferentDrivers = function(driversArray, selectingFunction) {
    if (selectingFunction === returnFirstTwoDrivers) {
      return returnFirstTwoDrivers(driversArray);
    } else if (selectingFunction === returnLastTwoDrivers) {
      return returnLastTwoDrivers(driversArray);
    }
  };