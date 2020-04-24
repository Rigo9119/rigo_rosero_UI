<template>
  <div class="submit sides__wrapper">
    <h4 class="submit__text heading--3 weight--regular">
      Is there anyone else you would want us to add
    </h4>
    <button class="submit__button">
      Submit a Name
    </button>
  </div>
</template>

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
      width: 83%;
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
</style>
