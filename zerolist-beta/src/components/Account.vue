<template>
  <v-container fluid>
    <v-layout row wrap justify-center="">
      <v-flex xs12 class="text-xs-center" mt-5>
        <img :src="user.photoURL" width="100"> <br>
        
        <h1>Welcome {{user.displayName}}</h1>
      </v-flex>
      <div class="text-xs-center">
        <v-switch 
          :label="`Daily email notifications at 6AM!`"
          :v-model="switch1"
        ></v-switch>
      </div>
      <v-flex xs12 class="text-xs-center" mt-2>
        <v-btn color="info" to="/home">Home</v-btn>
      </v-flex>
      <v-flex xs12 class="text-xs-center" mt-2>
        <v-btn >CONFIG</v-btn>
      </v-flex>
      <v-flex xs12 class="text-xs-center" mt-2>
        <v-btn color="error" @click=logOut>Log Out</v-btn>
      </v-flex>
    </v-layout>  
  </v-container>
</template>

<script>
  import auth from '@/auth'

  export default {
    name: 'auth-success',
    computed: {
      user () {
        return this.$store.getters['user/user']
      }
    },
    methods: {
      logOut () {
        auth.logout()
      }
    }
  }
</script>

<style scoped>
  img {
    border-radius: 50px;
  }

  h3 {
    margin-bottom: 0;
  }

  p {
    margin-top: 0;
  }

  pre {
    text-align: left;
  }
</style>