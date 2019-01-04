<template>
  <div>
    <p>{{ message }}</p>
    <p>{{ reversedMessage }}</p>
    <p>{{ time }}</p>
    <p>计算属性和方法的差别在于： 计算属性有缓存，只要依赖的属性没有发生变化，就不会重新进行计算; 方法每一次都会重新计算; 两者效果相同</p>
    <p>计算属性与侦听属性：计算属性更加简洁</p>
    <p>侦听器：用于数据变化时执行异步操作或者开销较大的操作</p>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      message: 'putian tongqing',
      time: null
    }
  },
  computed: {
    reversedMessage: function () {
      return this.message.split('').reverse().join('')
    }
  },
  created: function () {
    setInterval(this.reversedMethod, 1000)
  },
  methods: {
    reversedMethod: function () {
      // return this.message.split('').reverse().join('')
      this.time = new Date().toLocaleTimeString()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
