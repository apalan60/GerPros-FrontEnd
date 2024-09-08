<script setup>
import CountUp from 'vue-countup-v3';

const countUpItem = reactive({
  customer: {
    text: '滿意回饋',
    endVal: 99,
    prefix: '%',
    duration: 4,
  },
  case: {
    text: '完成案件',
    endVal: 6666,
    prefix: '+',
    duration: 7,
  },
  trust: {
    text: '貼心信賴',
    endVal: 100,
    prefix: '%',
    duration: 4,
  },
});
</script>

<template>
  <section class="py-12">
    <div class="container mx-auto text-center">
      <h2 class="text-4xl font-bold mb-4">從磁磚到地板，給您最好的品質</h2>
      <p class="text-gray-400 mb-12">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </div>
    <div class="service-good-count">
      <div
        class="count-wrapper grid grid-cols-1 md:grid-cols-3 gap-3 max-w-4xl mx-auto"
      >
        <div
          v-for="item in countUpItem"
          :key="item.name"
          class="count-card"
          :data-prefix="item.prefix"
        >
          <div class="count-val-wrapper">
            <count-up
              class="count-val"
              :end-val="item.endVal"
              :duration="item.duration"
              :data-prefix="item.prefix"
              :autoplay="true"
              :options="{ enableScrollSpy: true }"
            />
            <span class="prefix">{{ item.prefix }}</span>
          </div>
          <p class="text">{{ item.text }}</p>
        </div>
      </div>
    </div>
    <div class="good-service">
      <!-- <div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
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
      </div> -->
    </div>
  </section>
</template>

<style scoped>
.count-wrapper {
  margin: 0 auto;
}
.count-card {
  position: relative;
  padding: 2rem;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
}

.count-card .count-val-wrapper {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.count-card .count-val-wrapper .count-val {
  font-size: 3rem;
  font-weight: 700;
}

.count-card .count-val-wrapper .prefix {
  font-size: 1.5rem;
  font-weight: 700;
  margin-left: 0.5rem;
}

.count-card .text {
  font-size: 1.5rem;
  font-weight: 500;
}
</style>
