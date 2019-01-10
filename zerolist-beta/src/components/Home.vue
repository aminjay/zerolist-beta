<template>
  <v-container fluid>
     <v-snackbar 
      color="primary"
      v-model="show"
      :timeout="3000"
      :top="true"
    >
    {{message}}
  </v-snackbar>
    <v-layout row wrap>
      <v-flex text-xs-center>
        <v-card>
        <v-list class="pa-0">
          <v-list-tile>
            <v-list-tile-action>
              <v-checkbox
                :input-value="allChecked"
                @change="toggleAll(!allChecked)"
                color="info"
                v-if="todos.length > 0"
              ></v-checkbox>
              <v-icon
                color="info"
                v-else
              >check</v-icon>
            </v-list-tile-action>
            <v-text-field
              :label="'New todo input'"
              @keydown.enter="addTodo"
              autofocus
              browser-autocomplete="off"
              clearable
              color="info"
              flat
              hide-details
              maxlength="1000"
              placeholder="What can you finish today?"
              solo
              v-model="newTodo"
            ></v-text-field>
          </v-list-tile>
        </v-list>
      </v-card>

      <v-card class="mt-3" v-show="todos.length">
        <v-progress-linear class="my-0" color="info" v-model="progressPercentage"/>
         <v-card-actions class="px-3" v-show="todos.length">
          <span class="grey--text">
            Doubleclick a todo to edit. Check to complete. Clear your day below once all tasks are complete!
          </span>
          
          
        </v-card-actions>
        <v-list class="pa-0">
          <template v-for="todo in todos">
            <v-divider :key="`${todo.uid}-divider`"></v-divider>
            <TodoItem
              :key="todo.uid"
              :todo="todo"
            />
          </template>
        </v-list>

      </v-card>
      
      <v-btn
        @click="clearCompleted"
        block
        class="mt-3"
        color="info"
        depressed
        
        square
        v-show="todos.length > 0"
        :disabled="remaining !== 0"
      >
        {{ remaining }} {{ remaining | pluralize('thing') }} left to do
      </v-btn>

      </v-flex>
      
    </v-layout>
  </v-container>
 
</template>

<script>
import { mapActions } from 'vuex'
import TodoItem from '@/components/TodoItem.vue'
const filters = {
  all: todos => todos,
  active: todos => todos.filter(todo => !todo.done),
  completed: todos => todos.filter(todo => todo.done)
}
export default {
  name: 'list',
  props: ['filter'],
  components: {
    TodoItem
  },
  data () {
    return {
      newTodo: '',
      filters: filters,
      visibility: this.filter,
      show: true,
      message: 'Welcome to Zerolist!'
    }
  },
  computed: {
    todos () {
      return this.$store.state.todos
    },
    allChecked () {
      return this.todos.every(todo => todo.done)
    },
    filteredTodos () {
      return filters[this.visibility](this.todos)
    },
    remaining () {
      return this.todos.filter(todo => !todo.done).length
    },
    progressPercentage () {
      const len = this.todos.length
      return ((len - this.remaining) * 100) / len
    }
  },
  methods: {
    ...mapActions([
      'toggleAll',
      'clearCompleted'
    ]),
    addTodo () {
      const text = this.newTodo.trim()
      if (text) {
        this.$store.dispatch('addTodo', text)
      }
      this.newTodo = ''
    }
  },
  filters: {
    pluralize: (n, w) => n === 1 ? w : (w + 's'),
    capitalize: s => s.charAt(0).toUpperCase() + s.slice(1)
  }
}
</script>

<style lang="stylus">
h1
  opacity: 0.3
.v-text-field .v-input__slot
  padding: 0 !important
</style>