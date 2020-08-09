<template>
  <div
    id="keyboard"
    class="w-full max-w-5xl"
  >
    <!-- First Row -->
    <div class="row flex justify-between">
      <div
        :class="{'pressed':isPressed('Backquote')}"
        class="key-base key-multi"
      >
        <span>~</span>
        <span>`</span>
      </div>
      <div
        :class="{'pressed':isPressed('Digit1')}"
        class="key-base key-multi"
      >
        <span>!</span>
        <span>1</span>
      </div>
      <div
        :class="{'pressed':isPressed('Digit2')}"
        class="key-base key-multi"
      >
        <span>@</span>
        <span>2</span>
      </div>
      <div
        :class="{'pressed':isPressed('Digit3')}"
        class="key-base key-multi"
      >
        <span>#</span>
        <span>3</span>
      </div>
      <div
        :class="{'pressed':isPressed('Digit4')}"
        class="key-base key-multi"
      >
        <span>$</span>
        <span>4</span>
      </div>
      <div
        :class="{'pressed':isPressed('Digit5')}"
        class="key-base key-multi"
      >
        <span>%</span>
        <span>5</span>
      </div>
      <div
        :class="{'pressed':isPressed('Digit6')}"
        class="key-base key-multi"
      >
        <span>^</span>
        <span>6</span>
      </div>
      <div
        :class="{'pressed':isPressed('Digit7')}"
        class="key-base key-multi"
      >
        <span>&</span>
        <span>7</span>
      </div>
      <div
        :class="{'pressed':isPressed('Digit8')}"
        class="key-base key-multi"
      >
        <span>*</span>
        <span>8</span>
      </div>
      <div
        :class="{'pressed':isPressed('Digit9')}"
        class="key-base key-multi"
      >
        <span>(</span>
        <span>9</span>
      </div>
      <div
        :class="{'pressed':isPressed('Digit0')}"
        class="key-base key-multi"
      >
        <span>)</span>
        <span>0</span>
      </div>
      <div
        :class="{'pressed':isPressed('Minus')}"
        class="key-base key-multi"
      >
        <span>_</span>
        <span>-</span>
      </div>
      <div
        :class="{'pressed':isPressed('Equal')}"
        class="key-base key-multi"
      >
        <span>+</span>
        <span>=</span>
      </div>
      <div
        :class="{'pressed':isPressed('Backspace')}"
        class="key-base key-md gravity gravity-right"
      >
        delete
      </div>
    </div>
    <!-- End First Row  -->

    <!-- Second Row -->
    <div class="row flex justify-between">
      <div
        :class="{'pressed':isPressed('Tab')}"
        class="key-base key-md gravity"
      >
        tab
      </div>
      <div
        :class="{'pressed':isPressed('KeyQ')}"
        class="key-base"
      >
        Q
      </div>
      <div
        :class="{'pressed':isPressed('KeyW')}"
        class="key-base"
      >
        W
      </div>
      <div
        :class="{'pressed':isPressed('KeyE')}"
        class="key-base"
      >
        E
      </div>
      <div
        :class="{'pressed':isPressed('KeyR')}"
        class="key-base"
      >
        R
      </div>
      <div
        :class="{'pressed':isPressed('KeyT')}"
        class="key-base"
      >
        T
      </div>
      <div
        :class="{'pressed':isPressed('KeyY')}"
        class="key-base"
      >
        Y
      </div>
      <div
        :class="{'pressed':isPressed('KeyU')}"
        class="key-base"
      >
        U
      </div>
      <div
        :class="{'pressed':isPressed('KeyI')}"
        class="key-base"
      >
        I
      </div>
      <div
        :class="{'pressed':isPressed('KeyO')}"
        class="key-base"
      >
        O
      </div>
      <div
        :class="{'pressed':isPressed('KeyP')}"
        class="key-base"
      >
        P
      </div>
      <div
        :class="{'pressed':isPressed('BracketLeft')}"
        class="key-base key-multi"
      >
        <span>{</span>
        <span>[</span>
      </div>
      <div
        :class="{'pressed':isPressed('BracketRight')}"
        class="key-base key-multi"
      >
        <span>}</span>
        <span>]</span>
      </div>
      <div
        :class="{'pressed':isPressed('Backslash')}"
        class="key-base key-multi"
      >
        <span>|</span>
        <span>\</span>
      </div>
    </div>
    <!-- End Of Second Row -->

    <!-- Third Row -->
    <div class="row flex justify-between">
      <div
        :class="{'pressed':isPressed('CapsLock')}"
        class="key-base capslock gravity"
      >
        caps lock
      </div>
      <div
        :class="{'pressed':isPressed('KeyA')}"
        class="key-base"
      >
        A
      </div>
      <div
        :class="{'pressed':isPressed('KeyS')}"
        class="key-base"
      >
        S
      </div>
      <div
        class="key-base"
        :class="{'pressed':isPressed('KeyD')}"
      >
        D
      </div>
      <div
        :class="{'pressed':isPressed('KeyF')}"
        class="key-base underline"
      >
        F
      </div>
      <div
        :class="{'pressed':isPressed('KeyG')}"
        class="key-base"
      >
        G
      </div>
      <div
        :class="{'pressed':isPressed('KeyH')}"
        class="key-base"
      >
        H
      </div>
      <div
        :class="{'pressed':isPressed('KeyJ')}"
        class="key-base underline"
      >
        J
      </div>
      <div
        :class="{'pressed':isPressed('KeyK')}"
        class="key-base"
      >
        K
      </div>
      <div
        :class="{'pressed':isPressed('KeyL')}"
        class="key-base"
      >
        L
      </div>
      <div
        :class="{'pressed':isPressed('Semicolon')}"
        class="key-base key-multi"
      >
        <span>:</span>
        <span>;</span>
      </div>
      <div
        :class="{'pressed':isPressed(`Quote`)}"
        class="key-base key-multi"
      >
        <span>"</span>
        <span>'</span>
      </div>
      <div
        :class="{'pressed':isPressed('Enter')}"
        class="key-base return gravity gravity-right"
      >
        return
      </div>
    </div>
    <!-- End Third Row -->

    <!-- Fourth Row -->
    <div class="row flex justify-between">
      <div
        class="key-base shift gravity"
        :class="{'pressed':isPressed('ShiftLeft')}"
      >
        shift
      </div>
      <div
        class="key-base"
        :class="{'pressed':isPressed('KeyZ')}"
      >
        Z
      </div>
      <div
        class="key-base"
        :class="{'pressed':isPressed('KeyX')}"
      >
        X
      </div>
      <div
        class="key-base"
        :class="{'pressed':isPressed('KeyC')}"
      >
        C
      </div>
      <div
        class="key-base"
        :class="{'pressed':isPressed('KeyV')}"
      >
        V
      </div>
      <div
        class="key-base"
        :class="{'pressed':isPressed('KeyB')}"
      >
        B
      </div>
      <div
        class="key-base"
        :class="{'pressed':isPressed('KeyN')}"
      >
        N
      </div>
      <div
        class="key-base"
        :class="{'pressed':isPressed('KeyM')}"
      >
        M
      </div>
      <div
        class="key-base key-multi"
        :class="{'pressed':isPressed('Comma')}"
      >
        <span>&lt;</span>
        <span>,</span>
      </div>
      <div
        class="key-base key-multi"
        :class="{'pressed':isPressed('Period')}"
      >
        <span>&gt;</span>
        <span>.</span>
      </div>
      <div
        class="key-base key-multi"
        :class="{'pressed':isPressed('Slash')}"
      >
        <span>?</span>
        <span>/</span>
      </div>
      <div
        class="key-base shift gravity gravity-right"
        :class="{'pressed':isPressed('ShiftRight')}"
      >
        shift
      </div>
    </div>
    <!-- End Fourth Row  -->
    <div class="row flex justify-between">
      <div class="key-base gravity">
        fn
      </div>
      <div
        class="key-base gravity text-xs"
        :class="{'pressed':isPressed('ControlLeft')}"
      >
        control
      </div>
      <div
        class="key-base gravity text-xs text-center"
        :class="{'pressed':isPressed('AltLeft')}"
      >
        option
      </div>
      <div
        class="key-base gravity  text-xs"
        :class="{'pressed':isPressed('MetaLeft')}"
      >
        cmd
      </div>
      <div
        class="key-base space"
        :class="{'pressed':isPressed('Space')}"
      >
        <!-- spasi -->
      </div>
      <div
        class="key-base gravity  text-xs"
        :class="{'pressed':isPressed('MetaRight')}"
      >
        cmd
      </div>
      <div
        class="key-base gravity text-xs"
        :class="{'pressed':isPressed('AltRight')}"
      >
        option
      </div>
      <div
        class="arrow-group flex justify-end items-end"
      >
        <div
          class="key-base arrow mr-2"
          :class="{'pressed':isPressed('ArrowLeft')}"
        >
          left
        </div>
        <div class="flex flex-col mr-2">
          <div
            class="key-base arrow-y mb-1"
            :class="{'pressed':isPressed('ArrowUp')}"
          >
            up
          </div>
          <div
            class="key-base arrow-y"
            :class="{'pressed':isPressed('ArrowDown')}"
          >
            down
          </div>
        </div>
        <div
          class="key-base arrow"
          :class="{'pressed':isPressed('ArrowRight')}"
        >
          right
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      keys: []
    }
  },
  mounted () {
    window.addEventListener('keydown', this.onKeyDown)
    window.addEventListener('keyup', this.onKeyUp)
  },
  beforeDestroy () {
    window.removeEventListener('keydown', this.onKeyDown)
    window.removeEventListener('keyup', this.onKeyUp)
  },
  methods: {
    onKeyDown (e) {
      console.log('Keybaord:onKeyDown:', e)
      this.$emit('keydown', e)
      this.keys.push(e.code)
    },
    onKeyUp (e) {
      console.log('Keyboard:onKeyUp', e)
      this.$emit('keyup', e)
      this.keys = this.keys.filter(f => f !== e.code)
    },
    isPressed (key) {
      return this.keys.find(f => f === key) !== undefined
    }
  }
}
</script>

<style scoped>
.row {
  @apply select-none;
  @apply mb-4;
}
.key-base {
  @apply h-16;
  @apply w-16;
  @apply rounded-md;
  @apply border;
  @apply shadow;
  @apply flex;
  @apply items-center;
  @apply justify-center;
}

.key-multi {
  @apply flex-col;
}

.key-md {
  @apply w-24;
}

.gravity {
  @apply px-3;
  @apply py-2;
  @apply items-start;
  @apply flex-col;
  @apply justify-end;
}

.gravity-right {
  @apply items-end;
}

.capslock, .return {
  width: 110px;
}

.shift {
  @apply w-32;
}

.command {
  width: 75px;
}

.space {
  width: 370px;
}

.arrow {
  /* @apply h-8; */
  height: 30px;
}

.arrow-y {
  height: 30px;
}

.pressed {
  @apply bg-gray-200;
  @apply shadow-inner;
}

</style>
