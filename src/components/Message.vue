<template>
  <div class="message">
    <!-- <div class="message" v-if="message">
    <p>{{ message }}</p>
  </div> -->
    <p>Message component - {{ message }}</p>
  </div>
</template>

<script>
export default {
  name: "message",
  props: {
    message: {
      type: String,
      required: true,
    },
  },
};
</script>
