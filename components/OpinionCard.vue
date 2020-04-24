<template>
  <div class="card">
    <div class="card__top">
      <h2 class="card__top__title weight--thin">
        What's your opinion on
        <br>
        <span class="card__top__title__bold weight--black">
          {{ name }} ?
        </span>
      </h2>
      <p class="card__top__paragraph weight--regular">
        {{ description }}
      </p>
      <div class="card__top__info">
        <font-awesome-icon :icon="['fab', 'wikipedia-w']" />
        <a class="card__top__info__link" :href="url">
          More Information
        </a>
      </div>
      <h3 class="card__top__text">
        What's your Veredict?
      </h3>
    </div>

    <div class="card__bottom">
      <button class="card__bottom__button up sh__left" @click="likes">
        <font-awesome-icon :icon="['fas', 'thumbs-up']" />
      </button>
      <button class="card__bottom__button down sh__right" @click="dislikes">
        <font-awesome-icon :icon="['fas', 'thumbs-down']" />
      </button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {

  data () {
    return {
      name: '',
      description: '',
      url: '',
      likes: '',
      dislikes: ''
    }
  },

  async created () {
    try {
      const res = await axios.get('https://api.jsonbin.io/b/5ea20cc398b3d53752336d9a/5')
      const hero = res.data.hero[0]
      const name = hero.name
      const description = hero.description
      const url = hero.url
      const likes = hero.likes
      const dislikes = hero.dislikes

      this.name = name
      this.description = description
      this.url = url
      this.likes = likes
      this.dislikes = dislikes
    } catch (err) {
      console.error('Error ::::=> ', err)
    }
  }
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
      background-color: rgba(109, 108, 108, 0.70);
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

        &:hover {
          color: $white;
        }
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

      .sh__left {
        &:hover {
          box-shadow: -3px 4px 6px 1px rgba(255, 255, 255, 0.81);
        }
      }

      .sh__right {
        &:hover {
          box-shadow: 3px 4px 6px 1px rgba(255, 255, 255, 0.81);
        }
      }
    }
  }
</style>
