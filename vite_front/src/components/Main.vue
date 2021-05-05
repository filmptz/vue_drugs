<template>
  <div>
    <div class="container-fluid">
        <h1>List of Drugs</h1>
        <div class="border" style="padding: 15px">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Image</th>
                <th scope="col">Drug Name</th>
                <th scope="col">Dose</th>
                <th scope="col">Package</th>
                <th scope="col">Unit</th>
                <th scope="col">Method</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(drug,key) in drugs" :key='key'>
                <th>{{key}}</th>
                <td><img src="../assets/default.jpg" width="40"></td>
                <td>{{drug.name}}</td>
                <td>{{drug.dose}}</td>
                <td>{{drug.package}}</td>
                <td>{{drug.unit}}</td>
                <td>
                 <router-link :to="{ path:'detail', name: 'Detail' , params:{drugId: key} }">
                  <button type="button" class="btn btn-info" >Detail</button>
                 </router-link>
                </td>
              </tr>
            </tbody>
        </table>
      </div>
    </div>
    <br>
  </div>
</template>

<script>
import drugsJson from '../drugs.json'
import axios from 'axios'

export default {
  name: 'Main',
  data () {
    return {
      drugs: []
    }
  },
  created() {
    //Don,t use API
    //this.drugs=drugsJson

    //Use API
        axios.get('http://localhost:5000/getAll')
        .then((response)=>{
             console.log(response.data)
             this.drugs = response.data
         })
         .catch((error)=>{
             console.log(error) // should have table name of msg Error
         })
  },
  mounted() {

  },
  methods: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
  margin-top: 50px;
  margin-bottom: 50px;
  color: #42b983;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>