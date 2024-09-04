<script setup>
onMounted(async () => {
  if (typeof window !== 'undefined') {
    const ScrollMagic = (await import('scrollmagic')).default;

    const controller = new ScrollMagic.Controller();

    const revealElements = document.querySelectorAll('.digit');

    revealElements.forEach((element) => {
      new ScrollMagic.Scene({
        triggerElement: element,
        triggerHook: 0.7,
        reverse: true,
      })
        .setClassToggle(element, 'visible')
        .addTo(controller);
    });
  }
});
</script>

<template>
  <section class="text-gray-900 py-12">
    <div class="container mx-auto text-center">
      <h2 class="text-4xl font-bold mb-4">Why choose our service?</h2>
      <p class="text-gray-400 mb-12">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
      <FeatureCard
        class="digit"
        icon="gear"
        title="Easy to use"
        description="Id laborum laboris duis nostrud excepteur ut velit nulla magna Lorem proident non."
      />
      <FeatureCard
        class="digit"
        icon="check-circle"
        title="Reliable"
        description="Magna Lorem ex cillum fugiat ad enim aute irure sit duis minim."
      />
      <FeatureCard
        class="digit"
        icon="lock-closed"
        title="Secure"
        description="Proident nostrud excepteur sint ut culpa consectetur aute adipisicing non anim ullamco."
      />
      <FeatureCard
        class="digit"
        icon="rocket"
        title="Fast"
        description="Qui reprehenderit nostrud dolore nisi ad fugiat labore eiusmod sint aliquip nisi voluptate."
      />
      <FeatureCard
        class="digit"
        icon="dollar-sign"
        title="Affordable"
        description="Reprehenderit fugiat elit in do ipsum ut pariatur."
      />
      <FeatureCard
        class="digit"
        icon="chart-bar"
        title="Scalable"
        description="Lorem deserunt et eiusmod. Ea in consectetur minim officia ullamco enim deserunt est."
      />
    </div>
  </section>
</template>

<style scoped>
.digit {
  opacity: 0;
  -webkit-transform: translateX(-40px);
  -moz-transform: translateX(-40px);
  -ms-transform: translateX(-40px);
  -o-transform: translateX(-40px);
  transform: translateX(-40px);
  -webkit-transition: all 0.6s ease-out;
  -moz-transition: all 0.6s ease-out;
  -ms-transition: all 0.6s ease-out;
  -o-transition: all 0.6s ease-out;
  transition: all 0.6s ease-out;
}
.digit.visible {
  opacity: 1;
  -webkit-transform: none;
  -moz-transform: none;
  -ms-transform: none;
  -o-transform: none;
  transform: none;
}
</style>
