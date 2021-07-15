<template>

  <q-card>
    <q-card-section>
      <div class="text-h6">Alert</div>
    </q-card-section>

    <q-card-section class="q-pt-none">
      <header-edit v-if="action === 'headerEdit'"></header-edit>
      <header-avatar-edit v-if="action === 'headerAvatarEdit'"></header-avatar-edit>
      <header-text-edit v-if="action === 'headerTextEdit'"></header-text-edit>
    </q-card-section>

    <q-card-actions align="right">
      <q-btn flat label="OK" color="primary" v-close-popup />
    </q-card-actions>
  </q-card>
    
</template>

<script>
import headerEdit from '../../pages/admin/headerEdit.vue'
import headerAvatarEdit from '../../pages/admin/headerAvatarEdit.vue'
import headerTextEdit from '../../pages/admin/headerTextEdit.vue'

export default {
  props: ['action'],
  components: {
    headerEdit,
    headerAvatarEdit,
    headerTextEdit
  }
}
</script>