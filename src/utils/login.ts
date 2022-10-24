import _$ from "./request"
export const GetLogin = (data: { name: string; password: string }) => {
  let fromData = new FormData()
  Object.entries(data).forEach(([key, value]) => {
    fromData.append(key, value)
  })
  return _$({
    method: "post",
    url: `/admin/verify`,
    data: fromData,

    headers: {
      "Content-Type": "multipart/form-data",
    },
  })
}
export const GetRouter = () => {
  return _$({
    url: `/admin/Trators`,
    method: "get",
  })
}
export const Logout = () => {
  return _$({
    url: `/admin/Logout`,
    method: "post",
  })
}

export const changepsw = (data: {
  oldPwd: string
  newPwd: string
  checkPwd: string
}) => {
  let fromData = new FormData()
  Object.entries(data).forEach(([key, value]) => {
    fromData.append(key, value)
  })
  return _$({
    url: `/admin/changepsw`,
    method: "post",
    data: fromData,
  })
}
