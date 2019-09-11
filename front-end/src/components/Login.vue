<template>
    <div>
        <div class="main">
            <div class="content">
                <h1>Log in</h1>
                <form @submit.prevent="onSubmit">
                    <div class="form__section">
                        <label>Username</label>
                        <br />
                        <input
                            type="text"
                            name="username"
                            placeholder="Username"
                            v-model="username"
                        />
                    </div>
                    <div class="form__section">
                        <label>Password</label>
                        <br />
                        <input
                            type="password"
                            name="password"
                            placeholder="**********"
                            v-model="password"
                        />
                    </div>
                    <div class="submit">
                        <button type="submit" class="login" href="#">Log In</button>
                    </div>
                    <div class="submit log">
                        <h5>Don't have an account?</h5>
                        <router-link to="./SignUp">
                            <button class="log__item">Sign up</button>
                        </router-link>
                    </div>
                    <div class="content">
                        We already have that email registered. Have you
                        <a
                            href="#"
                        >forgotten your password?</a>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Login",
    data() {
        return {
            username: "",
            password: ""
        };
    },
    methods: {
        onSubmit() {
            const formData = {
                username: this.username,
                password: this.password
            };
            this.$http.post("https://localhost:3000/users", this.formData).then(
                response => {
                    this.$router.push({ name: "home" });
                },
                error => {
                    console.log(error);
                }
            );
        }
    }
};
</script>