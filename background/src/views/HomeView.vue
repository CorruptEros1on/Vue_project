<template>
  <div class="home">
    <el-row>
      <el-col :span="8">
        <el-card class="box-card">
          <div class="user">
            <img src="@/assets/images/user.png" alt="">
            <div class="user-info">
              <p class="name">Admin</p>
              <p class="access">超级管理员</p>
            </div>

          </div>
          <div class="login-info">
            <p>上次登录的时间:<span>2021-7-19</span></p>
            <p>上次登录的地点:<span>武汉</span></p>
          </div>
        </el-card>
        <el-card style="margin-top: 20px; height:460px;">
          <el-table :data="tableData" style="width: 100%">
            <!-- <el-table-column :prop="item.name" label="品牌">
            </el-table-column>
            <el-table-column :prop="item.todayBuy" label="今日购买">
            </el-table-column>
            <el-table-column :prop="item.monthBuy" label="本月购买">
            </el-table-column>
            <el-table-column :prop="item.totalBuy" label="总购买">
            </el-table-column> -->
            <el-table-column v-for="(val, key) in tableLabel" :prop="key" :label="val"  :key="key"/>
          </el-table>
        </el-card>
      </el-col>
      <el-col :span="16">
        <div class="grid-content bg-purple-light"></div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  data() {
    return {
      tableData: [
        {
          name: 'oppo',
          todayBuy: 100,
          monthBuy: 300,
          totalBuy: 800
        },
        {
          name: 'vivo',
          todayBuy: 100,
          monthBuy: 300,
          totalBuy: 800
        },
        {
          name: '苹果',
          todayBuy: 100,
          monthBuy: 300,
          totalBuy: 800
        },
        {
          name: '小米',
          todayBuy: 100,
          monthBuy: 300,
          totalBuy: 800
        },
        {
          name: '三星',
          todayBuy: 100,
          monthBuy: 300,
          totalBuy: 800
        },
        {
          name: '魅族',
          todayBuy: 100,
          monthBuy: 300,
          totalBuy: 800
        }
      ],
      tableLabel: {
        name:"品牌",
        todayBuy:'今日购买',
        monthBuy:'本月购买',
        totalBuy:'总购买'
      }
    };
  },
  name: 'HomeView',
  components: {
  }
}
</script>

<style lang="less" scoped>
.user {
  padding-bottom: 20px;
  margin-bottom: 20px;
  border-bottom: 1px solid #ccc;
  display: flex;
  align-items: center;

  img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    margin-right: 40px;
  }

  .user-info {
    .name {
      font-size: 32px;
      margin-bottom: 10px;
    }

    .access {
      color: #999;
    }
  }
}

.login-info {
  p {
    line-height: 28px;
    font-size: 14px;
    color: #999;
  }

  span {
    color: #666;
    margin-left: 60px;
  }
}
</style>
