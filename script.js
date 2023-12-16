const parseCode = (str) => {
  // your code here
	 // Split the encoded string by zeros
  const parts = Str.split("0");

  // Extract firstName, lastName, and id from the parts array
  const firstName = parts[0];
  const lastName = parts[1];
  const id = parts[2];

  // Create and return the result object
  const result = {
    firstName: firstName,
    lastName: lastName,
    id: id
  };

  return result;
};

// Do not change the code below
const str = prompt("Enter str: ");
alert(JSON.stringify(parseCode(str)));
