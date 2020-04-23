<template>
  <div class="hero">
    <picture class="hero__bkg-img">
      <img src="../assets/images/pope-francis-wave.jpg" alt="Pope Francis">
    </picture>
    <OpinionCard />
    <div class="hero__counter">
      <p class="hero__counter-text weight--regular">
        CLOSING IN
      </p>
      <p class="hero__counter-days">
        <span class="weight--bold">22</span>
        days
      </p>
    </div>
  </div>
</template>

<script>
import OpinionCard from '../components/OpinionCard'

export default {
  components: {
    OpinionCard
  }
}
</script>

<style lang="scss">
@import '~assets/scss/main.scss';

.hero {
  @include from(desktop) {
    position: relative;
    margin-bottom: 45px;
  }

  &__bkg-img {
    display: block;
    width: 100%;

    img {
      display: block;
      width: 100%;

    }
  }

  &__counter {
    align-items: center;
    background: $due-background;
    bottom: 0;
    display: flex;
    position: relative;
    width: 100%;

    @include from(desktop) {
      position: absolute;
    }

    &-text {
      @include font-size(16);
      background: rgba(49, 49, 49, 0.44);
      color: $white;
      padding: 20px 10px;
      position: relative;
      text-align: center;
      width: 30%;

      @include from(desktop) {
        @include font-size(18);
        text-align: right;
      }

      &:after {
        border-bottom: 10px solid transparent;
        border-left: 10px solid rgba(49, 49, 49, 0.44);
        border-top: 10px solid transparent;
        content: "";
        display: block;
        height: 20px;
        position: absolute;
        right: -20px;
        top: 20px;
        width: 20px;
      }
    }

    &-days {
      color: $tundora;
      padding: 0 20px;
      text-align: center;
      width: 70%;
      @include font-size(20);

      span {
        padding-right: 4px;
      }

      @include from(desktop) {
        @include font-size(40);
        text-align: left;
      }
    }
  }
}
</style>
