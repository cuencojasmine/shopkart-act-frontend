<template>
  <v-layout class="home-layout">
    <v-app-bar flat height="76" class="shop-header">
      <v-container class="d-flex align-center">
        <NuxtLink to="/" class="logo-link d-flex align-center ga-2">
          <v-icon icon="mdi-cart" color="primary" size="38" />
          <span class="text-h5 font-weight-bold text-black">
            Shop<span class="text-primary">Kart</span>
          </span>
        </NuxtLink>

        <v-spacer />

        <v-btn color="primary" variant="tonal" prepend-icon="mdi-package-variant" to="/products">
          Manage Products
        </v-btn>
      </v-container>
    </v-app-bar>

    <v-main class="home-page">
      <v-container class="py-16 text-center">
        <v-icon icon="mdi-storefront-outline" color="primary" size="80" />
        <h1 class="text-h3 font-weight-bold mt-4">Welcome to ShopKart</h1>
        <p class="text-medium-emphasis mt-3 mb-8">
          Your simple e-commerce store powered by Nuxt, Vuetify, and Strapi.
        </p>
        <v-btn color="primary" size="large" prepend-icon="mdi-package-variant" to="/products">
          Go to Product Management
        </v-btn>
      </v-container>
    </v-main>
  </v-layout>
</template>

<script setup lang="ts">
definePageMeta({
  layout: false,
})

useHead({
  title: 'Home | ShopKart',
})
</script>

<style scoped>
.home-layout {
  min-height: 100vh;
}

.home-page {
  min-height: 100vh;
  background: #f5f7fb;
}

.shop-header {
  background: #ffffff !important;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
}

.logo-link {
  text-decoration: none;
  white-space: nowrap;
}
</style>
