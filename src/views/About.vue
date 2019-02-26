<template>
  <div class="about">
    <Header />
 <div class="container center">
          <div class="row">
            <div class="col-md-6 mid">

            
                <ul id="box" class="">
             <h3>{{this.city}}     <img id="icon2" src=""> </h3>
          <li class="list-group-item" id="temp"> Current Temp </li>
          <li class="list-group-item" id="des"> Current Conditions </li>
          <li class="list-group-item" id="pressure"> Pressure:</li>
          <li class="list-group-item" id="humidity"> Humidity: </li>
            <li class="list-group-item" id="wind"> Wind: </li>
        </ul>
      
      <form  id="weather-lookup">
      <div class="textBox">
        <label for="txt-weather"></label>
        <p>Enter Your City</p>
        <input type="text" class="form-control" id="txt-city" placeholder="Enter a City" v-model="city" name="city" required />
      </div>

      <div>
        <button
          title="what city"
          type="button"
          class="btn btn-info btn-block"
          value="Weather"
          v-on:click="getExternel"
        >
          Weather Data
        </button>
        <!--    <input type="submit" id="btn-lookup" class="btn btn-info" value="My Weather">-->
      </div>
    </form>
            </div>

          </div>
 
        </div>

  
 
  </div>
</template>
 <script>
 // document.getElementById('button3').addEventListener('click', getExternal)
 import Header from '../components/Header'
 export default {
     data() {
     return {
    
       city: ''
     }
   },
   components: {
    
     Header
   },

   methods: {
    getExternel() {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${
          this.city
        }&units=imperial&APPID=3a5bd42cb39dccd2872563a469016458 `
      ).then(res =>
        res
          .json()
          .then(data => {
            //console.log(data);
          //  let output = "";
           
            /*  output += `<p>${data.main.temp}  </br> 
              ${data.main.pressure} </br> 
               ${data.main.humidity}
              </p>`;*/
             document.getElementById("temp").innerHTML = `Current Temp: ${data.main.temp} &#8457`;     
             document.getElementById("des").innerHTML = `Current Conditions: ${data.weather[0].description}`;                              
             document.getElementById("pressure").innerHTML = `Pressure: ${data.main.pressure}`;
             document.getElementById("humidity").innerHTML = `Humidity: ${data.main.humidity}`;
             document.getElementById("wind").innerHTML = `Wind: ${data.wind.speed}`;
                  let iconcode;
                   iconcode = data.weather[0].icon;
                  let iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
                     document.getElementById("icon2").src = iconurl;
                   let txt_city =  document.getElementById("txt-city");
                   txt_city.value = '';
          })
          .catch(function(err) {
            console.log(err);
          }),
         
      );
     
    },
   
  }
 }
 </script>
 
 <style scoped>
 
#box{
  padding: 0;
}
.btn {
  margin-top: 8px;
 
}

.mid {
 border: solid black 2px;
 margin-top: 10px;
 padding: 10px;
}
 </style>
 