<template>
  <div class="flex w-full h-screen items-center justify-center flex-col">
    <h3 class="text-4xl py-4 font-medium">
      Sepuluh Jari
    </h3>
    <LessonLists />
    <router-link
      class="bg-green-400 px-3 py-2 text-white font-medium rounded"
      to="/belajar"
    >
      Mulai Belajar
    </router-link>
  </div>
</template>

<script>
import LessonLists from '@/components/LessonLists'
export default {
  components: {
    LessonLists
  }
}
</script>
