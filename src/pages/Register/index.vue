<template>
  <section>
    <div class="container">
      <div class="start-screen">
        <h1>Register a new account</h1>
        <p>
          <span>or </span>
          <router-link to="/login">login</router-link>
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
          label="Register"
          @click="register" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import { ref } from 'vue';

  import { account } from '../../api';
  import { useRouter } from 'vue-router';

  const email = ref();
  const password = ref();

  const router = useRouter();

  async function register() {
    if (!email.value || !password.value) return;

    await account.create('unique()', email.value, password.value);
    await account.createEmailSession(email.value, password.value);

    router.push({ name: 'application' });
  }
</script>

<style scoped></style>
