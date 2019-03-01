<template>
  <div class="home">
     
 
  <Header />
<div id="datePlace">{{this.day}}</div>
   
     <div class="contaner text-center"> 

       <div class="row align-items-center">

         <div class="col-sm-12 col-lg-10">
 <h1 class="home">Home</h1>
       <form class="form_area" >
          <div class="form-group text" v-on:submit.prevent="addText">
            <label for="itemTitle" id="firstTitle">Title</label>
            <input type="text" id="itemTitle" class="form-control" v-model="newText.name">
          </div>
  <div class="form-group text">
    <label for="Textarea">Enter Text</label>
    <textarea class="form-control" v-model="newText.text" id="Textarea1" rows="3"></textarea>

<button type="submit" class="btn btn-primary btn-block" value="Add Text"  v-on:click="addText">Submit</button>
  </div> 
   
       </form>
         </div>
       </div>
    
</div>
  </div>
</template>

<script>
        let val;
        const today = new Date();
        val = today.getDate();
        document.getElementById("datePlace").innerHTML = val;
  
import moment from 'moment'
import Firebase from 'firebase'
// @ is an alias to /src
//import Posts from '../components/posts'
import Header from '../components/Header'

var config = {
    apiKey: "AIzaSyAVGWadO8KOW9XA6hl2xjD3i25IRVzcrS0",
    authDomain: "text-d26b6.firebaseapp.com",
    databaseURL: "https://text-d26b6.firebaseio.com",
    projectId: "text-d26b6",
    storageBucket: "text-d26b6.appspot.com",
    messagingSenderId: "235321307920"
  };
 // firebase.initializeApp(config);
   const app = Firebase.initializeApp(config)
   const db = app.database()

 export const textsRef = db.ref('texts')

 
export default {
  name: 'home',
   firebase: {
    texts: textsRef
  },
   data () {
    return {
         title: 'texts',
              newText: {
                 name: '',
                 text: '',
                 date: ''
              },
       
       day: ''
      
    
    }
  },
 components: {
    // Posts,
       Header,
      
   },
    methods: {
      addText: function() {
        this.newText.created_at = moment().format('DD MMM, YYYY')
      textsRef.push({name:this.newText.name, text:this.newText.text, edit: false, date:this.newText.created_at});

        this.newText.name = '';
        this.newText.text = '';
       this.$router.replace('/display')
      
    },
      showDate: function(){
       this.day = moment().format('DD MMM, YYYY')

       this.day = '';
      }
    },
  created:function(){

    this.showDate()
   
   }  
    
  }

</script>
<style scoped>

.text {
 
  margin:10px;
}
.form_area {
 margin: 10px;
 
 
}
.btn {
  margin-top: 10px;
}
</style>
