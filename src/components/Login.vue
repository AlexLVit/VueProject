<template>
            <div class="container">
                <div class="row">
                    <div class="col-sm-8 offset-sm-2">
                        <h1>Введите данные:</h1>
                        <form @submit.prevent="submitForm"  >
                            <div class="form-group">
                                <label for="login">Login:</label>
                                <input type="login" v-model="user.login" id="login" name="login" class="form-control"
                                    :class="{ 'is-invalid': submitted && $v.user.login.$error }" />
                                <div v-if="submitted && $v.user.login.$error" class="invalid-feedback">
                                    <span v-if="!$v.user.login.required">Требуется ввести логин</span>
                                  
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="password">Password:</label>
                                <input type="password" v-model="user.password" id="password" name="password"
                                    class="form-control"
                                    :class="{ 'is-invalid': submitted && $v.user.password.$error }" />
                                <div v-if="submitted && $v.user.password.$error" class="invalid-feedback">
                                    <span v-if="!$v.user.password.required">Требуется ввести пароль</span>
                                    
                                </div>
                            </div>
                            <div class="form-group d-flex justify-content-center">
                             <button class="btn btn-primary btn-lg" type="submit" @click="login()"  >Log in</button>
                            </div>
                        </form>
                    </div>
                    
                </div>
            </div>
       
</template>

<script>
import { required} from "vuelidate/lib/validators";

const demo = (value) => value.length<5&&value.indexOf("demo") >=0;

export default {
        data() {
            return {
                user: {
                    login: "",
                    password: ""
                },
                submitted: false
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
      // We will see what `params` is shortly
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
        if(this.user.login == "demo" && this.user.password == "demo") {
              this.$emit("authenticated", true);
              this.$router.push("/mainpage");
       }
      }
    }
  }
}
</script>

<style scoped>

  .container{
    margin-top:200px;
    padding-bottom: 35%;
    font-family: 'Acme', sans-serif;
    
  }
  h1{
    text-align: center;
  }
</style>

