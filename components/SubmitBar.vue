<template>
  <div class="submit" :class="{ hide: hideInfo}">
    <div class="submit__first-step">
      <h4 class="submit__first-step__text heading--3 weight--regular">
        Is there anyone else you would want us to add
      </h4>
      <button class="submit__first-step__button" @click="hideInfo=true">
        Submit a Name
      </button>
    </div>

    <div class="submit__second-step" :class="{ hide: hideInfo }">
      <p class="submit__second-step__text heading--3 weight--regular">
        Yes, I would like to propose:
        <br>
        {{ person }}
      </p>
      <div class="submit__second-step__inputs">
        <input v-model="person" class="submit__second-step__inputs__input" type="text">
        <input class="submit__second-step__inputs__send" type="submit" @click="!hideInfo" >
      </div>
    </div>
  </div>
</template>

<script>
export default {

  data () {
    return {
      person: '',
      hideInfo: false
    }
  }
}
</script>

<style lang="scss">
@import '../assets/scss/main.scss';

  .submit {
    align-items: center;
    background: $gallery url('../assets/images/blurrCrowd.jpg');
    background-size: cover;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    padding: 15px ;
    margin: 35px auto;
    width: 88%;

    @include from(desktop) {
      flex-flow: row nowrap;
      margin: 0 auto 45px auto;
      width: 86%;
    }

    .hide {
      display: none;
    }

    .show {
      display: flex;
    }

    &__first-step {
      align-items: center;
      display: flex;
      justify-content: space-between;
      flex-flow: column nowrap;
      width: 100%;

      @include from(desktop) {
        flex-flow: row nowrap;
      }

      &__text {
        background-color: rgba(109, 108, 108, 0.66);
        padding: 25px;
        color: $white;

        @include from(desktop) {
          background-color: transparent;
          color: $tundora;
          margin-left: 45px;
        }
      }

      &__button {
        background-color: $white;
        border: 2px solid $black;
        cursor: pointer;
        margin-top: 35px;
        outline: none;
        padding: 12px 25px;
        text-decoration: none;
        @include font-size(18);

        &:hover {
          background-color: $black;
          color: $white;
        }

        @include from(desktop) {
          margin-right: 45px;
          margin-top: 0;
        }
      }
    }

    &__second-step {
      align-items: center;
      display: none;
      justify-content: space-between;
      flex-flow: column nowrap;
      width: 100%;

      @include from(desktop) {
        flex-flow: row nowrap;
      }

      &__text {
        background-color: rgba(109, 108, 108, 0.66);
        padding: 25px;
        color: $white;

        @include from(desktop) {
          background-color: transparent;
          color: $black;

          @include from(desktop) {
            @include font-size(22);
          }
        }
      }
      &__inputs {
        display: flex;
        flex-flow: column nowrap;

        @include from(desktop) {
          flex-flow: row nowrap;
        }

        &__input {
          outline: none;
          padding: 8px;
          @include font-size(16);
        }

        &__send {
          background-color: $white;
          border: 2px solid $black;
          cursor: pointer;
          margin-top: 35px;
          outline: none;
          padding: 8px ;
          text-decoration: none;
          @include font-size(16);
        }
      }
    }
  }
</style>
