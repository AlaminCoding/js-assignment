function feetToMile(feet) {
  var mile;
  var error;
  if (feet < 0) {
    error = "Negative value is not valid"
    return error;
  }
  else {
    mile = feet * 0.00018939;
    return mile;
  }
}

function woodCalculator(chair, table, bed) {
  var totalWood;
  var error;
  if (chair < 0 || table < 0 || bed < 0) {
    error = "Negative value is not valid"
    return error;
  }
  else {
    totalWood = (chair * 1) + (table * 3) + (bed * 5);
    return totalWood;
  }
}

function brickCalculator(floor) {
  var totalBrick;
  var error;
  if (floor <= 0) {
    error = "Negative or 0 value is not valid";
    return error;
  }
  else {
    if (floor >= 1 && floor <= 10) {
      totalBrick = floor * 15 * 1000;
      return totalBrick;
    }
    else if (floor > 10 && floor <= 20) {
      if (floor / 10 == 2) {
        totalBrick = (10 * 15 * 1000) + (10 * 12 * 1000);
        return totalBrick;
      }
      else {
        var upfloor = floor % 10;
        totalBrick = (10 * 15 * 1000) + (upfloor * 12 * 1000);
        return totalBrick;
      }
    }
    else if (floor > 20) {
      var upfloor = floor - 20;
      totalBrick = (10 * 15 * 1000) + (10 * 12 * 1000) + (upfloor * 10 * 1000);
      return totalBrick;
    }
  }
}

function tinyFriend(friends) {
  var min = friends[0].length;
  var tiny;
  for (var i = 0; i < friends.length; i++) {
    if (friends[i].length <= min) {
      min = friends[i].length;
      tiny = friends[i];
    }
  }
  return tiny;
}