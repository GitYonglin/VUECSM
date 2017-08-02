<template>
  <div>
    <p>(You can double click on an item to turn it into a folder.)</p>
    <el-button icon="el-icon-plus" @click="addCategoryFunc(1)">添加</el-button>
    <ul id="demo" v-for="(item, index) in treeData" :key="index">
      <item class="item" :model="item" >
      </item>
    </ul>

    <el-dialog :title="category.editCategoryTitle" :visible.sync="category.editCategory">
      <el-form>
        <p>imgUrl-{{category.category.imgUrl}}</p>
        <p>index-{{category.category.index}}</p>
        <p>upId-{{category.category.upId}}</p>
        <p>创建日期-{{category.category.createDate}}</p>
        <p>修改日期-{{category.category.modifyDate}}</p>
        <el-form-item label="分类名称" prop="name" label-width="120px">
          <el-input v-model="category.category.name"></el-input>
        </el-form-item>
        <el-form-item label="图片" prop="imgUrl" label-width="120px">
          <div class="divImgage el-card">
            <img :src="category.category.imgUrl">
            <div class="file">
              选择图片
              <input type="file" @change="fileUP($event)">
            </div>
          </div>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="$store.commit('goodsCategoryEdit', {editCategory: false})">取 消</el-button>
        <el-button type="primary" @click="submit">保存</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import Item from './category/tree'
import { mapState } from 'vuex'
export default {
  name: 'goodsCategory',
  data() {
    return {
    }
  },
  components: {
    Item
  },
  computed: ({
    ...mapState({
      category: 'goodsCategoryEdit',
      treeData: 'goodsCategoryData'
    })
  }),
  methods: {
    // 获取商品分类数据
    getCatagoryData() {
      this.$store.dispatch('goodsCategoryData')
    },
    // 添加分类
    addCategoryFunc(index) {
      let l = {
        id: null,
        name: null,
        imgFile: null,
        imgUrl: 'https://cn.vuejs.org/images/logo.png',
        createDate: null,
        modifyDate: null,
        index: index,
        upId: null
      }
      this.$store.commit('goodsCategoryEdit', { editCategoryTitle: '添加主分类', editCategory: true, category: l })
    },
    // 添加修改提交数据
    submit() {
      console.log(this.category.category)
      this.category.editCategory = false
      let m = 'patch'
      let url = `http://localhost:3000/goodsCategory/${this.category.category.id}`
      let msg = '商品分类修改成功'
      if (!this.category.category.id) {
        msg = '商品分类添加成功'
        m = 'post'
        url = 'http://localhost:3000/goodsCategory'
        this.category.category.createDate = new Date().toLocaleString()
      }
      // 获取当前时间
      this.category.category.modifyDate = new Date().toLocaleString()

      // 真后台数据处理
      // let fromData = new FormData()
      // for (var i in this.category) {
      //   fromData.append(i, this.category[i])
      // }

      this.$axios({
        method: m,
        url: url,
        headers: {
          'Content-Type': 'application/json'
        },
        data: this.category.category
      }).then(response => {
        this.treeData = null
        this.getCatagoryData()
        this.$message.success(msg)
      })
    },
    // 上传图片缩略图显示
    fileUP(e) {
      // 获取图片文件
      var file = e.target.files[0]
      // 设置<img>src路径
      this.category.imgUrl = window.URL.createObjectURL(file)
      this.category.imgFile = file
    }
  },
  // 挂载前获取数据
  beforeMount: function () {
    console.log('3-beforeMount 挂载之前', this.categoryDel)
    this.getCatagoryData()
  }
}
</script>

<style scoped>
.item {
  cursor: pointer;
}


ul {
  padding-left: 1em;
  line-height: 1.5em;
  list-style-type: dot;
}
</style>

