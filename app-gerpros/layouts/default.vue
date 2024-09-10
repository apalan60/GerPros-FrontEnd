<template>
  <div>
    <AppHeader />
    <div class="min-h-screen noto-sans-tc-font">
      <slot />
    </div>
    <AppFooter />
    <SecondAppFooter />
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@100..900&display=swap');

.noto-sans-tc-font {
  font-family: 'Noto Sans TC', sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
}
</style>
