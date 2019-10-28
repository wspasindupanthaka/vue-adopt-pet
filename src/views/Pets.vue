<template>
  <div>
    <!-- how to access routing parameters  -->
    <!-- {{$route.params.species}} -->
    <!-- {{$route.params.id}} -->

    <h1>{{animal.name}}</h1>
    <p>{{animal.age}}</p>
    <p>{{animal.breed}}</p>
  </div>
</template>

<script>
import { mapState } from "vuex";
//importing from app state

export default {
  data() {
    return {
      animal: {}
    };
  },
  computed: {
    ...mapState(["cats", "dogs"])
    //importing from map state
  },
  mounted() {
    const animal = this[this.$route.params.species][this.$route.params.id];
    this.animal = animal;
  }
};
</script>
