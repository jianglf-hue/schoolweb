<template>
  <header>
    <nav class="flex justify-between p-3 text-xl">
      <div class="flex">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          class="fill-current h-6"
        >
          <path
            fill-rule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clip-rule="evenodd"
          />
        </svg>
        <div class="px-2">logo</div>
      </div>

      <div id="nav-items" class="divide-x-2">
        <a href="#">首页</a>
        <a href="#">团队</a>
        <a href="#">团队</a>
        <a href="#">研究</a>
        <a href="#">资料</a>
        <a href="#">近期动态</a>
        <a href="#">加入我们</a>
      </div>
    </nav>
  </header>
</template>

<style scoped>
#nav-items a {
  padding: 0 0.8rem;
}
</style>