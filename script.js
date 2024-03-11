let input1 = document.querySelector(".q1");
let input2 = document.querySelector(".q2");
let button = document.querySelector("button");
let message = document.querySelector(".message");
console.log("hi");

button.addEventListener("click", function(){
    let answer1 = input1.value;
    let answer2 = input2.value;
if (!answer1 || !answer2){
    message.innerHTML = "Please Input something";

}
//Tikki
else if (answer1 === "yes" && answer2 === "sweet"){
    message.innerHTML = "Tikki";
}
//Nooroo
else if (answer1 === "yes" && answer2 === "savory"){
    message.innerHTML = "Nooroo";
}
//Plagg
else if (answer1 === "no" && answer2 === "savory"){
    message.innerHTML = "Plagg";
}
//Duusuu
else if (answer1 === "no" && answer2 === "sweet"){
    message.innerHTML = "Duusuu";
}
//Make it so when the results come in, the image of the character they got reveals.

    // if(!q1){
        // document.querySelector("message").innerHTML = "enter something";

    // }
// if (q1 === "yes"){
    // 
// }

    // if(!q1 || !q2){
    //     message.innerHTML = "You need to enter SOMETHING. ";
    //     }
    //     else if (q1 === "yes" && q2 ==="sweet"){
    //     console.log("success");
    //         message.innerHTML ="Success!";
    //     }
});
