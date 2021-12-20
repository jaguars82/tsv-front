<script>
export default {
  name: 'KeyValueText',
  functional: true,
  props: {
    keyText: {
      type: String,
      default: ''
    },
    valueText: {
      type: String,
      default: ''
    },
    separator: {
      type: String,
      default: ':'
    }
  },
  render (h, context) {
    return (
      <div>
        <span>{context.props.keyText}</span>
        {context.props.separator}
        <span>{context.props.valueText}</span>
      </div>
    )
  }
}
</script>