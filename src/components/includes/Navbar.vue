<template>
  <div class="mx-auto max-w-7xl px-6 pt-6 lg:px-8">
    <nav class="flex items-center justify-between" aria-label="Global">
      <div class="flex lg:flex-1">
        <RouterLink
            to="/"
            class="-m-1.5 p-1.5"
        >
          <span class="sr-only">
            Nord Coders
          </span>
          <img
              v-if="isDark"
              class="h-8"
              src="/logo-dark.png"
              alt="Logo Nord Coders"
          >
          <img
              v-else
              class="h-8"
              src="/logo.png"
              alt="Logo Nord Coders"
          >
        </RouterLink>
      </div>
      <div class="flex lg:hidden">
        <button
            v-on:click="showMobileMenu"
            type="button"
            class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
        >
          <span class="sr-only">Open main menu</span>
          <svg class="h-6 w-6 dark:text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      </div>
      <div class="hidden lg:flex lg:gap-x-12">
        <RouterLink
            to="/"
            class="flex gap-x-2 text-sm font-semibold leading-6 text-gray-900 dark:text-gray-50 hover:text-green-500 dark:hover:text-sky-500"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
          </svg>
          <span>Accueil</span>
        </RouterLink>

        <RouterLink
            to="/articles"
            class="flex gap-x-2 text-sm font-semibold leading-6 text-gray-900 dark:text-gray-50 hover:text-green-500 dark:hover:text-sky-500"
            :class="activeArticleUrl"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
          </svg>
          <span>Blog</span>
        </RouterLink>

        <button
            v-on:click="toggleDark()"
        >
          <svg
              v-if="! isDark"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
          </svg>

          <svg
              v-if="isDark"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6 text-white"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
          </svg>
        </button>
      </div>
      <div class="hidden lg:flex lg:flex-1 lg:justify-end">
        <a
            href="https://www.malt.fr/profile/ludovicguenet"
            class="text-sm font-semibold leading-6 text-gray-900 dark:text-white"
            target="_blank"
        >
          Recrutez-moi <span aria-hidden="true">&rarr;</span>
        </a>
      </div>
    </nav>
    <!-- Mobile menu, show/hide based on menu open state. -->
    <div role="dialog" aria-modal="true">
      <div
          class="fixed inset-0 z-10 overflow-y-auto bg-white dark:bg-gray-700 px-6 py-6 lg:hidden"
          :class="{ hidden: mobileMenuState }"
          id="mobile-links"
      >
        <div class="flex items-center justify-between">
          <RouterLink
              v-on:click="hideMobileMenu"
              to="/"
              class="-m-1.5 p-1.5"
          >
            <span class="sr-only">Nord Coders</span>
            <img
                v-if="isDark"
                class="h-8"
                src="/logo-dark.png"
                alt="Logo Nord Coders"
            >
            <img
                v-else
                class="h-8"
                src="/logo.png"
                alt="Logo Nord Coders"
            >
          </RouterLink>
          <button
              v-on:click="hideMobileMenu"
              type="button"
              class="-m-2.5 rounded-md p-2.5 text-gray-700"
              id="mobile-button"
          >
            <span class="sr-only">Close menu</span>
            <svg
                class="h-6 w-6 dark:text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div class="mt-6 flow-root">
          <div class="-my-6 divide-y divide-gray-500/10">
            <div class="space-y-2 py-6">
              <RouterLink
                  v-on:click="hideMobileMenu"
                  to="/"
                  class="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 dark:text-gray-50 hover:text-green-500 dark:hover:text-sky-500"
              >
                Accueil
              </RouterLink>

              <RouterLink
                  v-on:click="hideMobileMenu"
                  to="/articles"
                  class="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 dark:text-gray-50 hover:text-green-500 dark:hover:text-sky-500"
                  :class="activeArticleUrl"
              >
                Blog
              </RouterLink>

              <button
                  v-on:click="toggleDark()"
              >
                <svg
                    v-if="! isDark"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                </svg>

                <svg
                    v-if="isDark"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6 text-white"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                </svg>
              </button>

            </div>
            <div class="py-6">
              <a
                  href="https://www.malt.fr/profile/ludovicguenet"
                  class="-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-6 text-gray-900 dark:text-white hover:bg-gray-400/10"
                  target="_blank"
              >
                Recrutez-moi
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { computed } from "vue";
  import { useRoute } from 'vue-router';
  import { useDark, useToggle } from '@vueuse/core';
  import navbarState from '../../composables/navbar/state';

  const isDark = useDark();
  const toggleDark = useToggle(isDark);

  const {
    mobileMenuState,
    showMobileMenu,
    hideMobileMenu,
  } = navbarState();

  const route = useRoute();
  const activeArticleUrl = computed((): string => route.path.match(/^\/articles\/.+/) ? 'text-green-500 dark:text-sky-500' : '');
</script>