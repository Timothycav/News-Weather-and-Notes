<template>

<div>
    <Header />

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


</template>






<script>
import About from '../views/About.vue'
import firebase from 'firebase'
import moment from 'moment'
import Firebase from 'firebase'
  import {textsRef} from '../views/About.vue'
// @ is an alias to /src
//import Posts from '../components/posts'
import Header from '../components/Header'
export default {
     name: 'addText',
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
       
       day: '',
      
         
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
      moment: function(){
    return moment();
  },
  
    },
 
}
</script>





<style scoped>

</style>
