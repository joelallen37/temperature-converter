let originalMetric = prompt("In which metric is the temperature you are converting? \nC - Celsius \nF - Fahrenheit \nK - Kelvin "); 
// get string input from user
let userNumber = prompt("What is the number?") // string input from user 
let convertedAmount = 0; // create empty number variable for use later

let temperatureAmount = Number(userNumber); // convert data type from string -> number 

let originalMetricUpperCase = originalMetric.toUpperCase();
// to safeguard against users typing in lowercase, I'll convert the string to uppercase.
// I could have also add || originalMetric == "c", for example, but i think this is cleaner as it uses just one check & one variable
// the only issue is i've had to create a brand new variable which is basically just a copy of originalMetric

switch (originalMetricUpperCase) {
    
    
    case "C":{ // if the user input was "c"...
    let conversionMetric = prompt(`Okay, we'll convert ${temperatureAmount} Celsius.
    What do you want to convert to?
    F - Fahrenheit
    K - Kelvin`);        //get new input from user to determine what formula to use
    
    let conversionMetricUpperCase = conversionMetric.toUpperCase(); // safeguarding against use of lowercase


    if (conversionMetricUpperCase == "F") { 
        // rather than using 9/5, i'll convert it to a decimal number & multiple. this is much cleaner code and easier to follow 
        convertedAmount = (temperatureAmount * 1.8) + 32;
        alert (`${temperatureAmount}C = ${convertedAmount.toFixed(2)}F`); // round converted number to 2 decimal points (for cleaner results)
        console.log(`${temperatureAmount}C = ${convertedAmount.toFixed(2)}F`);
        /* I've alerted & logged because i feel that the alert look and feel matches that of the prompts where the user inputs their values (pop up window), 
        but ive included the log so that the user can still access the value when they close the alert pop up.
        Although this might be repeated (and potentially inefficient code) I feel this is a more user friendly alternative than just one or the other.*/
    }
    else if (conversionMetricUpperCase == "K") {
        convertedAmount = temperatureAmount + 273.15; //a simple addition formula
        // console.log(convertedAmount); <- was troubleshooting (I had not converted the convertedAmount string to a new number variable (line 6), and so the numbers were combining rather than adding together)
        alert (`${temperatureAmount}C = ${convertedAmount.toFixed(2)}K`); 
        console.log(`${temperatureAmount}C = ${convertedAmount.toFixed(2)}K`);
        //again, both alert and log for user benefit
    }
    break;} // stop the "c" scenario and move on

    case "F":{
    let conversionMetric = prompt(`Okay, we'll convert ${temperatureAmount} Fahrenheit.
    What do you want to convert to?
    C - Celsius
    K - Kelvin`);
    
    let conversionMetricUpperCase = conversionMetric.toUpperCase(); // safeguarding against use of lowercase
    
    if (conversionMetricUpperCase == "C") {
        convertedAmount = (temperatureAmount - 32) * 0.55555555555; // 5 / 9 = 0.55555555555
                alert (`${temperatureAmount}F = ${convertedAmount.toFixed(2)}C`)
                console.log (`${temperatureAmount}F = ${convertedAmount.toFixed(2)}C`)
            }
            
    else if (conversionMetricUpperCase == "K") {
        convertedAmount = (temperatureAmount + 459.67) * 0.55555555555;
        alert (`${temperatureAmount}F = ${convertedAmount.toFixed(2)}K`)
    }
    break;}
        
    case "K":{
    let conversionMetric = prompt(`Okay, we'll convert ${temperatureAmount} Kelvin.
    What do you want to convert to?
    C - Celsius
    F - Fahrenheit`);
        
    let conversionMetricUpperCase = conversionMetric.toUpperCase();        
        
    if (conversionMetricUpperCase == "C") {
        convertedAmount = temperatureAmount - 273.15;
        alert (`${temperatureAmount}K = ${convertedAmount.toFixed(2)}C`);
        }
    
    else if (conversionMetricUpperCase == "F") {
        convertedAmount = (temperatureAmount * 1.8) - 459.67;
        alert (`${temperatureAmount}K = ${convertedAmount.toFixed(2)}F`);
        }
    break;}
}

// I also wrote this using IF statements, but ultimately felt that SWITCH statements were the cleaner and more efficient means of writing this program. 
/* let originalMetric = prompt("In which metric is the temperature you are converting? \nC - Celsius \nF - Fahrenheit \nK - Kelvin "); 
        // get string input from user
        let userNumber = prompt("What is the number?") // string input from user 
        let convertedAmount = 0; // create empty number variable for use later
        
        let temperatureAmount = Number(userNumber); // convert data type from string -> number 
        
        let originalMetricUpperCase = originalMetric.toUpperCase();
        // to safeguard against users typing in lowercase, I'll convert the string to uppercase.
        // I could have also add || originalMetric == "c", for example, but i think this is cleaner as it uses just one check & one variable
        
        
            if (originalMetricUpperCase == "C") {
        
                let conversionMetric = prompt(`Okay, we'll convert ${temperatureAmount} Celsius.
                What do you want to convert to?
                F - Fahrenheit
                K - Kelvin`);
        
                let conversionMetricUpperCase = conversionMetric.toUpperCase(); // safeguarding against use of lowercase
        
                    //Nested if statements
                    if (conversionMetricUpperCase == "F") { 
                    // rather than using 9/5, i'll convert it to a decimal number & multiple. this is much cleaner code and easier to follow 
                        convertedAmount = (temperatureAmount * 1.8) + 32;
                        alert (`${temperatureAmount}C = ${convertedAmount.toFixed(2)}F`); // round converted number to 2 decimal points (for cleaner results)
                        console.log(`${temperatureAmount}C = ${convertedAmount.toFixed(2)}F`);
                        /* I've alerted & logged because i feel that the alert look and feel matches that of the prompts where the user inputs their values (pop up window), 
                        but ive included the log so that the user can still access the value when they close the alert pop up.
                        Although this might be repeated (and potentially inefficient code) I feel this is a more user friendly alternative than just one or the other.
                        
                    }
        
                    else if (conversionMetricUpperCase == "K") {
                        convertedAmount = temperatureAmount + 273.15; //a simple addition formula
                        // console.log(convertedAmount); <- was troubleshooting (I had not converted the convertedAmount string to a new number variable (line 6), and so the numbers were combining rather than adding together)
                        alert (`${temperatureAmount}C = ${convertedAmount.toFixed(2)}K`); 
                        console.log(`${temperatureAmount}C = ${convertedAmount.toFixed(2)}K`);
                        //again, both alert and log for user benefit
                    }
            }
        
            else if (originalMetricUpperCase == "F") {
                let conversionMetric = prompt(`Okay, we'll convert ${temperatureAmount} Fahrenheit.
                What do you want to convert to?
                C - Celsius
                K - Kelvin`);
        
                let conversionMetricUpperCase = conversionMetric.toUpperCase(); // safeguarding against use of lowercase
        
                    if (conversionMetricUpperCase == "C") {
                        convertedAmount = (temperatureAmount - 32) * 0.55555555555; // 5 / 9 = 0.55555555555
                        alert (`${temperatureAmount}F = ${convertedAmount.toFixed(2)}C`)
                        console.log (`${temperatureAmount}F = ${convertedAmount.toFixed(2)}C`)
                    }
        
                    else if (conversionMetricUpperCase == "K") {
                        convertedAmount = (temperatureAmount + 459.67) * 0.55555555555;
                        alert (`${temperatureAmount}F = ${convertedAmount.toFixed(2)}K`)
                    }
            }
        
            else if (originalMetricUpperCase == "K") {
                let conversionMetric = prompt(`Okay, we'll convert ${temperatureAmount} Kelvin.
                What do you want to convert to?
                C - Celsius
                F - Fahrenheit`);
        
                let conversionMetricUpperCase = conversionMetric.toUpperCase();
                
                    if (conversionMetricUpperCase == "C") {
                        convertedAmount = temperatureAmount - 273.15;
                        alert (`${temperatureAmount}K = ${convertedAmount.toFixed(2)}C`);
                    }
        
                    else if (conversionMetricUpperCase == "F") {
                        convertedAmount = (temperatureAmount * 1.8) - 459.67;
                        alert (`${temperatureAmount}K = ${convertedAmount.toFixed(2)}F`);
                    }
        
            }
        */