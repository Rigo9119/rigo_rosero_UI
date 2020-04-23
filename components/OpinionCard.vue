<template>
  <div class="card">
    <div class="card__top">
      <h2 class="card__top__title weight--thin">
        What's your opinion on
        <br>
        <span class="card__top__title__bold weight--black">
          Pope Francis ?
        </span>
      </h2>
      <p class="card__top__paragraph weight--regular">
        He's talking tough on clergy sexual abuse, but is he just another papal pervert protector? (thumbs down) or a true pedophile punishing pontiff? (thumbs up)
      </p>
      <div class="card__top__info">
        <font-awesome-icon :icon="['fab', 'wikipedia-w']" />
        <a class="card__top__info__link" href="https://en.wikipedia.org/wiki/Pope_Francis">
          More Information
        </a>
      </div>
      <h3 class="card__top__text">
        What's your Veredict?
      </h3>
    </div>

    <div class="card__bottom">
      <button class="card__bottom__button up">
        <font-awesome-icon :icon="['fas', 'thumbs-up']" />
      </button>
      <button class="card__bottom__button down">
        <font-awesome-icon :icon="['fas', 'thumbs-down']" />
      </button>
    </div>
  </div>
</template>

<script>

export default {

}
</script>

<style lang="scss">
@import '../assets/scss/main.scss';

  .card {
    width: 100%;

    @include from(desktop) {
      position: absolute;
      bottom: 260px;
      left: 100px;
      width: 30%;
    }

    &__top {
      align-items: flex-start;
      background-color: rgba(109, 108, 108, 0.60);
      display: flex;
      flex-flow: column nowrap;
      height: 35vh;
      justify-content: space-between;
      padding: 15px;
      width: 100%;

      &__title {
        color: $white;
        @include font-size(24);

        &__bold {
          @include font-size(32);
        }
      }

      &__paragraph {
        color: $white;
      }

      &__info {
        color: $white;

        &__link {
          color: $white;

          &:hover {
            color: $yellow-orange;
          }
        }
      }

      &__text {
        color: $white;
      }
    }

    &__bottom {
      align-items: center;
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-between;
      width: 100%;

      &__button {
        border: none;
        color: $white;
        cursor: pointer;
        outline: none;
        padding: 12px 25px;
        width: 50%;
        @include font-size(32);
      }

      .up {
        background-color: rgba(44, 187, 179, 1);

        @include from(desktop) {
          background-color: rgba(44, 187, 179, 0.6);
        }
      }

      .down {
        background-color: rgba(255, 174, 66, 1);

        @include from(desktop) {
          background-color: rgba(255, 174, 66, 0.6);
        }
      }
    }
  }
</style>
