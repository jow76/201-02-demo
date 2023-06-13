let userName;

function getName(){
    userName = prompt("Before entering the about page, please tell me your name:")
    // console.log("Welcome, " + userName + "!")
    alert("Welcome, " + userName + "!")
}

let ans1;
let ans2;
let ans3;
let ans4;
let ans5;
let score = 0;

function quiz(){
    alert("Click OK to begin. Best of luck!")
    ans1=prompt("Do I prefer dogs over cats?").toLowerCase;  
    
    if(ans1 == "yes" || ans1 == "y") {
        // console.log("Incorrect. Feline supremacy! (Dogs are cool though.)")
        alert("Incorrect. Feline supremacy! (Dogs are cool though.)")
    }
    else if(ans1 == "no" || ans1 == "n"){
        // console.log("Correct! I still like dogs but cats are way cooler!")
        alert("Correct! I still like dogs but cats are way cooler!")
        score++;
        console.log(score)
    }
    else{
        // console.log("Invalid input. Please respond with either 'yes', 'y' 'no' or 'n'.")
        alert("Invalid input. Please respond with either 'yes', 'y' 'no' or 'n'.")
    }

}