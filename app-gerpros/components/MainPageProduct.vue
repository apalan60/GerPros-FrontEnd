<template>
  <section class="bg-white text-gray-900 py-12">
    <div class="container mx-auto text-center">
      <h2 class="text-4xl font-bold mb-2">Gallery, Previews and Portfolio</h2>
      <p class="text-gray-400 mb-8">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis
        tortor eros. Donec vitae tortor lacus. Phasellus aliquam ante in
        maximus.
      </p>
      <div class="flex justify-center space-x-4 mb-8">
        <!-- todo -->
        <button class="text-gray-900 font-semibold">All</button>
        <button class="text-gray-400 font-semibold">Brand</button>
        <button class="text-gray-400 font-semibold">Ecommerce</button>
      </div>
    </div>

    <div class="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
      <div class="col-span-2">
        <img
          src="https://picsum.photos/600/800?random=1"
          alt="image1"
          class="w-auto h-auto object-cover rounded-lg"
        />
      </div>
      <div>
        <img
          src="https://picsum.photos/600/800?random=2"
          alt="image2"
          class="w-auto h-auto object-cover rounded-lg"
        />
      </div>
      <div>
        <img
          src="https://picsum.photos/600/800?random=3"
          alt="image3"
          class="w-auto h-auto object-cover rounded-lg"
        />
      </div>
      <div class="col-span-2 row-span-2">
        <img
          src="https://picsum.photos/600/800?random=4"
          alt="image4"
          class="w-auto h-auto object-cover rounded-lg"
        />
      </div>
      <div>
        <img
          src="https://picsum.photos/600/800?random=5"
          alt="image5"
          class="w-auto h-auto object-cover rounded-lg"
        />
      </div>
    </div>

    <div class="text-center mt-8">
      <button
        class="bg-gray text-white font-semibold py-2 px-6 rounded-lg hover:bg-blue-700 transition"
      >
        See More
      </button>
    </div>
  </section>
</template>
