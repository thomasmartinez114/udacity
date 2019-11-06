/*
 * Programming Quiz: Colors of the Rainbow (6-4)
 *
 * Use only the splice() method to modify the rainbow variable:
 *  - remove "Blackberry"
 *  - add "Yellow" and "Green"
 *  - add "Purple"
 */

var rainbow = ['Red', 'Orange', 'Blackberry', 'Blue'];
rainbow.splice(2, 1, "Yellow", "Green");
rainbow.splice(5, 0, "Purple");

console.log(rainbow);

// your code goes here

//["Red","Orange","Yellow","Green","Blue","Purple"]. Try using console.log to output the contents of the rainbow array to help you debug your code.