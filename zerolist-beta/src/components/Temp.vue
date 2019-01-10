<template>
  <v-container fluid>
    <v-snackbar 
      color="primary"
      v-model="show"
      :timeout="3000"
      :top="true"
      :left="true"
      :absolute="true"
    >
    {{message}}
  </v-snackbar>
    <v-layout row wrap>
      <v-img src="@/assets/logo.png" alt=""></v-img>
      <v-flex xs12 class="text-xs-center" mt-5>
        <h1>Welcome to Zerolist,<br>
          a revolutionary to-do app.</h1>
      </v-flex>
      <v-flex xs12 sm6 offset-sm3 mt-3>
        <v-flex class="text-xs-center">
          <t>Gone are the days of endless to-do lists. <br>
          Now you can end every day with 0 things left to do.</t>
        </v-flex>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      show: true,
      message: 'Welcome to Zerolist!'
    }
  }
}
</script>