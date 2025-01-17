<template>
  <!-- Modal 結構 -->
  <input type="checkbox" id="brand-series-modal" class="modal-toggle" v-model="localShowModal"/>
  <div class="modal" v-if="localShowModal">
    <div class="modal-box max-w-5xl">
      <h3 class="font-bold text-xl mb-4">編輯品牌與系列</h3>

      <!-- ========== 品牌/系列 清單 與 CRUD 按鈕 ========== -->
      <div class="flex flex-col md:flex-row gap-4">
        <!-- 左側：顯示所有品牌 & 系列列表 -->
        <div class="grow overflow-auto max-h-96 border rounded-lg p-4">
          <ul class="space-y-2">
            <li v-for="b in brandSeriesStore" :key="b.id">
              <div class="flex items-center justify-between">
                <span class="font-semibold">
                  品牌：{{ b.name }}
                </span>
                <div>
                  <button class="btn btn-xs btn-accent mr-2" @click="startEditBrand(b)">編輯</button>
                  <button class="btn btn-xs btn-error" @click="deleteBrand(b.id)">刪除</button>
                </div>
              </div>
              <!-- 系列列表 -->
              <ul class="ml-6 mt-2">
                <li v-for="s in b.series" :key="s.id" class="flex items-center justify-between">
                  <span>- 系列：{{ s.name }}</span>
                  <div>
                    <button class="btn btn-xs btn-accent mr-2" @click="startEditSeries(b.id, s)">編輯</button>
                    <button class="btn btn-xs btn-error" @click="deleteSeries(b.id, s.id)">刪除</button>
                  </div>
                </li>
              </ul>
            </li>
          </ul>
        </div>

        <!-- 右側：新增 / 編輯 品牌 / 系列 -->
        <div class="w-full md:w-1/3 space-y-4">
          <!-- 編輯/新增品牌 -->
          <div class="card bg-base-200 p-4">
            <h4 class="font-bold mb-2">
              {{ editingBrand.id ? '編輯品牌' : '新增品牌' }}
            </h4>
            <div class="form-control mb-2">
              <label class="label">
                <span class="label-text">品牌名稱</span>
              </label>
              <input
                  type="text"
                  v-model="editingBrand.name"
                  placeholder="輸入品牌名稱"
                  class="input input-bordered"
              />
            </div>
            <div class="flex gap-2">
              <button
                  class="btn btn-primary flex-1"
                  @click="editingBrand.id ? updateBrand() : createBrand()"
              >
                {{ editingBrand.id ? '更新' : '新增' }}
              </button>
              <button
                  v-if="editingBrand.id"
                  class="btn btn-outline flex-1"
                  @click="resetBrandForm"
              >
                取消編輯
              </button>
            </div>
          </div>

          <!-- 編輯/新增系列 -->
          <div class="card bg-base-200 p-4">
            <h4 class="font-bold mb-2">
              {{ editingSeries.id ? '編輯系列' : '新增系列' }}
            </h4>

            <!-- 新增模式下顯示品牌下拉選單，編輯模式下隱藏 -->
            <div v-if="!editingSeries.id" class="form-control mb-2">
              <label class="label">
                <span class="label-text">隸屬品牌</span>
              </label>
              <select v-model="editingSeries.brandId" class="select select-bordered">
                <option value="" disabled selected>請選擇品牌</option>
                <option
                    v-for="brand in brandSeriesStore"
                    :key="brand.id"
                    :value="brand.id"
                >
                  {{ brand.name }}
                </option>
              </select>
            </div>

            <div class="form-control mb-2">
              <label class="label">
                <span class="label-text">系列名稱</span>
              </label>
              <input
                  type="text"
                  v-model="editingSeries.name"
                  placeholder="輸入系列名稱"
                  class="input input-bordered"
              />
            </div>
            <div class="flex gap-2">
              <button
                  class="btn btn-primary flex-1"
                  @click="editingSeries.id ? updateSeries() : createSeries()"
              >
                {{ editingSeries.id ? '更新' : '新增' }}
              </button>
              <button
                  v-if="editingSeries.id"
                  class="btn btn-outline flex-1"
                  @click="resetSeriesForm"
              >
                取消編輯
              </button>
            </div>
          </div>

        </div>
      </div>

      <!-- modal 關閉按鈕 -->
      <div class="modal-action">
        <label for="brand-series-modal" class="btn" @click="handleClose">
          關閉
        </label>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref, watch, onMounted} from 'vue';
import {useBrandSeriesStore} from '~/stores/brandSeries.ts';

const props = defineProps({
  showModal: {
    type: Boolean,
    default: false,
  }
});
const emit = defineEmits(['update:showModal','refreshData']);

const localShowModal = ref(props.showModal);

// 監聽 props 的變化，並同步到本地變數
watch(() => props.showModal, (newVal) => {
  localShowModal.value = newVal;
});

// 當本地變數變動時，同步回父層
watch(localShowModal, (val) => {
  emit('update:showModal', val);
});

const {brandSeries} = useBrandSeriesStore();
const brandSeriesStore = brandSeries;

const editingBrand = ref({id: '', name: ''});
const editingSeries = ref({id: '', brandId: '', name: ''});

async function fetchData() {
  try {
    const data = await useApiFetch(`/Brands?isManager=true`);
    if (data) {
      brandSeriesStore.value = data;
    }
  } catch (error) {
    console.error('無法獲取品牌資料', error);
  }
}

onMounted(fetchData);

/* === 品牌 CRUD === */
async function createBrand() {
  try {
    const body = {name: editingBrand.value.name};
    await useApiFetch(`/Brands`, {method: 'POST', body});
    await fetchData();
    resetBrandForm();
    emit('refreshData');
  } catch (error) {
    console.error('新增品牌失敗：', error);
  }
}

function startEditBrand(brand) {
  editingBrand.value.id = brand.id;
  editingBrand.value.name = brand.name;
}

async function updateBrand() {
  try {
    const brandId = editingBrand.value.id;
    const body = {id: brandId, name: editingBrand.value.name};
    await useApiFetch(`/Brands/${brandId}`, {method: 'PUT', body});
    await fetchData();
    resetBrandForm();
    emit('refreshData');
  } catch (error) {
    console.error('更新品牌失敗：', error);
  }
}

async function deleteBrand(brandId) {
  try {
    await useApiFetch(`/Brands/${brandId}`, {method: 'DELETE'});
    await fetchData();
    emit('refreshData');
  } catch (error) {
    console.error('刪除品牌失敗：', error);
  }
}

function resetBrandForm() {
  editingBrand.value = {id: '', name: ''};
}

/* === 系列 CRUD === */
async function createSeries() {
  try {
    const body = {
      name: editingSeries.value.name,
      brandId: editingSeries.value.brandId,
    };
    await useApiFetch(`/Series`, {method: 'POST', body});
    await fetchData();
    resetSeriesForm();
    emit('refreshData');
  } catch (error) {
    console.error('新增系列失敗：', error);
  }
}

function startEditSeries(parentBrandId, series) {
  editingSeries.value.id = series.id;
  editingSeries.value.name = series.name;
  editingSeries.value.brandId = parentBrandId;
}

async function updateSeries() {
  try {
    const seriesId = editingSeries.value.id;
    const body = {id: seriesId, name: editingSeries.value.name};
    await useApiFetch(`/Series/${seriesId}`, {method: 'PUT', body});
    await fetchData();
    resetSeriesForm();
    emit('refreshData');
  } catch (error) {
    console.error('更新系列失敗：', error);
  }
}

async function deleteSeries(brandId, seriesId) {
  try {
    await useApiFetch(`/Series/${seriesId}`, {method: 'DELETE'});
    await fetchData();
    emit('refreshData');
  } catch (error) {
    console.error('刪除系列失敗：', error);
  }
}

function resetSeriesForm() {
  editingSeries.value = {id: '', brandId: '', name: ''};
}

/* Modal 關閉處理 */
function handleClose() {
  localShowModal.value = false;
}
</script>
