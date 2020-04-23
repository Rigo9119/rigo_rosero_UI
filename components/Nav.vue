<template>
  <nav class="nav">
    <Link class="nav__link" link-text="Past Trials" to="./past" />
    <Link class="nav__link" link-text="How it Works" to="./how-it-works" />
    <Link class="nav__link" link-text="Log in/Sign Up " to="" />
    <font-awesome-icon class="nav__icon" :icon="['fas', 'search']" />
  </nav>
</template>

<script>
import Link from './Link'

export default {
  components: {
    Link
  }
}
</script>

<style lang="scss">
@import '../assets/scss/main.scss';

  .nav {
  align-items: center;
  display: none;
  flex-flow: row nowrap;
  justify-content: space-between;
  width: 25%;

  @include from(desktop) {
    display: flex;
    width: 40%;
  }

  &__link {
    color: $white;

    @include from(desktop) {
      @include font-size(22);
    }
  }

  &__icon {
    color: $white;
  }
}
</style>
