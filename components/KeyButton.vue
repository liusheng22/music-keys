<script setup lang="ts">
const props = defineProps<{
  itemLength: number
  letter: string
  active: boolean
}>()

const emit = defineEmits<{
  'key-press': [key: string]
  'key-up': [key: string]
}>()

const nuxtApp = useNuxtApp()
const { active } = toRefs(props)
const { $device } = nuxtApp

const buttonClasses = computed(() => ({
  'keys-item': true,
  'keys-rounded': true,
  'flex items-center justify-center': true,
  'transition-all duration-150 transform shadow-lg': true,
  'hover:border-b-[2px] hover:translate-y-[2px]': $device.isDesktop,
  'active:border-b-[2px] active:translate-y-[2px]': $device.isMobileOrTablet,
  'bg-purple-500 border-purple-700 text-white translate-y-[4px] border-b-0': active.value,
  'bg-gray-700 border-gray-800 text-purple-400': !active.value,
  'hover:bg-gray-600': !active.value && !$device.isMobileOrTablet
}))

const rippleClasses = computed(() => ({
  'keys-ripple': true,
  'keys-rounded': true,
  'absolute opacity-0 transition-opacity duration-300 pointer-events-none': true,
  'opacity-20 bg-purple-500': active.value,
  'bg-purple-400': !active.value,
  'group-hover:opacity-10': !active.value && !$device.isMobileOrTablet,
  'group-active:opacity-10': !active.value && $device.isMobileOrTablet
}))

// all handle press
function handlePress() {
  emit('key-press', props.letter)
}

// all handle release
function handleRelease() {
  emit('key-up', props.letter)
}
</script>

<template>
  <div
    :data-key="letter"
    class="group relative flex justify-center items-center"
    :style="{
      flex: `1 1 calc(${100 / props.itemLength}%)`,
    }"
    @mousedown="handlePress"
    @mouseup="handleRelease"
    @mouseleave="handleRelease"
    @touchstart.prevent="handlePress"
    @touchend.prevent="handleRelease"
    @touchcancel.prevent="handleRelease"
  >
    <div :class="buttonClasses">
      <span class="keys-text text-[2.5vw] font-bold select-none">
        {{ letter }}
      </span>
    </div>

    <!-- ripple -->
    <div :class="rippleClasses" />
  </div>
</template>

<style scoped>
.keys-item {
  @apply flex-auto max-w-12 h-12;
  @apply sm:max-w-16 sm:h-16;
  @apply md:max-w-20 md:h-20;
  @apply lg:max-w-24 lg:h-24;
  @apply xl:max-w-28 xl:h-28;
  @apply 2xl:max-w-32 2xl:h-32;
}

.keys-item {
  @apply border-b-[3px];
  @apply sm:border-b-[4px];
  @apply md:border-b-[4px];
  @apply lg:border-b-[6px];
  @apply xl:border-b-[6px];
  @apply 2xl:border-b-[7px];
}

.keys-rounded {
  @apply rounded-xl 2xl:rounded-2xl xl:rounded-xl lg:rounded-lg md:rounded-md sm:rounded-sm;
}
.keys-text {
  @apply text-sm 2xl:text-6xl xl:text-4xl lg:text-3xl md:text-lg sm:text-sm;
}

.keys-ripple {
  @apply -inset-[0.18rem];
  @apply sm:-inset-1;
  @apply md:-inset-1.5;
  @apply lg:-inset-2;
  @apply xl:-inset-2;
  @apply 2xl:-inset-3;
}
</style>
