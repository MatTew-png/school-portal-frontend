<template>
  <q-page class="bg-grey-2 q-pa-md">
    <div class="row items-center justify-between q-mb-lg">
      <div class="text-h4 text-weight-bold text-dark">จัดการข่าวสาร</div>
      <q-btn color="primary" icon="add" label="เพิ่มข่าวใหม่" @click="openDialog()" />
    </div>

    <q-card flat bordered class="bg-white">
      <q-table
        :rows="newsList"
        :columns="columns"
        row-key="id"
        flat
        :pagination="{ rowsPerPage: 10 }"
      >
        <template v-slot:body-cell-image="props">
          <q-td :props="props">
            <q-img :src="props.row.image" style="width: 80px; height: 50px; border-radius: 4px" />
          </q-td>
        </template>
        <template v-slot:body-cell-actions="props">
          <q-td :props="props">
            <q-btn flat round color="primary" icon="edit" @click="openDialog(props.row)" />
            <q-btn flat round color="negative" icon="delete" @click="confirmDelete(props.row)" />
          </q-td>
        </template>
      </q-table>
    </q-card>

    <!-- Dialog for Add/Edit -->
    <q-dialog v-model="dialogOpen" persistent>
      <q-card style="min-width: 500px">
        <q-card-section class="bg-primary text-white row items-center">
          <div class="text-h6">{{ isEdit ? 'แก้ไขข่าวสาร' : 'เพิ่มข่าวสารใหม่' }}</div>
          <q-space />
          <q-btn icon="close" flat round dense v-close-popup />
        </q-card-section>

        <q-card-section class="q-pt-md">
          <q-form @submit="saveNews" class="q-gutter-md">
            <q-input
              outlined
              v-model="formData.title"
              label="หัวข้อข่าว *"
              :rules="[(val) => !!val || 'กรุณากรอกหัวข้อ']"
            />

            <div class="row q-col-gutter-md">
              <div class="col-6">
                <q-input
                  outlined
                  v-model="formData.date"
                  label="วันที่ *"
                  :rules="[(val) => !!val || 'กรุณากรอกวันที่']"
                />
              </div>
              <div class="col-6">
                <q-select
                  outlined
                  v-model="formData.category"
                  :options="['ประกาศรับสมัคร', 'กิจกรรม', 'วิชาการ', 'ทั่วไป']"
                  label="หมวดหมู่ *"
                  :rules="[(val) => !!val || 'กรุณาเลือกหมวดหมู่']"
                />
              </div>
            </div>

            <q-input outlined v-model="formData.image" label="URL รูปภาพ (เช่น /hero1.png)" />

            <q-input
              outlined
              v-model="formData.summary"
              type="textarea"
              label="คำโปรย (Summary)"
              autogrow
            />

            <q-input
              outlined
              v-model="formData.content"
              type="textarea"
              label="เนื้อหาข่าว (Markdown/Text) *"
              :rules="[(val) => !!val || 'กรุณากรอกเนื้อหา']"
            />

            <div class="row justify-end q-mt-lg">
              <q-btn flat label="ยกเลิก" color="grey" v-close-popup class="q-mr-sm" />
              <q-btn type="submit" color="primary" label="บันทึก" />
            </div>
          </q-form>
        </q-card-section>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useNewsStore, type NewsItem } from '@/stores/news';
import { useQuasar, type QTableProps } from 'quasar';

const $q = useQuasar();
const newsStore = useNewsStore();
const newsList = computed(() => newsStore.newsList);

const columns: QTableProps['columns'] = [
  { name: 'image', label: 'รูปภาพ', align: 'left', field: 'image' },
  { name: 'title', label: 'หัวข้อข่าว', align: 'left', field: 'title', sortable: true },
  { name: 'category', label: 'หมวดหมู่', align: 'left', field: 'category', sortable: true },
  { name: 'date', label: 'วันที่', align: 'left', field: 'date', sortable: true },
  { name: 'views', label: 'ยอดเข้าชม', align: 'center', field: 'views', sortable: true },
  { name: 'actions', label: 'จัดการ', align: 'center', field: 'actions' },
];

const dialogOpen = ref(false);
const isEdit = ref(false);
const editId = ref('');

const formData = ref({
  title: '',
  date: '',
  category: '',
  image: '/hero1.png',
  summary: '',
  content: '',
});

function resetForm() {
  formData.value = {
    title: '',
    date: '',
    category: '',
    image: '/hero1.png',
    summary: '',
    content: '',
  };
  isEdit.value = false;
  editId.value = '';
}

function openDialog(row?: NewsItem) {
  resetForm();
  if (row) {
    isEdit.value = true;
    editId.value = row.id;
    formData.value = { ...row };
  }
  dialogOpen.value = true;
}

function saveNews() {
  if (isEdit.value) {
    newsStore.updateNews(editId.value, formData.value);
    $q.notify({ type: 'positive', message: 'อัปเดตข่าวสารสำเร็จ' });
  } else {
    newsStore.addNews(formData.value);
    $q.notify({ type: 'positive', message: 'เพิ่มข่าวสารสำเร็จ' });
  }
  dialogOpen.value = false;
}

function confirmDelete(row: NewsItem) {
  $q.dialog({
    title: 'ยืนยันการลบ',
    message: `คุณต้องการลบข่าว "${row.title}" ใช่หรือไม่?`,
    cancel: true,
    persistent: true,
  }).onOk(() => {
    newsStore.deleteNews(row.id);
    $q.notify({ type: 'warning', message: 'ลบข่าวสารเรียบร้อยแล้ว' });
  });
}
</script>
