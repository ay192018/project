import axios from "axios"

export const fetchData = () => {
  return axios({
    url: "../../public/table.json",
    method: "get",
  })
}
