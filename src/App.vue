<template>
  <div id="app">
    <div class="wrapper">
      <div class="wrapper-content">
        <message message="hello message" />
        <newNote :note="note" @addNoteEmit="addNote" />
        <div class="notes">
          <div class="note" v-for="(note, index) in notes" :key="index">
            <div class="note-header">
              <p>{{ note.title }}</p>
            </div>
            <div class="note-body">
              <p>{{ note.descr }}</p>
              <span>{{ note.date }}</span>
            </div>
          </div>
        </div>
        <section>
          <h1>hello world</h1>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import message from "./components/Message.vue";
import newNote from "./components/NewNote.vue";

export default {
  components: {
    message,
    newNote,
  },
  data() {
    return {
      title: "Notes App",
      message: null,
      note: {
        title: "",
        descr: "",
      },
      notes: [
        {
          title: "fisr title",
          descr: "description",
          date: new Date(Date.now()).toLocaleString(),
        },
        {
          title: "fisr title",
          descr: "description",
          date: new Date(Date.now()).toLocaleString(),
        },
        {
          title: "fisr title",
          descr: "description",
          date: new Date(Date.now()).toLocaleString(),
        },
      ],
    };
  },
  methods: {
    addNote() {
      let { title, descr } = this.note;

      if (title === "") {
        this.message = "title can`t be blank";
        return false;
      }

      this.notes.push({
        title,
        descr,
        date: new Date(Date.now()).toLocaleString(),
      });

      this.message = null;
      this.note.title = "";
      this.note.descr = "";
    },
  },
};
</script>

<style lang="scss" scoped>
</style>