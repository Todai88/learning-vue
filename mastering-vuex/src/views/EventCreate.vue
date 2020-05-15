<template>
  <div>
    <h1>Create and Event, {{ user.name }}</h1>
    <p>Event created by {{ user.name }}</p>
    <p>There are {{ categoriesLength }} categories:</p>
    <ul>
      <li v-for="cat in categories" :key="cat">{{ cat }}</li>
    </ul>
    <p>{{ getEventById(1) }}</p>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['categoriesLength', 'getEventById']),
    ...mapState(['user', 'categories'])
  }
}
</script>
