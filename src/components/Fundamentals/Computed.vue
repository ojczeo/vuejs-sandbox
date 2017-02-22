<template>
  <div class="container">
    <h1>Computed</h1>
    <h2>{{fullname}}</h2>
    <input v-model="first" placeholder="Firstname" />
    <input v-model="last" placeholder="Lastname" />
    <div class="">
      <div class="row">
        <div class="col-md-12 text-center">
          <h4>You are a <strong>{{level}}</strong></h4>
          <hr />
          <h5>Current XP: {{xp}}</h5>
        </div>
      </div>
      <div class="row">
        <div class="">
          <div class="row">
            <div class="">
              <button class="btn" @click="addXP">Add XP</button>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <button class="btn" @click="decreaseXP"> Decrease XP</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

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
      fullname: function () {
        return this.first + ' ' + this.last
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
