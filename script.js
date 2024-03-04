let q1 = (".Q1");
let q2 = (".Q2");

console.log("hi");

button.addEventListener("click", function(){
    if(!Q1 || !Q2){
        message.innerHTML = "You need to enter SOMETHING. ";
        }
        else if (q1 === "yes" && q2 ==="sweet"){
        console.log("success");
            message.innerHTML ="Success!";
        }
});
