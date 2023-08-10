<template>
  <section>
    <div class="container">
      <div class="start-screen">
        <h1>Create a new account</h1>
        <p>
          <span>or </span>
          <router-link to="/register">register</router-link>
        </p>

        <InputText
          type="email"
          label="Email"
          placeholder="email@example.com"
          v-model="email" />
        <Password
          type="password"
          label="Password"
          placeholder="Password..."
          v-model="password" />

        <Button
          label="login"
          @click="login" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import Input from '../../components/Input/index.vue';

  import { account } from '../../api';
  import { useRouter } from 'vue-router';

  const email = ref();
  const password = ref();

  const router = useRouter();

  async function login() {
    await account.createEmailSession(email.value, password.value);
    router.push({ name: 'application' });
  }
</script>

<style src="./style.css" scoped></style>
