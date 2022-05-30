<template>
  <div class="header">
    <BurgerMenu />
  </div>
</template>
<script>
import BurgerMenu from '@/components/BurgerMenu.vue'
export default {
  components: { BurgerMenu }
}
</script>
<style lang="scss" scoped>
  @import '@/css/variables.scss';
  .header {
    position: relative;
    height: 56px;
    background: $header_color;
  }
</style>
