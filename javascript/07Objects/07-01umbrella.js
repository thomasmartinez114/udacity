/*
 * Programming Quiz: Umbrella (7-1)
 */

var umbrella = {
    color: "pink",
    isOpen: true,
    open: function () {
        if (umbrella.isOpen === true) {
            return "The umbrella is already opened!";
        } else {
            umbrella.isOpen = true;
            return "Julia opens the umbrella!";
        }
    },
    // your code goes here
    close: function () {
        if (umbrella.isOpen === true) {
            umbrella.isOpen = false;
            return "The umbrella is now closed";
        } else {
            umbrella.isOpen = false;
            return 'The umbrella is already closed';
        }
    }
};

// Time: 15:00
// Grade: 2