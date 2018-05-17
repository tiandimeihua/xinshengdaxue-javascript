function solderA(number, allCount) {
  console.log("1");

  if (number < allCount) {
    return solderB(number + 1, allCount);
  } else {
    return "finish";
  }
}

function solderB(number, allCount) {
  console.log("2");

  if (number < allCount) {
    return solderC(number + 1, allCount);
  } else {
    return "finish";
  }
}
function solderC(number, allCount) {
  console.log("3");

  if (number < allCount) {
    return solderD(number + 1, allCount);
  } else {
    return "finish";
  }
}

function solderD(number, allCount) {
  console.log("4");

  if (number < allCount) {
    return solderE(number + 1, allCount);
  } else {
    return "finish";
  }
}

function solderE(number, allCount) {
  console.log("5");

  if (number < allCount) {
    return "not finish, anyone ?";
  } else {
    return "finish";
  }
}

function stratSoudOff() {
  let number = 1;
  let allCount = 5;

  let result = solderA(number, allCount);
  if (result === "finish") {
    console.log("ok, done");
  } else {
    console.log("who not sound off yet ?");
  }
}

stratSoudOff();
