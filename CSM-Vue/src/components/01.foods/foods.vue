<template>
  <div>
    <div class="opeartion">
      <div style="float:left;">
        <el-button size="small" type="primary" @click="routePush('/foods/edit')">添加食材</el-button>
      </div>
      <div style="float:right;">
        <el-select size="small" v-model="value8" filterable placeholder="请选择">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
      </div>
    </div>
    <div>
      <el-table :data="tableData5" v-loading.body="listLoading" style="width: 100%" ref="multipleTable">
        <el-table-column label="图片" width="86">
          <template scope="scope">
            <img :src="scope.row.imgUrl" alt="没有图片">
          </template>
        </el-table-column>
        <el-table-column label="ID" prop="id" ></el-table-column>
        <el-table-column label="名称" prop="name"></el-table-column>
        <el-table-column label="价格" width="100">
          <template scope="scope">
            <el-input-number v-show="scope.row.edit" v-model="scope.row.price" :controls="false"></el-input-number>
            <span v-show="!scope.row.edit">{{scope.row.price}}</span>
          </template>
        </el-table-column>
        <el-table-column inline-template label="库存" width="100">
          <el-input-number v-model="row.number" :controls="false"></el-input-number>
        </el-table-column>
        <el-table-column inline-template label="上架" width="80">
          <el-checkbox v-model="row.shelves" :controls="false"></el-checkbox>
        </el-table-column>
        <el-table-column inline-template label="销量">
          <el-tag type="success">{{row.sales}}</el-tag>
        </el-table-column>
        <el-table-column label="操作">
          <template scope="scope">
            <el-button v-show='!scope.row.edit' type="primary" @click='cc(scope.row),scope.row.edit=true' size="small" icon="edit">编辑</el-button>
            <el-button v-show='scope.row.edit' type="success" @click='scope.row.edit=false' size="small" icon="check">完成</el-button>
            <el-button size="small" icon="delete"></el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'foodCategory',
  data() {
    return {
      msg: '食材概览',
      options: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }],
      value8: '',
      tableData5: null,
      listLoading: false
    }
  },
  beforeRouteEnter(to, from, next) {
    console.log('123456', this)
    next()
    // 在渲染该组件的对应路由被 confirm 前调用
    // 不！能！获取组件实例 `this`
    // 因为当钩子执行前，组件实例还没被创建
  },
  methods: {
    routePush(url) {
      this.$router.push(url)
    },
    cc(row) {
      row.edit = true
      console.log(this.tableData5)
    }
  },
  created() {
    this.$axios({
      method: 'get',
      url: 'http://192.168.31.119/Home/tabdata'
    }).then(response => {
      this.tableData5 = response.data.map(v => {
        v.edit = false
        return v
      })
      console.log(response.status)
      console.log(response.statusText)
      console.log(response.headers)
      console.log(response.config)
    })
  }
}
</script>

<style lang="scss" scoped>
.opeartion {
  margin-bottom: 15px;
  overflow: hidden;
}
</style>
