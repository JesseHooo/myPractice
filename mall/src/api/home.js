import axios from 'axios';
import { mjsonp } from 'assets/js/jsonp';
import { SUCC_CODE, TIMEOUT, HOME_RECOMMEND_PAGE_SIZE, jsonpOptions } from './config';

// 乱序函数
const shuffle = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let rndNum = Math.floor(Math.random() * arr.length);

    [arr[i], arr[rndNum]] = [arr[rndNum], arr[i]];
  }
  return arr;
};

// 打乱数组顺序
// const shuffle = (arr) => {
//   const arrLength = arr.length;
//   let i = arrLength;
//   let rndNum;

//   while (i--) {
//     if (i !== (rndNum = Math.floor(Math.random() * arrLength))) {
//       [arr[i], arr[rndNum]] = [arr[rndNum], arr[i]];
//     }
//   }

//   return arr;
// };

// 获取幻灯片数据--axios
export const getHomeSlider = () => {
  // es5是通过回调函数异步相应
  // es6中使用的是promiss
  // axios默认返回的是一个promiss对象
  return axios.get('http://www.imooc.com/api/home/slider', { timeout: TIMEOUT }).then(res => {
    if (res.data.code === SUCC_CODE) {
      let sliders = res.data.slider;
      const slider = [sliders[Math.floor(Math.random() * sliders.length)]];
      sliders = shuffle(sliders.filter(() => Math.random() >= 0.5));
      if (!sliders.length) {
        sliders = slider;
      }
      return sliders;// 没错误直接return结束
    }

    throw new Error('data is not caught!');
  }).catch(err => {
    if (err) {
      console.log(err);
    };

    return [
      {
        linkUrl: 'https://www.baidu.com',
        picUrl: require('assets/img/404.png')
      }
    ];
  }).then(data => { // ???
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(data);
      }, 1000);
    });
  });
};

// 获取热门推荐数据
export const getHomeRecommend = (page = 1, psize = HOME_RECOMMEND_PAGE_SIZE) => {
  const url = 'https://ju.taobao.com/json/tg/ajaxGetItemsV2.json';
  const params = {
    page,
    psize,
    type: 0,
    frontCatId: ''
  };

  return mjsonp(url, params, jsonpOptions).then(res => {
    if (res.code === '200') {
      return res;
    }
    throw new Error('data is not caught!');
  }).catch(err => {
    if (err) {
      console.log(err);
    };
  }).then(data => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(data);
      }, 1000);
    });
  });
};
