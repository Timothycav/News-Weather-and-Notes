<template>
  <div class="about">
    <Header />
  
 <div class="container">
          <div class="row">
            <div class="col-12 col-md-4 my-4">
              <h3>News and Weather</h3>
            
                <ul id="box" class="">
                  <span>{{moment().format('MMMM Do YYYY, h:mm:ss a')}}</span>
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
          return: false
        >
          Weather Data
        </button>
       
      </div>
    </form>
            </div>

 <div class="col-12 col-md-4 my-4">
  
     
        <div class="card card-body">
          <div class="news"></div>
           <div class="newstitle card-title"></div>
             <div class="description"></div>
              <a href="" class="btn btn-primary" id="link">Full Story Here</a>
               <div> <img class="card-img-top" src="" id="news_img"></div>
        </div>
 </div>
 <div class="col-12 col-md-4 my-4">
         <div class="card card-body">
          <div class="news2"></div>
           <div class="newstitle2 card-title"></div>
             <div class="description2"></div>
              <a href="" class="btn btn-primary" id="link2">Full Story Here</a>
               <div> <img class="card-img-top" src="" id="news_img2"></div>
        </div>
</div>
<div class="col-12 col-md-4 my-4"> <!--4-->
         <div class="card card-body">
          <div class="news3"></div>
           <div class="newstitle3 card-title"></div>
             <div class="description3"></div>
              <a href="" class="btn btn-primary" id="link3">Full Story Here</a>
               <div> <img class="card-img-top" src="" id="news_img3"></div>
        </div>
</div>
<div class="col-12 col-md-4 my-4">
         <div class="card card-body">
          <div class="news4"></div>
           <div class="newstitle4 card-title"></div>
             <div class="description4"></div>
              <a href="" class="btn btn-primary" id="link4">Full Story Here</a>
               <div> <img class="card-img-top" src="" id="news_img4"></div>
        </div>
</div>
<div class="col-12 col-md-4 my-4">
         <div class="card card-body">
          <div class="news5"></div>
           <div class="newstitle5 card-title"></div>
             <div class="description5"></div>
              <a href="" class="btn btn-primary" id="link5">Full Story Here</a>
               <div> <img class="card-img-top" src="" id="news_img5"></div>
        </div>
</div>

      </div>

          </div>
 
        

  <div class="container"> 
    <div class="row"> 
      <div class="col-12 col-md-4 my-4">
 <form>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" v-model="email" placeholder="Enter email">
  
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" v-model="password" placeholder="Password">
  </div>
 
  <button type="button" class="btn btn-primary" v-on:click="signIn" >Sign In</button>
</form>
</div>
</div>
</div>
  </div>
</template>
 <script>
 
  import Firebase from 'firebase'
  import firebase from 'firebase'
  import moment from 'moment'
  import Header from '../components/Header'
 export default {
     data() {
     return {
          email: '',
          password: '',
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
   
      getNews () {
      let nws;
      const url = 'https://newsapi.org/v2/top-headlines?' +
           'country=us'+
          '&apiKey=3f12352d060244a3909c4ac92ce96aae';
      const req = new Request(url);
      fetch(req)
          .then((response) => response.json())
      .then(data => {
          nws = data;
      $('.news').text(data.articles[0].source.name);
      $('.newstitle').text(data.articles[0].title);
      $('.description').text(data.articles[0].description);
      /*  $('#news_img').src(data.articles[0].urlToImage);*/
      document.getElementById("news_img").src=data.articles[0].urlToImage;

      let link= data.articles[0].url;
      document.getElementById("link").href = link;
      /*     $('.link').text(data.articles[0].url); */

      $('.news2').text(data.articles[1].source.name);
      $('.newstitle2').text(data.articles[1].title);
      $('.description2').text(data.articles[1].description);
      /*  $('#news_img').src(data.articles[0].urlToImage);*/
      document.getElementById("news_img2").src=data.articles[1].urlToImage;

      let link2= data.articles[1].url;
      document.getElementById("link2").href = link2;

         $('.news3').text(data.articles[2].source.name);
          $('.newstitle3').text(data.articles[2].title);
          $('.description3').text(data.articles[2].description);
          /*  $('#news_img').src(data.articles[0].urlToImage);*/
         document.getElementById("news_img3").src=data.articles[2].urlToImage;

         let link3= data.articles[2].url;
          document.getElementById("link3").href = link3;

          $('.news4').text(data.articles[3].source.name);
          $('.newstitle4').text(data.articles[3].title);
          $('.description4').text(data.articles[3].description);
          /*  $('#news_img').src(data.articles[0].urlToImage);*/
         document.getElementById("news_img4").src=data.articles[3].urlToImage;

          let link4= data.articles[3].url;
          document.getElementById("link4").href = link4;
/*-----------------------------------------------------------------------------*/
          $('.news5').text(data.articles[4].source.name);
          $('.newstitle5').text(data.articles[4].title);
          $('.description5').text(data.articles[4].description);
          /*  $('#news_img').src(data.articles[0].urlToImage);*/
         document.getElementById("news_img5").src=data.articles[4].urlToImage;

          let link5= data.articles[4].url;
          document.getElementById("link5").href = link5;

          /*-----------------------------------------------------------------------------*/

      /*    $('.news6').text(data.articles[5].source.name);
          $('.newstitle6').text(data.articles[5].title);
          $('.description6').text(data.articles[5].description);
          /*  $('#news_img').src(data.articles[0].urlToImage);*/
       //   document.getElementById("news_img6").src=data.articles[5].urlToImage;

   //       let link6= data.articles[5].url;
   //       document.getElementById("link6").href = link6;

   //   console.log(data);
      });

   //   });

   },
  moment: function(){
    return moment();
  },
 
   signIn: function() {
        firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
          (user) => {
            this.$router.replace('about')
          },
          (err) => {
            alert('Oops. ' + err.message)
          }
        );
      }
   },  
   created:function(){

    this.getNews()
   
   }, 
  
 
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
 