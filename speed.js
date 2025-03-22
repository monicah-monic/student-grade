function speedDetector(speed) {
  speed = Number(speed);

  
  const speedLimit = 70;
  const kmPerPoint = 5;

  if (speed <= speedLimit) {
    console.log("Ok");
  } else {
    let points = Math.floor((speed - speedLimit) / kmPerPoint);

    if (points > 12) {
      console.log(`License suspended: You have ${points - 12} points excess`);
    } else {
      console.log(`Points: ${points}`);
    }
  }
}

speedDetector();
