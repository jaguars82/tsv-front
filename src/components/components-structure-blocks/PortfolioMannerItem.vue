<template>
  <div>
    <key-value-text :keyText="'текст ключа'" :valueText="'текст значения'" />
  </div>
</template>

<script>
import KeyValueText from '../small/text/KeyValueText.vue'

export default {
  name: 'PortfolioMannerItem',
  components: {
    KeyValueText
  }
}
</script>