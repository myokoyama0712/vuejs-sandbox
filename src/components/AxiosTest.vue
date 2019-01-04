<template>
<div>
  <div>axiosによるAPIコール</div>
  <div>Message</div>
  <div>{{ message }}</div>
  <div>
    <button @click="updateAsync">APIコール</button>
  </div>
</div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'

const { mapState, mapActions } = createNamespacedHelpers('apiStore')

export default {
  computed: {
    ...mapState({
      message: state => state.message,
    }),
  },

  methods: {
    ...mapActions({
      updateAsync: 'updateMessageByApiCall',
    }),
  },
}
</script>
