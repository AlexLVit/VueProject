<template>
            <div class="jumbotron">
              <div class="container">
                <div class="row">
                    <div class="col-sm-8 offset-sm-2">
                        <h1>Введите данные:</h1>
                        <form @submit.prevent="submitForm"  >
                            <div class="form-group">
                                <label for="login">Логин:</label>
                                <input 
                                type="login" 
                                v-model="user.login" 
                                id="login" 
                                name="login" 
                                class="form-control"
                                :class="{ 'is-invalid': submitted && $v.user.login.$error }" 
                                />
                                <div 
                                v-if="submitted && $v.user.login.$error" 
                                class="invalid-feedback"
                                >
                                    <span v-if="!$v.user.login.required">Требуется ввести логин</span>
                                    <span v-if="isCorrect">Логин введен неправильно</span> 
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="password">Пароль:</label>
                                <input 
                                type="password" 
                                v-model="user.password" 
                                id="password" 
                                name="password"
                                class="form-control"
                                :class="{ 'is-invalid': submitted && $v.user.password.$error }" 
                                />
                                <div v-if="submitted && $v.user.password.$error" class="invalid-feedback">
                                    <span v-if="!$v.user.password.required">Требуется ввести пароль</span>
                                    <span v-if="isCorrect">Пароль введен неправильно</span> 
                                </div>
                            </div>
                            <div class="form-group d-flex justify-content-center">
                             <button 
                             class="btn btn-primary btn-lg" 
                             type="submit" 
                             @click="login()"  
                             >Войти</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            </div>       
</template>

<script>
import { required} from "vuelidate/lib/validators";

const demo = (value) => value.indexOf("demo") >=0;

export default {
        data() {
            return {
                user: {
                    login: "",
                    password: ""
                },
                submitted: false,
                isCorrect: false
            };
        },
  validations: {
    user: {
      login: {
        required,
        demo
      },
      password: {
        required,
        demo
      },
    }
  },
 computed: {
    username() {
      return this.$route.params.username
    }
  },
  methods: {
    submitForm() {
      this.submitted = true;

      this.$v.$touch();
    },
    login(){
      if(this.user.login != "" && this.user.password != "") {
        if(this.user.login.toLowerCase() == "demo" && this.user.password === "demo") {
          this.$emit("authenticated", true);
          this.$router.push("/");
       }
       else{
         this.isCorrect = true;
       }
      }
    }
  }
}
</script>

<style scoped>
  .jumbotron{
    padding-bottom: 33%;
  }
  .container{
    margin-top: 150px;
    font-family: 'Acme', sans-serif;
    background-color: white;
    border-radius: 1.5cm;
  }
  h1{
    text-align: center;
    padding-top: 25px;
  }
  .btn{
    margin-top: 15px;
  }
  .form-control{
    border-radius: 1cm;
  }
</style>

