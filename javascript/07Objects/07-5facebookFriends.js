// Create an object called facebookProfile.The object should have 3 properties:

// your name
// the number of friends you have, and
// an array of messages you've posted (as strings)
// The object should also have 4 methods:

// postMessage(message) - adds a new message string to the array
// deleteMessage(index) - removes the message corresponding to the index provided
// addFriend() - increases the friend count by 1
// removeFriend() - decreases the friend count by 1

/*
 * Programming Quiz: Facebook Friends (7-5)
 */

// your code goes here
let facebookProfile = {
    name: "Thomas Martinez",
    friends: 200,
    messages: ["I'm so hungry.", "What's Going on?", "I can't wait to finish school!"]
    ,
    postMessage: function postMessage(message) {
        facebookProfile.messages.push(message);
    },
    deleteMessage: function deleteMessage(index) {
        facebookProfile.messages.splice(index, 1);
        return facebookProfile.messages;
    },
    addFriend: function () {
        facebookProfile.friends++;
        return facebookProfile.friends;
    },
    removeFriend: function () {
        facebookProfile.friends--;
        return facebookProfile.friends;
    }
}

console.log(facebookProfile.removeFriend());
console.log(facebookProfile.addFriend());
console.log(facebookProfile.deleteMessage(2));

// Time: 26:15
// Grade: 4