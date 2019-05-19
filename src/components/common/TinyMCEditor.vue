<template>
  <div>
    <tinymce
      id="editor"
      :other_options="tinyOptions"
      @input="$emit('input', $event)"
      :value="value"
    ></tinymce>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: ""
    },
    minHeight: {
      type: Number,
      default: 500
    }
  },
  data() {
    return {
      editorContent: "",
      tinyOptions: {
        min_height: this.minHeight,
        menu: {
          file: { title: "File", items: "newdocument" },
          edit: {
            title: "Edit",
            items: "undo redo | cut copy paste pastetext | selectall"
          },
          insert: { title: "Insert", items: "link media | template hr" },
          view: { title: "View", items: "visualaid" },
          format: {
            title: "Format",
            items:
              "bold italic underline strikethrough superscript subscript | formats | removeformat"
          },
          table: {
            title: "Table",
            items: "inserttable tableprops deletetable | cell row column"
          },
          tools: {
            title: "Tools",
            items: "fullscreen preview codesample code spellchecker"
          }
        }
      }
    };
  }
};
</script>

<style lang="scss" scoped>
</style>