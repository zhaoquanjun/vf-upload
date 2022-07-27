import axios from 'axios'

class UploadVideo {
  constructor() {
    this.file = null
    this.size = 0
    this.progress = 0
    this.timer = null
    this.progressCallback = null
    this.compelteCallback = null
    this.uploadMethod = 'POST'
    this.uploadUrl = ''
  }

  init(options) {
    // no url check
    if (!options.url) return void console.warn("It won't work without a URL, make sure you provide the URL property")
    // size 默认单位是M
    this.file = options?.file
    this.size = (options?.size || 1) * 1024 * 1024
    this.progressCallback = options?.progressCallback
    this.compelteCallback = options?.compelteCallback
    this.uploadMethod = options.method || 'POST'
    this.uploadUrl = options.url || ''

    // start upload work
    this.getFragments()
  }

  async getFragments() {
    const vTime = await this.getVideoTime()
    console.log(vTime)
    let start = 0,
      end = 0,
      chunkArr = [],
      size = this.size

    getVideoFragment(this.file)
    chunkArr?.length && this.upload(chunkArr)

    function getVideoFragment(file) {
      end += size
      const blob = file.slice(start, end)
      start += size
      if (blob.size) {
        chunkArr.push(blob)
        return getVideoFragment(file)
      }
      return chunkArr
    }
  }

  upload(chunkArr) {
    let count = 0
    const len = chunkArr?.length
    const _this = this
    up(chunkArr.slice(count, count + 5))

    function up(arr) {
      console.log(arr, count, len)
      const promiseArr = []
      arr.forEach(item => {
        promiseArr.push(load())
      })
      Promise.all(promiseArr).then(() => {
        if (count >= len) return
        setTimeout(() => {
          up(chunkArr.slice(count, count + 5))
        })
      })
    }

    function load() {
      return new Promise((resolve, reject) => {
        axios[_this.uploadMethod.toLocaleLowerCase()](_this.uploadUrl).then(res => {
          if (res.status == 200) {
            count++
            _this.progressFn(parseInt((count / chunkArr.length) * 100))
            resolve(count)
          } else {
            console.error('A network request error occurred,  please check Network to confirm the cause of the error')
          }
        })
      })
    }
  }

  progressFn(n) {
    if (this.timer) clearInterval(this.timer)

    this.timer = setInterval(() => {
      if (this.progress == n) {
        clearInterval(this.timer)

        // 完成了已经
        if (this.progress == 100) {
          this.complete()
        }
      } else {
        this.progress++
        this.notify()
      }
    })
  }

  notify() {
    this.progressCallback(this.progress)
  }

  complete() {
    this.compelteCallback()
  }

  clear() {
    this.file = null
    this.size = 0
    this.progress = 0
    this.timer = null
    this.progressCallback = null
    this.compelteCallback = null
  }

  getVideoTime() {
    return new Promise(resolve => {
      const url = URL.createObjectURL(this.file)
      const audioElement = new Audio(url)
      audioElement.addEventListener('loadedmetadata', function () {
        var hour = parseInt(audioElement.duration / 3600)
        if (hour < 10) {
          hour = '0' + hour
        }
        var minute = parseInt((audioElement.duration % 3600) / 60)
        if (minute < 10) {
          minute = '0' + minute
        }
        var second = Math.ceil(audioElement.duration % 60)
        if (second < 10) {
          second = '0' + second
        }
        resolve(hour + ':' + minute + ':' + second)
      })
    })
  }
}

export default UploadVideo
