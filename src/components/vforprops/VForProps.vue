<template>
<div>
  <span v-text="id"></span>
  <span v-text="name"></span>
  <span v-text="age"></span>
</div>
</template>

<script>
export default {
  props: [
    'id', 'name', 'age',
  ],
}
</script>
