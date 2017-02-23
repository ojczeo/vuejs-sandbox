<script>
  export default {
    name: 'computed',
    data () {
      return {
        first: '',
        last: '',
        xp: 10
      }
    },
    methods: {
      addXP: function () {
        this.xp += 10
      },
      decreaseXP: function () {
        this.xp -= 10
      }
    },
    computed: {
      fullname: {
        set: function (value) {
          const name = value.split(' ')
          this.first = name[0]
          if (name.length >= 2) {
            this.last = name[name.length - 1]
          }
        },
        get: function () {
          return this.first + ' ' + this.last
        }
      },
      level: function () {
        if (this.xp >= 200) {
          return 'Pro'
        } else if (this.xp >= 100) {
          return 'Intermediate'
        } else if (this.xp >= 0) {
          return 'Beginner'
        } else {
          return 'Banned'
        }
      }
    }
  }
</script>
<template src="./Computed.html"></template>
<style src="./Computed.scss"></style>
