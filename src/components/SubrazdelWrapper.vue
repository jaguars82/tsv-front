<template>
  <div>
    <p><span>{{ identificator }}</span> <span>{{ type }}</span> <span>{{ realName }}</span></p>
  </div>
</template>

<script>
  export default {
    props: ['identificator', 'type', 'realName']
  }
</script>