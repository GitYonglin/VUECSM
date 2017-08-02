<template>
  <div>
    <div class="opeartion">
      <div style="float:left;">
        <el-button size="small" type="primary" @click="FAddCategory('添加分类')">添加分类</el-button>
      </div>
      <div style="float:right;">
        <el-select size="small" v-model="value8" filterable placeholder="请选择">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
      </div>
    </div>
    <div>
      <el-table :data="categoryData" style="width: 100%" ref="multipleTable">
        <el-table-column label="图片" inline-template width="86">
          <template>
            <img :src="row.imgUrl" alt="没有图片">
          </template>
        </el-table-column>
        <el-table-column label="ID" prop="id"></el-table-column>
        <el-table-column label="名称" prop="name"></el-table-column>
        <el-table-column label="创建日期" prop="createDate"></el-table-column>
        <el-table-column label="修改日期" prop="modifyDate"></el-table-column>
        <el-table-column label="操作">
          <template scope="scope">
            <el-button size="small" icon="edit" @click="FEditCategory('修改分类', scope.row)" ></el-button>
            <el-button size="small" icon="delete" @click="del(scope.row.id)"></el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  
    <el-dialog :title="editCategoryTitle" :visible.sync="editCategory">
      <el-form :model="category" ref="category">
        <el-form-item label="分类名称" prop="name" :label-width="formLabelWidth">
          <el-input v-model="category.name"></el-input>
        </el-form-item>
        <el-form-item label="图片地址" :label-width="formLabelWidth">
          <span>{{category.imgUrl}}</span>
        </el-form-item>
        <el-form-item label="图片" prop="imgUrl" :label-width="formLabelWidth">
          <div class="divImgage el-card">
            <img :src="category.imgUrl">
  
            <div class="file">
              选择图片
              <input type="file" @change="fileUP($event)">
            </div>
          </div>
        </el-form-item>
  
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="resetForm()">重　置</el-button>
        <el-button @click="cancel()">取 消</el-button>
        <el-button type="primary" @click="submit">保存</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
// import qs from 'qs'
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
      categoryData: [],
      categorySwitch: false,
      categoryBase: {
        id: null,
        name: '',
        imgFile: null,
        imgUrl: 'https://cn.vuejs.org/images/logo.png',
        createDate: null,
        modifyDate: ''
      },
      category: {
        id: null,
        name: '',
        imgFile: null,
        imgUrl: 'https://cn.vuejs.org/images/logo.png',
        createDate: null,
        modifyDate: ''
      },
      formLabelWidth: '120px',
      editCategory: false,
      editCategoryTitle: ''
    }
  },
  methods: {
    // 获取食材分类数据
    getCatagoryData() {
      this.$axios({
        method: 'get',
        url: 'http://localhost:3000/foodCategory'
      }).then(response => {
        console.log(response.data)
        this.categoryData = response.data
      })
    },
    // 编辑分类
    FEditCategory(title, data) {
      if (data) {
        // this.category = data
        Object.assign(this.category, data)
      }
      this.editCategoryTitle = title
      this.editCategory = true
    },
    // 添加分类
    FAddCategory(title) {
      Object.assign(this.category, this.categoryBase)
      this.editCategoryTitle = title
      this.editCategory = true
    },
    // 添加修改提交数据
    submit() {
      let m = 'patch'
      let url = `http://localhost:3000/foodCategory/${this.category.id}`
      let msg = '食材分类修改成功'
      if (!this.category.id) {
        m = 'post'
        url = 'http://localhost:3000/foodCategory'
        msg = '食材分类添加成功'
        this.category.createDate = new Date().toLocaleString()
      }
      // 获取当前时间
      this.category.modifyDate = new Date().toLocaleString()
      console.log('category====', this.category)
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
        data: this.category
      }).then(response => {
        this.getCatagoryData()
        this.cancel()
        this.$message.success(msg)
      })
    },
    // 重置数据
    resetForm() {
      Object.assign(this.category, this.categoryBase)
    },
    // 取消
    cancel () {
      Object.assign(this.category, this.categoryBase)
      this.editCategory = false
    },
    // 删除数据
    del(id) {
      this.$confirm('此操作将永久删除该分类, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$axios({
          method: 'delete',
          url: `http://localhost:3000/foodCategory/${id}`
        }).then(response => {
          this.getCatagoryData()
        })
        this.$message({
          type: 'success',
          message: '删除成功!'
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
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
    console.log('3-beforeMount 挂载之前')
    this.getCatagoryData()
  }
}
</script>

<style lang="scss" scoped>
.opeartion {
  margin-bottom: 15px;
  overflow: hidden;
}
</style>
