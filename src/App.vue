<template>
    <div id="app">
        <div class="jumbotron ">
            <div class="container">
                <div class="row">
                    <div class="col-sm-8 offset-sm-2">
                        <h1>Введите данные:</h1>
                        <form @submit.prevent="submitForm">
                            <div class="form-group">
                                <label for="email">Email:</label>
                                <input type="email" v-model="user.email" id="email" name="email" class="form-control"
                                    :class="{ 'is-invalid': submitted && $v.user.email.$error }" />
                                <div v-if="submitted && $v.user.email.$error" class="invalid-feedback">
                                    <span v-if="!$v.user.email.required">Email is required</span>
                                    <span v-if="!$v.user.email.email">Email is invalid</span>
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="password">Password:</label>
                                <input type="password" v-model="user.password" id="password" name="password"
                                    class="form-control"
                                    :class="{ 'is-invalid': submitted && $v.user.password.$error }" />
                                <div v-if="submitted && $v.user.password.$error" class="invalid-feedback">
                                    <span v-if="!$v.user.password.required">Password is required</span>
                                    <span v-if="!$v.user.password.minLength">Password must be at least 6
                                        characters</span>
                                </div>
                            </div>
                            <div>
                              <router-link to="/secondpage" target="_blank"><button type="submit" >Submit</button></router-link>
                             
                            </div>
                        </form>
                    </div>
                    
                </div>
                
            </div>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
import { required, email, minLength } from "vuelidate/lib/validators";

export default {
    name: "app",
        data() {
            return {
                user: {
                    email: "",
                    password: ""
                },
                submitted: false
            };
        },
  validations: {
    user: {
      email: {
        required,
        email
      },
      password: {
        required,
        minLength: minLength(6)
      },
    }
  },
  mounted(){
    if(localStorage.email){ 
      this.email = localStorage.email;
    }
  },
  watch:{
    email(newEmail) {
      localStorage.email = newEmail;
    }
  },
  methods: {
    submitForm() {
      this.submitted = true;

      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      }
    }
  }
}
</script>