<template>
  <div
      class="isolate bg-white dark:bg-gray-700"
  >
    <navbar />

    <main>
      <RouterView />
    </main>
  </div>

  <footer-component />
</template>

<script setup lang="ts">
  import Navbar from "@/components/includes/Navbar.vue";
  import FooterComponent from "@/components/includes/FooterComponent.vue";
</script>