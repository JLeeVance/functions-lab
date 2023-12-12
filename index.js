function distanceFromHqInBlocks (pickupLocation) {
    const headquarters = 42
    let distanceInBlocks = Math.abs(headquarters - pickupLocation); //Math.abs() returns an apsolute value of a number
    return distanceInBlocks;
}

// used funct distanceFromHqInBlocks WITHIN the new function to calculate the feet.
// the parameter for this function is the pickup location, but its scope as a var is only in this function
function distanceFromHqInFeet(pickupLocation) {
    let distanceFeet = distanceFromHqInBlocks(pickupLocation) * 264;
    return distanceFeet;
}

function distanceTravelledInFeet(pickupLocation , destination){
    let blocksTravelDistance = Math.abs(destination - pickupLocation);
    let travelInFeet = blocksTravelDistance * 264
    return travelInFeet
}

//Used the above function as a call, giving me the var travelInFeet
//created var feetToChange to simplify my code
//declared farePrice because it is a frequently used var in this function
function calculatesFarePrice (pickupLocation , destination){
    let travelInFeet = distanceTravelledInFeet(pickupLocation, destination);
    let feetToCharge = travelInFeet - 400;
    let farePrice;
    if (feetToCharge <= 0 ){
         return 0;
        }
        else if (401 <= travelInFeet && travelInFeet <= 2000) {
            farePrice = feetToCharge * .02
            return farePrice;
        }
        else if (2000 < travelInFeet && travelInFeet <= 2500) {
            farePrice = 25
            return farePrice;
        }
        else (travelInFeet > 2500);
            farePrice = "cannot travel that far"
            return farePrice;
    }




// switch (travelInFeet){
//     case 400 <= travelInFeet : return "Its on us."