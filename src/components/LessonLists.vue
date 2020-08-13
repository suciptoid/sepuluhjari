<template>
  <div id="lesson-list">
    <div
      v-for="lesson in lessons"
      :key="lesson.id"
      class="lesson"
    >
      <div class="lesson-title">
        {{ lesson.title }}
      </div>
      <div class="lesson-contents">
        <div
          v-for="content in lesson.contents"
          :key="content.id"
          class="lesson-content"
        >
          {{ content.title }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import lessons from '@/contents/lessons'
export default {
  data () {
    return {
      lessons: []
    }
  },
  mounted () {
    this.lessons = lessons
  }
}
</script>
