<template>
  <div class="collapse">
    <div
      @click="toggleContentVisible"
      class="collapse-title"
    >
      <span>
        {{title}}
        </span>
      <div
        class="collapse-arrow"
        :class="{ 'collapse-arrow-open': open }"
      />
    </div>
    <div
      class="collapse-content"
      :class="{ 'collapse-content-open': open }"
    >
      <slot/>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      open: false
    }
  },
  props: {
    title: String,
    expanded: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    toggleContentVisible () {
      this.open = !this.open
    }
  },
  mounted () {
    this.open = this.expanded
  }
}
</script>
<style lang="scss" scoped>
  .collapse {
    &-title {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    &-content {
      max-height: 0;
      height: 100%;
      overflow: hidden;
      transition: all .3s linear;
      &-open {
        max-height: 200px;
      }
    }
    &-arrow {
      transition: all .2s linear;
      border-bottom: 2px solid #fff;
      border-right: 2px solid #fff;
      transform: rotate(-45deg);
      height: 8px;
      width: 8px;
      &-open {
        transform: rotate(45deg);
      }
    }
  }
</style>
