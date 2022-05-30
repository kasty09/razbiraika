<template>
  <div
    class="header-burger"
    :class="{ expanded }"
    @click="collapseBurger"
  >
    <div
      class="header-burger-cl"
    />
    <div class="b b-top"></div>
    <div class="b b-middle"></div>
    <div class="b b-bottom"></div>
  </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex'

export default {
  computed: {
    ...mapState('header', ['expanded'])
  },
  methods: {
    ...mapMutations('header', ['setExpanded']),
    collapseBurger () {
      this.setExpanded(!this.expanded)
    }
  }
}
</script>
<style lang="scss" scoped>
  .header {
    &-burger {
      position: absolute;
      width: 20px;
      height: 15px;
      top: 20px;
      right: 22px;
      &-cl {
        width: 100%;
        height: 100%;
      }
      .b {
        position: absolute;
        height: 2px;
        width: 20px;
        background-color: #fff;
        transition: all .3s linear;
      }
      .b-top {
        transform: rotate(0);
        top: 1px;
        transform-origin: right;
      }
      .b-middle {
        top: 7px;
      }
      .b-bottom {
        transform-origin: right;
        transform: rotate(0);
        top: 13px;
      }
      &.expanded {
        .b-top {
          transform: rotate(-45deg);
        }
        .b-middle {
          opacity: 0;
        }
        .b-bottom {
          top: 15px;
          transform: rotate(45deg);
        }
      }
    }
  }
</style>
