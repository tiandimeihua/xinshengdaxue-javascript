function checkFlightSchedule(giveScheduleInfor) {
  console.log("Start check flight schedule");

  var flightSchedule = {
    startDate: "2017/09/21 ",
    startTime: "09/00/00"
  };

  console.log("Find the schedule");
  giveScheduleInfor(flightSchedule.startDate + flightSchedule.startTime);
}

function getInfor(getInfor) {
  console.log(getInfor);
}

checkFlightSchedule(getInfor);
