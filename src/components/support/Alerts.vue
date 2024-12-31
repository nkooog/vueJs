<template>
  <div v-if="visible" class="alert alert-primary alert-dismissible fade show" role="alert">
    A simple success alert—check it out!
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>
</template>

<script>
  export default {
    name : '',    // 컴포넌트 이름
    components : {},    // 다른 컴포넌트 사용 시  컴포넌트를 import하고, 배열로 저장
    data() {            // html과 자바스크립에서 사용할 데이터 변수 선언
      return {
        visible : false
      };
    },
    setup() {},         // 컴포지션 API
    created() {},       // 컴포넌트가 실행되면 실행
    mounted() {},       // tempalte에 정의 된 html 코드가 랜더링 된 후 실행
    unmounted() {},     // unmount가 완료된 후 실행
    methods : {
      close() {
        this.visible = false;
      }
    },       // 컴포넌트 내에서 사용할 메서드명 정의
  }
</script>

<style>
.alert {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1050;
  width: 300px;
}

.btn-close {
  position: absolute;
  top: 10px;
  right: 10px;
}
</style>