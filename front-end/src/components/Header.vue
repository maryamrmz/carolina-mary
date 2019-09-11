<template>
    <div>
        <ul class="nav">
            <div class="nav__section">
                <router-link to="/" tag="li" active-class="active" exact>
                    <i class="fa fa-home"></i>
                    <a>Home</a>
                </router-link>
            </div>
            <div class="nav__section users">
                <router-link to="/signup" tag="li" active-class="active">
                    <i class="fa fa-user-plus"></i>
                    <a>Sign up</a>
                </router-link>
                <router-link to="/login" tag="li" active-class="active">
                    <i class="fa fa-sign-in"></i>
                    <a>Log in</a>
                </router-link>
            </div>
        </ul>
    </div>
</template>
