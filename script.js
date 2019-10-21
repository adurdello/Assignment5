// Write your JavaScript code here!

window.addEventListener("load", function() {
      let form = document.querySelector("form");
      
      form.addEventListener("submit", function(event) {
         let pilotName = document.querySelector("input[name=pilotName]");
         let copilotName = document.querySelector("input[name=copilotName]");
         let fuelLevel = document.querySelector("input[name=fuelLevel]");
         let cargoMass = document.querySelector("input[name=cargoMass]");
         
         if (pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass.value === "") {
            alert("All fields are required!");
            // stop the form submission
            event.preventDefault();
         }

         else if (isNaN(pilotName.value) === false || isNaN(copilotName.value) === false || isNaN(fuelLevel.value) === true || isNaN(cargoMass.value) === true) {
            alert("Please enter valid information for each field!");
            // stop the form submission
            event.preventDefault();
         }

         else if (fuelLevel.value < 10000 && cargoMass.value < 10000) {
            // console.log(1)
            let redHeading =document.getElementById("launchStatus");
            redHeading.style.color = "red";
            redHeading.innerHTML = "Shuttle Not Ready For Launch";
            let showItems = document.getElementById("faultyItems");
            showItems.style.visibility = "visible";  
            let pilot = document.querySelector("#pilotStatus");
            pilot.innerHTML = `${pilotName.value} is ready for launch`;
            let copilot = document.querySelector("#copilotStatus");
            copilot.innerHTML = `${copilotName.value} is ready for launch`; 
            let fuel = document.querySelector("#fuelStatus");
            fuel.innerHTML = 'Fuel level too low for launch';
            let cargo = document.querySelector("#cargoStatus");
            cargo.innerHTML = 'Cargo mass low enough for launch';
            event.preventDefault();
         }

         else if (fuelLevel.value > 10000 && cargoMass.value > 10000) {
            // console.log(2);
            let redHeading =document.getElementById("launchStatus");
            redHeading.style.color = "red";
            redHeading.innerHTML = "Shuttle Not Ready For Launch";
            let showItems = document.getElementById("faultyItems");
            showItems.style.visibility = "visible";  
            let pilot = document.querySelector("#pilotStatus");
            pilot.innerHTML = `${pilotName.value} is ready for launch`;
            let copilot = document.querySelector("#copilotStatus");
            copilot.innerHTML = `${copilotName.value} is ready for launch`; 
            let fuel = document.querySelector("#fuelStatus");
            fuel.innerHTML = 'Fuel level high enough for launch';
            let cargo = document.querySelector("#cargoStatus");
            cargo.innerHTML = 'Cargo mass too high  for launch';
            event.preventDefault();
         }

         else if (cargoMass.value > 10000 && fuelLevel.value < 10000) {
            // console.log(3);
            let redHeading =document.getElementById("launchStatus");
            redHeading.style.color = "red";
            redHeading.innerHTML = "Shuttle Not Ready For Launch";
            let showItems = document.getElementById("faultyItems");
            showItems.style.visibility = "visible";  
            let pilot = document.querySelector("#pilotStatus");
            pilot.innerHTML = `${pilotName.value} is ready for launch`;
            let copilot = document.querySelector("#copilotStatus");
            copilot.innerHTML = `${copilotName.value} is ready for launch`; 
            let fuel = document.querySelector("#fuelStatus");
            fuel.innerHTML = 'Fuel level too low for launch';
            let cargo = document.querySelector("#cargoStatus");
            cargo.innerHTML = 'Cargo mass too high for launch';
            event.preventDefault();
         }

         else {
            // console.log(4);
            let greenHeading = document.getElementById("launchStatus");
            greenHeading.style.color = "green";
            greenHeading.innerHTML = 'Shuttle is Ready For Launch';
            let showItems = document.getElementById("faultyItems");
            showItems.style.visibility = "visible"; 
            let pilot = document.querySelector("#pilotStatus");
            pilot.innerHTML = `${pilotName.value} is ready for launch`;
            let copilot = document.querySelector("#copilotStatus");
            copilot.innerHTML = `${copilotName.value} is ready for launch`; 
            let fuel = document.querySelector("#fuelStatus");
            fuel.innerHTML = 'Fuel level high enough for launch';
            let cargo = document.querySelector("#cargoStatus");
            cargo.innerHTML = 'Cargo mass low enough for launch';
            event.preventDefault();     
         }  
         
         window.addEventListener("submit", function() {
            let json = [];
               fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
                  response.json().then( function(json) {
                     // console.log(json);
                     let num = Math.floor(Math.random()*json.length);

                     const div = document.getElementById("missionTarget");
                     div.innerHTML = 
                     // This block of code shows how to format the HTML once you fetch some planetary JSON!
                        `<h2>Mission Destination</h2>
                           <ol>
                              <li>Name: ${json[num].name}</li>
                              <li>Diameter: ${json[num].diameter}</li>
                              <li>Star: ${json[num].star}</li>
                              <li>Distance from Earth: ${json[num].distance}</li>
                              <li>Number of Moons: ${json[num].moons}</li>
                           </ol>
                           <img src="${json[num].image}">`
                  });
               });
            });

      });
   });  
   
   

   