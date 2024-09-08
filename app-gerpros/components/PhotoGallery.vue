<template>
  <div class="flex flex-col items-center p-4 w-full md:w-1/3">
    <h2 class="font-bold text-primary-600 dark:text-primary-200 text-xl">
      Gallery
    </h2>
    <div class="-mx-2 flex flex-wrap items-center lg:mt-2">
      <div class="p-2 w-1/2 sm:w-4/12">
        <div class="block hover:opacity-75 overflow-hidden rounded-xl">
          <ClientOnly
            ><NuxtImg
              src="https://picsum.photos/600/800?random=1"
              class="w-full"
              sizes="(max-width: 600px) 100vw, 50vw"
            />
          </ClientOnly>
        </div>
      </div>
      <div class="p-2 w-1/2 sm:w-4/12">
        <div class="block hover:opacity-75 overflow-hidden rounded-xl">
          <ClientOnly
            ><NuxtImg
              src="https://picsum.photos/600/800?random=2"
              class="w-full"
              sizes="(max-width: 600px) 100vw, 50vw"
            />
          </ClientOnly>
        </div>
      </div>
      <div class="p-2 w-1/2 sm:w-4/12">
        <div class="block hover:opacity-75 overflow-hidden rounded-xl">
          <ClientOnly
            ><NuxtImg
              src="https://picsum.photos/600/800?random=3"
              class="w-full"
              sizes="(max-width: 600px) 100vw, 50vw"
            />
          </ClientOnly>
        </div>
      </div>
      <div class="p-2 w-1/2 sm:w-4/12">
        <div class="block hover:opacity-75 overflow-hidden rounded-xl">
          <ClientOnly
            ><NuxtImg
              src="https://picsum.photos/600/800?random=4"
              class="w-full"
              sizes="(max-width: 600px) 100vw, 50vw"
            />
          </ClientOnly>
        </div>
      </div>
      <div class="p-2 w-1/2 sm:w-4/12">
        <div class="block hover:opacity-75 overflow-hidden rounded-xl">
          <ClientOnly
            ><NuxtImg
              src="https://picsum.photos/600/800?random=5"
              class="w-full"
              sizes="(max-width: 600px) 100vw, 50vw"
            />
          </ClientOnly>
        </div>
      </div>
      <div class="p-2 w-1/2 sm:w-4/12">
        <div class="block hover:opacity-75 overflow-hidden rounded-xl">
          <ClientOnly
            ><NuxtImg
              src="https://picsum.photos/600/800?random=6"
              class="w-full"
            />
          </ClientOnly>
        </div>
      </div>
    </div>
  </div>
</template>
