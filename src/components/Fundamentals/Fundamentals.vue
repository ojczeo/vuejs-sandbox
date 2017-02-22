<template>
  <div class="">
    <h5 :title="title">Loaded on - hover me!</h5>
    <h1 v-show="viewed">You viewed this header</h1>
    <h2 v-if="viewed2">You are viewing this header if</h2>
    <h2 v-else>You are viewing this header else</h2>
    <h3>{{message}}</h3>
    <h3 v-once>{{message}}</h3>
    <h3 v-cloak>Header cloaked</h3>
    <input v-model='message' type='text' />
    <button @click="countUp" class="btn red">Clicked {{count}} times</button>
    <img :src="url" :alt="title" :title="title" />
  </div>
</template>

<script>

  export default {
    name: 'fundamentals',
    data () {
      return {
        viewed: true,
        viewed2: false,
        message: 'First message',
        title: 'You\'ve loaded the page on' + new Date(),
        url: 'assets/logo.png',
        count: 0
      }
    },
    methods: {
      countUp: function () {
        this.count += 1
      }
    }
  }

</script>
