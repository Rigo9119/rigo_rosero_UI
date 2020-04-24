<template>
  <div class="footer">
    <nav class="footer__nav">
      <Link class="footer__nav__link" link-text="Terms and Conditions" to="" />
      <Link class="footer__nav__link" link-text="Privacy Policy" to="" />
      <Link class="footer__nav__link" link-text="Contact Us" to="" />
    </nav>
    <div class="footer__social">
      <p class="footer__social__text">
        Follow Us:
      </p>
      <div class="footer__social__icons">
        <font-awesome-icon :icon="['fab', 'facebook']" />
        <font-awesome-icon :icon="['fab', 'twitter']" />
      </div>
    </div>
  </div>
</template>

<script>
import Link from '../components/Link'

export default {
  components: {
    Link
  }
}
</script>

<style lang="scss">
@import '../assets/scss/main.scss';

  .footer {
    align-items: center;
    border-top: 1px dotted $dove;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    margin: 0 25px 45px 25px;
    padding: 25px 0;

    @include from(desktop) {
      flex-flow: row nowrap;
      margin: 0 120px;
    }

    &__nav {
      align-items: center;
      display: flex;
      flex-flow: column nowrap;
      justify-content: space-between;
      width: 50%;

      @include from(desktop) {
        flex-flow: row nowrap;
        width: 30%;
      }

      &__link {
        margin-bottom: 5px;
        color: $tundora;

        @include from(desktop) {
          margin-bottom: 0;
        }
      }
    }

    &__social {
      align-items: center;
      display: flex;
      flex-flow: column nowrap;
      justify-content: space-between;
      margin-top: 25px;
      width: 45%;

      @include from(desktop) {
        flex-flow: row nowrap;
        margin-top: 0;
        width: 15%;
      }

      &__text {
        color: $tundora;

        &::hover {
          color: $shamrock;
        }
      }

      &__icons {
        align-items: center;
        display: flex;
        justify-content: space-between;
        margin-top: 15px;
        width: 40%;
        @include font-size(26);

        @include from(desktop) {
          margin-top: 0;
          width: 50%;
          @include font-size(42);
        }
      }
    }
  }
</style>
