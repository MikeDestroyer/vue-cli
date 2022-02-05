<template>
  <div class="new-note">
    <input v-model="note.title" type="text" />
    <textarea v-model="note.desc"></textarea>
    <button @click="addNote">New note</button>
  </div>
</template>

<script>
export default {
  name: "newNote",
  props: {
    note: {
      type: Object,
      required: true,
    },
  },
  method: {
    addNote() {
      this.$emit("addNoteEmit", this.note);
    },
  },
};
</script>