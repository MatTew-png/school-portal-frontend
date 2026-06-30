<template>
  <q-page class="bg-grey-2 q-pa-md">
    <div class="row items-center justify-between q-mb-lg">
      <div class="text-h4 text-weight-bold text-dark">จัดการปฏิทินกิจกรรม</div>
      <q-btn color="orange-8" icon="add" label="เพิ่มกิจกรรม" @click="openDialog()" />
    </div>

    <q-card flat bordered class="bg-white">
      <q-table
        :rows="eventsList"
        :columns="columns"
        row-key="id"
        flat
        :pagination="{ rowsPerPage: 15 }"
      >
        <template v-slot:body-cell-color="props">
          <q-td :props="props">
            <q-chip :class="props.row.color + ' text-white'" dense>{{ props.row.color }}</q-chip>
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
        <q-card-section class="bg-orange-8 text-white row items-center">
          <div class="text-h6">{{ isEdit ? 'แก้ไขกิจกรรม' : 'เพิ่มกิจกรรมใหม่' }}</div>
          <q-space />
          <q-btn icon="close" flat round dense v-close-popup />
        </q-card-section>

        <q-card-section class="q-pt-md">
          <q-form @submit="saveEvent" class="q-gutter-md">
            <q-input
              outlined
              v-model="formData.title"
              label="ชื่อกิจกรรม *"
              :rules="[(val) => !!val || 'กรุณากรอกชื่อกิจกรรม']"
            />

            <div class="row q-col-gutter-md">
              <div class="col-6">
                <!-- Use a simpler text input for date format YYYY/MM/DD -->
                <q-input
                  outlined
                  v-model="formData.dateStr"
                  label="วันที่ (YYYY/MM/DD) *"
                  mask="####/##/##"
                  hint="เช่น 2026/05/15"
                  :rules="[(val) => !!val || 'กรุณากรอกวันที่']"
                >
                  <template v-slot:append>
                    <q-icon name="event" class="cursor-pointer">
                      <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                        <q-date v-model="formData.dateStr" mask="YYYY/MM/DD">
                          <div class="row items-center justify-end">
                            <q-btn v-close-popup label="ปิด" color="primary" flat />
                          </div>
                        </q-date>
                      </q-popup-proxy>
                    </q-icon>
                  </template>
                </q-input>
              </div>
              <div class="col-6">
                <q-input outlined v-model="formData.time" label="เวลา" hint="เช่น 08:30 - 16:30" />
              </div>
            </div>

            <q-input outlined v-model="formData.location" label="สถานที่" />

            <q-select
              outlined
              v-model="formData.color"
              :options="[
                { label: 'สีเขียว (วันหยุด)', value: 'bg-green-8' },
                { label: 'สีน้ำเงิน (วิชาการ)', value: 'bg-primary' },
                { label: 'สีส้ม (ทั่วไป/ประชุม)', value: 'bg-orange-6' },
              ]"
              emit-value
              map-options
              label="สีป้าย *"
              :rules="[(val) => !!val || 'กรุณาเลือกสี']"
            />

            <q-input
              outlined
              v-model="formData.description"
              type="textarea"
              label="รายละเอียดกิจกรรม"
              autogrow
            />

            <div class="row justify-end q-mt-lg">
              <q-btn flat label="ยกเลิก" color="grey" v-close-popup class="q-mr-sm" />
              <q-btn type="submit" color="orange-8" label="บันทึก" />
            </div>
          </q-form>
        </q-card-section>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useEventsStore, type CalendarEvent } from '@/stores/events';
import { useQuasar, type QTableProps } from 'quasar';

const $q = useQuasar();
const eventsStore = useEventsStore();
const eventsList = computed(() => eventsStore.eventsList);

const columns: QTableProps['columns'] = [
  { name: 'dateStr', label: 'วันที่', align: 'left', field: 'dateStr', sortable: true },
  { name: 'title', label: 'ชื่อกิจกรรม', align: 'left', field: 'title', sortable: true },
  { name: 'time', label: 'เวลา', align: 'left', field: 'time' },
  { name: 'location', label: 'สถานที่', align: 'left', field: 'location' },
  { name: 'color', label: 'สี', align: 'center', field: 'color' },
  { name: 'actions', label: 'จัดการ', align: 'center', field: 'actions' },
];

const dialogOpen = ref(false);
const isEdit = ref(false);
const editId = ref('');

const formData = ref({
  title: '',
  dateStr: '',
  time: '',
  location: '',
  description: '',
  color: 'bg-primary',
});

function resetForm() {
  formData.value = {
    title: '',
    dateStr: '',
    time: '',
    location: '',
    description: '',
    color: 'bg-primary',
  };
  isEdit.value = false;
  editId.value = '';
}

function openDialog(row?: CalendarEvent) {
  resetForm();
  if (row) {
    isEdit.value = true;
    editId.value = row.id;
    formData.value = { ...row };
  }
  dialogOpen.value = true;
}

function saveEvent() {
  if (isEdit.value) {
    eventsStore.updateEvent(editId.value, formData.value);
    $q.notify({ type: 'positive', message: 'อัปเดตกิจกรรมสำเร็จ' });
  } else {
    eventsStore.addEvent(formData.value);
    $q.notify({ type: 'positive', message: 'เพิ่มกิจกรรมสำเร็จ' });
  }
  dialogOpen.value = false;
}

function confirmDelete(row: CalendarEvent) {
  $q.dialog({
    title: 'ยืนยันการลบ',
    message: `คุณต้องการลบกิจกรรม "${row.title}" ใช่หรือไม่?`,
    cancel: true,
    persistent: true,
  }).onOk(() => {
    eventsStore.deleteEvent(row.id);
    $q.notify({ type: 'warning', message: 'ลบกิจกรรมเรียบร้อยแล้ว' });
  });
}
</script>
