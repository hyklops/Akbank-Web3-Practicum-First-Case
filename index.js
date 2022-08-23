const oddOrEven = (inputNumber) => {
  const inputString = String(inputNumber);

  let sum = 0;
  for (let i = 0; i < inputString.length; i++) {
    sum = sum + Number(inputString[i]);
  }

  sum % 2 == 0 ? console.log("Even") : console.log("Odd");
};

oddOrEven(1);
oddOrEven(15);
oddOrEven(4);
