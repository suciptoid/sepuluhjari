<template>
  <div
    id="belajar"
    class="flex flex-col h-screen"
  >
    <div
      id="expand"
      class="flex-1 w-full max-w-5xl m-auto py-8"
    >
      <div
        id="info"
        class="flex justify-between"
      >
        <div id="timer">
          Time: {{ time }} second
        </div>
        <div id="accuracy">
          Accuracy: {{ accuracy.toLocaleString() }}%
        </div>
        <div id="wpm">
          Speed: {{ wpm.toLocaleString() }} wpm
        </div>
      </div>
      <div
        class="typing-box w-full text-lg border rounded outline-none flex px-3 py-3"
      >
        <div
          v-for="(word,i) in words"
          :key="i"
          class="mr-1"
          :class="{
            'match':isMatch(i),
            'wrong':isWrong(i)
          }"
        >
          <span
            v-for="(char,ic) in word"
            :key="`char-${i}-${ic}`"
            :class="{
              'highlight': isCharHighlihgted(i,ic)
            }"
          >{{ char }}</span>
        </div>
      </div>
    </div>
    <Keyboard
      class="m-auto"
      @keydown="onKeyUp"
    />
  </div>
</template>

<script>
import Keyboard from '@/components/Keyboard'
export default {
  components: {
    Keyboard
  },
  data () {
    return {
      texts: 'The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.',
      inputs: [

      ],
      current: '',
      time: 0,
      timer: null
    }
  },
  computed: {
    words () {
      return this.texts.split(' ')
    },
    wpm () {
      const wpm = this.inputs.length / (this.time / 60)
      return !isNaN(wpm) ? wpm : 0
    },
    accuracy () {
      const total = this.inputs.length
      let correct = 0

      this.inputs.forEach((word, i) => {
        const source = this.words[i]
        if (source) {
          if (source === word) {
            correct++
          }
        }
      })

      const accuracy = (correct / total) * 100
      return isNaN(accuracy) ? 0 : accuracy
    }
  },
  beforeDestroy () {
    if (this.timer) {
      clearInterval(this.timer)
    }
  },
  methods: {
    onKeyUp (e) {
      if (this.time === 0) {
        console.log('timer not started, start it')
        this.startTimer()
      }

      const allowed = 'abcdefghijklmnopqrstuvwxyz1234567890-=!@#$%^&*()_+[]\\{}|;\':",./<>?`~'.split('')
      if (allowed.indexOf(e.key.toLowerCase()) >= 0) {
        this.current = this.current.concat(e.key)
      } else if (e.code === 'Backspace') {
        this.current = this.current.slice(0, -1)
      } else if (e.code === 'Space' || e.code === 'Enter') {
        this.inputs.push(this.current)
        this.current = ''

        if (this.words.length <= this.inputs.length) {
          if (this.timer) {
            clearInterval(this.timer)
          }
        }
      }
    },
    isMatch (index) {
      if (this.words.length >= index + 1 && this.inputs.length >= index + 1) {
        if (this.words[index] === this.inputs[index]) {
          return true
        }
      } else {
        return false
      }
    },
    isWrong (index) {
      if (this.inputs.length >= index + 1) {
        if (this.words[index] !== this.inputs[index]) {
          return true
        }
      } else {
        return false
      }
    },
    isCharHighlihgted (word, char) {
      if (this.inputs.length === word) {
        if (this.current.length > char) {
          return true
        }
      }

      return false
    },
    startTimer () {
      if (this.timer) {
        clearInterval(this.timer)
      }

      this.time++
      this.timer = setInterval(() => {
        console.log('tick...')
        this.time++
      }, 1000)
    }
  }
}
</script>

<style scoped>
.match {
  @apply text-gray-300;
  @apply font-medium;
}

.wrong {
  @apply text-red-600;
  @apply font-medium;
}

.highlight {
  @apply text-green-500;
  @apply font-medium;
}
</style>
