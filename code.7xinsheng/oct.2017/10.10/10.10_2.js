let count = 99;
try {
  if (count < 100) {
    throw new Error("哇喔，错误了");
  } else {
    // work well.
  }
} catch (e) {
  console.log(e);
}
