<template>
  <main>
    <div class="container">
      <section class="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">

              <div class="d-flex justify-content-center py-4">
                <a href="index.html" class="logo d-flex align-items-center w-auto">
                  <img src="@/assets/img/exona_logo_df.svg" alt="">
                  <span class="d-none d-lg-block"></span>
                </a>
              </div><!-- End Logo -->

              <div class="card mb-3">
                <div class="card-body">

                  <div class="pt-4 pb-2">
                    <h5 class="card-title text-center pb-0 fs-4">Login to Your Account</h5>
                    <p class="text-center small">Enter your username & password to login</p>
                  </div>

                  <form name="sendFrom" class="row g-3 needs-validation" novalidate @submit.prevent="validateForm">

                    <div class="col-12">
                      <label for="tenantId" class="form-label">고객사</label>
                      <div class="input-group has-validation">
                        <input type="text" name="tenantId" class="form-control" id="tenantId" required>
                        <div class="invalid-feedback">고객사를 입력해주세요.</div>
                      </div>
                    </div>

                    <div class="col-12">
                      <label for="usrId" class="form-label">아이디</label>
                      <div class="input-group has-validation">
                        <input type="text" name="usrId" class="form-control" id="usrId" required>
                        <div class="invalid-feedback">아이디를 입력해주세요.</div>
                      </div>
                    </div>

                    <div class="col-12">
                      <label for="scrtNo" class="form-label">비밀번호</label>
                      <input type="password" name="scrtNo" class="form-control" id="scrtNo" required>
                      <div class="invalid-feedback">비밀번호를 입력해주세요.</div>
                    </div>

                    <div class="col-12">
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" name="remember" value="true" id="rememberMe">
                        <label class="form-check-label" for="rememberMe">Remember me</label>
                      </div>
                    </div>
                    <div class="col-12">
                      <button class="btn btn-primary w-100" type="submit">Login</button>
                    </div>
                    <div class="col-12">
                      <p class="small mb-0">Don't have account? <a href="pages-register.html">Create an account</a></p>
                    </div>
                  </form>

                </div>
              </div>

              <div class="credits">
                <!-- All the links in the footer should remain intact. -->
                <!-- You can delete the links only if you purchased the pro version. -->
                <!-- Licensing information: https://bootstrapmade.com/license/ -->
                <!-- Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/nice-admin-bootstrap-admin-html-template/ -->
                Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  </main><!-- End #main -->
</template>

<script>
import axios from "axios";
export default {
  name : '',    // 컴포넌트 이름
  components : {},    // 다른 컴포넌트 사용 시  컴포넌트를 import하고, 배열로 저장
  data() {            // html과 자바스크립에서 사용할 데이터 변수 선언
    return {
      sampleData : '',
      message : ''
    };
  },
  methods : {
    validateForm() {
      const form = document.forms['sendFrom'];
      form.checkValidity() ? this.login() : form.classList.add('was-validated');
    },
    login() {

      const form = document.querySelector('form');
      const params = this.serializeForm(form);

      console.log(params);

      axios.post('/bcs/lgin/LGIN000SEL01', params).then((res) => {
        this.message = res.data.msg;
        console.log(res.data.msg);
      }).catch((error) => {
        console.log(error);
      });
    },
    serializeForm(formElement) {
      const formData = new FormData(formElement);
      const params = {};
      for (const [key, value] of formData.entries()) {
        params[key] = value;
      }

      return params;
    }
  },       // 컴포넌트 내에서 사용할 메서드명 정의
}
</script>



