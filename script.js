let form = document.querySelector("#pick-location")

form.addEventListener("submit", (e)=>{
    e.preventDefault();

    let chooseLocation = e.target["location"].value;
    let errorMsg = document.querySelector("#error-message")
  

    if(!chooseLocation){
        errorMsg.textContent = "Please enter a location"
        
    } else {

        errorMsg.textContent = "";
        e.target["location"].value = "";
    
        fetch(`https://wttr.in/${chooseLocation}?format=j1`)
            .then((res)=> {
                return res.json();
            }).then((data)=> {

                console.log(data)

                let area = data.nearest_area;

                let region = area[0].region[0].value;
                let country = area[0].country[0].value
                let currentArea = area[0].areaName[0].value 

                let currentTemp = data.current_condition;
                let feelsLike = currentTemp[0].FeelsLikeF;

                let dateTime = currentTemp[0].localObsDateTime;

                let forcast = data.weather;

                let todayAvg = forcast[0].avgtempF
                let todayMax = forcast[0].maxtempF
                let todayMin = forcast[0].mintempF

                let tomorrowAvg = forcast[1].avgtempF
                let tomorrowMax = forcast[1].maxtempF
                let tomorrowMin = forcast[1].mintempF

                let dayAfterAvg = forcast[2].avgtempF
                let dayAfterMax = forcast[2].maxtempF
                let dayAfterMin = forcast[2].mintempF

                let previousSearch = document.querySelector("#no-search-yet")
                let ul = document.querySelector("#previous-list")
                let listItem = document.createElement("li")
                
                currentLocation.innerHTML = `
                <div id ="current-location" class="display"> </div>
                <h2>${currentArea}</h2>
                <div><strong>Area: </strong><span id="area">${currentArea}</span></div>
                <br>
                <div><strong>Region: </strong><span id="region"> ${region}</span></div>
                <br>
                <div><strong>Country: </strong><span id="country">${country}</span></div>
                <br>
                <div><strong>Currently: </strong><span id="current">Feels like ${feelsLike}°F</span></div>
                <br>`;

                let forecast = document.querySelector("#forecast");

                forecast.innerHTML =`
                <div id = "today">
                    <h3>Today</h3>
                    <div><strong>Average Temp: </strong><span>${todayAvg} °F</span></div>
                    <br>
                    <div><strong>Max Temp: </strong><span> ${todayMax} °F</span></div>
                    <br>
                    <div><strong>Min Temp: </strong><span> ${todayMin} °F</span></div>
                <br>      
                </div>
                <div id ="tomorrow">
                    <h3>Tomorrow</h3>
                    <div><strong>Average Temp:</strong><span> ${tomorrowAvg}°F</span></div>
                    <br>
                    <div><strong>Max Temp:</strong><span> ${tomorrowMax}°F</span></div>
                    <br>
                    <div><strong>Min Temp:</strong><span> ${tomorrowMin}°F</span></div>
                    <br>          
                 </div>
                 <div id="day-after">
                    <h3>Day After Tomorrow</h3>
                    <div><strong>Average Temp:</strong><span> ${dayAfterAvg}°F</span></div>
                    <br>
                    <div><strong>Max Temp:</strong><span> ${dayAfterMax}°F</span></div>
                    <br>
                    <div><strong>Min Temp:</strong><span> ${dayAfterMin}°F</span></div>
                    <br>
                 </div>`;

                previousSearch.textContent = "";

                let anchor = document.createElement("a");
                anchor.textContent = currentArea;
            
                listItem.textContent =  ` - ${feelsLike}°F`
                listItem.prepend(anchor);
                ul.append(listItem);


            }).catch((err)=>{
                throw err;// still returns data when random info entered into form 
            });
    }
                

                // anchor.addEventListener("click", (e)=>{
                //     e.preventDefault();

                // })

});


