function formatCurrency(number) {
    numberAsCurrency = (number).toLocaleString('en-US', { 
		style: 'currency', 
		currency: 'USD' 
	});
    return numberAsCurrency
}

function transformArrayToObject(array) {
    convertedArray = Object.fromEntries(array);
    return convertedArray;
}

function capitalizeFirstLetter(string) {
    editedString = string.charAt(0).toUpperCase() + string.split("").splice(1).join("");
    return editedString;
}

function convertToCamelCase(string) {
    lowerCaseString = string.toLowerCase();
    splitedString = lowerCaseString.split(" ");
    stringAsArray = splitedString.map((element) => element.charAt(0).toUpperCase() + element.split("").splice(1).join(""));
    joinedString = stringAsArray.join("");
    convertedString = joinedString.charAt(0).toLowerCase() + joinedString.split("").splice(1).join("");
    return convertedString;
}

console.log(convertToCamelCase("TEST test TeSt tEsT"))
module.exports = {formatCurrency, transformArrayToObject, capitalizeFirstLetter, convertToCamelCase};