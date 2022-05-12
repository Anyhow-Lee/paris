<template>
  <page-header-wrapper>
    <a-card :bordered="false">
      <a-form @submit="handleSubmit" :form="form">
        <a-row :gutter="24">
          <a-col :span="8">
            <a-form-item label="项目名称（中文）">
              <a-input placeholder="请输入项目名称" v-decorator="['projectName', { rules: [{ required: true }] }]" />
            </a-form-item>
          </a-col>
          <a-col :span="8">
            <a-form-item label="项目名称（英文）">
              <a-input placeholder="请输入项目名称" v-decorator="['projectNameOld', { rules: [{ required: true }] }]" />
            </a-form-item>
          </a-col>
          <a-col :span="8">
            <a-form-item label="关键词">
              <a-input
                placeholder="请输入关键词"
                v-decorator="(['keywords'], { rules: [{ required: true }] })"
                :disabled="true"
              />
            </a-form-item>
          </a-col>
        </a-row>
        <a-row :gutter="24">
          <a-col :span="24">
            <a-form-item label="主题词">
              <a-input placeholder="请输入至少三个主题词，以“、”分隔" v-decorator="['technicalField']" />
            </a-form-item>
          </a-col>
        </a-row>
        <a-row :gutter="24">
          <a-col :span="8">
            <a-form-item label="推荐奖励类别">
              <a-select v-decorator="['leadUnit', { rules: [{ required: true }] }]" placeholder="请选择">
                <a-select-option value="china"> China </a-select-option>
                <a-select-option value="usa"> U.S.A </a-select-option>
              </a-select>
            </a-form-item>
          </a-col>
          <a-col :span="8">
            <a-form-item label="项目名称可否公布">
              <a-radio-group name="radioGroup" :default-value="0">
                <a-radio :value="0"> 是 </a-radio>
                <a-radio :value="1"> 否 </a-radio>
              </a-radio-group>
            </a-form-item>
          </a-col>
        </a-row>
        <a-row :gutter="24">
          <a-col :span="24">
            <a-form-item label="任务来源">
              <a-table
                :columns="columns"
                :data-source="task_source_data"
                :pagination="false"
                :row-selection="{ selectedRowKeys: selectedRowKeys, onChange: onSelectChange }"
              >
                <!-- <template slot="name" slot-scope="text, record">
                  <editable-cell :text="text" @change="onCellChange(record.key, 'name', $event)" />
                </template> -->
              </a-table>
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
/* eslint-disable camelcase */
import { task_source_data } from './config/data'
const columns = [
  {
    title: '任务来源',
    dataIndex: 'source',
  },
  {
    title: '计划名称',
    dataIndex: 'name',
    scopedSlots: { customRender: 'name' },
  },
  {
    title: '计划编号',
    dataIndex: 'number',
  },
]

export default {
  data() {
    return {
      columns,
      task_source_data,
      form: this.$form.createForm(this),
      selectedRowKeys: [],
    }
  },
  methods: {
    onSelectChange(selectedRowKeys) {
      //   console.log('selectedRowKeys changed: ', selectedRowKeys)
      if (selectedRowKeys.length > 2) {
        this.$message.warn('最多只能选择两个任务来源')
        return
      }
      this.selectedRowKeys = selectedRowKeys
    },
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
