import _$ from "./request"
export const AdminStaffSign = (params: { page: number }) => {
  return _$({
    url: `/AdminStaffSign/signlist`,
    method: "post",
    params,
  })
}
type Table = {
  page: string
  value?: string
  key?: string
}
export const adminReplace = (params: Table) => {
  return _$({
    url: `/adminReplace/list`,
    method: "get",
    params,
  })
}
export const ysgRecords = (params: Table) => {
  return _$({
    url: `/Additional/ysgRecords`,
    method: "get",
    params,
  })
}
export const integralRecords = (params: Table) => {
  return _$({
    url: `/Additional/integralRecords`,
    method: "get",
    params,
  })
}
