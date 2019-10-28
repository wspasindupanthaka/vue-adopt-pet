<template>
  <div>
    <h1>{{species}} for Adoption</h1>
    <b-table striped hover :items="pets">
      <template v-slot:cell(name)="data">        
        <router-link :to="`/pets/${species}/${data.index}`">{{ data.value }}</router-link>
      </template>
    </b-table>
  </div>
</template>


<script>

//components are reusable Vue instances. In here we are going to create a common component for tables in Cats and Dogs
export default {
    props: {
        species: string,
        pets: Array
    }
}
</script>