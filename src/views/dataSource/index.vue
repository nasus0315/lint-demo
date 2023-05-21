import dataSource from '@/views/dataSource/index.vue';
<template>
    <div class="page">
        <div
            class="dataScreen"
            ref="dataScreenRef">
            <div class="dataScreen-header"></div>
            <div class="dataScreen-main">
                <PirEchart ref="pirRef" />
            </div>
        </div>
    </div>
</template>
<script setup>
import { onMounted, ref } from 'vue';

import PirEchart from './components/pirChart.vue';
const dataScreenRef = ref(null);
const pirRef = ref(null);
const ageData = [
    {
        value: 200,
        name: "10岁以下",
        percentage: "16%"
    },
    {
        value: 110,
        name: "10 - 18岁",
        percentage: "8%"
    },
    {
        value: 150,
        name: "18 - 30岁",
        percentage: "12%"
    },
    {
        value: 310,
        name: "30 - 40岁",
        percentage: "24%"
    },
    {
        value: 250,
        name: "40 - 60岁",
        percentage: "20%"
    },
    {
        value: 260,
        name: "60岁以上",
        percentage: "20%"
    }
];
const dataScreen = {
    chart1: null,
};
// 根据浏览器大小推断缩放比例
const getScale = (width = 1920, height = 1080) => {
    const ww = window.innerWidth / width;
    const wh = window.innerHeight / height;
    return ww < wh ? ww : wh;
};
// 监听浏览器 resize 事件
const resize = () => {
    if (dataScreenRef.value) {
        dataScreenRef.value.style.transform = `scale(${getScale()}) translate(-50%, -50%)`;
    }
    // 使用了 scale 的echarts其实不需要需要重新计算缩放比例
    Object.values(dataScreen).forEach(chart => {
        chart && chart.resize();
    });
};
// 初始化 echarts
const initCharts = () => {
    dataScreen.chart1 = pirRef.value?.initChart(ageData);
};
onMounted(() => {
    // 初始化时为外层盒子加上缩放属性，防止刷新界面时就已经缩放
    if (dataScreenRef.value) {
        dataScreenRef.value.style.transform = `scale(${getScale()}) translate(-50%, -50%)`;
        dataScreenRef.value.style.width = `1920px`;
        dataScreenRef.value.style.height = `1080px`;
    }
    // 初始化 echarts
    initCharts();
    // 为浏览器绑定事件
    window.addEventListener("resize", resize);
});
</script>
<style lang="scss">
.page {
    width: 100%;
    height: 100%;
    background: linear-gradient(180deg, #0c1043 0%, rgb(26 49 123 / 92.9%) 100%);
    .dataScreen {
        position: fixed;
        top: 50%;
        left: 50%;
        z-index: 999;
        display: flex;
        flex-direction: column;
        overflow: hidden;
        transition: transform 0.3s;
        transform-origin: left top;
        .dataScreen-main {
            box-sizing: border-box;
            display: flex;
            flex: 1;
            width: 100%;
            padding: 12px 42px 20px;
        }
    }
}
</style>
