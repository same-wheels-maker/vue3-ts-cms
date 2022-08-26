<template>
  <div>
    <el-form :label-width="60" :model="phone">
      <el-form-item label="手机号" prop="number">
        <el-input v-model="phone.name" />
      </el-form-item>
      <el-form-item label="验证码" prop="code">
        <div class="get-code">
          <el-input v-model="phone.password" />
          <el-button class="code-btn" type="primary">获取验证码</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { defineComponent, reactive } from 'vue'

export default defineComponent({
  name: 'login-phone',
  setup: () => {
    const phone = reactive({
      number: '',
      code: ''
    })

    return {
      phone
    }
  }
})
</script>

<style scoped>
.get-code {
  display: flex;
}

.code-btn {
  margin-left: 8px;
}
</style>
