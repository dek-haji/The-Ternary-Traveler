import travelData from "./travelData";

const travelEvent = {
    submitTravelEntry() {
        //target the save button
        let button = document.getElementById("submit");
        button.addEventListener("click",travelEvent.submitEventListener);
    },
    submitEventListener(){
       let TravellerName = document.querySelector(".username__Input").value;
       let travellDescription = document.querySelector(".description").value;
       let costTravel = document.querySelector(".cost").value;
       let location = document.getElementById("scroll").value;

       //       // add user input into an object that will be passed into the database
        let newEntry = {
            name: TravellerName,
            description: travellDescription,
            cost: costTravel,
            currentLocation: location
        };
        travelData.postNewTravel(newEntry)
        .then(allTravel =>{
            travelData.getData()
        })


        }
    };


    export default travelEvent