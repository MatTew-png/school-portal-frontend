<template>
  <q-page class="bg-surface" :class="$q.screen.lt.md ? 'q-pa-md' : 'q-pa-lg'">
    <div :class="['row', $q.screen.lt.md ? 'q-col-gutter-md' : 'q-col-gutter-xl']">
      <!-- Left: Calendar Grid -->
      <div class="col-12 col-lg-8">
        <div class="column q-gutter-y-lg">
          <!-- Header & View Toggles -->
        <div class="row items-end justify-between q-mb-sm">
          <div class="col-12 col-md-auto">
            <h1
              class="text-h4 text-weight-bold text-primary q-my-none font-headline"
              style="color: #003b09"
            >
              จัดการปฏิทินกิจกรรม
            </h1>
            <p class="text-body1 text-grey-8 q-mt-sm q-mb-none">
              ดูและจัดการแผนงานกิจกรรมทั้งหมดของโรงเรียนบ้านท่าซุง
            </p>
          </div>
          <div class="col-12 col-md-auto row bg-grey-2 q-pa-xs rounded-borders" :class="{ 'q-mt-md': $q.screen.lt.md }">
            <q-btn
              flat
              no-caps
              label="เดือน"
              class="bg-white text-primary text-weight-bold rounded-borders q-px-md"
            />
            <q-btn flat no-caps label="สัปดาห์" class="text-grey-7 q-px-md rounded-borders" />
            <q-btn flat no-caps label="รายการ" class="text-grey-7 q-px-md rounded-borders" />
          </div>
        </div>

        <!-- Calendar Container -->
        <div class="bg-white rounded-borders border-outline overflow-hidden shadow-1">
          <!-- Calendar Header -->
          <div class="row items-center justify-between q-pa-md border-bottom">
            <div class="text-h6 text-weight-bold">{{ currentMonthYear }}</div>
            <div class="row items-center q-gutter-x-sm">
              <q-btn flat round dense icon="chevron_left" class="text-grey-8" @click="prevMonth" />
              <q-btn flat round dense icon="chevron_right" class="text-grey-8" @click="nextMonth" />
              <q-btn
                outline
                color="grey-6"
                text-color="grey-8"
                label="วันนี้"
                no-caps
                class="q-ml-sm rounded-borders"
                @click="goToToday"
              />
            </div>
          </div>

          <!-- Days Labels -->
          <div class="calendar-grid bg-grey-1 border-bottom">
            <div class="q-py-sm text-center text-weight-bold text-red-8 text-caption">อา.</div>
            <div class="q-py-sm text-center text-weight-bold text-grey-8 text-caption">จ.</div>
            <div class="q-py-sm text-center text-weight-bold text-grey-8 text-caption">อ.</div>
            <div class="q-py-sm text-center text-weight-bold text-grey-8 text-caption">พ.</div>
            <div class="q-py-sm text-center text-weight-bold text-grey-8 text-caption">พฤ.</div>
            <div class="q-py-sm text-center text-weight-bold text-grey-8 text-caption">ศ.</div>
            <div class="q-py-sm text-center text-weight-bold text-grey-8 text-caption">ส.</div>
          </div>

          <!-- Calendar Body -->
          <div class="calendar-grid bg-white">
            <div
              v-for="(day, index) in calendarDays"
              :key="index"
              class="calendar-day q-pa-sm border-right border-bottom transition-colors relative-position"
              :class="{
                'bg-grey-1': !day.isCurrentMonth,
                'cursor-pointer hover-bg-grey-1': day.isCurrentMonth,
                'bg-yellow-1 border-yellow': isToday(day.date),
              }"
              @click="day.isCurrentMonth ? selectDate(day.date) : null"
            >
              <div class="row justify-between items-start q-mb-xs">
                <span
                  class="text-weight-medium"
                  :class="[
                    !day.isCurrentMonth
                      ? 'text-grey-5'
                      : day.date.getDay() === 0
                        ? 'text-red-8'
                        : 'text-grey-9',
                    isToday(day.date) ? 'text-primary text-weight-bold' : '',
                  ]"
                  >{{ day.date.getDate() }}</span
                >
              </div>

              <!-- Events for this day -->
              <div class="column q-gutter-y-xs event-container">
                <div
                  v-for="event in getEventsForDate(day.date)"
                  :key="event.id"
                  class="text-white text-caption q-px-xs q-py-xs rounded-borders text-center ellipsis event-badge"
                  :class="[event.color, event.color === 'bg-yellow-8' ? 'text-dark' : '']"
                  @click.stop="editEvent(event)"
                >
                  {{ event.title }}
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Event Type Legend -->
        <div
          class="row items-center q-pa-md bg-grey-2 rounded-borders border-outline"
          :class="$q.screen.lt.md ? 'q-gutter-sm' : 'q-gutter-x-lg'"
        >
          <span class="text-weight-bold text-dark" :class="{ 'full-width': $q.screen.lt.md }">ประเภทกิจกรรม:</span>
          <div class="row items-center q-gutter-x-sm">
            <div
              class="rounded-borders"
              style="width: 12px; height: 12px; background-color: #ba1a1a"
            ></div>
            <span class="text-caption text-grey-8">วันหยุด / สำคัญมาก</span>
          </div>
          <div class="row items-center q-gutter-x-sm">
            <div
              class="rounded-borders"
              style="width: 12px; height: 12px; background-color: #003b09"
            ></div>
            <span class="text-caption text-grey-8">วิชาการ</span>
          </div>
          <div class="row items-center q-gutter-x-sm">
            <div
              class="rounded-borders"
              style="width: 12px; height: 12px; background-color: #fdd01b"
            ></div>
            <span class="text-caption text-grey-8">ทั่วไป / งานโรงเรียน</span>
          </div>
          <div class="row items-center q-gutter-x-sm">
            <div
              class="rounded-borders"
              style="width: 12px; height: 12px; background-color: #782f4a"
            ></div>
            <span class="text-caption text-grey-8">วันสำคัญทางศาสนา</span>
          </div>
        </div>
        </div>
      </div>

      <!-- Right: Sidebar -->
      <div class="col-12 col-lg-4">
        <div class="column q-gutter-y-lg">
          <!-- Upcoming Events Section -->
        <div class="bg-grey-1 rounded-borders border-outline overflow-hidden shadow-1">
          <div class="flex items-center q-pa-md border-bottom bg-grey-2" style="gap: 8px;">
            <q-icon name="event" color="primary" size="sm" />
            <div class="text-subtitle1 text-weight-bold text-dark">กิจกรรมเร็วๆ นี้</div>
          </div>
          <div class="q-pa-md column q-gutter-y-sm">
            <div
              v-for="event in upcomingEvents"
              :key="event.id"
              class="row q-pa-sm bg-white rounded-borders border-outline cursor-pointer hover-border-primary transition-colors q-mb-sm"
              @click="editEvent(event)"
            >
              <div
                class="column flex-center rounded-borders q-py-xs q-mr-md"
                :class="[event.color, event.color === 'bg-yellow-8' ? 'text-dark' : 'text-white']"
                style="min-width: 50px"
              >
                <span class="text-caption text-weight-bold">{{
                  getMonthShortForm(event.dateStr)
                }}</span>
                <span class="text-h6 text-weight-bold leading-none">{{
                  getDayNumber(event.dateStr)
                }}</span>
              </div>
              <div class="col column justify-center overflow-hidden">
                <div class="text-weight-bold text-dark ellipsis">{{ event.title }}</div>
                <div class="text-caption text-grey-7 row items-center ellipsis">
                  <q-icon name="schedule" size="xs" class="q-mr-xs" v-if="event.time" />
                  <span>{{ event.time || event.location }}</span>
                </div>
              </div>
            </div>

            <q-btn
              flat
              color="primary"
              label="ดูทั้งหมด"
              no-caps
              class="text-weight-bold q-mt-sm"
            />
          </div>
        </div>

        <!-- Quick Add Form -->
        <div class="bg-white rounded-borders border-outline q-pa-md shadow-1">
          <h3
            class="text-subtitle1 text-weight-bold text-primary q-mt-none q-mb-md"
            style="color: #003b09"
          >
            เพิ่มกิจกรรมด่วน
          </h3>

          <div class="column q-gutter-y-md">
            <div>
              <div class="text-caption text-weight-bold text-grey-7 q-mb-xs text-uppercase">
                ชื่อกิจกรรม
              </div>
              <q-input
                outlined
                dense
                v-model="form.title"
                placeholder="ระบุชื่อกิจกรรม..."
                bg-color="grey-1"
              />
            </div>

            <div class="row q-col-gutter-sm">
              <div class="col-6">
                <div class="text-caption text-weight-bold text-grey-7 q-mb-xs text-uppercase">
                  วันที่
                </div>
                <q-input outlined dense v-model="form.date" type="date" bg-color="grey-1" />
              </div>
              <div class="col-6">
                <div class="text-caption text-weight-bold text-grey-7 q-mb-xs text-uppercase">
                  เวลา
                </div>
                <q-input outlined dense v-model="form.time" type="time" bg-color="grey-1" />
              </div>
            </div>

            <div>
              <div class="text-caption text-weight-bold text-grey-7 q-mb-sm text-uppercase">
                ประเภทกิจกรรม (สี)
              </div>
              <div class="row q-gutter-x-sm">
                <div 
                  v-for="c in ['bg-red-8', 'bg-green-8', 'bg-yellow-8', 'bg-purple-8']" 
                  :key="c"
                  class="color-picker-btn"
                  :class="[c, form.color === c ? 'selected' : '']"
                  @click="form.color = c"
                ></div>
              </div>
            </div>

            <q-btn
              color="primary"
              :label="isEditing ? 'อัปเดตกิจกรรม' : 'บันทึกกิจกรรม'"
              class="full-width rounded-borders text-weight-bold q-py-sm"
              style="background-color: #003b09 !important"
              @click="saveEvent"
            />

            <q-btn
              v-if="isEditing"
              flat
              color="red-8"
              label="ลบกิจกรรม"
              class="full-width rounded-borders text-weight-bold q-mt-sm"
              @click="deleteEvent(editId!)"
            />
            <q-btn
              v-if="isEditing"
              flat
              color="grey-8"
              label="ยกเลิกการแก้ไข"
              class="full-width rounded-borders text-weight-bold q-mt-sm"
              @click="resetForm"
            />
          </div>
        </div>

        <!-- Informational Card -->
        <div
          class="rounded-borders border-outline q-pa-md relative-position overflow-hidden"
          style="background-color: #e8f5e9; border-color: #c8e6c9"
        >
          <q-icon
            name="calendar_month"
            size="100px"
            class="absolute text-green-8"
            style="right: -20px; bottom: -20px; opacity: 0.1"
          />
          <div class="text-weight-bold text-green-9 q-mb-sm">แจ้งเตือนระบบ</div>
          <div class="text-caption text-green-9" style="opacity: 0.8; line-height: 1.5">
            ข้อมูลกิจกรรมที่เพิ่มจะถูกแสดงผลบนหน้าเว็บไซต์หลักของโรงเรียนทันที
            โปรดตรวจสอบความถูกต้องของวันที่และเวลา
          </div>
        </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useEventsStore } from '@/stores/events';
import { useQuasar } from 'quasar';
import type { CalendarEvent } from '@/stores/events';

const $q = useQuasar();
const eventsStore = useEventsStore();

const currentDate = ref(new Date());

const currentMonthYear = computed(() => {
  return currentDate.value.toLocaleDateString('th-TH', { month: 'long', year: 'numeric' });
});

function getMonthShortForm(dateStr: string) {
  const d = new Date(dateStr.replace(/\//g, '-'));
  if (isNaN(d.getTime())) return '';
  const shortMonths = [
    'ม.ค.',
    'ก.พ.',
    'มี.ค.',
    'เม.ย.',
    'พ.ค.',
    'มิ.ย.',
    'ก.ค.',
    'ส.ค.',
    'ก.ย.',
    'ต.ค.',
    'พ.ย.',
    'ธ.ค.',
  ];
  return shortMonths[d.getMonth()];
}

function getDayNumber(dateStr: string) {
  const d = new Date(dateStr.replace(/\//g, '-'));
  if (isNaN(d.getTime())) return '';
  return String(d.getDate()).padStart(2, '0');
}

// Generate calendar grid (42 days)
const calendarDays = computed(() => {
  const year = currentDate.value.getFullYear();
  const month = currentDate.value.getMonth();

  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);

  const days = [];

  // Previous month days
  const startPadding = firstDay.getDay(); // 0 for Sunday
  for (let i = startPadding - 1; i >= 0; i--) {
    days.push({
      date: new Date(year, month, -i),
      isCurrentMonth: false,
    });
  }

  // Current month days
  for (let i = 1; i <= lastDay.getDate(); i++) {
    days.push({
      date: new Date(year, month, i),
      isCurrentMonth: true,
    });
  }

  // Next month days to complete 42 slots
  const remaining = 42 - days.length;
  for (let i = 1; i <= remaining; i++) {
    days.push({
      date: new Date(year, month + 1, i),
      isCurrentMonth: false,
    });
  }

  return days;
});

function prevMonth() {
  currentDate.value = new Date(
    currentDate.value.getFullYear(),
    currentDate.value.getMonth() - 1,
    1,
  );
}

function nextMonth() {
  currentDate.value = new Date(
    currentDate.value.getFullYear(),
    currentDate.value.getMonth() + 1,
    1,
  );
}

function goToToday() {
  currentDate.value = new Date();
}

function isToday(d: Date) {
  const today = new Date();
  return (
    d.getDate() === today.getDate() &&
    d.getMonth() === today.getMonth() &&
    d.getFullYear() === today.getFullYear()
  );
}

function getEventsForDate(d: Date) {
  const yyyy = d.getFullYear();
  const mm = String(d.getMonth() + 1).padStart(2, '0');
  const dd = String(d.getDate()).padStart(2, '0');
  const dateStr = `${yyyy}/${mm}/${dd}`;

  return eventsStore.eventsList.filter((e) => e.dateStr === dateStr);
}

// Upcoming events logic
const upcomingEvents = computed(() => {
  const todayStr = formatToStoreDate(new Date());
  return eventsStore.eventsList
    .filter((e) => e.dateStr >= todayStr)
    .sort((a, b) => a.dateStr.localeCompare(b.dateStr))
    .slice(0, 4);
});

// Form logic
const isEditing = ref(false);
const editId = ref<string | null>(null);

const form = ref({
  title: '',
  date: '',
  time: '',
  color: 'bg-green-8',
});

function formatToStoreDate(d: Date) {
  const yyyy = d.getFullYear();
  const mm = String(d.getMonth() + 1).padStart(2, '0');
  const dd = String(d.getDate()).padStart(2, '0');
  return `${yyyy}/${mm}/${dd}`;
}

function formatToInputDate(dateStr: string) {
  return dateStr.replace(/\//g, '-');
}

function selectDate(d: Date) {
  form.value.date = formatToInputDate(formatToStoreDate(d));
  isEditing.value = false;
  editId.value = null;
  form.value.title = '';
  form.value.time = '';
}

function editEvent(event: CalendarEvent) {
  form.value = {
    title: event.title,
    date: formatToInputDate(event.dateStr),
    time: event.time && event.time.includes('-') ? (event.time.split(' - ')[0] || '') : event.time || '',
    color: event.color,
  };
  isEditing.value = true;
  editId.value = event.id;
}

function resetForm() {
  form.value = {
    title: '',
    date: '',
    time: '',
    color: 'bg-green-8',
  };
  isEditing.value = false;
  editId.value = null;
}

function saveEvent() {
  if (!form.value.title || !form.value.date) {
    $q.notify({ type: 'warning', message: 'กรุณากรอกชื่อกิจกรรมและวันที่' });
    return;
  }

  const mappedEvent = {
    title: form.value.title,
    dateStr: form.value.date.replace(/-/g, '/'),
    time: form.value.time ? `${form.value.time} - 16:30` : '00:00 - 23:59',
    location: 'โรงเรียนบ้านท่าซุง',
    description: '',
    color: form.value.color,
  };

  if (isEditing.value && editId.value) {
    eventsStore.updateEvent(editId.value, mappedEvent);
    $q.notify({ type: 'positive', message: 'แก้ไขกิจกรรมสำเร็จ' });
  } else {
    eventsStore.addEvent(mappedEvent);
    $q.notify({ type: 'positive', message: 'เพิ่มกิจกรรมด่วนสำเร็จ' });
  }

  resetForm();
}

function deleteEvent(id: string) {
  $q.dialog({
    title: 'ยืนยันการลบ',
    message: 'คุณต้องการลบกิจกรรมนี้ใช่หรือไม่?',
    cancel: true,
    persistent: true,
  }).onOk(() => {
    eventsStore.deleteEvent(id);
    $q.notify({ type: 'positive', message: 'ลบกิจกรรมสำเร็จ' });
    resetForm();
  });
}
</script>

<style scoped>
.bg-surface {
  background-color: #f8faf2;
}
.rounded-borders {
  border-radius: 8px;
}
.border-outline {
  border: 1px solid #e1e3db;
}
.border-bottom {
  border-bottom: 1px solid #e1e3db;
}
.border-right {
  border-right: 1px solid #e1e3db;
}

.calendar-grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
}

.calendar-day {
  min-height: 120px;
  min-width: 0;
  width: 100%;
  max-width: 100%;
  overflow: hidden;
}

.event-container {
  width: 100%;
  min-width: 0;
}

.event-badge {
  font-size: 10px;
  line-height: 1.2;
  width: 100%;
  max-width: 100%;
  display: block;
}

/* Remove bottom/right border for last row/cols if needed, but keeping it simple here */
.calendar-day:nth-child(7n) {
  border-right: none;
}

.hover-bg-grey-1:hover {
  background-color: #f2f5ec !important;
}

.hover-border-primary:hover {
  border-color: #003b09;
}

.transition-colors {
  transition: all 0.2s ease;
}

.font-headline {
  font-family: 'Hanken Grotesk', 'Be Vietnam Pro', sans-serif;
}

.color-picker-btn {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.2s;
  border: 2px solid transparent;
}
.color-picker-btn.selected {
  transform: scale(1.1);
}
.bg-red-8.selected { box-shadow: 0 0 0 2px white, 0 0 0 3px #c62828; }
.bg-green-8.selected { box-shadow: 0 0 0 2px white, 0 0 0 3px #2e7d32; }
.bg-yellow-8.selected { box-shadow: 0 0 0 2px white, 0 0 0 3px #f9a825; }
.bg-purple-8.selected { box-shadow: 0 0 0 2px white, 0 0 0 3px #6a1b9a; }
.bg-yellow-8 { background-color: #fdd01b !important; }
</style>
