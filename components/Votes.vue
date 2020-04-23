<template>
  <div class="votes main__wrapper">
    <h4 class="votes__title weight--regular">
      Votes
    </h4>
    <div class="votes__people">
      <PersonCard
        class="votes__people__card"
        name="Person Name"
        date="1 week ago"
        field="music"
        description="Vestibulum diam ante, porritor a odio eget, rhoncus neque. Aenean eu velit libero."
        likes="40"
        dislikes="70"
      />
      <PersonCard
        class="votes__people__card"
        name="Person Name"
        date="1 week ago"
        field="music"
        description="Vestibulum diam ante, porritor a odio eget, rhoncus neque. Aenean eu velit libero."
        likes="90"
        dislikes="40"
      />
      <PersonCard
        class="votes__people__card"
        name="Person Name"
        date="1 week ago"
        field="music"
        description="Vestibulum diam ante, porritor a odio eget, rhoncus neque. Aenean eu velit libero."
        likes="20"
        dislikes="90"
      />
      <PersonCard
        class="votes__people__card"
        name="Person Name"
        date="1 week ago"
        field="music"
        description="Vestibulum diam ante, porritor a odio eget, rhoncus neque. Aenean eu velit libero."
        likes="60"
        dislikes="50"
      />
    </div>
  </div>
</template>

<script>
import PersonCard from '../components/PersonCard'

export default {
  components: {
    PersonCard
  }
}
</script>

<style lang="scss">
@import '../assets/scss/main.scss';
  .votes {
    margin: 25px 0;

    &__title {
      margin-bottom: 25px;
      @include font-size(36);
    }

    &__people {
      align-items: center;
      display: flex;
      flex-flow: column wrap;
      justify-content:space-between;

      @include from(desktop) {
        flex-flow: row wrap;
      }

      &__card{
        width: 100%;

        @include from(desktop) {
          width: 48%;
        }
      }
    }
  }
</style>
