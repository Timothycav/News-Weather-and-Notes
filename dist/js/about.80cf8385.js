(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"84a5":function(t,e,i){"use strict";var s=i("a876"),a=i.n(s);a.a},a876:function(t,e,i){},f820:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"about"},[i("Header"),i("div",{attrs:{id:"datePlace"}}),i("div",{staticClass:"container center"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-md-6 mid"},[i("ul",{attrs:{id:"box"}},[i("h3",[t._v(t._s(this.city)+"     "),i("img",{attrs:{id:"icon2",src:""}})]),i("li",{staticClass:"list-group-item",attrs:{id:"temp"}},[t._v(" Current Temp ")]),i("li",{staticClass:"list-group-item",attrs:{id:"des"}},[t._v(" Current Conditions ")]),i("li",{staticClass:"list-group-item",attrs:{id:"pressure"}},[t._v(" Pressure:")]),i("li",{staticClass:"list-group-item",attrs:{id:"humidity"}},[t._v(" Humidity: ")]),i("li",{staticClass:"list-group-item",attrs:{id:"wind"}},[t._v(" Wind: ")])]),i("form",{attrs:{id:"weather-lookup"}},[i("div",{staticClass:"textBox"},[i("label",{attrs:{for:"txt-weather"}}),i("p",[t._v("Enter Your City")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.city,expression:"city"}],staticClass:"form-control",attrs:{type:"text",id:"txt-city",placeholder:"Enter a City",name:"city",required:""},domProps:{value:t.city},on:{input:function(e){e.target.composing||(t.city=e.target.value)}}})]),i("div",[i("button",{staticClass:"btn btn-info btn-block",attrs:{title:"what city",type:"button",value:"Weather","return:":"",false:""},on:{click:t.getExternel}},[t._v("\n         Weather Data\n       ")])])])])])]),t._m(0)],1)},a=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container center"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-md-6 mid"},[i("div",{staticClass:"card card-body"},[i("div",{staticClass:"news"}),i("div",{staticClass:"newstitle card-title"}),i("div",{staticClass:"description"}),i("a",{staticClass:"btn btn-primary",attrs:{href:"",id:"link"}},[t._v("Full Story Here")]),i("div",[i("img",{staticClass:"card-img-top",attrs:{src:"",id:"news_img"}})])]),i("div",{staticClass:"card card-body"},[i("div",{staticClass:"news2"}),i("div",{staticClass:"newstitle2 card-title"}),i("div",{staticClass:"description2"}),i("a",{staticClass:"btn btn-primary",attrs:{href:"",id:"link2"}},[t._v("Full Story Here")]),i("div",[i("img",{staticClass:"card-img-top",attrs:{src:"",id:"news_img2"}})])])])])])}],n=(i("7f7f"),i("cadf"),i("551c"),i("097d"),i("0418")),r={data:function(){return{city:""}},components:{Header:n["a"]},methods:{getExternel:function(){fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(this.city,"&units=imperial&APPID=3a5bd42cb39dccd2872563a469016458 ")).then(function(t){return t.json().then(function(t){var e;document.getElementById("temp").innerHTML="Current Temp: ".concat(t.main.temp," &#8457"),document.getElementById("des").innerHTML="Current Conditions: ".concat(t.weather[0].description),document.getElementById("pressure").innerHTML="Pressure: ".concat(t.main.pressure),document.getElementById("humidity").innerHTML="Humidity: ".concat(t.main.humidity),document.getElementById("wind").innerHTML="Wind: ".concat(t.wind.speed),e=t.weather[0].icon;var i="http://openweathermap.org/img/w/"+e+".png";document.getElementById("icon2").src=i;var s=document.getElementById("txt-city");s.value=""}).catch(function(t){console.log(t)})})},getNews:function(){var t="https://newsapi.org/v2/top-headlines?country=us&apiKey=3f12352d060244a3909c4ac92ce96aae",e=new Request(t);fetch(e).then(function(t){return t.json()}).then(function(t){t,$(".news").text(t.articles[0].source.name),$(".newstitle").text(t.articles[0].title),$(".description").text(t.articles[0].description),document.getElementById("news_img").src=t.articles[0].urlToImage;var e=t.articles[0].url;document.getElementById("link").href=e,$(".news2").text(t.articles[1].source.name),$(".newstitle2").text(t.articles[1].title),$(".description2").text(t.articles[1].description),document.getElementById("news_img2").src=t.articles[1].urlToImage;var i=t.articles[1].url;document.getElementById("link2").href=i})}},created:function(){this.getNews(),$("#datePlace").text((new Date).getFullYear())}},c=r,l=(i("84a5"),i("2877")),d=Object(l["a"])(c,s,a,!1,null,"d7c1fbf4",null);d.options.__file="About.vue";e["default"]=d.exports}}]);
//# sourceMappingURL=about.80cf8385.js.map