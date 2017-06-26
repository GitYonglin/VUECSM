<template>
  <div>
    <div class="opeartion">
      <div style="float:left;">
        <el-button size="small" type="primary" @click="FEditCategory('添加分类')">添加分类</el-button>
      </div>
      <div style="float:right;">
        <el-select size="small" v-model="value8" filterable placeholder="请选择">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
      </div>
    </div>
    <div>
      <el-table :data="tableData5" style="width: 100%" ref="multipleTable">
        <el-table-column label="图片" inline-template width="86">
          <template>
            <img :src="row.imgUrl" alt="没有图片">
          </template>
        </el-table-column>
        <el-table-column label="ID" prop="id" ></el-table-column>
        <el-table-column label="名称" prop="name"></el-table-column>
        <el-table-column label="操作">
          <template scope="scope">
            <el-button size="small" icon="edit"></el-button>
            <el-button size="small" icon="delete"></el-button>
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
            <img :src="category.imgUrl" >
  
            <div class="file">
              选择图片
              <input type="file" @change="fileUP($event)">
            </div>
          </div>
        </el-form-item>
  
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="resetForm('category')">取 消</el-button>
        <el-button type="primary" @click="submit()">确 定</el-button>
      </div>
    </el-dialog>
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
      tableData5: [],
      tab5: [{
        id: '1',
        name: '好滋好味鸡蛋仔',
        imgUrl: 'http://element.eleme.io/static/hamburger.50e4091.png',
        price: 99,
        number: 999,
        shelves: true,
        sales: 9999
      }, {
        id: '2',
        name: '好滋好味鸡蛋仔',
        imgUrl: 'http://element.eleme.io/static/hamburger.50e4091.png',
        price: 99,
        number: 999,
        shelves: true,
        sales: 9999
      }, {
        id: '3',
        name: '好滋好味鸡蛋仔',
        imgUrl: 'http://element.eleme.io/static/hamburger.50e4091.png',
        price: 99,
        number: 999,
        shelves: true,
        sales: 9999
      }, {
        id: '4',
        name: '好滋好味鸡蛋仔',
        imgUrl: 'http://element.eleme.io/static/hamburger.50e4091.png',
        price: 99,
        number: 999,
        shelves: true,
        sales: 9999
      }],
      category: {
        name: '',
        imgFile: null,
        imgUrl: ''
      },
      formLabelWidth: '120px',
      editCategory: false,
      editCategoryTitle: ''
    }
  },
  methods: {
    routePush(url) {
      this.$router.push(url)
    },
    FEditCategory(title) {
      this.editCategoryTitle = title
      this.editCategory = true
    },
    // 添加修改提交数据
    submit() {
      console.log('Ok')
    },
    // 重置数据
    resetForm(formName) {
      this.$refs[formName].resetFields()
      this.editCategory = false
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
  beforeMount: function () {
    console.log('3-beforeMount 挂载之前')
    this.tableData5 = this.tab5
  }
}
</script>

<style lang="scss" scoped>
.opeartion {
  margin-bottom: 15px;
  overflow: hidden;
}

.divImgage {
  width: 200px;
  height: 250px;
  float: left;
  margin: 5px;
  img {
    width: 200px;
    height: 200px;
    display: block;
  }
}

.file {
  position: relative;
  display: inline-block;
  background: #dfe6ec;
  top: 1px;
  /*border: 1px solid #99D3F5;*/
  border-radius: 4px;
  /*padding: 4px 12px;*/
  overflow: hidden;
  color: #20a0ff;
  text-decoration: none;
  text-align: center;
  line-height: 50px;
  height: 50px;
  width: 200px;
  input {
    position: absolute;
    font-size: 100px;
    right: 0;
    top: 0;
    opacity: 0;
  }

  &:hover {
    background: #20a0ff;
    color: #fff;
    text-decoration: none;
  }
}
</style>
