<template>
  <div class="container">
    <Header />
    <BurgerContent />
  </div>
</template>
<script>
import Header from '@/components/Header.vue'
import BurgerContent from '@/components/BurgerContent.vue'

export default {
  components: {
    Header,
    BurgerContent
  }
}
</script>
<style>
@import './css/index.scss';
  body {
    margin: 0;
  }
</style>
