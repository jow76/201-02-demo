"use strict";

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

    ans1=prompt("Do I prefer dogs over cats?").toLowerCase(); 
    
    while(ans1 != "yes" && ans1 != "y" && ans1 != "no" && ans1 != "n"){
        console.log("Invalid input. Please answer using 'yes' 'y' 'no' or 'n'.")
        alert("Invalid input. Please answer using 'yes' 'y' 'no' or 'n'.")
        ans1=prompt("Do I prefer dogs over cats?").toLowerCase(); 
    }
    
    if(ans1 === "yes" || ans1 === "y"){
        console.log("Incorrect. Feline supremacy! (Dogs are cool though.)")
        alert("Incorrect. Feline supremacy! (Dogs are cool though.)")
    }
    else{
        console.log("Correct! I still like dogs but cats are way cooler!")
        alert("Correct! I still like dogs but cats are way cooler!")
        score++;
        console.log(score)
    }

    ans2=prompt("Is my favourite colour black?").toLowerCase();

    while(ans2 != "yes" && ans2 != "y" && ans2 != "no" && ans2 != "n"){
        console.log("Invalid input. Please answer using 'yes' 'y' 'no' or 'n'.")
        alert("Invalid input. Please answer using 'yes' 'y' 'no' or 'n'.")
        ans2=prompt("Is my favourite colour black?").toLowerCase();
    }

    if(ans2 === "yes" || ans2 === "y"){
        console.log("Close, but incorrect. Green is my favourite colour but black compliments it perfectly.")
        alert("Close, but incorrect. Green is my favourite colour but black compliments it perfectly.")
    }
    else{
        console.log("Correct! In case you couldn't tell from this site, green is my absolute favourite colour.")
        alert("Correct! In case you couldn't tell from this site, green is my absolute favourite colour.")
        score++;
        console.log(score)
    }

    ans3=prompt("Do I have any pets?").toLowerCase();

    while(ans3 != "yes" && ans3 != "y" && ans3 != "no" && ans3 != "n"){
        console.log("Invalid input. Please answer using 'yes' 'y' 'no' or 'n'.")
        alert("Invalid input. Please answer using 'yes' 'y' 'no' or 'n'.")
        ans3=prompt("Do I have any pets?").toLowerCase();
    }

    if(ans3 === "no" || ans3=== "n"){
        console.log("Incorrect. I have a pet cat called Chicken who you can read about on my 'About' page!")
        alert("Incorrect. I have a pet cat called Chicken who you can read about on my 'About' page!")
    }
    else{
        console.log("Correct! I have a pet cat called Chicken who you can read about on my 'About' page!")
        alert("Correct! I have a pet cat called Chicken who you can read about on my 'About' page!")
        score++;
        console.log(score)
    }

    ans4=prompt("Can I do a backflip?").toLowerCase();

    while(ans4 != "yes" && ans4 != "y" && ans4 != "no" && ans4 != "n"){
        console.log("Invalid input. Please answer using 'yes' 'y' 'no' or 'n'.")
        alert("Invalid input. Please answer using 'yes' 'y' 'no' or 'n'.")
        ans4=prompt("Can I do a backflip?").toLowerCase();
    }

    if(ans4 === "yes" || ans4 === "y"){
        console.log("I appreciate your faith in me, but unfortunately you are not correct.")
        alert("I appreciate your faith in me, but unfortunately you are not correct.")
    }
    else{
        console.log("Ye of little faith... are correct. If I ever do a backflip it probably won't be intentional.")
        alert("Ye of little faith... are correct. If I ever do a backflip it probably won't be intentional.")
        score++;
        console.log(score)
    }

    ans5=prompt("Did I win first place in the fancy dress competition at Butlins Skegness when I was 5, dressed as Red Ranger from Power Rangers?").toLowerCase();

    while(ans5 != "yes" && ans5 != "y" && ans5 != "no" && ans5 != "n"){
        console.log("Invalid input. Please answer using 'yes' 'y' 'no' or 'n'.")
        alert("Invalid input. Please answer using 'yes' 'y' 'no' or 'n'.")
        ans5=prompt("Did I win first place in the fancy dress competition at Butlins Skegness when I was 5, dressed as Red Ranger from Power Rangers?").toLowerCase();
    }

    if(ans5 === "yes" || ans5 === "y"){
        console.log("Unfortunately not. Despite the fact I had the superior costume I came only second, losing to a younger girl who was just in a pink dress. She only won because she was young. Probably doesn't even remember. I remember.")
        alert("Unfortunately not. Despite the fact I had the superior costume I came only second, losing to a younger girl who was just in a pink dress. She only won because she was young. Probably doesn't even remember. I remember.")
    }
    else{
        console.log("Correct. I don't wanna talk about it.")
        alert("Correct. I don't wanna talk about it.")
        score++;
        console.log(score)
    }
    alert("Thank you for taking the quiz! You scored " + score + "/5!")

    return ans1, ans2, ans3, ans4, ans5, score;
}