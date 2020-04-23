<template>
  <div>
    <Hero />
    <InfoBanner />
    <Votes />
    <SubmitBar />
  </div>
</template>

<script>
import Hero from '../components/Hero'
import InfoBanner from '../components/InfoBanner'
import Votes from '../components/Votes'
import SubmitBar from '../components/SubmitBar'

export default {
  layout: 'main',
  components: {
    Hero,
    InfoBanner,
    Votes,
    SubmitBar
  }
}
</script>

<style lang="scss">

</style>
