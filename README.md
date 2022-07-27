## <p align="center">video-upload</p>

- 🔥 Written in Javascript


## Getting Started

Allright, if you want to implement a quick search, maybe you could use this.</br>
It mainly for video upload by fragment.</br>
Hope it can help complete your work smoothly

## Install

npm
```
npm install qjsearch 
```
cnpm
```
cnpm install qjsearch
```
yarn
```
yarn add qjsearch
```

## Use

This is a js for use</br>
you can import it and use as follows</br>

```
const upload = new UploadVideo()

  upload.init({
    file: file, // 要上传的视频文件
    size: 1, // 单词要上传的视频大小 （M）
    url: 'https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15', // 上传路径
    method: 'post', // 上传方法
    progressCallback: (pro) => { // 每一片段上传成功后的回调函数
      progress.value = pro
    },
    compelteCallback: () => { // 全部上传完成的回调函数
      console.log('complte')
    },
  })
```

> It would expose an constructor for you to init some params where you could complete video upload work