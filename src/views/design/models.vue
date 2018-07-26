<template>
  <div class="createPost-container">
    <el-form class="form-container" :model="postForm" :rules="rules" ref="postForm">

      <sticky :className="'sub-navbar '+postForm.status">
        <el-button v-loading="loading" style="margin-left: 10px;" type="success" @click="submitForm">确认生成
        </el-button>
      </sticky>

      <div class="createPost-main-container">
        <el-form-item style="margin-bottom: 40px;" label-width="80px" label="生成目录:">
          <el-input type="textarea" class="article-textarea" :rows="1" autosize placeholder="请输入目录" v-model="postForm.dir">
          </el-input>
          <span class="word-counter" v-show="contentShortLength">{{contentShortLength}}字</span>
        </el-form-item>
      </div>
      <div>
        目前不支持自定义目录
      </div>
    </el-form>

  </div>
</template>

<script>
  import { create } from '@/api/design/models'
  import Multiselect from 'vue-multiselect'// 使用的一个多选框组件，element-ui的select不能满足所有需求
  import 'vue-multiselect/dist/vue-multiselect.min.css'// 多选框组件css
  import Sticky from '@/components/Sticky' // 粘性header组件

  const defaultForm = {
    dir: 'models',
    status: 'draft'
  }

  export default {
    name: 'Models',
    components: { Multiselect, Sticky },
    props: {
      isEdit: {
        type: Boolean,
        default: false
      }
    },
    data() {
      const validateRequire = (rule, value, callback) => {
        if (value === '') {
          this.$message({
            message: rule.field + '为必传项',
            type: 'error'
          })
          callback(null)
        } else {
          callback()
        }
      }
      return {
        postForm: Object.assign({}, defaultForm),
        loading: false,
        userListOptions: [],
        rules: {
          dir: [{ validator: validateRequire }]
        }
      }
    },
    computed: {
      contentShortLength() {
        return this.postForm.dir.length
      }
    },
    methods: {
      submitForm() {
        console.log(this.postForm)
        this.$refs.postForm.validate(valid => {
          if (valid) {
            const tempData = Object.assign({}, this.postForm)
            tempData.timestamp = +new Date() // change Thu Nov 30 2017 16:41:05 GMT+0800 (CST) to 1512031311464
            create(tempData).then(() => {
              this.loading = true
              this.postForm.status = 'published'
              this.$notify({
                title: '成功',
                message: '更新成功',
                type: 'success',
                duration: 2000
              })
              this.loading = false
            })
          } else {
            console.log('error submit!!')
            return false
          }
        })
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import "src/styles/mixin.scss";
  .createPost-container {
    position: relative;
    .createPost-main-container {
      padding: 40px 45px 20px 50px;
      .postInfo-container {
        position: relative;
        @include clearfix;
        margin-bottom: 10px;
        .postInfo-container-item {
          float: left;
        }
      }
    }
    .word-counter {
      width: 40px;
      position: absolute;
      right: -10px;
      top: 0px;
    }
  }
</style>
