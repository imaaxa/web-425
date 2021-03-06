/*
Title: Web 425: Assignment 1.4
Author: Cory Gilliam
Date: 21 Dec 2019;
Modified By:
Description: Compiling TypeScript
*/
// Variables
var firstName = 'Ahsoka';
var lastName = 'Tano';
/**
 * Concatenate any two strings with a space between them
 *
 * @param string1 (string) any string of characters
 * @param string2  (string) any string of characters
 * @return (string) concatenated string
 */
function concatStrings(string1, string2) {
    return string1 + ' ' + string2;
}
// Log result to the console
console.log(concatStrings(firstName, lastName));
