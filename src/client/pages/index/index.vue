<template>
  <div class="page-index">
    <md-dialog
      :md-active="true"
      :md-click-outside-to-close="false"
      :md-close-on-esc="false"
      :md-fullscreen="false"
      class="page-index__dialog"
    >
      <md-dialog-title>Welcome</md-dialog-title>

      <div class="page-index__logos">
        <img
          src="/images/OE_logo.png"
          alt="OE logo"
        >
        <img
          src="/images/logo-m-2x.png"
          alt="Deltares logo"
        >
      </div>

      <md-dialog-content>
        <p>
          Ri2de is a webGIS toolkit based on global road datasets [OpenStreetMap] in combination with raster data to calculate road susceptibility [slope, distance to water among others]. The tool is designed to be flexible and configurable to be adapted to every country's road infrastructure evaluation needs.
        </p>

        <p>
          Background information on RI2DE as well as the techniques and datasets used in RI2DE can be discovered in the 
          <a
            href="https://publicwiki.deltares.nl/display/RI2DE"
            target="_blank" 
            rel="noopener"
          >Public Wiki of RI2DE</a>.
        </p>
      </md-dialog-content>

      <div class="page-index__actions">
        <md-button
          to="/project"
          class="md-raised md-primary"
        >
          New project
        </md-button>
        <div class="page-index__divider" />
        <import-button />
      </div>

    </md-dialog>
  </div>
</template>

<script>
import ImportButton from '../../components/import-button'
import { mapState } from 'vuex';

export default {
  components: {
    ImportButton
  },
  computed: {
    ...mapState('mapbox/selections', [ 'selections' ]),
  },
  mounted() {
    this.$store.commit('setActivePage', 'index')
  }
}
</script>

<style>
.page-index__actions {
  display: grid;
  grid-column-gap: var(--spacing-default);
  grid-template-columns: 1fr 1px 1fr;
  padding: 0 1rem 1rem;
}

.page-index__divider {
  width: 1px;
  height: 50px;
  background-color: lightgrey;
  flex: 1;
}

.page-index__logos {
  display: flex;
  padding: 0 1.5rem 1.5rem;
}

.page-index__logos img {
  width: 10rem;
  margin: 0 0.5rem;
}

.page-index__dialog {
  max-width: 40rem;
}
</style>
