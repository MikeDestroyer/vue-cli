<template>
  <div id="app">
    <div class=" wrapper">
      <div class="wrapper-content">
        <h1>Hello World</h1>
        <message message="hello message" />
        <newNote :note="note" @addNoteEmit="addNote" />
        <notes :notes="notes"/>
      </div>
    </div>
  </div>
</template>

<script>
import message from "./components/Message.vue";
import newNote from "./components/NewNote.vue";
import notes   from "./components/Notes.vue";

export default {
  components: {
    message,
    newNote,
    notes,
  },
  data() {
    return {
      title: "Notes App",
      message: null,
      note: {
        title: "",
        description: "",
      },
      notes: [
        {
          title: "first title",
          description: "description",
          date: new Date(Date.now()).toLocaleString(),
        },
        {
          title: "first title",
          description: "description",
          date: new Date(Date.now()).toLocaleString(),
        },
        {
          title: "first title",
          description: "description",
          date: new Date(Date.now()).toLocaleString(),
        },
      ],
    };
  },
  methods: {
    addNote() {
      let { title, description } = this.note;

      if (title === "") {
        this.message = "title can`t be blank";
        return false;
      }

      this.notes.push({
        title,
        description: description,
        date: new Date(Date.now()).toLocaleString(),
      });

      this.message = null;
      this.note.title = "";
      this.note.description = "";
    },
  },
};
</script>

<style lang="scss" scoped>
h1 {
  font-size: 26px;
  font-weight: bold;
  text-align: center;
  margin: 20px 0 20px 0;
}
</style>