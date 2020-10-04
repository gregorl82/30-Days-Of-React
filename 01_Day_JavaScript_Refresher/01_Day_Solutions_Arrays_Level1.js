// Declare an empty array;

const emtpyArray = [];

console.log(emtpyArray);

// Declare an array with more than 5 number of elements

const arrayWithSixElements = [
  "apple",
  "orange",
  "pear",
  "banana",
  "peach",
  "blueberry",
];

console.log(arrayWithSixElements);

// Find the length of your array

console.log(`Array length: ${arrayWithSixElements.length}`);

// Get the first item, the middle item and the last item of the array

console.log(`First item: ${arrayWithSixElements[0]}`);
console.log(`Middle item: ${arrayWithSixElements[3]}`);
console.log(`Last item: ${arrayWithSixElements[5]}`);

// Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5

const mixedDataTypes = [1, "two", false, 4.2, null, undefined];

console.log(mixedDataTypes);
console.log(`mixedDataTypes array length: ${mixedDataTypes.length}`);
console.log(`Array length greater than 5?: ${mixedDataTypes.length > 5}`);

// Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon

const itCompanies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];

// Print the array using console.log()

console.log(`itCompanies array: ${itCompanies}`);

// Print the number of companies in the array

console.log(`Number of companies in itCompanies array: ${itCompanies.length}`);

// Print the first company, middle and last company

console.log(`First company: ${itCompanies[0]}`);
console.log(`Middle company: ${itCompanies[3]}`);
console.log(`Last company: ${itCompanies[6]}`);

// Print out each company

itCompanies.map((company, index) => {
  return console.log(`IT company ${index + 1}: ${company}`);
});

// Change each company name to uppercase one by one and print them out

itCompanies.map((company, index) => {
  return console.log(`IT company ${index + 1}: ${company.toUpperCase()}`);
});

// Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.

console.log(
  `${itCompanies[0]}, ${itCompanies[1]}, ${itCompanies[2]},${itCompanies[3]}, ${itCompanies[4]}, ${itCompanies[5]} and ${itCompanies[6]} are big IT companies.`
);
// Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found

const checkCompany = (company) => {
  if (itCompanies.includes(company)) {
    return `${company} found`;
  } else {
    return `${company} not found`;
  }
};

console.log(checkCompany("Facebook"));
console.log(checkCompany("Adobe"));

// Filter out companies which have more than one 'o' without the filter method
// Sort the array using sort() method
// Reverse the array using reverse() method
// Slice out the first 3 companies from the array
// Slice out the last 3 companies from the array
// Slice out the middle IT company or companies from the array
// Remove the first IT company from the array
// Remove the middle IT company or companies from the array
// Remove the last IT company from the array
// Remove all IT companies
