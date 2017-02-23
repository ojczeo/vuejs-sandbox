<template src="./Fundamentals.html">
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
