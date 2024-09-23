<!-- Editor.vue -->
<template>
  <client-only>
    <QuillEditor
      :content="localContent"
      @update:content="updateContent"
      :options="options"
      toolbar="full"
      contentType="html"
    />
  </client-only>
</template>

<script setup>
import { ref, watch } from 'vue';
import { QuillEditor } from '@vueup/vue-quill';
import '@vueup/vue-quill/dist/vue-quill.snow.css';

const props = defineProps({
  content: {
    type: String,
    default: ''
  }
});

const emit = defineEmits(['update:content']);

const localContent = ref(props.content);
const options = {
  theme: 'snow',
  placeholder: 'Write here...'
};

// Watch for changes in the content prop to update the local content
watch(
  () => props.content,
  (newContent) => {
    localContent.value = newContent;
  }
);

// Emit the updated content
const updateContent = (newContent) => {
  localContent.value = newContent;
  emit('update:content', newContent);
};
</script>
