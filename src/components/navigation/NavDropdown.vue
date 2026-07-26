<template>
  <div class="icb-dropdown" @mouseenter="isOpen = true" @mouseleave="isOpen = false">
    <span class="icb-dropdown__trigger" :class="{ 'is-scrolled': scrolled }">{{ label }}</span>
    <ul v-show="isOpen" class="icb-dropdown__menu">
      <li v-for="item in items" :key="item.name">
        <a :href="item.url" target="_blank" rel="noopener">{{ item.name }}</a>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue';

  defineProps<{
    label: string;
    items: { name: string; url: string }[];
    scrolled?: boolean;
  }>();

  const isOpen = ref(false);
</script>

<style scoped lang="scss">
.icb-dropdown {
  position: relative;
  display: inline-block;

  &__trigger {
    font-size: 24px;
    line-height: 26.4px;
    font-weight: 600;
    color: $secondary;
    cursor: pointer;

    &.is-scrolled {
      color: $white;
    }
  }

  &__menu {
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    background-color: $secondary;
    border-radius: 8px;
    list-style: none;
    padding: 8px 0;
    min-width: 160px;
    z-index: 200;

    li a {
      display: block;
      padding: 10px 20px;
      font-size: 16px;
      font-weight: 600;
      color: $white;
      text-decoration: none;
      white-space: nowrap;

      &:hover {
        opacity: 0.8;
      }
    }
  }
}
</style>
