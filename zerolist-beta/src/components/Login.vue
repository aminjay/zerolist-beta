
<template>
  <div>
    <h1>Sign in</h1>
    <div id="firebaseui-auth-container"></div>
  </div>
</template>

<template>
  <v-container fluid>
    <v-layout column wrap align-center>
      <v-flex>
        <blockquote class="blockquote text-xs-center">
          Welcome to your account sign-in! <br>
          Choose from any of the login methods below.
        </blockquote>
      </v-flex>
        <div>
          <div id="firebaseui-auth-container"></div>
        </div>
    </v-layout>
    
  </v-container>
</template>

<script>
  import auth from '@/auth'

  export default {
    name: 'auth',
    mounted () {
      auth.authForm('#firebaseui-auth-container')
    }
  }
</script>

<style>
  @import "../../node_modules/firebaseui/dist/firebaseui.css";
</style>
