<template>
  <div>
    <header>{{title}}</header>
    <p>{{content}}</p>
    <div>
      <input id="itemForm" type="text" placeholder="Dino name">
      <input id="itemFormWeight" type="number" placeholder="Dino weight">
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
  name: 'dinosaurs',
  data: () => {
    return {
      title: 'dinosaurs',
      content: 'molto bene',
      dinos: [
        { text: 'Velociraptor', weight: 10 },
        { text: 'Mastodont', weight: 10 },
        { text: 'Paczkozaur', weight: 10 }
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
      const inputWeight = document.getElementById('itemFormWeight')
      this.dinos.push({ text: input.value, weight: inputWeight.value })
      input.value = ''
    },
    deleteItem: function (index) {
      this.dinos.splice(index, 1)
    }
  }
}

</script>

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
