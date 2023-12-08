<template>
  <div>
    <p>Count: {{ props.currentCount }}</p>
    <p>Chord: {{ props.currentChordName }}</p>
    <p>Order number: {{ props.currenChordNumber }}</p>
  </div>
</template>

<script setup>
const props = defineProps({
  currentCount: Number,
  currentChordName: String,
  currenChordNumber: Number,
});
</script>
