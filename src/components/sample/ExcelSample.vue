<template>
  <!-- template -->
  <div class="wrapper">
    <div
        class="section_drop"
        @drop.stop.prevent="onDrop"
        @dragenter.stop.prevent
        @dragover.stop.prevent
    >
      <h2>DROP HERE</h2>
    </div>
  </div>
</template>
<script>

export default {
  name : 'ExcelSample',
  components: {
  },
  data() {
    return {
      file: null,
    };
  },
  methods: {
    onChange(event) {
      this.file = event.target.files ? event.target.files[0] : null;
    },
  }
}
</script>