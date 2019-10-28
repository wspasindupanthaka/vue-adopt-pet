<template>
  <div>
    <h1>Cats for Adoption</h1>
    <b-table striped hover :items="cats">
      <template v-slot:cell(name)="data">        
        <router-link :to="`/pets/cats/${data.index}`">{{ data.value }}</router-link>
      </template>
    </b-table>
  </div>
</template>


<script>
// import cats from "@/data/cats";
import {mapState} from 'vuex'
//importing from app state 

export default {
  data() {
    return {
     
    };
  },
  computed : {
    // cats() {
    //   return this.$store.state.cats
    // }
    //another way to access store
    ...mapState ([
      'cats'
    ])
    //importing from map state
  }
  
};
</script>
