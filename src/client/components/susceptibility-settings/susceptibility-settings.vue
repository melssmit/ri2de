<template>
  <div
    class="susceptibility-settings"
  >
    <div class="susceptibility-settings__wrapper">
      <span class="md-title">{{ factor.title }}</span>

      <input-range
        v-if="factor.classes && (factor.classes.length === 4)"
        :key="factor.title"
        :value="[factor.classes[1], factor.classes[2]]"
        :min="factor.classes[0]"
        :max="factor.classes[3]"
        :interval="1"
        label="Classes"
        show-legend-colors
        @updateClasses="onUpdateClasses"
      />

      <layer-legend
        :classes="factor.classes"
        class="susceptibility-settings__layer-legend"
        @updateClasses="onUpdateClasses"
      />
      <add-source-button
        v-if="factor.keywords && factor.keywords.length"
        :roadsid="infrastructure[factorIndex] && infrastructure[factorIndex].identifier"
        :keywords="factor.keywords"
        :csw="factor.cswUrls"
        @updateFactorLayer="(updatedlayer) => $emit('updateFactorLayer', { updatedlayer, index: factorIndex })"
      />
    </div>
  </div>
</template>

<script>
import InputRange from '../input-range'
import LayerLegend from '../layer-legend'
import AddSourceButton from '../add-source-button'

export default {
  components: {
    InputRange,
    LayerLegend,
    AddSourceButton
  },
  props: {
    factor: {
      type: Object,
      required: true
    },
    factorIndex: {
      type: Number,
      required: true
    },
    infrastructure:{
      type:Array,
      required:true,
    }
  },
  methods: {
    onUpdateClasses(classes) {
      // check if the value has change
      if (!classes.every((value, index) => value === this.factor.classes[index])) {
        this.$emit('updateClasses', { classes, index: this.factorIndex })
      }
    }
  }
}
</script>

<style>
.susceptibility-settings {
  --card-width: 270px;
  width: var(--card-width);
  position: absolute;
  top: 9rem;
  left: 1.5rem;
  padding: var(--spacing-default);
  background-color: #fff;
  z-index: 2;
  box-shadow: 0 2px 5px 0 var(--neutral-color);
}

.susceptibility-settings .md-subheader {
  padding: 0;
}

.susceptibility-settings__wrapper {
  position: relative;
}

.susceptibility-settings__button {
  position: absolute !important;
  top: calc(calc(var(--spacing-default) - 10px) * -1);
  right: calc(calc(var(--spacing-default) - 10px) * -1);
  margin: 0 !important;
}

.susceptibility-settings__layer-legend {
  margin-bottom: 1rem;
}
</style>
