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
    <div
      class="form-block max-w-[712px] px-8 py-[40px] rounded-[24px] bg-white mt-[40px] border-[2px] border-solid border-grey-light"
    >
      <a-form-model :model="form" ref="ruleForm" :rules="rules">
        <div class="flex flex-col gap-6">
          <a-form-model-item
            class="order-item w-full mb-0"
            label="Название работы"
            prop="name"
          >
            <a-input v-model="form.name" placeholder="Название работы" />
          </a-form-model-item>
          <a-form-model-item
            class="order-select w-full mb-0 required"
            label="Категорие"
            :class="{ errorSelect: activeCheckedList.length == 0 && errorSelect }"
          >
            <div
              class="min-h-[58px] items-center border border-solid flex justify-between border-grey-8 rounded-lg px-4 py-3 modal-select"
            >
              <p class="text-grey-40 text-base" v-if="activeCheckedList.length == 0">
                Специальности
              </p>

              <div v-else class="w-full flex flex-wrap gap-[4px]">
                <div
                  v-for="listItem in activeCheckedList"
                  :key="listItem?.id"
                  class="px-4 h-[34px] rounded-[4px] bg-apple-grey flex gap-1 items-center text-blue text-[14px] font-medium"
                >
                  {{ listItem?.name_ru }}

                  <button @click="deleteChecked(listItem?.id)">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M16.2426 7.75738L7.75732 16.2427M16.2426 16.2426L7.75732 7.75732"
                        stroke="#020105"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              <button
                class="w-6"
                @click="(visible = true), (checkedList = [...activeCheckedList])"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="3"
                  height="13"
                  viewBox="0 0 3 13"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M2.5 1.25C2.5 1.94036 1.94036 2.5 1.25 2.5C0.559644 2.5 0 1.94036 0 1.25C0 0.559644 0.559644 0 1.25 0C1.94036 0 2.5 0.559644 2.5 1.25ZM2.5 6.25C2.5 6.94036 1.94036 7.5 1.25 7.5C0.559644 7.5 0 6.94036 0 6.25C0 5.55964 0.559644 5 1.25 5C1.94036 5 2.5 5.55964 2.5 6.25ZM1.25 12.5C1.94036 12.5 2.5 11.9404 2.5 11.25C2.5 10.5596 1.94036 10 1.25 10C0.559644 10 0 10.5596 0 11.25C0 11.9404 0.559644 12.5 1.25 12.5Z"
                    fill="#020105"
                  />
                </svg>
              </button>
            </div>
            <!-- <a-select
              mode="multiple"
              :default-value="['Программирование ', 'Программирование ']"
              style="width: 100%"
              placeholder="Категорие"
              @change="handleChangeSelect"
            >
              <a-select-option v-for="i in 25" :key="(i + 9).toString(36) + i">
                {{ (i + 9).toString(36) + i }}
              </a-select-option>
            </a-select> -->
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
                  :file-list="fileList[item]"
                  @preview="handlePreview"
                  @change="($event) => handleChange($event, item)"
                >
                  <div v-if="fileList[item].length < 1" class="flex justify-center">
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
            <a-input v-model="form.link" placeholder="Link to work" />
          </a-form-model-item>
          <a-form-model-item class="order-item w-full mb-0" label="Description">
            <a-input
              type="textarea"
              rows="5"
              v-model="form.desc"
              placeholder="Большое спасибо за всю мебель. Очень качественно и по доступным ценам Мы очень рады совместной работе с вами!  "
            />
          </a-form-model-item>
        </div>
      </a-form-model>
      <div class="mt-8">
        <button
          @click="onSubmit()"
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
    <a-modal
      v-model="visible"
      :body-style="{ padding: '32px 40px', borderRadius: '30px' }"
      :dialog-style="{ padding: '32px', borderRadius: '24px' }"
      centered
      class="modal"
      :closable="false"
      width="1198px"
      @ok="handleOk"
    >
      <div class="flex flex-col gap-8">
        <div class="flex justify-between items-center">
          <h6 class="text-black text-[24px] font-semibold">Sohangizni tanlang</h6>
          <p class="text-[18px] text-grey-80 flex gap-2 items-center">
            <span class="text-main-color font-medium">{{ checkedList.length }}</span
            >: yonalish tanlandi
            <span>(max 3 ta)</span>
          </p>
        </div>
        <div class="modal-body">
          <div
            class="flex flex-col gap-4 max-h-[620px] overflow-y-scroll modal-list pr-[9px]"
          >
            <div
              class="cursor-pointer flex gap-3 items-center h-[67px] px-6 rounded-xl bg-bg-f9 text-black text-base font-medium border-[2px] border-solid border-bg-f9"
              v-for="item in specialities"
              @click="onSelect(item?.id)"
              :class="{
                active: (modalList ? modalList : specialities[0]?.id) == item?.id,
              }"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="56"
                height="57"
                viewBox="0 0 56 57"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M27.9997 47.1665C19.7523 47.1665 13.0664 40.3609 13.0664 31.9657C13.0664 23.6363 17.8326 13.9167 25.2689 10.4409C26.1357 10.0357 27.0677 9.83317 27.9997 9.83317V47.1665Z"
                  fill="#009A10"
                />
                <path
                  opacity="0.3"
                  d="M30.7308 10.4412C29.864 10.0361 28.932 9.8335 28 9.8335V22.9003L36.2724 14.6279C34.662 12.8586 32.7997 11.4082 30.7308 10.4412Z"
                  fill="#009A10"
                />
                <path
                  opacity="0.4"
                  d="M28 22.9003V33.167L40.3466 20.8203C39.2787 18.5427 37.9049 16.4214 36.2724 14.6279L28 22.9003Z"
                  fill="#009A10"
                />
                <path
                  opacity="0.6"
                  d="M28 42.4998L42.5805 27.9193C42.17 25.5104 41.4098 23.0876 40.3466 20.8198L28 33.1665V42.4998Z"
                  fill="#009A10"
                />
                <path
                  opacity="0.7"
                  d="M42.5805 27.9194L28 42.5V47.1665C36.2475 47.1665 42.9333 40.3609 42.9333 31.9657C42.9333 30.6419 42.8129 29.2829 42.5805 27.9194Z"
                  fill="#009A10"
                />
              </svg>
              {{ item?.name_ru }}
            </div>
          </div>
          <div class="modal-board flex flex-col justify-between">
            <div class="flex gap-3 flex-wrap">
              <button
                class="px-4 py-2 bg-bg-grey rounded-[22px] flex items-center gap-2"
                v-for="child in specialities?.find(
                  (elem) =>
                    elem.id == (modalList != null ? modalList : specialities[0]?.id)
                )?.children"
                @click="onchecked(child)"
              >
                <a-checkbox
                  :checked="
                    Boolean(checkedList.find((elemChild) => elemChild.id == child.id))
                  "
                />
                <p class="text-grey-80 text-[14px] font-medium">{{ child?.name_ru }}</p>
              </button>
            </div>
            <div class="flex gap-4 justify-end">
              <button
                @click="closeChecked"
                class="h-[60px] border border-solid w-[227px] border-border-darik rounded-[12px] flex justify-center items-center text-[18px] text-black font-medium"
              >
                Bekor qilish
              </button>
              <button
                @click="saveChecked"
                class="h-[60px] border border-solid w-[227px] border-blue bg-blue rounded-[12px] flex justify-center items-center text-[18px] text-white font-medium"
              >
                Tasdiqlash
              </button>
            </div>
          </div>
        </div>
      </div>
    </a-modal>
    <Loader v-if="loading" />
  </div>
</template>
<script>
import Loader from '../../../../components/Loader.vue';

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
            loading: true,
            errorSelect: false,
            checkedList: [],
            activeCheckedList: [],
            modalList: null,
            visible: false,
            form: {
                name: "",
                link: "",
                desc: "",
                specialities: [],
                images: [],
            },
            rules: {
                name: [
                    { required: true, message: "Please input Activity name", trigger: "blur" },
                ],
            },
            previewVisible: false,
            previewImage: "",
            fileList: {
                file1: [],
                file2: [],
                file3: [],
                file4: [],
                file5: [],
                file6: [],
                file7: [],
                file8: [],
            },
            uploadList: [
                "file1",
                "file2",
                "file3",
                "file4",
                "file5",
                "file6",
                "file7",
                "file8",
            ],
        };
    },
    mounted() {
        this.loading = true;
        !localStorage.getItem("auth-token") ? this.$router.push("/") : (this.loading = false);
    },
    async asyncData({ store }) {
        const [specialitiesData] = await Promise.all([
            store.dispatch("fetchSpecialities/getSpecialities"),
        ]);
        const specialities = specialitiesData.content;
        return {
            specialities,
        };
    },
    methods: {
        onSubmit() {
            let formData = new FormData();
            this.activeCheckedList.forEach((item) => {
                formData.append("specialities[]", item.id);
            });
            this.uploadList.forEach((elem) => {
                if (this.fileList[elem].length > 0)
                    formData.append("images[]", this.fileList[elem][0].originFileObj);
            });
            formData.append("name", this.form.name);
            formData.append("link", this.form.link);
            formData.append("desc", this.form.desc);
            if (this.activeCheckedList.length == 0) {
                this.errorSelect = true;
            }
            else {
                this.errorSelect = false;
            }
            this.$refs.ruleForm.validate((valid) => {
                if (valid) {
                    if (this.fileList.file1.length == 0) {
                        this.$notification["error"]({
                            message: "Error",
                            description: "Img is required",
                        });
                    }
                    else {
                        this.__POST_WORK(formData);
                    }
                }
                else {
                    return false;
                }
            });
        },
        async __POST_WORK(data) {
            try {
                await this.$store.dispatch("fetchPortfolio/postWork", data);
                this.$notification["success"]({
                    message: "Success",
                    description: "Успешно отправлен",
                });
                this.$router.go(-1);
            }
            catch (e) {
                this.$notification["error"]({
                    message: "Error",
                    description: e.response.statusText,
                });
            }
        },
        handleOk() {
            this.visible = false;
        },
        closeChecked() {
            this.checkedList = [];
            this.visible = false;
        },
        saveChecked() {
            this.activeCheckedList = [...this.checkedList];
            this.checkedList = [];
            this.visible = false;
        },
        onchecked(obj) {
            if (this.checkedList.includes(obj)) {
                this.checkedList = this.checkedList.filter((item) => item.id != obj.id);
            }
            else {
                if (this.checkedList.length == 3) {
                    this.checkedList.shift();
                }
                this.checkedList.push(obj);
            }
        },
        deleteChecked(id) {
            this.activeCheckedList = this.activeCheckedList.filter((item) => item.id != id);
        },
        onSelect(id) {
            this.modalList = id;
        },
        handleChangeSelect(value) { },
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
        handleChange({ fileList }, name) {
            this.fileList[name] = fileList;
        },
    },
    components: { Loader }
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
  background-color: var(--bg-grey);
  border: 1px solid var(--grey-light);
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
:deep(.ant-upload-list-picture-card-container) {
  width: 100%;
}
:deep(.ant-upload-list-picture-card .ant-upload-list-item) {
  width: 100% !important;
  height: 116px !important;
}

.modal :deep(.ant-modal-content) {
  border-radius: 30px;
}

.modal-body {
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 40px;
}

.modal-list::-webkit-scrollbar {
  width: 4px;
}

/* Track */

.modal-list::-webkit-scrollbar-track {
  border-radius: 50px;
  background: var(--bg-grey);
  width: 4px;
}

/* Handle */

.modal-list::-webkit-scrollbar-thumb {
  width: 6px;
  border-radius: 50px;
  background: var(--border-darik);
}

.modal-list .active {
  border-color: var(--blue);
  color: var(--blue);
}

:deep(.ant-select-focused
    .ant-select-selection, .ant-select-selection:focus, .ant-select-selection:active) {
  border: 1px solid var(--blue);
  box-shadow: 0px 0px 0px 3px rgba(70, 105, 229, 0.2);
}

:deep(.ant-form-explain) {
  display: none;
}

:deep(.has-error) input,
:deep(.has-error) textarea {
  border-color: var(--red);
}
.errorSelect .modal-select {
  border-color: var(--red);
}
.required :deep(label)::before {
  display: inline-block;
  margin-right: 4px;
  color: #f5222d;
  font-size: 14px;
  font-family: SimSun, sans-serif;
  line-height: 1;
  content: "*";
  position: absolute;
  right: -5px;
  top: 0;
}
.required :deep(label)::after {
  display: none !important;
}
</style>
