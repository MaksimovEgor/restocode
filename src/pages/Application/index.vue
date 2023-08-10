<template>
  <main class="main">
    <Header />
    <Sidebar />

    <div class="main__content">
      <div class="container">
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
        </ul>
      </div>
    </div>

    <Footer />
  </main>
</template>

<script setup lang="ts">
  import Sidebar from '../../components/Sidebar/index.vue';
  import Header from '../../components/Header/index.vue';
  import Footer from '../../components/Footer/index.vue';
</script>

<style scoped lang="css" src="./style.css"></style>
