<template>
  <div>
    <header>{{title}}</header>
    <p>{{content}}</p>
    <div>
      <input id="itemForm" type="text" placeholder="Dino name">
      <input id="itemFormWeight" type="number" placeholder="Dino weight">
      <button v-on:click="addItem">Add Dinosaur</button>
    </div>
    <div  v-if="dinos.length > 0">
      <ul>
        <li v-for="(dino, index) in dinos">

          <h4>
            <a v-bind:href="url(dino.text)" target="_blank">
              {{ dino.text}}
            </a>
          </h4>
          <span>The {{dino.text}} weights {{dino.weight}}.</span>
          <button v-on:click="deleteItem(index)" class="right">Make extinct</button>
          <div class="left">
            Quantity
            <button v-on:click="decrementDino(index)" v-if="dino.quantity > 0">-</button>
            {{dino.quantity}}
            <button v-on:click="incrementDino(index)">+</button>
          </div>
        </li>
      </ul>
      <ul>
        <li>
          Total dinos: {{ totalDinos }}
          <span class="right text-red">
            Updated: {{dinosUpdated}}
          </span>
        </li>
        <li>
          Total species: {{ totalSpecies }}
          <span class="right text-red">
            Updated: {{speciesUpdated}}
          </span>
        </li>
      </ul>
    </div>
    <p v-else>
      No dinosaurs
    </p>
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
        { text: 'Velociraptor', weight: 10, quantity: 1 },
        { text: 'Mastodont', weight: 10, quantity: 4 },
        { text: 'Paczkozaur', weight: 10, quantity: 2 }
      ],
      speciesUpdated: 0,
      dinosUpdated: 0,
      totalDinos: 0,
      totalSpecies: 0
    }
  },
  watch: {

  },
  computed: {
    totalDinos: function () {
      this.dinosUpdated += 1
      let sum = 0
      const items = this.dinos
      for (let i in items) {
        sum += items[i].quantity
      }
      return sum
    },
    totalSpecies: function () {
      this.speciesUpdated += 1
      return this.dinos.length
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
      this.dinos.push({ text: input.value, weight: inputWeight.value, quantity: 1 })
      input.value = ''
      inputWeight.value = ''
    },
    deleteItem: function (index) {
      this.dinos.splice(index, 1)
    },
    incrementDino: function (index) {
      this.dinos[index].quantity += 1
    },
    decrementDino: function (index) {
      if (this.dinos[index].quantity > 1) {
        this.dinos[index].quantity -= 1
      } else {
        this.dinos.splice(index, 1)
      }
    },
    url: function (value) {
      if (!value) return ''
      value = value.toString()
      return `https://pl.wikipedia.org/wiki/${value}`
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
  display: block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

</style>
