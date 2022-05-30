<template>
  <div
    class="menu-content"
    :class="{ expanded }"
  >
    <div class="menu-content-category">
      <div
        class="menu-content-category-item"
        v-for="(category, i) in categories"
        :key="i"
      >
        <Collapse :title="category.title">
          <div class="menu-content-subcategory">
            <div
              v-for="(subcategory, s) in category.values"
              class="menu-content-subcategory-item"
              :key="s"
            >
              {{ subcategory.name }}
            </div>
          </div>
        </Collapse>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import { categories } from '@/utils/variables'

export default {
  data () {
    return {
      categories
    }
  },
  computed: {
    ...mapState('header', ['expanded'])
  }
}
</script>
<style lang="scss" scoped>
  @import '@/css/variables.scss';
  .menu-content {
    font-family: Arial, Helvetica, sans-serif;
    height: 100%;
    max-height: 0;
    background: $header_color;
    color: #fff;
    overflow: hidden;
    transition: all .3s linear;
    &.expanded {
      max-height: 1000px;
    }
    &-category {
      margin: 20px;
      &-item {
        margin-bottom: 20px;
        font-size: 32px;
      }
    }
    &-subcategory {
      margin-left: 20px;
      &-item {
        &:first-child {
          margin-top: 10px;
        }
        margin-bottom: 10px;
        font-size: 28px;
      }
    }
  }
</style>
