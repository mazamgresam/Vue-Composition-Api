<template>
  <header class="bg-gradient-to-r from-blue-500 to-gray-500">
    <h1 class="text-gray-700 font-bold text-4xl py-3 px-5">Composition Api</h1>
  </header>

  <div
    class="flex flex-col min-h-screen bg-gradient-to-r from-blue-400 to-gray-400"
  >
    <router-view class="w-3/5 mx-auto my-4 text-center" />
    <nav class="font-bold text-gray-900 mx-auto my-3 text-xl">
      <router-link class="opacity-50 hover:opacity-100" to="/"
        >Segitiga</router-link
      >
      |
      <router-link class="opacity-50 hover:opacity-100" to="/belah-ketupat"
        >Belah Ketupat</router-link
      >
      |
      <router-link class="opacity-50 hover:opacity-100" to="/trapesium"
        >Trapesium</router-link
      >
      |
      <router-link class="opacity-50 hover:opacity-100" to="/jajar-genjang"
        >Jajar Genjang</router-link
      >
    </nav>
  </div>
</template>
