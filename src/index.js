// import html2canvas from 'html2canvas'

let vm = new Vue({
    el: '#box',
    data() {
        // let html2canvas = null;
        return {
            list: [{
                    label: '证书持有者',
                    value: '某某大药房有限公司',
                    id: 0,
                },
                {
                    label: '证书序列号',
                    value: '430192118474638373',
                    id: 1,
                },
                {
                    label: '证书有效期',
                    value: '2025年8月25日',
                    id: 3,
                },
                {
                    label: '证书颁发者',
                    value: '某某大药房张三有限公司',
                    id: 4,
                }
            ]
        }
    },
    // beforeMount() {
    //     import('html2canvas').then((plugin) => {
    //         html2canvas = plugin.default;
    //     });
    // },
    methods: {
        // 获取分享图片 base64
        getShareImgBase64() {
            console.log(1);
            return new Promise((resolve) => {
                setTimeout(() => {
                    // #capture 就是我们要获取截图对应的 DOM 元素选择器
                    html2canvas(document.querySelector('#box'), {
                        useCORS: true, // 【重要】开启跨域配置
                        scale: window.devicePixelRatio < 3 ? window.devicePixelRatio : 2,
                        allowTaint: true, // 允许跨域图片
                    }).then((canvas) => {
                        const imgData = canvas.toDataURL('image/jpeg', 1.0);
                        resolve(imgData);
                    }).catch(err => {
                        resolve(err);
                    })
                }, 300); // 这里加上 300ms 的延迟是为了让 DOM 元素完全渲染完成后再进行图片的生成
            });
        },
        getBase64Img() {
            console.log(111);
            this.getShareImgBase64().then(res => {
                console.log(res);
            })
        }
    },
})


// 获取分享图片 base64
function getShareImgBase64() {
    return new Promise((resolve) => {
        setTimeout(() => {
            // #capture 就是我们要获取截图对应的 DOM 元素选择器
            html2canvas(document.querySelector('body'), {
                useCORS: true, // 【重要】开启跨域配置
                scale: window.devicePixelRatio < 3 ? window.devicePixelRatio : 2,
                allowTaint: true, // 允许跨域图片
            }).then((canvas) => {
                canvas.toBlob(function (blob) {
                    resolve(blob)
                })
                // const imgData = canvas.toDataURL('image/jpeg', 1.0);
                // resolve(imgData);
            }).catch(err => {
                resolve(err);
            })
        }, 300); // 这里加上 300ms 的延迟是为了让 DOM 元素完全渲染完成后再进行图片的生成
    });
}

function getBase64Img() {
    $('#btn').style.display = 'none';
    console.log(111);
    getShareImgBase64().then(res => {
        console.log(res);
        saveBlob(res, 'xxx')
    })
}

function $(id) {
    return document.querySelector(id);
}
console.log($('#btn'));

$('#btn').addEventListener('click', getBase64Img, false);



// 下载图像
const saveBlob = (blob, fileName) => {
    const a = document.createElement('a');
    a.style.display = 'none';
    const url = window.URL.createObjectURL(blob);
    a.href = url;
    a.download = fileName;
    a.click();
    $('#btn').style.display = '';
}
// export default {
//     beforeMount() {
//         import('html2canvas').then((plugin) => {
//             html2canvas = plugin.default;
//         });
//     },
//     methods: {
//         // 获取分享图片 base64
//         getShareImgBase64() {
//             return new Promise((resolve) => {
//                 setTimeout(() => {
//                     // #capture 就是我们要获取截图对应的 DOM 元素选择器
//                     html2canvas(document.querySelector('#capture'), {
//                         useCORS: true, // 【重要】开启跨域配置
//                         scale: window.devicePixelRatio < 3 ? window.devicePixelRatio : 2,
//                         allowTaint: true, // 允许跨域图片
//                     }).then((canvas) => {
//                         const imgData = canvas.toDataURL('image/jpeg', 1.0);
//                         resolve(imgData);
//                     });
//                 }, 300); // 这里加上 300ms 的延迟是为了让 DOM 元素完全渲染完成后再进行图片的生成
//             });
//         },
//     },
// };