<template lang="html">
  <div class="create-order pt-[110px] pb-[120px] max-w-[1200px] mx-auto">
    <div class="head flex justify-between">
      <h1 class="flex text-[32px] text-black font-semibold">Добавить работу</h1>
      <div class="buttons flex gap-4">
        <button
          @click="$router.go(-1)"
          class="border border-solid border-grey-24 rounded-[8px] h-[52px] w-[168px] flex justify-center items-center text-base text-grey-64 font-medium"
        >
          Отмена
        </button>
        <button
          class="border border-solid border-blue bg-blue rounded-[8px] h-[52px] w-[232px] flex justify-center items-center text-base text-white font-medium gap-2"
        >
          Опубликовать
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M8 12L10.5347 14.2812C10.9662 14.6696 11.6366 14.6101 11.993 14.1519L16 9M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
    <div class="form-block px-8 py-8 rounded-[24px] bg-bg-grey mt-[40px]">
      <h2 class="text-[20px] text-black font-semibold">Информация о заказе</h2>
      <a-form-model :model="form" :rules="rules">
        <div class="flex flex-col gap-6">
          <a-form-model-item
            class="order-item w-full mb-0"
            label="Название работы"
            prop="name"
          >
            <a-input v-model="form.name" placeholder="Название работы" />
          </a-form-model-item>
          <a-form-model-item
            class="order-select w-full mb-0"
            label="Категорие"
            prop="name"
          >
            <a-select
              mode="multiple"
              :default-value="['Программирование ', 'Программирование ']"
              style="width: 100%"
              placeholder="Категорие"
              @change="handleChangeSelect"
            >
              <a-select-option v-for="i in 25" :key="(i + 9).toString(36) + i">
                {{ (i + 9).toString(36) + i }}
              </a-select-option>
            </a-select>
          </a-form-model-item>
          <div class="images">
            <div class="flex flex-col gap-2">
              <h2 class="text-base text-black font-medium">Добавить фото</h2>
              <p class="text-[14px] text-grey-64">
                Первое фото будет на обложке объявления. Перетащите, чтобы изменить
                порядок.
              </p>
            </div>
            <div class="clearfix flex flex-col gap-2 mt-4">
              <div class="flex order-upload gap-2">
                <a-upload
                  v-for="item in uploadList"
                  :key="item"
                  list-type="picture-card"
                  :file-list="fileList"
                  @preview="handlePreview"
                  @change="handleChange"
                >
                  <div v-if="fileList.length < 1" class="flex justify-center">
                    <img src="@/assets/images/image-add.png" alt="" />
                  </div>
                </a-upload>
              </div>
            </div>
            <a-modal :visible="previewVisible" :footer="null" @cancel="handleCancel">
              <img alt="example" style="width: 100%" :src="previewImage" />
            </a-modal>
          </div>
          <a-form-model-item class="order-item w-full mb-0" label="Link to work">
            <a-input v-model="form.name" placeholder="Link to work" />
          </a-form-model-item>
          <a-form-model-item class="order-item w-full mb-0" label="Description">
            <a-input
              type="textarea"
              rows="5"
              v-model="form.description"
              placeholder="Большое спасибо за всю мебель. Очень качественно и по доступным ценам Мы очень рады совместной работе с вами!  "
            />
          </a-form-model-item>
        </div>
      </a-form-model>
      <div class="mt-8">
        <button
          class="border border-solid border-blue bg-blue rounded-[8px] h-[52px] w-[232px] flex justify-center items-center text-base text-white font-medium gap-2"
        >
          Опубликовать
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M8 12L10.5347 14.2812C10.9662 14.6696 11.6366 14.6101 11.993 14.1519L16 9M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>
<script>
function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}
export default {
  data() {
    return {
      form: {
        name: "",
        description: "",
        deadline_negotiable: "",
        price_negotiable: "",
        price: "",
        deadline: "",
        specialities: [],
        files: [],
      },
      rules: {
        name: [
          { required: true, message: "Please input Activity name", trigger: "blur" },
          { min: 3, max: 5, message: "Length should be 3 to 5", trigger: "blur" },
        ],
      },
      previewVisible: false,
      previewImage: "",
      fileList: [],
      uploadList: [1, 2, 3, 4, 5, 6, 7, 8],
    };
  },
  methods: {
    handleChangeSelect(value) {
      console.log(`selected ${value}`);
    },
    handleCancel() {
      this.previewVisible = false;
    },
    async handlePreview(file) {
      if (!file.url && !file.preview) {
        file.preview = await getBase64(file.originFileObj);
      }
      this.previewImage = file.url || file.preview;
      this.previewVisible = true;
    },
    handleChange({ fileList }) {
      this.fileList = fileList;
    },
  },
};
</script>
<style lang="css" scoped>
.order-item :deep(input),
.order-item :deep(textarea) {
  padding-left: 16px;
  border-radius: 8px;
  border: 1px solid var(--grey-8);
  background: #fff;
  color: var(--black);
  font-family: "TT Interfaces";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
}
.order-select :deep(.ant-select-selection) {
  border-radius: 8px;
  padding-left: 12px;
  border: 1px solid var(--grey-8);
}
.order-item :deep(input) {
  height: 47px;
}
.order-item :deep(label),
.order-select :deep(label) {
  color: var(--black);
  font-family: "TT Interfaces";
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  padding-right: 10px;
}
.order-item :deep(.ant-form-item-required::before),
.order-select :deep(.ant-form-item-required::before) {
  position: absolute;
  right: -5px;
  top: 0;
}
.order-item :deep(.ant-form-item-required::after),
.order-select :deep(.ant-form-item-required::after) {
  display: none;
}
.order-select :deep(.ant-select-selection__rendered) {
  line-height: 58px;
  display: flex;
  align-items: center;
}
.order-select :deep(.ant-select-selection__choice) {
  border: none;
  background-color: var(--bg-grey);
  padding: 0 16px;
  height: 34px;
  display: flex;
  gap: 4px;
  border-radius: 22px;
  align-items: center;
  color: var(--grey-64, #5d5d5f);
  /* Body 2/Medium */
  font-family: "TT Interfaces";
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%; /* 19.6px */
  min-width: max-content;
}
.order-select :deep(.ant-select-selection__choice > span) {
  position: relative;
  left: 0;
  display: flex;
  align-items: center;
}
.order-upload :deep(.ant-upload-select-picture-card) {
  width: 100%;
  height: 116px;
  margin: 0;
  border: none;
  background-color: #fff;
}
.order-upload {
  display: grid;
  grid-template-columns: repeat(4, 158px);
}
.order-upload :deep(.ant-upload-picture-card-wrapper) {
  width: 100%;
}
.order-item :deep(label::after) {
  display: none;
}
</style>
