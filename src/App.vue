<script setup>
import Header from "@/components/layout/Header.vue";
import Footer from "@/components/layout/Footer.vue";
import Alerts from "@/components/support/Alerts.vue";
import {store} from "@/mixins.js";
import Side from "@/components/layout/Side.vue";

</script>

<template>

  <Header v-if="store.showLayout"></Header>
  <!-- ======= Sidebar ======= -->
  <div v-if="store.showLayout">
    <Side></Side>
  </div>
  <!-- router area -->
  <div class="router-view">
    <router-view></router-view>
  </div>

  <!-- footer -->
  <Footer v-if="store.showLayout"></Footer>

  <Alerts></Alerts>

  <div class="overlay"></div>

</template>

<script>
import {store} from "@/mixins.js";
import axios from "axios";

export default {
  name : '',    // 컴포넌트 이름
  components : {

  },    // 다른 컴포넌트 사용 시  컴포넌트를 import하고, 배열로 저장
  data() {            // html과 자바스크립에서 사용할 데이터 변수 선언
    return {};
  },
  created() {

  },
  mounted() {

  }
}
</script>
