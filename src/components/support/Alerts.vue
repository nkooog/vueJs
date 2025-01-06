<template>
  <div v-if="store.alertVisible" class="alert alert-primary alert-dismissible fade show" role="alert">
    {{ store.message }}
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close" @click="close"></button>
  </div>
</template>

<script>
import {store} from "@/mixins.js";
import {watch} from "vue";

  export default {
    name : '',    // 컴포넌트 이름
    components : {},    // 다른 컴포넌트 사용 시  컴포넌트를 import하고, 배열로 저장
    data() {            // html과 자바스크립에서 사용할 데이터 변수 선언
      return {};
    },
    setup() {
      // 컴포지션 API ( reactive )
      watch(() => store.alertVisible, (value) => {
        const overlay = document.querySelector('.overlay');
        overlay.style.display =
            (value) ? 'block' : 'none';
      });
      return {
        store
      }
    },
    created() {
      // 컴포넌트가 실행되면 실행
      const user = localStorage.getItem('user');
      if(user) {
        store.showLayout = true;
        this.$router.push('/dashBoard');
      }
    },
    mounted() {
    },       // tempalte에 정의 된 html 코드가 랜더링 된 후 실행
    unmounted() {
    },     // unmount가 완료된 후 실행
    methods : {
      close() {
        store.alertVisible = false;
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