fetch("https://wttr.in/" + "NewYork" + "?format=j1")
    .then((res)=> {
        return res.json();
    }).then((data)=> {
        let current = data.current_condition;
        let feelsLike = current[0].FeelsLikeF;

        let dateTime = current[0].localObsDateTime;

        let area = data.nearest_area;// grab region country area from here 
        let forcast = data.weather;

        //let todayAvg = forcast[0].avgtempF
        //let todayMax = forcast[0].maxtempF
        //let todayMin = forcast[0].mintempF

        let region = area[0].region[0].value;
        let country = area[0].country[0].value
        let currentArea = area[0].areaName[0].value

        console.log(forcast)
        

        //console.log(region)
        //console.log(country)
        //console.log(currentArea)

        //console.log(feelsLike);
        //console.log(dateTime);

    }).catch((err)=>{
    console.log(err);
    });


// when input submitted, no-search-yet.textContent = "";
// nearest area area name value 
// 
