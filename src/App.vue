<script setup>
</script>

<template>
  <div class="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
    <!-- Header -->
    <header class="w-full bg-white dark:bg-gray-800 shadow-md">
      <div class="max-w-4xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 class="text-2xl font-bold">Xue's Blog</h1>
        <button class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">
          测试
        </button>
      </div>

      <!-- 顶部通知栏 -->
      <div class="w-full bg-blue-500 dark:bg-blue-700 text-white text-center py-2">
        <p>🔥 现在还只是一个基础框架！</p>
      </div>
    </header>

    <!-- Main Content -->
    <main class="flex-1 w-full max-w-4xl mx-auto px-4 py-6">
      <router-view />
    </main>

    <!-- Footer -->
    <footer class="w-full bg-amber-300 dark:bg-gray-800 text-white text-center py-4">
      <p>©️ Xue's Blog @ 2025</p>
    </footer>
  </div>
</template>