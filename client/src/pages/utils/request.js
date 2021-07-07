import axios from 'axios';

const request = axios.create({
  baseURL: 'http://localhost:5004/',
  timeout: 5000,
});

export default (url, opt) => {
  return request(url, opt)
    .then((res) => {
      console.log(
        `【${(opt && opt.method) || 'GET'} ${url}】請求成功，回覆資料：%o`,
        res,
      );
      return res;
    })
    .catch((err) => {
      console.log(err);
    });
};
