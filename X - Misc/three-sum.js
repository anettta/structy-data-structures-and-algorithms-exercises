const threeSum = (arr, target) => {
  const pairs = {};

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      const num1 = arr[i];
      const num2 = arr[j];
      const sum = num1 + num2;
      pairs[sum] = [num1, num2];
    }
  }
  for (let i = 0; i < arr.length; i++) {
    let num3 = arr[i];
    let difference = target - num3;
    if (difference in pairs) {
      const [num1, num2] = pairs[difference];
      return [num1, num2, num3];
    }
  }
};

console.log(threeSum([10, 23, 45, 5, 20, 30, 40], 100));
