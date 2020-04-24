<template>
  <div class="static" :class="{ hide: close }">
    <h4 class="static__title weight--regular">
      Speak out. Be heard.
      <br>
      <span class="static__title__bold weight--bold">Be Counted</span>
    </h4>
    <p class="static__paragraph weight--regular">
      Rule of Thumb is a crowd sourced court of public opinion where anyone and everyone can speak out and speak freely. It's easy: You Share your opinion, we analyze and put the data in a public report.
    </p>
    <button class="static__close weight--thin" @click="close = true">
      X
    </button>
  </div>
</template>

<script>

export default {
  data () {
    return {
      close: false
    }
  },

  methods: {
    closeBanner: (event) => {
      this.close = !close
    }
  }
}
</script>

<style lang="scss">
@import '../assets/scss/main.scss';

  .static {
    align-items: center;
    background-color: $gallery;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-evenly;
    margin: 25px;
    padding: 15px;

    @include from(desktop) {
      flex-flow: row nowrap;
      margin:  0 120px;
    }

    &.hide {
      display: none;
    }

    &__title {
      color: $tundora;
      margin-bottom: 15px;
      width: 100%;
      @include font-size(18);

      @include from(desktop) {
        margin-bottom: 0;
        width: 18%;
        @include font-size(22);
      }

      &__bold {
        @include font-size(20);

        @include from(desktop) {
          @include font-size(37);
        }
      }
    }

    &__paragraph {
      color: $tundora;
      @include font-size(16);

      @include from(desktop) {
        width: 70%;
        @include font-size(18);
      }
    }

    &__close {
      background-color: $gallery;
      border: 0;
      cursor: pointer;
      margin-top: 15px;
      outline: none;
      padding: 10px 20px;
      text-decoration: none;
      width: 50%;
      @include font-size(24);

      &:hover {
        background-color: $black;
        font-weight: bold;
        color: $white;
      }

      @include from(desktop) {
        padding: 15px;
        width: 10%;
        @include font-size(28);
      }
    }
  }
</style>
