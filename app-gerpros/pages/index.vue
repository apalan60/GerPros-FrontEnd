<template>
  <div>
    <div class="hello">Hello Nuxt :D {{ version }}!</div>
    <header>
      <nav>
        <ul>
          <li>
            <NuxtLink to="/products">產品項目</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/products/1">產品細項 1(test)</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/topic">主題專欄</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/contact">聯絡方式</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/FAQ">常見問題</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/aboutUs">關於我們</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/services">服務項目</NuxtLink>
          </li>
        </ul>
      </nav>
    </header>
  </div>
  <v-sheet class="mx-auto" width="300">
    <v-form @submit.prevent>
      <v-text-field v-model="firstName" :rules="rules" label="First name"></v-text-field>
      <v-btn class="mt-2" type="submit" block>Submit</v-btn>
    </v-form>
  </v-sheet>
</template>

<script setup></script>

<style scoped>
.hello {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 3rem;
  padding: 2rem;
}
</style>
