<template>
  <div id="dinosaurs">
    <header>{{title}}</header>
    <p>{{content}}</p>
    <div>
      <input id="itemForm">
      <button v-on:click="addItem">Add Dinosaur</button>
    </div>
    <ul>
      <li v-for="(dino, index) in dinos">
        <button v-on:click="deleteItem(index)">x</button>
        <h4>{{ dino.text | capitalize }}</h4>
        <span>The {{dino.text}} weights {{dino.weight}}.</span>
      </li>
    </ul>
  </div>

</template>

<script>

export default {
  data: () => {
    return {
      title: 'dinosaurs',
      content: 'molto bene',
      dinos: [
        { text: 'Velociraptor' },
        { text: 'Mastodont' },
        { text: 'Paczkozaur' }
      ]
    }
  },
  filters: {
    capitalize: function (value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    },
    undercase: function (value) {
      if (!value) return ''
      value = value.toString()
      return value.toLowerCase()
    },
    url: function (value) {
      if (!value) return ''
      value = value.toString()
      return `https://pl.wikipedia.org/wiki/${value}`
    }
  },
  methods: {
    addItem: function () {
      const input = document.getElementById('itemForm')
      this.items.push({ text: input.value })
      input.value = ''
    },
    deleteItem: function (index) {
      this.items.splice(index, 1)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
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
