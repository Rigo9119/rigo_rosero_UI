<template>
  <nuxt-link class="link" :to="to">
    {{ linkText }}
  </nuxt-link>
</template>

<script>
export default {
  props: {
    linkText: {
      type: String,
      default: ''
    },
    to: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss">
  .link {
    margin-bottom: 0;
  }
</style>
