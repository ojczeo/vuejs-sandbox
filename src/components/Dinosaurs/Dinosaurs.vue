<script>
  export default {
    name: 'dinosaurs',
    data: () => {
      return {
        title: 'Dinosaurs',
        isChecked: 'are awesome',
        isUnchecked: 'are poor - check if you not agree',
        dinos: [
          {text: 'Velociraptor', weight: 10, quantity: 1},
          {text: 'Mastodont', weight: 10, quantity: 4},
          {text: 'Paczkozaur', weight: 10, quantity: 2}
        ],
        periods: [
          {name: 'Triassic', value: 1},
          {name: 'Jurassic', value: 2},
          {name: 'Cretaceous', value: 3}
        ],
        selectedPeriods: [],
        speciesUpdated: 0,
        dinosUpdated: 0,
        totalDinos: 0,
        totalSpecies: 0,
        dinoName: null,
        chosenDino: '',
        checked: false,
        cachedName: '',
        cachedWeight: ''
      }
    },
    watch: {},
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
      addItem: function (event) {
        console.log(event)
        const input = document.getElementById('itemForm').getElementsByTagName('input')
        const inputWeight = document.getElementById('itemFormWeight').getElementsByTagName('input')
        this.dinos.push({text: input.value, weight: inputWeight.value, quantity: 1})
        input.value = ''
        inputWeight.value = ''
        this.dinoName = null
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
<template src="./Dinosaurs.html">
</template>
<style scoped>
  ul {
    list-style: none;
  }
</style>
