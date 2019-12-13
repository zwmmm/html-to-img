<template>
  <div id="app">
    <div class="item">
      <h1>HTML</h1>
      <hello-world class="hello" ref="hello" />
    </div>
    <div class="item">
      <h1>IMAGE</h1>
      <img :src="base64" alt="" class="img">
    </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import html2img from '../../dist/html2img.esm'

export default {
  name: 'app',
  components: { HelloWorld },
  data: () => ({ base64: '' }),
  async mounted() {
    this.base64 = await html2img(this.$refs.hello.$el, { debug: false, scale: 4 })
  }
}
</script>

<style>
#app {
  display: flex;
}

.item {
  width: 50%;
}

.hello {
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  font-size: 12px;
}

.img {
  width: 100%;
}
</style>
