<template>
  <div>
    <div class="handle-box">
      <el-select
        v-model="query.address"
        placeholder="请选择"
        class="handle-select mr10"
      >
        <el-option key="uid" label="用户ID" value="uid"></el-option>
        <el-option key="u_name" label="用户名" value="u_name"></el-option>
        <el-option key="u_realname" label="实名" value="u_realname"></el-option>
        <el-option
          key="V_Publisher_name"
          label="操作人"
          value="V_Publisher_name"
        ></el-option>
      </el-select>
      <el-input
        v-model="query.name"
        placeholder="输入关键字搜索"
        class="handle-input mr10"
      ></el-input>
      <el-button type="primary" :icon="Search" @click="handleSearch"
        >搜索</el-button
      >
      <el-button type="primary" :icon="Plus" @click="editVisible = true"
        >更换推荐人</el-button
      >
    </div>
    <el-table
      :data="tableData"
      style="width: 100%"
      align="center"
      table-layout="auto"
    >
      <el-table-column prop="time" label="更换时间" align="center" />
      <el-table-column prop="uid" label="用户ID" align="center" />
      <el-table-column prop="u_name" label="用户名" align="center" />
      <el-table-column prop="u_realname" label="实名" align="center" />
      <el-table-column label="更换前推荐人" align="center">
        <el-table-column prop="rid" label="ID" width="120" align="center" />
        <el-table-column
          prop="r_name"
          label="用户名"
          width="120"
          align="center"
        />
        <el-table-column
          prop="r_realname"
          label="实名"
          width="120"
          align="center"
        />
      </el-table-column>
      <el-table-column label="更换后推荐人" align="center">
        <el-table-column prop="pid" label="ID" width="120" align="center" />
        <el-table-column
          prop="p_name"
          label="用户名"
          width="120"
          align="center"
        />
        <el-table-column
          prop="p_realname"
          label="实名"
          width="120"
          align="center"
        />
      </el-table-column>
      <el-table-column prop="remark" label="更换原因" align="center" />
      <el-table-column prop="V_Publisher_name" label="操作人" align="center" />
    </el-table>
    <div class="pagination">
      <el-pagination
        background
        layout="total, prev, pager, next"
        :page-size="query.pageSize"
        @current-change="handlePageChange"
        :page-count="pageSize"
        :total="Number(query.count)"
      ></el-pagination>
    </div>
    <!-- 编辑弹出框 -->
    <el-dialog title="编辑" v-model="editVisible" width="50%">
      <el-form
        label-width="100px"
        :model="formLabelAlign"
        style="max-width: 460px"
      >
        <el-form-item label="用户ID">
          <el-input v-model="formLabelAlign.name" placeholder="用户ID">
            <template #append> <el-button :icon="Search" /></template
          ></el-input>
        </el-form-item>
        <el-form-item label="用户名">
          <el-input
            v-model="formLabelAlign.region"
            placeholder="请查询用户ID获取用户名"
            disabled
          />
        </el-form-item>
        <el-form-item label="当前推荐人">
          <el-input
            v-model="formLabelAlign.type"
            disabled
            placeholder="请查询用户ID获取推荐人"
          />
        </el-form-item>
        <el-form-item label="当前推荐人ID">
          <el-input v-model="formLabelAlign.type" placeholder="当前推荐人ID">
            <template #append> <el-button :icon="Search" /></template
          ></el-input>
        </el-form-item>
        <el-form-item label="新推荐人">
          <el-input
            v-model="formLabelAlign.type"
            disabled
            placeholder="请查询新推荐人ID获取新推荐人"
          />
        </el-form-item>
        <el-form-item label="更换原因">
          <el-input
            v-model="formLabelAlign.type"
            placeholder="请填写更换原因"
            show-word-limit
            type="textarea"
          />
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="editVisible = false">取 消</el-button>
          <el-button type="primary" @click="saveEdit">确 定</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts" setup>
import { Search, Plus } from "@element-plus/icons-vue"
import { adminReplace } from "../../utils/table"
import { ref, reactive, computed } from "vue"
const tableData = ref([])
const query = reactive({
  address: "",
  name: "",
  pageIndex: 1,
  pageSize: 20,
  count: 0,
})
const editVisible = ref(false)
const formLabelAlign = reactive({
  name: "",
  region: "",
  type: "",
})
const getTableData = async () => {
  const { data } = await adminReplace({
    page: query.pageIndex,
    value: query.name,
    key: query.address,
  })
  if (data.success) {
    tableData.value = data.sign
    query.count = data.count
    /*   console.log(tableData.value) */
  }
}
getTableData()
// 查询操作
const handleSearch = () => {
  query.pageIndex = 1

  getTableData()
}
// 分页导航
const handlePageChange = (val: number) => {
  query.pageIndex = val
  query.address = ""
  query.name = ""
  getTableData()
}
const pageSize = computed(() => {
  return Math.ceil(query.count / query.pageSize)
})
const saveEdit = () => {}
</script>
<style scoped>
.handle-box {
  margin-bottom: 20px;
}

.handle-select {
  width: 120px;
}

.handle-input {
  width: 300px;
}
.table {
  width: 100%;
  font-size: 14px;
}
.red {
  color: #ff0000;
}
.mr10 {
  margin-right: 10px;
}
.table-td-thumb {
  display: block;
  margin: auto;
  width: 40px;
  height: 40px;
}
</style>
