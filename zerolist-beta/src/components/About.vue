<template>
  <v-container fluid>
    <v-layout row wrap>
      <v-flex class="text-xs-center" mt-3>
          <a href="https://docs.google.com/document/d/1ASVP8HHC0cncBG7yJrL2M_bviaCOpkFLHqc6QplRQNY/edit?usp=sharing" style="font-size: 30px; text-decoration: none">Click for updates and changelog!</a>
        </v-flex>
      <v-flex xs12 class="text-xs-center" mt-4>
        <h1>Welcome to Zerolist (BETA),<br>
          a revolutionary to-do app.</h1>
      </v-flex>
      <v-flex xs12 sm6 offset-sm3 mt-3>
        <v-flex class="text-xs-center">
          <t>Gone are the days of endless to-do lists. <br>
          Now you can end every day with 0 things left to do.</t>
        </v-flex>
        <img src="@/assets/logo-large.png" width=100%/>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'about',
  data () {
    return {
      show: true,
      message: 'Welcome to Zerolist!',
      url2: 'docs.google.com/document/d/1ASVP8HHC0cncBG7yJrL2M_bviaCOpkFLHqc6QplRQNY/edit?usp=sharing'
    }
  }
}
</script>