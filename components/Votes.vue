<template>
  <div class="votes main__wrapper">
    <h4 class="votes__title weight--regular">
      Votes
    </h4>
    <div class="votes__people">
      <div v-for="(candidate, index) in candidates" :key="candidate.index" class="votes__people__person">
        <picture class="votes__people__person__img">
          <img :src="candidate.image" :alt="candidate.alt">
        </picture>

        <div class="votes__people__person__content">
          <div class="votes__people__person__content__info">
            <div v-if="candidate.likes > candidate.dislikes" class="votes__people__person__content__info__icon up">
              <font-awesome-icon :icon="['fas', 'thumbs-up']" />
            </div>
            <div v-else class="votes__people__person__content__info__icon down">
              <font-awesome-icon :icon="['fas', 'thumbs-down']" />
            </div>
            <h5 class="votes__people__person__content__info__name weight--bold">
              {{ candidate.name }}
            </h5>
          </div>
          <p class="votes__people__person__content__date-field">
            <span class="votes__people__person__content__date-field__bold weight--black">
              {{ candidate.date }}
            </span>
            in {{ candidate.field }}
          </p>

          <p class="votes__people__person__content__description" :class="candidate.voted == false ? 'show' : 'hide'">
            {{ candidate.description }}
          </p>

          <p class="votes__people__person__content__description" :class="candidate.voted == true ? 'show' : 'hide'">
            Thanks for voting
          </p>

          <div class="votes__people__person__content__votes">
            <button class="votes__people__person__content__votes__button up" :class="candidate.voted == true ? 'hide' : 'show'" @click="giveLike(index)">
              <font-awesome-icon :icon="['fas', 'thumbs-up']" />
            </button>
            <button class="votes__people__person__content__votes__button down" :class="candidate.voted == true ? 'hide' : 'show'" @click="giveDislike(index)">
              <font-awesome-icon :icon="['fas', 'thumbs-down']" />
            </button>
            <button class="votes__people__person__content__votes__vote" :class="{ hide: candidate.voted }" @click="vote(index)">
              Vote Now
            </button>
            <button class="votes__people__person__content__votes__vote" :class="candidate.voted == false ? 'hide' : 'show'" @click="voteAgain(index)">
              Vote Again
            </button>
          </div>

          <div class="votes__people__person__content__results">
            <div class="votes__people__person__content__results__bar up left" :style="{ width: (candidate.likes * 100) / (candidate.likes + candidate.dislikes) + '%' }">
              <font-awesome-icon :icon="['fas', 'thumbs-up']" />
              <p>
                {{ (candidate.likes / (candidate.likes + candidate.dislikes) * 100).toFixed() }}%
              </p>
            </div>
            <div class="votes__people__person__content__results__bar down right" :style="{ width: (candidate.dislikes * 100) / (candidate.likes + candidate.dislikes) + '%' }">
              <font-awesome-icon :icon="['fas', 'thumbs-down']" />
              <p>
                {{ (candidate.dislikes / (candidate.likes + candidate.dislikes) * 100).toFixed() }}%
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {

  data () {
    return {
      candidates: []
    }
  },

  async created () {
    try {
      const res = await axios.get('https://api.jsonbin.io/b/5ea20cc398b3d53752336d9a/5')
      const candidates = res.data.candidates

      const LS = localStorage.getItem('candidates')
      const JSON_CANDIDATES = JSON.parse(LS)
      const LS_CANDIDATES = (this.candidates = JSON_CANDIDATES)
      const RES_CANDIDATES = (this.candidates = candidates)
      const LS_TERNARY = LS ? LS_CANDIDATES : RES_CANDIDATES

      return {
        LS_TERNARY
      }
    } catch (err) {
      console.log('Error => ', err)
    }
  },

  methods: {
    vote (index) {
      const candidate = this.candidates[index]

      if (candidate.like === true) {
        candidate.likes++
        candidate.voted = true
      } else if (candidate.dislike === true) {
        candidate.dislikes++
        candidate.voted = true
      }
    },

    giveLike (index) {
      const candidate = this.candidates[index]

      candidate.like = true
      candidate.dislike = false
    },

    giveDislike (index) {
      const candidate = this.candidates[index]

      candidate.dislike = true
      candidate.like = false
    },

    voteAgain (index) {
      const candidate = this.candidates[index]

      candidate.voted = false
      candidate.like = false
      candidate.dislike = false
    }
  }
}
</script>

<style lang="scss">
@import '../assets/scss/main.scss';
  .votes {
    margin: 25px 0;

    &__title {
      margin: 45px 0 25px 20px;
      @include font-size(36);

      @include from(desktop) {
        margin: 25px 0;
        @include font-size(42);
      }
    }

    &__people {
      align-items: center;
      display: flex;
      flex-flow: column wrap;
      justify-content:space-between;

      @include from(desktop) {
        flex-flow: row wrap;
      }

      &__person {
        background-color: $tundora;
        margin-bottom: 0;
        position: relative;
        width: 100%;

        @include from(tablet) {
          width: 50%;
        }

        @include from(desktop) {
          margin-bottom: 40px;
          height: 100vh;
          width: 48%;
        }

        &__img {

          img {
            display: block;
            object-fit: cover;
            height: 70vh;
            width: 100%;

            @include from(desktop) {
              height: 100vh;
              width: 100%;
            }
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

              &:focus {
                outline: none;
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
    }

    .hide {
      display: none;
      margin: 20px 0;
    }

    .show {
      display: block;
    }
  }
</style>
