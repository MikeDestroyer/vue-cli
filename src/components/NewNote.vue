<template>
  <div class="new-note-block">
    <label >Title</label>
    <input v-model="note.title" type="text"/>
    <label >Description</label>
    <textarea v-model="note.description"></textarea>
    <button class="new-note-btn btn btnPrimary" @click="addNote">New note</button>
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
  methods: {
    addNote() {
      this.$emit("addNoteEmit", this.note);
    },
  },
};
</script>

<style lang="scss" scoped>
.new-note {
  &-block {
    text-align: center;
  }
  &-btn {
    margin: 20px 0 20px 0;
  }
}
</style>