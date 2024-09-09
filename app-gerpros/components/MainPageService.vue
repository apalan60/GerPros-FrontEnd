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
  <section>
    <div class="container mx-auto text-center">
      <h2 class="text-4xl font-bold">從磁磚到地板，給您最好的品質</h2>
    </div>
    <div class="service-good-count my-6">
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
    <SoleAgent />
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
