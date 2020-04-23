<template>
  <div class="header main__wrapper">
    <nuxt-link class="header__title" to="/">
      Rule of Thumb.
    </nuxt-link>
    <Nav />
    <button  class="header__button weight--bold">
      &#60;
    </button>
    <button class="header__button weight--bold">
      &#62;
    </button>
  </div>
</template>

<script>
import Nav from './Nav'

export default {
  components: {
    Nav
  }
}
</script>

<style lang="scss">
@import '../assets/scss/main.scss';

  .header {
    align-items: center;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    padding: 5%;
    width: 100%;
    background-color: rgba(109, 108, 108, 0.60);

    @include from(desktop) {
      background-color: transparent;
      position: absolute;
      top: 5px;
      z-index: 6;
    }

    &__title {
      color: $white;
      width: 45%;
      @include font-size(22);

      @include from(desktop) {
        @include font-size(28);
      }
    }

    &__button {
      color: $white;
      @include font-size(22);

      @include from(desktop) {
        display: none;
      }
    }
  }
</style>
