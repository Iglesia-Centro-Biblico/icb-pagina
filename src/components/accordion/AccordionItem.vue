<template>
    <div class="icb-accordion-item">
        <div ref="header" class="icb-accordion-item__header">
             <slot name="header" :toggle="toggleContent" :visible="isExpanded">
                <div :class="['icb-accordion-item__header-icon', { 'is-expanded': isExpanded }]">
                    <div class="icb-accordion-item__header-icon-line"></div>
                    <div class="icb-accordion-item__header-icon-line"></div>
                </div>
                <div class="icb-accordion-item__header-label" @click="toggleContent">{{  label  }}</div>
             </slot>
        </div>
        <div :class="['icb-accordion-item__content', isExpanded && 'is-open']">
            <div>
                <slot />
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref, inject, onMounted, onUpdated, watch } from 'vue';
import { useId } from '@/utils/generators';

const props = defineProps<{ label: string, defaultIsOpen: boolean }>();

type Indices = {
  value: Array<string>;
};
type ExpandedIndex = {
  value: Array<string> | string;
};

const id = ref(useId());
const isExpanded = ref(props.defaultIsOpen || false);
const allowMultiple = inject('multi') as boolean;
const indices = inject('indices') as Indices;
const expandedIndex = inject('expandedIndex') as ExpandedIndex;

const getExpandCondition = (arrIndex: string | Array<string>, itemIndex: string) => {
    return Array.isArray(arrIndex) ? arrIndex.includes(itemIndex) : arrIndex === itemIndex;
};

const watchExpand = () => {
    if (allowMultiple) {
        expandedIndex.value = isExpanded.value ? [...indices.value, id.value] : indices.value.filter((itemIndex) => itemIndex !== id.value);;
    } else if (isExpanded.value) {
        expandedIndex.value = id.value;
    }
};

watch(
    () => expandedIndex.value,
    () => isExpanded.value = getExpandCondition(expandedIndex.value, id.value),
);

const toggleContent = () => {
    isExpanded.value = !isExpanded.value;
};

onMounted(watchExpand);
onUpdated(watchExpand);

</script>
<style lang="scss">
.icb-accordion-item {
    margin: 0;
    padding: 0;
    border-bottom: solid 1px $primary;
    &__header {
        width: 100%;
        display: flex;
        align-items: center;
        gap: 16px;
        &-icon {
            $icon: &;
            position: relative;
            background-color: $primary;
            width: 23px;
            height: 23px;
            border-radius: 23px;
            &-line {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                width: 11.5px;
                height: 2.88px;
                background-color: $white;
                &:nth-child(1) {
                    transform: translate(-50%, -50%) rotate(90deg);
                }
            }
            &.is-expanded {
                #{ $icon }-line {
                    &:nth-child(1) {
                        transform: translate(-50%, -50%);
                    }
                }
            }
        }
        &-label {
            font-size: 18px;
            font-weight: 600;
            font-style: normal;
            line-height: 1;
            margin: 22px 0;
            cursor: pointer;
        }
    }
    &__content {
        overflow: hidden;
        box-sizing: border-box;
        height: auto;
        max-height: 0;

        transition: max-height 0.5s ease-in-out;
        &.is-open {
            max-height: 300rem;
        }
    }
}
</style>