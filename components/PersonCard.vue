<template>
  <div class="person">
    <picture class="person__img">
      <img :src="src" :alt="alt">
    </picture>

    <div class="person__content">
      <div class="person__content__info">
        <div v-if="likes > dislikes" class="person__content__info__icon up">
          <font-awesome-icon :icon="['fas', 'thumbs-up']" />
        </div>
        <div v-else class="person__content__info__icon down">
          <font-awesome-icon :icon="['fas', 'thumbs-down']" />
        </div>
        <h5 class="person__content__info__name weight--bold">
          {{ name }}
        </h5>
      </div>
      <p class="person__content__date-field">
        <span class="person__content__date-field__bold weight--black">{{ date }}</span>
        in {{ field }}
      </p>

      <p class="person__content__description">
        {{ description }}
      </p>

      <p class="person__content__description">
        Thanks for voting
      </p>

      <div class="person__content__votes">
        <button class="person__content__votes__button up">
          <font-awesome-icon :icon="['fas', 'thumbs-up']" />
        </button>
        <button class="person__content__votes__button down">
          <font-awesome-icon :icon="['fas', 'thumbs-down']" />
        </button>
        <button class="person__content__votes__vote">
          Vote Now
        </button>
        <button class="person__content__votes__vote">
          Vote Again
        </button>
      </div>

      <div class="person__content__results">
        <div class="person__content__results__bar up left" :style="{ width: (likes * 100) / (likes + dislikes) + '%' }">
          <font-awesome-icon :icon="['fas', 'thumbs-up']" />
          <p>
            {{ (likes / (likes + dislikes) * 100).toFixed() }}%
          </p>
        </div>
        <div class="person__content__results__bar down right" :style="{ width: (dislikes * 100) / (likes + dislikes) + '%' }">
          <font-awesome-icon :icon="['fas', 'thumbs-down']" />
          <p>
            {{ (dislikes / (likes + dislikes) * 100).toFixed() }}%
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      default: ''
    },
    alt: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    },
    date: {
      type: String,
      default: ''
    },
    field: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    },
    likes: {
      type: Number,
      default: 0
    },
    like: {
      type: Boolean
    },
    dislikes: {
      type: Number,
      default: 0
    },
    dislike: {
      type: Boolean
    },
    voted: {
      type: Boolean
    }
  },


}
</script>

<style lang="scss">
@import '../assets/scss/main.scss';

  .person {
    background-color: $tundora;
    margin-bottom: 0;
    position: relative;
    width: 100%;

    @include from(tablet) {
      width: 50%;
    }

    @include from(desktop) {
      width: 580px;
      margin-bottom: 40px;
    }

    &__img {
      img {
        display: block;
        width: 100%;
      }
    }

    &__content {
      bottom: 0;
      position: absolute;
      padding: 0 20px 20px 30px;
      width: 100%;

      @include from(desktop) {
        padding: 0;
      }

      &__info {
        align-items: flex-start;
        display: flex;
        flex-flow: column nowrap;
        justify-content: space-between;
        width: 80%;

        @include from(desktop) {
          flex-flow: row nowrap;
          width: 68%;
        }

        &__icon {
          color: $white;
          padding: 10px;
          text-align: center;
          @include font-size(18);

        }

        &__name {
          color: $white;
          margin-top: 15px;
          width: 80%;
          @include font-size(28);

          @include from(desktop) {
            margin-top: 0;
            @include font-size(36);
          }
        }
      }

      &__date-field {
        color: $white;
        @include font-size(18);

        @include from(desktop) {
          margin-left: 84px;
        }

        &__bold {
          color: $white;
          @include font-size(18);
        }
      }

      &__description {
        color: $white;
        margin-top: 25px;

        @include from(desktop) {
          margin: 20px 84px 0 84px;
        }
      }

      &__votes {
        align-items: center;
        display: flex;
        justify-content: space-between;
        margin-top: 25px;
        width: 70%;

        @include from(desktop) {
          margin-left: 84px;
          width: 40%;
        }

        &__button {
          border: none;
          color: $white;
          cursor: pointer;
          outline: none;
          padding: 10px 18px;
          text-align: center;
          @include font-size(16);

          @include from(desktop) {
            padding: 6px 8px;
            @include font-size(22);
          }

          &:hover {
            border: 2px solid $white;
          }
        }

        &__vote {
          background-color: transparent;
          border: 1px solid $white;
          color: $white;
          padding: 10px 16px;
          text-align: center;
          @include font-size(18);

          &:hover {
            border: 1px solid $white;
            background-color: $white;
            color: $black;
          }
        }
      }

      &__results {
        align-items: center;
        display: flex;
        justify-content: center;
        flex-flow: row nowrap;
        margin-top: 20px;
        width: 100%;

        @include from(desktop) {
          margin-top: 30px;
        }

        &__bar {
          align-items: center;
          color: $white;
          display: flex;
          flex-flow: row nowrap;
          padding: 15px 8px;
          height: 35px;

          @include from(desktop) {
            padding: 25px 12px;
          }
        }

        p {
          color: $white;
        }
      }
    }

    .up {
      background-color: rgba(44, 187, 179, 0.8);
    }

    .down {
      background-color: rgba(255, 174, 66, 0.8);
    }

    .right {
      justify-content: flex-end;
    }

    .left {
      justify-content: flex-start;
    }
  }
</style>
