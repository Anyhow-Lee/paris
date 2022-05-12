<template>
  <page-header-wrapper>
    <a-card :bordered="false">
      <a-form @submit="handleSubmit" :form="form">
        <a-row :gutter="24">
          <a-col :span="8">
            <a-form-item label="项目名称">
              <a-input
                placeholder="请输入项目名称"
                v-decorator="['projectName', { rules: [{ required: true, message: '请输入项目名称' }] }]"
              />
            </a-form-item>
          </a-col>
          <a-col :span="8">
            <a-form-item label="曾用项目名称">
              <a-input placeholder="请输入曾用项目名称" v-decorator="['projectNameOld']" />
            </a-form-item>
          </a-col>
          <a-col :span="8">
            <a-form-item label="关键词">
              <a-input placeholder="请输入关键词" v-decorator="['keywords']" />
            </a-form-item>
          </a-col>
        </a-row>
        <a-row :gutter="24">
          <a-col :span="8">
            <a-form-item label="起止时间">
              <a-range-picker v-decorator="['startTime', { rules: [{ required: true, message: '请选择起止时间' }] }]" />
            </a-form-item>
          </a-col>
          <a-col :span="8">
            <a-form-item label="所属批次">
              <a-select v-decorator="['batch', { rules: [{ required: true }] }]" placeholder="请选择">
                <a-select-option value="1"> 1 </a-select-option>
                <a-select-option value="2"> 2 </a-select-option>
              </a-select>
            </a-form-item>
          </a-col>
          <a-col :span="8">
            <a-form-item label="技术领域">
              <a-input placeholder="请输入技术领域" v-decorator="['technicalField']" />
            </a-form-item>
          </a-col>
        </a-row>
        <a-row :gutter="24">
          <a-col :span="8">
            <a-form-item label="推荐单位">
              <a-input
                placeholder="自动获取登陆人所属单位的上级单位"
                v-decorator="['recommendedBy']"
                :disabled="true"
              />
            </a-form-item>
          </a-col>
          <a-col :span="8">
            <a-form-item label="协作单位">
              <a-input placeholder="请输入协作单位" v-decorator="['cooperationUnit']" />
            </a-form-item>
          </a-col>
          <a-col :span="8">
            <a-form-item label="协作形式">
              <a-input placeholder="请输入协作形式" v-decorator="['cooperationForm']" />
            </a-form-item>
          </a-col>
        </a-row>
        <a-row :gutter="24">
          <a-col :span="8">
            <a-form-item label="费用估算（万元）">
              <a-input
                type="number"
                placeholder="请输入金额"
                v-decorator="['costEstimation', { rules: [{ required: true }] }]"
              />
            </a-form-item>
          </a-col>
          <a-col :span="8">
            <a-form-item label="当年费用估算（万元））">
              <a-input
                type="number"
                placeholder="请输入金额"
                v-decorator="['tyCostEstimation', { rules: [{ required: true }] }]"
              />
            </a-form-item>
          </a-col>
          <a-col :span="8">
            <a-form-item label="成本性支出（万元））">
              <a-input
                type="number"
                placeholder="请输入金额"
                v-decorator="['costExpenditure', { rules: [{ required: true }] }]"
              />
            </a-form-item>
          </a-col>
        </a-row>
        <a-row :gutter="24">
          <a-col :span="8">
            <a-form-item label="资本性支出（万元）">
              <a-input
                type="number"
                placeholder="费用预估-成本行支出"
                v-decorator="['capitalExpenditure', { rules: [{ required: true }] }]"
              />
            </a-form-item>
          </a-col>
          <a-col :span="8">
            <a-form-item label="第一承担单位">
              <a-input
                placeholder="自动获取登陆人所属单位"
                v-decorator="['firstResponsibleUnit', { rules: [{ required: true }] }]"
              />
            </a-form-item>
          </a-col>
          <a-col :span="8">
            <a-form-item label="牵头（负责）单位（部门））">
              <a-select v-decorator="['leadUnit', { rules: [{ required: true }] }]" placeholder="请选择">
                <a-select-option value="china"> China </a-select-option>
                <a-select-option value="usa"> U.S.A </a-select-option>
              </a-select>
            </a-form-item>
          </a-col>
        </a-row>
        <a-row :gutter="24">
          <a-col :span="8">
            <a-form-item label="填报账号">
              <a-input
                type="number"
                placeholder="HBSW013（自动填入账号）"
                v-decorator="['applicationAccount']"
                :disabled="true"
              />
            </a-form-item>
          </a-col>
          <a-col :span="8">
            <a-form-item label="项目编码">
              <a-input placeholder="（自动生成）" v-decorator="['projectNumber']" :disabled="true" />
            </a-form-item>
          </a-col>
          <a-col :span="8">
            <a-form-item label="项目类别">
              <a-select v-decorator="['projectType', { rules: [{ required: true }] }]" placeholder="请选择">
                <a-select-option value="a"> 国网指南项目 </a-select-option>
                <a-select-option value="b"> 省公司指南项目 </a-select-option>
                <a-select-option value="c"> 省公司管理项目 </a-select-option>
              </a-select>
            </a-form-item>
          </a-col>
        </a-row>
        <a-row>
          <a-col :span="24" :style="{ textAlign: 'center' }">
            <a-button @click="handleReset"> 取消 </a-button>
            <a-button :style="{ marginLeft: '8px' }" type="primary" html-type="submit"> 保存 </a-button>
          </a-col>
        </a-row>
      </a-form>
    </a-card>
  </page-header-wrapper>
</template>

<script>
export default {
  data() {
    return {
      form: this.$form.createForm(this),
    }
  },
  methods: {
    handleReset() {
      this.form.resetFields()
      this.$message.info('取消新增')
    },
    handleSubmit(e) {
      e.preventDefault()
      this.form.validateFields((error, values) => {
        console.log('error', error)
        console.log('Received values of form: ', values)
      })
    },
  },
}
</script>

<style></style>
