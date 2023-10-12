<template lang="html">
  <div class="create-order pt-[110px] pb-[120px] max-w-[953px] mx-auto">
    <div class="head flex justify-between items-center">
      <h1 class="flex text-[24px] text-black font-semibold">Buyurtma qo’shish</h1>
      <div class="buttons flex gap-4">
        <button
          @click="$router.go(-1)"
          class="border-[2px] border-solid border-border-darik rounded-[12px] h-[60px] w-[204px] flex justify-center items-center text-[18px] text-grey-64 font-medium"
        >
          Отмена
        </button>
      </div>
    </div>
    <div
      class="form-block px-8 py-8 rounded-[16px] bg-white border-border-darik border-solid border mt-4"
    >
      <h2 class="text-[20px] text-black font-semibold mb-6">Информация о заказе</h2>
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
          <a-form-model-item class="order-item w-full mb-0">
            <label class="flex gap-3 mb-3"
              >Buyurtma tavsifi
              <a-tooltip placement="top">
        <template slot="title">
          <span>{{ `\u{1F600}` }}</span>
        </template>
        <svg class="cursor-pointer"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M10.3907 11.8428H12.0017V15.1998M12.0001 8.80372L12.0019 8.80078M19.9999 11.998C19.9999 16.4152 16.4191 19.996 12.0019 19.996C7.58473 19.996 4.00391 16.4152 4.00391 11.998C4.00391 7.58083 7.58473 4 12.0019 4C16.4191 4 19.9999 7.58083 19.9999 11.998Z"
                  stroke="#C2C2C3"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                /></svg
            >
      </a-tooltip>
          </label>
            <a-input
              type="textarea"
              rows="5"
              v-model="form.description"
              placeholder="Большое спасибо за всю мебель. Очень качественно и по доступным ценам Мы очень рады совместной работе с вами!  "
            />
          </a-form-model-item>
          <div class="images pb-[40px] border-[0] border-b border-solid border-border-darik">
            <div class="flex flex-col">
              <h2 class="text-[20px] text-black font-semibold">Файлы к задаче</h2>
              <p class="text-[14px] text-grey-64">
                Загрузите локалние файли для деталной информатсии для заказа
              </p>
            </div>
            <div class="clearfix flex flex-col mt-6">
              <div class="flex order-upload gap-2">
                <a-upload
                  list-type="picture-card"
                  :file-list="fileList"
                  @preview="handlePreview"
                  @change="handleChange"
                >
                  <div v-if="fileList.length < 10" class="flex justify-center bg-bg-grey">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M14.4357 13.7854C16.2815 13.7854 17.7774 12.2896 17.7774 10.4437C17.7774 8.5979 16.2815 7.10207 14.4357 7.10207C14.1782 7.10207 13.9299 7.13707 13.689 7.1929C12.9674 5.4979 11.2865 4.30957 9.3282 4.30957C6.71154 4.30957 4.58987 6.43124 4.58987 9.0479C3.28154 9.0479 2.2207 10.1087 2.2207 11.4171C2.2207 12.7254 3.28154 13.7862 4.58987 13.7862M7.12737 12.4412L9.56904 9.99957L12.0107 12.4412M9.56904 15.6896V10.0071"
                        stroke="black"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                </a-upload>
                <div
                  v-for="(item, index) in [1, 2]"
                  :key="index"
                  class="w-[104px] gap-2 flex flex-col"
                >
                  <div
                    class="w-full img-card overflow-hidden h-[104px] border border-solid border-grey-8 rounded-[4px] flex justify-center items-center relative"
                  >
                    <img class="object-cover" src="@/assets/images/events.png" alt="" />
                    <button
                      class="bg-white w-[30px] img-delete h-[30px] rounded-[10px] absolute flex items-center justify-center"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          d="M5.55664 5.53809L14.445 14.4248M5.55664 14.4248L14.445 5.53809"
                          stroke="#F2154A"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                  <p class="text-grey-80 text-[12px] truncate">
                    photo_202.2734873289412.jpg
                  </p>
                </div>
              </div>
            </div>
            <a-modal :visible="previewVisible" :footer="null" @cancel="handleCancel">
              <img alt="example" style="width: 100%" :src="previewImage" />
            </a-modal>
          </div>
          <div class="grid grid-cols-2 gap-[70px]">
            <a-form-model-item class="order-item w-full mb-0" label="Срок исполнения в днях">
            <a-input v-model="form.name" placeholder="0 дней" />
          </a-form-model-item>
          <div class="flex  items-end mb-3"> <div class="flex items-center gap-2">
            <a-checkbox @change="onChange" /> <p class="text-[20px] text-black font-medium">Договорная дней</p>  <a-tooltip placement="top">
        <template slot="title">
          <span>prompt text</span>
        </template>
        <svg class="cursor-pointer"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M10.3907 11.8428H12.0017V15.1998M12.0001 8.80372L12.0019 8.80078M19.9999 11.998C19.9999 16.4152 16.4191 19.996 12.0019 19.996C7.58473 19.996 4.00391 16.4152 4.00391 11.998C4.00391 7.58083 7.58473 4 12.0019 4C16.4191 4 19.9999 7.58083 19.9999 11.998Z"
                  stroke="#C2C2C3"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                /></svg
            >
      </a-tooltip>
          </div>
 
  </div>
          </div>
          <div class="border-[0] border-b border-solid border-border-darik"
          >
          </div>
          <div class="grid grid-cols-2 gap-[70px]">
            <a-form-model-item class="order-item w-full mb-0" label="Цена">
            <a-input v-model="form.name" placeholder="0 сум" />
          </a-form-model-item>
          <div class="flex  items-end mb-3"> <div class="flex items-center gap-2">
            <a-checkbox @change="onChange" /> <p class="text-[20px] text-black font-medium">Договорная цена</p>  <a-tooltip placement="top">
        <template slot="title">
          <span>prompt text</span>
        </template>
        <svg class="cursor-pointer"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M10.3907 11.8428H12.0017V15.1998M12.0001 8.80372L12.0019 8.80078M19.9999 11.998C19.9999 16.4152 16.4191 19.996 12.0019 19.996C7.58473 19.996 4.00391 16.4152 4.00391 11.998C4.00391 7.58083 7.58473 4 12.0019 4C16.4191 4 19.9999 7.58083 19.9999 11.998Z"
                  stroke="#C2C2C3"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                /></svg
            >
      </a-tooltip>
          </div>
 
  </div>
          </div>
         
        </div>
      </a-form-model>
      
    </div>
    <div class="mt-8">
        <button
          class="w-full border border-solid border-blue bg-blue rounded-[8px] h-[60px] flex justify-center items-center text-base text-white font-medium gap-2"
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
    onChange() {

    },
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
      console.log(fileList);
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
  width: 104px;
  height: 104px;
  margin: 0;
  border: 1px solid var(--grey-8);
  background-color: #fff;
}
.order-upload {
  display: flex;
}
.order-upload :deep(.ant-upload-picture-card-wrapper) {
  width: 104px;
  display: flex;
}
.order-item :deep(label::after) {
  display: none;
}
.order-upload :deep(.ant-upload-list) {
  display: none;
}
.order-upload :deep(.ant-upload) {
  background-color: var(--bg-grey);
}
.img-delete {
  bottom: -100%;
  transition: 0.3s;
  opacity: 0;
}
.img-card {
  transition: 0.3s;
}
.img-card:hover .img-delete {
  bottom: auto;
  opacity: 1;
}
</style>
