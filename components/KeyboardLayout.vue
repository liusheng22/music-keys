<script setup lang="ts">
const props = defineProps<{
  activeKey: string
}>()

const emit = defineEmits<{
  'key-press': [key: string]
  'key-up': [key: string]
}>()

const firstRow = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P']
const secondRow = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L']
const thirdRow = ['Z', 'X', 'C', 'V', 'B', 'N', 'M']

function getActive(key: string) {
  return props.activeKey === key
}

// 处理按键事件
function handleKeyPress(key: string) {
  emit('key-press', key)
}

function handleKeyUp(key: string) {
  emit('key-up', key)
}
</script>

<template>
  <div class="keys-container w-full max-w-[95vw] mx-auto bg-gray-800/50 rounded-xl backdrop-blur-sm shadow-2xl">
    <div class="keys-content flex flex-col items-center">
      <!-- first row -->
      <div class="flex w-screen keys-row">
        <KeyButton
          v-for="key in firstRow"
          :key="key"
          :item-length="10"
          :letter="key"
          :active="getActive(key)"
          @key-press="handleKeyPress"
          @key-up="handleKeyUp"
        />
      </div>

      <!-- second row -->
      <div class="flex keys-row keys-row-2">
        <KeyButton
          v-for="key in secondRow"
          :key="key"
          :item-length="9"
          :letter="key"
          :active="getActive(key)"
          @key-press="handleKeyPress"
          @key-up="handleKeyUp"
        />
      </div>

      <!-- third row -->
      <div class="flex keys-row keys-row-3">
        <KeyButton
          v-for="key in thirdRow"
          :key="key"
          :item-length="7"
          :letter="key"
          :active="getActive(key)"
          @key-press="handleKeyPress"
          @key-up="handleKeyUp"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.keys-container {
  @apply p-8;
  @apply sm:p-4;
  @apply md:p-5;
  @apply lg:p-8;
  @apply xl:p-10;
  @apply 2xl:p-12;
}

.keys-content {
  @apply space-y-2;
  @apply sm:space-y-3;
  @apply md:space-y-4;
  @apply lg:space-y-8;
  @apply xl:space-y-10;
  @apply 2xl:space-y-12;
}

.keys-row {
  @apply px-20 gap-1;
  @apply sm:px-24 sm:gap-2;
  @apply md:px-28 md:gap-3;
  @apply lg:px-36 lg:gap-4;
  @apply xl:px-44 xl:gap-5;
  @apply 2xl:px-52 2xl:gap-6;
}

.keys-row-2 {
  @apply w-[calc(100vw-4vw)];
  @apply sm:w-[calc(100vw-6vw)];
  @apply md:w-[calc(100vw-4vw)];
  @apply lg:w-[calc(100vw-5vw)];
  @apply xl:w-[calc(100vw-6vw)];
  @apply 2xl:w-[calc(100vw-7vw)];
}

.keys-row-3 {
  @apply w-[calc(100vw-18vw)];
  @apply sm:w-[calc(100vw-20vw)];
  @apply md:w-[calc(100vw-21vw)];
  @apply lg:w-[calc(100vw-22vw)];
  @apply xl:w-[calc(100vw-22vw)];
  @apply 2xl:w-[calc(100vw-23vw)];
}
</style>
