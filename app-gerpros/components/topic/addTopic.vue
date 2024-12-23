<template>
  <div class="w-full flex flex-col gap-4">
    <label class="form-control w-full">
      <div class="label">
        <span class="label-text">標題</span>
      </div>
      <input
        v-model="title"
        type="text"
        placeholder="Type here"
        class="input input-bordered w-full"
      >
    </label>
    <label class="form-control w-full">
      <div class="label">
        <span class="label-text">封面圖</span>
      </div>
      <input
        type="file"
        class="file-input file-input-bordered file-input-sm w-full max-w-xs"
        @change="handleCoverChange"
      >
    </label>
    <label
      class="form-control w-full"
      @blur="hideDropdown"
      @focus="showDropdown"
    >
      <div class="label">
        <span class="label-text">標籤</span>
      </div>
      <div class="flex gap-2 items-center">
        <div
          v-for="tag in tags"
          :key="tag"
          class="badge badge-info gap-2 cursor-pointer"
          @click="deleteTag(tag)"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            class="inline-block h-4 w-4 stroke-current"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
          {{ tag }}
        </div>
        <div class="relative">
          <input
            v-model="tagInput"
            tabindex="0"
            role="button"
            type="text"
            placeholder="Type here"
            class="input input-bordered w-full w-xs"
            @focus="showDropdown"
            @click="showDropdown"
            @blur="hideDropdown"
            @keydown.enter="addTag($event.target.value)"
          >
          <ul
            v-show="isDropdownVisible"
            v-if="!!tagListOptions.length"
            tabindex="0"
            class="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow absolute top-15 left-0"
          >
            <li
              v-for="tagOpt in tagListOptions"
              :key="tagOpt"
              @click="addTag(tagOpt)"
            >
              <a>{{ tagOpt }}</a>
            </li>
          </ul>
        </div>
      </div>
    </label>
    <label class="form-control">
      <div class="label">
        <span class="label-text">摘要</span>
      </div>
      <textarea
        v-model="abstract"
        class="textarea textarea-bordered h-24"
        placeholder="摘要"
      />
    </label>
    <div class="w-[85vw] flex flex-col gap-4">
      <label class="form-control w-full">
        <div class="label">
          <span class="label-text">內容</span>
        </div>
      </label>
      <ClientOnly>
        <QuillEditor
          v-model:content="content"
          content-type="html"
          :toolbar="[
            [{ header: 1 }, { header: 2 }],
            ['bold', 'italic', 'underline', 'strike'],
            [{ list: 'ordered' }, { list: 'bullet' }, { list: 'check' }],
            ['link', 'image'],
          ]"
        />
      </ClientOnly>
    </div>
    <button class="btn" @click="submit">發布</button>
    <div v-show="errorMessages" class="text-red-500">{{ errorMessages }}</div>
  </div>
</template>

<script setup>
const title = ref('');
const tags = ref([]);
const tagInput = ref('');
const abstract = ref('');
const coverImageFile = ref({});
const content = ref('');
const isDropdownVisible = ref(false);
const tagList = ref([]);
const tagListOptions = computed(() => {
  return tagList.value.filter((tag) => !tags.value.includes(tag));
});
function handleCoverChange(event) {
  const selectedFile = event.target.files[0];
  if (selectedFile) {
    coverImageFile.value = selectedFile;
  } else {
    coverImageFile.value = null;
  }
}
function showDropdown() {
  isDropdownVisible.value = true;
}
function hideDropdown() {
  setTimeout(() => {
    isDropdownVisible.value = false;
  }, 300);
}
function addTag(tag) {
  tagInput.value = '';
  if (tags.value.includes(tag)) return;
  tags.value.push(tag);
}
function deleteTag(tag) {
  tags.value = tags.value.filter((t) => t !== tag);
}

const errorMessages = ref('');
const successMessage = ref('');
const router = useRouter();

async function submit() {
  const { formatHtml, fileStorageInfo } = await getFormatContent();
  const coverImage = await uploadImage(coverImageFile.value);
  const payload = {
    title: title.value,
    tags: [...tags.value],
    coverImage: coverImage.url,
    content: formatHtml,
    abstract: abstract.value,
    fileStorageInfo,
  };
  try {
    const data = await useApiFetch('/Posts', {
      method: 'POST',
      body: JSON.stringify(payload),
    });
    console.log(data);
    successMessage.value = '新增成功';
    setTimeout(() => {
      router.back();
    });
  } catch (error) {
    console.error(error);
    errorMessages.value = error;
  }
  console.log(payload);
}
async function getFormatContent() {
  const base64Images = extractBase64Images(content.value);
  const { urls, fileStorageInfo } = await uploadImages(base64Images);
  const formatHtml = replaceBase64ImagesToUrls(
    content.value,
    base64Images,
    urls,
  );
  return { formatHtml, fileStorageInfo };
}
function extractBase64Images(htmlContent) {
  const base64Images = [];
  const regex = /<img[^>]+src\s*=\s*"(data:image\/[^;]+;base64,[^"]+)"/g;
  let match;

  while ((match = regex.exec(htmlContent)) !== null) {
    base64Images.push(match[1]);
  }

  return base64Images;
}
async function uploadImages(base64Images) {
  const urls = [];
  const fileStorageInfo = [];

  base64Images.forEach(async (base64Image) => {
    const data = await uploadImage(base64Image);
    urls.push(data.url);
    fileStorageInfo.push(data.FileStorageInfo);
  });

  return { urls, fileStorageInfo };
}
async function uploadImage(base64Image) {
  const formData = new FormData();
  formData.append('image', base64Image);

  const data = await useApiFetch('/Posts/image-upload', {
    method: 'POST',
    body: formData,
  });

  data.url = 'https://picsum.photos/600/800?random=1';
  return data;
}
function replaceBase64ImagesToUrls(htmlContent, base64Images, urls) {
  let newHtmlContent = htmlContent;

  base64Images.forEach((base64Image, index) => {
    newHtmlContent = newHtmlContent.replace(base64Image, urls[index]);
  });

  return newHtmlContent;
}

onMounted(async () => {
  await fetchTagList();
});
async function fetchTagList() {
  try {
    const data = await useApiFetch('/Tags');
    tagList.value = data;
  } catch (error) {
    console.error(error);
  }
}
</script>

<style scoped></style>
