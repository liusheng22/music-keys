<template>
  <div
    :data-key="letter"
    class="relative group"
  >
    <div
      :class="[
        'w-24 h-24 rounded-xl flex items-center justify-center transition-all duration-150 shadow-lg',
        'border-b-[6px] active:border-b-0 active:translate-y-[6px]',
        active 
          ? 'bg-purple-500 border-purple-700 text-white scale-95' 
          : 'bg-gray-700 border-gray-800 text-purple-400 hover:bg-gray-600'
      ]"
    >
      <span class="text-4xl font-bold select-none">{{ letter }}</span>
    </div>
    
    <!-- keyboard shadow -->
    <div
      :class="[
        'absolute -inset-3 rounded-2xl opacity-0 transition-opacity duration-300',
        active ? 'opacity-20 bg-purple-500' : 'group-hover:opacity-10 bg-purple-400'
      ]"
    ></div>
  </div>
</template>

<script setup>
defineProps({
  letter: {
    type: String,
    required: true
  },
  active: {
    type: Boolean,
    default: false
  }
})
</script>