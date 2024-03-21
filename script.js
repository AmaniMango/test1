let input1 = document.querySelector(".q1");
let input2 = document.querySelector(".q2");
let button = document.querySelector("button");
let message = document.querySelector(".message");
console.log("hi");

let plagg = document.querySelector(".plagg");
let tikki = document.querySelector(".tikki");
let duusuu = document.querySelector(".duusuu");
let nooroo = document.querySelector(".nooroo");

button.addEventListener("click", function(){
    let answer1 = input1.value;
    let answer2 = input2.value;

// if (!answer1 || !answer2){
//     message.innerHTML = "Please Input something";
//     plagg.style.display = "none";
//     tikki.style.display = "none";
//     nooroo.style.display = "none";
//     duusuu.style.display = "none";
// }

//Tikki
 if (answer1 === "yes" && answer2 === "sweet"){
    message.innerHTML = `<div class="tikki">
    <h3>Tikki</h3>
    <img src="tikki.jpg"alt="Tikki the kwami from Miraculous Ladybug" width="300"/>
    </div>`;
}
//Nooroo
else if (answer1 === "yes" && answer2 === "savory"){
    message.innerHTML = `<div class="nooroo">
    <h3>Nooroo</h3> 
    <img src="nooroo.jpg"alt="Nooroo the kwami from Miraculous Ladybug" width="300"/>
    </div>`;
}

//Plagg
else if (answer1 === "no" && answer2 === "savory"){
    message.innerHTML = `<div class= "plagg">
    <h3>Plagg</h3> 
    <img src="Plagg.jpg" alt="Plagg the kwami" width="300"/>
    </div>`;
}

//Duusuu
else if (answer1 === "no" && answer2 === "sweet"){
    message.innerHTML = `<div class= "Duusuu">
    <h3>Duusuu</h3> 
    <img src="Duusu.jpg"alt="Duusuu the kwami from Miraculous Ladybug" width="300"/>
    </div>`;
}
});


/* <div class="plagg">
<img src="Plagg.jpg" alt="Plagg the kwami"/>
</div>
<div class="tikki">
<img src="tikki.jpg"alt="Tikki the kwami from Miraculous Ladybug"/>
</div>
<div class="nooroo">
<img src="nooroo.jpg"alt="Nooroo the kwami from Miraculous Ladybug"/>
</div>
<div class="duusuu">
<img src="Duusu.jpg"alt="Duusuu the kwami from Miraculous Ladybug"/>
</div> */
