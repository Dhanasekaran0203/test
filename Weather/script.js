let weather ={
    apiKey :"cca9a4eabddea6dc35e5e7844772e641",
     api :"https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}"
}
const whetherreport = (city) => {
    const fullapi = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weather.apiKey}`)
    return fullapi.then((response)=>{
       return response.json()
    })
}
const search = document.getElementById("inputId")
var button = document.getElementById("btnId")
const whetherdata = button.addEventListener("click",()=>{
    whetherreport(search.value).then((res)=>{
        console.log(res);
        console.log('ajith');
    })
})
