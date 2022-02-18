<template>
  <div class="notes">
    <div class="note" :class="{ full: !grid }" v-for="(note, index) in notes" :key="index">
      <div class="note-header" :class="{ full: !grid }">
        <p>{{ note.title }}</p>
        <p class="note-header-btn-remove" @click="removeNote(index)">x</p>
      </div>
      <div class="note-body" :class="{ full: !grid }" >
        <p>{{ note.description }}</p>
        <span>{{ note.date }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "notes",
  props: {
    grid: {
      type: Boolean,
      required: true,
    },
    notes: {
      type: Array,
      required: true,
    }
  },
  methods: {
    removeNote(index) {
      console.log(`notes ${index}`)
      this.$emit('remove', index)
    }
  }

}
</script>

<style lang="scss">
.note {
  width: 48%;
  padding: 18px 20px;
  background-color: #ffffff;
  margin-bottom: 3%;
  transition: all .25s cubic-bezier(.02,.01,.47,1);
  box-shadow: 0 30px 30px rgba(0,0,0,.04);
  &:hover {
    box-shadow: 0 30px 30px rgba(0,0,0,.02);
    transform: translate(0, -6px);
    transition-delay: 0s !important;
  }
  &.full {
    width: 100%;
  }
}
.notes {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 40px 0;
}
.note-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  h1 {
    font-size: 22px;
  }

  &-btn-remove {
    cursor: pointer;
  }
  &.full {
    justify-content: center;
    p {
      margin-right: 12px;
      &:last-child {
        margin-right: 0;
      }
    }

  }
  p {
    font-size: 22px;
    color: #494ce8;
  }
  svg {
    margin-right: 5px;
    color: #999999;
    cursor: pointer;
    &.active {
      color: #494ce8;
    }
    &:last-child {
      margin-right: 0;
    }
  }
}
.note-body {
  p {
    margin: 20px 0;
  }
  span {
    font-size: 14px;
    color: #999999;
  }
  &.full {
    text-align: center;
  }
}

</style>