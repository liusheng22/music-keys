<template>
  <div class="w-[90%] max-w-6xl bg-gray-800/50 rounded-2xl py-20 px-12 backdrop-blur-sm shadow-2xl">
    <div class="space-y-6">
      <!-- Q W E R T Y U I O P -->
      <div class="flex justify-center gap-4">
        <template v-for="key in firstRow" :key="key">
          <KeyButton :letter="key" :active="activeKey === key" />
        </template>
      </div>
      <!-- A S D F G H J K L -->
      <div class="flex justify-center gap-4 ml-8">
        <template v-for="key in secondRow" :key="key">
          <KeyButton :letter="key" :active="activeKey === key" />
        </template>
      </div>
      <!-- Z X C V B N M -->
      <div class="flex justify-center gap-4 ml-16">
        <template v-for="key in thirdRow" :key="key">
          <KeyButton :letter="key" :active="activeKey === key" />
        </template>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  activeKey: Ref<string>
}

const props = defineProps<Props>()
const emit = defineEmits<{
  'key-press': [key: string]
}>()

const firstRow = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P']
const secondRow = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L']
const thirdRow = ['Z', 'X', 'C', 'V', 'B', 'N', 'M']

watch(() => props.activeKey.value, (newKey) => {
  if (newKey) {
    emit('key-press', newKey)
  }
})
</script>