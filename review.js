let testButton = document.querySelector("#test-button");
let result = document.querySelector("#result");

testButton.addEventListener("click", function() {
    let randomNumber = Math.floor(Math.random() * 100); // Generates a random number between 0 and 99

    console.log("Random Number: " + randomNumber);


    // CODE SOLO
    // - When the button is clicked, a random number between 0 and 99 is generated. 
    // - Depending on the value of this number, different actions will occur:
    if(randomNumber<30){
        
    }
    // 1. If the number is less than 30, a message will be displayed on the web page.
    //  - The message should read: "The number is less than 30."
    
    // 2. If the number is between 30 and 69, a message will be logged to the console.
    //  - The message should read: "The number is between 30 and 69."
    
    // 3. If the number is 70 or greater, a different message will be displayed on the web page.
    //  - The message should read: "The number is 70 or greater."
 
    // Extensions: 
    //  - Try modifying the conditions or the actions taken (such as changing the text or adding new conditions).
    //  - Try adding an input and test conditions for the random number and user input.
    
});
