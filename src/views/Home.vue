<script setup>
</script>
<template>
  <div class="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
    <!-- 第一屏：欢迎页 -->
    <section class="w-full h-screen flex flex-col items-center justify-center">
      <h1 class="text-4xl font-bold">Xueの博客小屋</h1>
      <p class="mt-4 text-lg text-gray-600 dark:text-gray-300">
        分享技术、生活与思考
      </p>
    </section>

    <!-- 第二屏：关于我 -->
    <section class="w-full h-screen flex flex-col items-center justify-center bg-blue-500 text-white">
      <h2 class="text-3xl font-semibold">关于我</h2>
      <p class="mt-4 max-w-2xl text-center">
        这里是 Xue の个人博客，记录技术成长，分享 Vue、Vite、TailwindCSS 相关的开发经验。
      </p>
    </section>
  </div>
</template>