<template>
    <div class="one">
  <Header />
          <div class="container">  
        <h1 class="title text-center">Notes</h1>
      <div class=" row"> 
  <div class="col-sm-6 mb-4 col-lg-6"  v-for="newText in texts"
                     v-bind:key="newText['.key']" >
    <div class="col-6" v-if="!newText.edit">
               <div class="card card-body">
    <h5 class="card-title"> {{newText.name}} </h5>
    <h6 class="card-subtitle mb-2">  {{newText.text}}</h6>
     <span class="date"> {{newText.date}}</span>
    <i class="fa fa-trash fa-lg" aria-hidden="true"
                  v-on:click="removeText(newText)"></i>
                  <br>
      <button class="btn btn-info"  @click="editText(newText['.key'])">Edit</button>

 
  </div>
 
   
                        </div>
          
    <div class="col-6" v-else> 
        <div class="card card-body mb-2"> 
             <div class="form-group text">
        <input type="text"  class="form-control"  v-model="newText.name">
             </div>
            <div class="form-group text">  
                 <textarea class="form-control" v-model="newText.text" id="Textarea1" rows="3"></textarea>
        
            </div>
         <button class="btn btn-success"  @click="saveEdit(newText)">Save</button>
         <button class="btn btn-danger" @click="cancelEdit(newText['.key'])">Cancel</button>
         </div>
  </div> 
        </div>
        </div>
    </div>
       <button class="btn btn-danger" v-on:click="logout">Logout</button>
    </div>
</template>


<script>
  import firebase from 'firebase'
  import Firebase from 'firebase'
  import About from '../views/About.vue'
  import {textsRef} from '../views/About.vue'
  import Header from '../components/Header'
  
export default {
      firebase: {
    texts: textsRef
    
  },
  data() {
    return {
     
      title: 'texts',
     
      newtext: {
        name: '',
        text: '',
        date: '',
        edit: ''
      },
    
    }
  },
       components: {
         About,
         Header
  },
   methods: {
     
       logout: function() {
       firebase.auth().signOut().then(() => {
        this.$router.replace('/')
      })
    },
      removeText: function (newText) {
        textsRef.child(newText['.key']).remove();
       
      },
       editText:function(key){
      textsRef.child(key).update({edit:true})
    },
    saveEdit:function(newText){
      const key = newText['.key']
      textsRef.child(key).set({name:newText.name, text:newText.text, edit:false})
    },
    cancelEdit:function(key){
      textsRef.child(key).update({edit:false})
    }
     
            
            }
    }
      
    


</script>

<style scoped>
.row {
    margin: 10px;
   
}
.col-6 {
max-width: 100%  !important;

}

.btn {
    margin: 7px;
}
</style>
