<template>
  <div>
    <div
      class="imagePreviewWrapper"
      :style="{ 'background-image': `url(${previewImage})` }"
      @click="selectImage"
    ></div>

    <input ref="fileInput" type="file" @change="pickFile" />

    <button @click="saveImage">Save Image</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      previewImage: null,
      selectedFile: null,
    };
  },
  methods: {
    selectImage() {
      this.$refs.fileInput.click();
    },
    pickFile(event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.previewImage = e.target.result;
        };
        reader.readAsDataURL(file);
        this.selectedFile = file;
      }
    },
    async saveImage() {
      if (!this.selectedFile) {
        alert('No file selected');
        return;
      }

      const formData = new FormData();
      formData.append('file', this.selectedFile);

      try {
        const response = await fetch('http://localhost:3000/upload', {
          method: 'POST',
          body: formData,
        });

        if (response.ok) {
          alert('Image saved successfully');
        } else {
          alert('Failed to save image');
        }
      } catch (error) {
        console.error('Error:', error);
        alert('An error occurred');
      }
    },
  },
};
</script>

<style>
.imagePreviewWrapper {
  width: 250px;
  height: 250px;
  display: block;
  cursor: pointer;
  margin: 0 auto 30px;
  background-size: cover;
  background-position: center center;
}
</style>
