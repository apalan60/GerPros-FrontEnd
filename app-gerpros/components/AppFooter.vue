<script setup lang="ts">
// ...
</script>

<template>
  <footer class="pt-12 bg-black text-white">
    <div class="container mx-auto px-6 pt-12">
      <div class="flex flex-wrap">
        <div
          class="-mx-4 flex flex-col flex-wrap items-center pl-4 pr-8 py-4 md:flex-col md:flex-nowrap -mt-4 lg:items-start lg:w-1/3"
        >
          <UIcon name="i-heroicons-light-bulb" class="w-5 h-5" />
          <p class="mt-2 text-center w-full lg:text-left">
            Duis pharetra venenatis felis, ut tincidunt ipsum consequat nec.
            Fusce et porttitor libero, eu aliquam nisi. Nam finibus ullamcorper
            semper.
          </p>
          <div class="inline-flex mt-6 space-x-3">
            <div class="flex flex-wrap space-x-4">
              <NuxtLink
                href="https://www.facebook.com/vuedesigner"
                aria-label="facebook"
                external
                target="_blank"
              >
                <BaseIcon
                  name="i-logos-facebook"
                  class="text-2xl"
                  width="28px"
                />
              </NuxtLink>
              <NuxtLink
                href="https://twitter.com/vuedesigner"
                aria-label="twitter"
                external
                target="_blank"
              >
                <BaseIcon
                  name="i-logos-twitter"
                  class="text-2xl"
                  width="28px"
                />
              </NuxtLink>
              <NuxtLink
                href="https://discord.gg/BYp45Nnu5T"
                aria-label="discord"
                external
                target="_blank"
              >
                <BaseIcon
                  name="i-logos-discord-icon"
                  class="text-2xl"
                  width="28px"
                />
              </NuxtLink>
              <NuxtLink
                href="https://www.youtube.com/@vuedesigner"
                aria-label="youtube"
                external
                target="_blank"
              >
                <BaseIcon
                  name="i-logos-youtube-icon"
                  class="text-2xl"
                  width="28px"
                />
              </NuxtLink>
            </div>
          </div>
        </div>
        <div
          class="flex flex-col items-center p-4 w-full sm:w-1/2 md:flex-1 md:w-1/3 lg:items-start"
        ></div>
        <div
          class="flex flex-col items-center p-4 w-full sm:w-1/2 md:flex-1 md:w-1/3 lg:items-start"
        >
          <h2 class="font-bold text-primary-600 dark:text-primary-200 text-xl">
            Contact us
          </h2>
          <ul class="text-center lg:mt-2 lg:text-left">
            <li class="mb-4">
              <NuxtLink
                to="/quick-start"
                class="hover:text-primary-600 dark:text-primary-200"
                >Phone (06)12345678</NuxtLink
              >
            </li>
            <li class="mb-4">
              <NuxtLink
                to="/articles"
                class="hover:text-primary-600 dark:text-primary-200"
                >Adress</NuxtLink
              >
            </li>
          </ul>
        </div>
        <div class="flex flex-col items-center p-4 w-full md:w-1/3">
          <h2 class="font-bold text-primary-600 dark:text-primary-200 text-xl">
            Gallery
          </h2>
          <div class="-mx-2 flex flex-wrap items-center lg:mt-2">
            <div class="p-2 w-1/2 sm:w-4/12">
              <div class="block hover:opacity-75 overflow-hidden rounded-xl">
                <NuxtImg
                  src="https://images.unsplash.com/photo-1522444195799-478538b28823?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  class="w-full"
                />
              </div>
            </div>
            <div class="p-2 w-1/2 sm:w-4/12">
              <div class="block hover:opacity-75 overflow-hidden rounded-xl">
                <NuxtImg
                  src="https://images.unsplash.com/photo-1499916078039-922301b0eb9b?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  class="w-full"
                />
              </div>
            </div>
            <div class="p-2 w-1/2 sm:w-4/12">
              <div class="block hover:opacity-75 overflow-hidden rounded-xl">
                <NuxtImg
                  src="https://plus.unsplash.com/premium_photo-1676321046449-5fc72b124490?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  class="w-full"
                />
              </div>
            </div>
            <div class="p-2 w-1/2 sm:w-4/12">
              <div class="block hover:opacity-75 overflow-hidden rounded-xl">
                <NuxtImg
                  src="https://images.unsplash.com/photo-1481277542470-605612bd2d61?q=80&w=1406&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  class="w-full"
                />
              </div>
            </div>
            <div class="p-2 w-1/2 sm:w-4/12">
              <div class="block hover:opacity-75 overflow-hidden rounded-xl">
                <NuxtImg
                  src="https://images.unsplash.com/photo-1556020685-ae41abfc9365?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  class="w-full"
                />
              </div>
            </div>
            <div class="p-2 w-1/2 sm:w-4/12">
              <div class="block hover:opacity-75 overflow-hidden rounded-xl">
                <NuxtImg
                  src="https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  class="w-full"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-col sm:w-full md:items-end place-content-star">
          <hr class="mb-4 opacity-25" />
          <p class="text-gray-600">
            Copyright © 2024 Gerpros.com.tw — 保留所有權利。
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped></style>
