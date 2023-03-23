<template>
    <div>
        <!-- 布局 -->
        <el-container>
            <el-aside width="auto">
                <CommonAside />
            </el-aside>
            <el-container>
                <el-header>
                    <!-- 头部区域 -->
                    <CommonHeader/>
                </el-header>
                <el-main>
                    <!-- 路由出口 -->
                    <router-view />
                </el-main>
            </el-container>
        </el-container>

    </div>
</template>

<script>
import CommonAside from '@/components/CommonAside.vue';
import CommonHeader from '@/components/CommonHeader.vue';

export default {
    data() {
        return {

        }
    },
    components: { CommonAside,CommonHeader }

}
</script>

<style scoped>
.el-aside {
    overflow: hidden;
}
.el-header{
    padding: 0;
}
</style>