<template>
  <aside id="sidebar" class="sidebar">
    <ul class="sidebar-nav" id="sidebar-nav">
     <li class="nav-item" :key="i" v-for="(menuList_levl1 , i) in menuList_levl1">
      <a class="nav-link collapsed" :data-bs-target="'#' + menuList_levl1.menuId +'-nav'" data-bs-toggle="collapse" href="#">
          <i class="bi bi-menu-button-wide"></i>
          <span>{{menuList_levl1.menuNm}}</span>
          <i v-if="menuList_levl2.some(item => item.hgrkMenuId === menuList_levl1.menuId)" class="bi bi-chevron-down ms-auto"></i>
      </a>
      <ul v-if="menuList_levl2.some(item => item.hgrkMenuId === menuList_levl1.menuId)"
          :id="menuList_levl1.menuId + '-nav'" class="nav-content collapse " data-bs-parent="#sidebar-nav"
          >
        <li :key="j"
            v-for="(menuList_levl2 , j) in menuList_levl2.filter(item => item.hgrkMenuId === menuList_levl1.menuId)">
          <a href="components-alerts.html">
            <i class="bi bi-circle"></i><span>{{ menuList_levl2.menuNm }}</span>
          </a>
        </li>
      </ul>
     </li>
    </ul>
  </aside><!-- End Sidebar-->
</template>

<script>
  import axios from "axios";
  import {store} from "@/mixins.js";

  export default {
    name : '',
    computed: {
      store() {
        return store
      }
    },
    // 컴포넌트 이름
    components : {},    // 다른 컴포넌트 사용 시  컴포넌트를 import하고, 배열로 저장
    data() {            // html과 자바스크립에서 사용할 데이터 변수 선언
      return {
        menuList_levl1 : [],
        menuList_levl2 : [],
        menuList_levl3 : [],
      };
    },      
    setup() {},         // 컴포지션 API
    created() {

      const params = {};
      params.tenantId = store.user.tenantId;
      params.usrGrd   = store.user.usrGrd;
      params.mlingCd  = store.user.mlingCd;
      params.usrId    = store.user.usrId;

      axios.post('/bcs/frme/FRME100SEL01', params).then((response) => {
        this.menuList_levl1 = JSON.parse(response.data.list).filter(item => item.prsMenuLvl === 1);
        this.menuList_levl2 = JSON.parse(response.data.list).filter(item => item.prsMenuLvl === 2);

        console.log(this.menuList_levl1);
        console.log(this.menuList_levl2);
      }).catch((error) => {
        console.log(error);
      });
    },
    mounted() {

    },
    unmounted() {

    },
    methods : {},       // 컴포넌트 내에서 사용할 메서드명 정의
  }
</script>