<script setup>
import UploadVideo from '../packages/upload'
import { ref } from 'vue'

const fileList = ref([])

let progress = ref(0)

const handleChange = function (file) {
  const upload = new UploadVideo()

  upload.init({
    file: file.raw,
    size: 1,
    url: 'https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15',
    method: 'post',
    progressCallback: (pro) => {
      progress.value = pro
    },
    compelteCallback: () => {
      console.log('complte')
    },
  })
}
</script>

<template>
  <div class="preview-wrapper">
    <el-upload
      v-model:file-list="fileList"
      class="upload-demo"
      :auto-upload="false"
      multiple
      :on-change="handleChange"
    >
      <el-button type="primary">Click to upload</el-button>
      <template #tip>
        <div class="el-upload__tip">jpg/png files with a size less than 500KB.</div>
      </template>
    </el-upload>
    <h3 style="font-size: 30px; color: red;">{{ progress }}</h3>
  </div>
</template>
