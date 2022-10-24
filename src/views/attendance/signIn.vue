<template>
  <div>
    <div class="container">
      <div class="handle-box">
        <el-select
          v-model="query.address"
          placeholder="地址"
          class="handle-select mr10"
        >
          <el-option key="1" label="广东省" value="广东省"></el-option>
          <el-option key="2" label="湖南省" value="湖南省"></el-option>
        </el-select>
        <el-input
          v-model="query.name"
          placeholder="用户名"
          class="handle-input mr10"
        ></el-input>
        <el-button type="primary" :icon="Search" @click="handleSearch"
          >搜索</el-button
        >
        <el-button type="primary" :icon="Plus">新增</el-button>
      </div>
      <el-table
        :data="tableData"
        border
        class="table"
        ref="multipleTable"
        header-cell-class-name="table-header"
      >
        <el-table-column
          prop="id"
          label="ID"
          width="55"
          align="center"
        ></el-table-column>
        <el-table-column prop="user_name" label="员工姓名"></el-table-column>
        <el-table-column prop="addtime" label="注册时间"></el-table-column>
        <el-table-column label="状态" align="center">
          <template #default="scope">
            <el-tag
              :type="
                scope.row.is_add_signature === '1'
                  ? 'success'
                  : scope.row.is_add_signature === '0'
                  ? 'danger'
                  : ''
              "
            >
              {{
                scope.row.is_add_signature === 1
                  ? scope.row.is_leave
                  : scope.row.is_late
              }}
            </el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="endtime" label="签退时间"></el-table-column>
      </el-table>
      <div class="pagination">
        <el-pagination
          background
          layout="total, prev, pager, next"
          :current-page="query.pageIndex"
          :page-size="query.pageSize"
          :total="pageTotal"
          @current-change="handlePageChange"
        ></el-pagination>
      </div>
    </div>

    <!-- 编辑弹出框 -->
    <el-dialog title="编辑" v-model="editVisible" width="30%">
      <el-form label-width="70px">
        <el-form-item label="员工姓名">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="地址">
          <el-input v-model="form.address"></el-input>
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

<script setup lang="ts" name="basetable">
import { ref, reactive } from "vue"
import { ElMessage, ElMessageBox } from "element-plus"
import { Delete, Edit, Search, Plus } from "@element-plus/icons-vue"
import { fetchData } from "../../api/index"
import { AdminStaffSign } from "../../utils/table"
interface TableItem {
  id: number
  name: string
  money: string
  state: string
  date: string
  address: string
}

const query = reactive({
  address: "",
  name: "",
  pageIndex: 1,
  pageSize: 20,
})
const tableData = ref<TableItem[]>([])
const pageTotal = ref(17)
// 获取表格数据
const getData = async () => {
  const { data } = await AdminStaffSign({
    page: query.pageIndex,
  })
  if (data.success) {
    tableData.value = data.sign
  }
}
getData()

// 查询操作
const handleSearch = () => {
  query.pageIndex = 1
  getData()
}
// 分页导航
const handlePageChange = (val: number) => {
  query.pageIndex = val
  getData()
}

// 表格编辑时弹窗和保存
const editVisible = ref(false)
let form = reactive({
  name: "",
  address: "",
})
let idx: number = -1
const handleEdit = (index: number, row: any) => {
  idx = index
  form.name = row.name
  form.address = row.address
  editVisible.value = true
}
const saveEdit = () => {
  editVisible.value = false
  ElMessage.success(`修改第 ${idx + 1} 行成功`)
  tableData.value[idx].name = form.name
  tableData.value[idx].address = form.address
}
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
