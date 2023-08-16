<template>
    <div>
        <slot />
    </div>
</template>
<script setup lang="ts">
import { ref, computed, provide } from 'vue';
const props = defineProps<{ multi: boolean }>();

const init = () => {
    return props.multi ? [] : '';
};

const expandedIndex = ref(init());

const _index = computed({
    get: () => expandedIndex.value,
    set: (val: any) => expandedIndex.value = val,
});

provide("multi", props.multi);
provide("indices", _index);
provide("expandedIndex", expandedIndex);
</script>
<style lang="scss">
    
</style>