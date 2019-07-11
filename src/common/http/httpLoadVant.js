/* 
    time: 2019/05/57
    desc: HTTP request loading layer combine VantUI
    author: wangyong
 */
import { Toast } from 'vant';
import _ from 'lodash';
let needLoadingRequestCount = 0;
let loading;
// this.$toast.loading({
//     duration: 0, // 持续展示 toast
//     mask: true,
//     message: "加载中..."
//   });
let options = {
    duration: 0,
    mask: true,
    message: "加载中..."
}

function startLoading () {
    Toast.loading(options)
}

function endLoading() {
    Toast.clear()
}

const tryCloseLoading = () => {
    if (needLoadingRequestCount === 0) {
        endLoading();
    }
};

export function showFullScreenLoading () {
    if (needLoadingRequestCount === 0) {
        startLoading();
    }
    needLoadingRequestCount++;
}

export function tryHideFullScreenLoading () {
    if (needLoadingRequestCount <= 0) return;
    needLoadingRequestCount--;
    if (needLoadingRequestCount === 0) {
        _.debounce(tryCloseLoading, 0)()
    }
}