let form = document.querySelector("#pick-location")

form.addEventListener("submit", (e)=>{
    e.preventDefault();

    let chosenLocation = e.target["location"].value;
    let errorMsg = document.querySelector("#error-message")

    if(!chosenLocation){
        errorMsg.textContent = "Please enter a location"
        
    } else {

        errorMsg.textContent = "";
        e.target["location"].value = "";
    
        fetch(`https://wttr.in/${chosenLocation}?format=j1`)
            .then((res)=> {
                return res.json();
            }).then((data)=> {

                let area = data.nearest_area;// grab region & country from here 
                let forcast = data.weather;
                console.log(data)

                let current = data.current_condition;

                let feelsLike = current[0].FeelsLikeF;
                let region = area[0].region[0].value;
                console.log(region)
                let country = area[0].country[0].value
                let currentArea = area[0].areaName[0].value // this should match input value of form 


                let dateTime = current[0].localObsDateTime;


                let todayAvg = forcast[0].avgtempF
                let todayMax = forcast[0].maxtempF
                let todayMin = forcast[0].mintempF
                console.log(todayMin)

                let tomorrowAvg = forcast[1].avgtempF
                let tomorrowMax = forcast[1].maxtempF
                let tomorrowMin = forcast[1].mintempF
                console.log(tomorrowAvg)

                let dayAfterAvg = forcast[2].avgtempF
                let dayAfterMax = forcast[2].maxtempF
                let dayAfterMin = forcast[2].mintempF

                let previousSearch = document.querySelector("#no-search-yet")
                let ul = document.querySelector("#previous-list")
                let listItem = document.createElement("li")
                
                currentLocation.innerHTML = `
                <div id ="current-location" class="display"> </div>
                <h2>${chosenLocation}</h2>
                <div><strong>Area: </strong><span id="area">${currentArea}</span></div>
                <br>
                <div><strong>Region: </strong><span id="region"> ${region}</span></div>
                <br>
                <div><strong>Country: </strong><span id="country">${country}</span></div>
                <br>
                <div><strong>Currently: </strong><span id="current">Feels like ${feelsLike}°F</span></div>
                <br>`;

                previousSearch.textContent = "";
                listItem.textContent = `${chosenLocation} - ${feelsLike}°F`
                ul.append(listItem)


            }).catch((err)=>{
                console.log(err);
            });
    }
});



// when input submitted, no-search-yet.textContent = "";
// nearest area area name value 
// 
