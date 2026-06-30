<template>
  <q-page class="bg-grey-2 q-pa-md">
    <!-- PAGE HEADER -->
    <div class="row items-center q-mb-md">
      <div class="text-h5 text-weight-bold text-primary flex items-center">
        <q-icon name="event" class="q-mr-sm" size="md" /> ปฏิทินกิจกรรม
      </div>
    </div>

    <!-- CALENDAR SPLIT VIEW -->
    <div class="row q-col-gutter-lg">
      <!-- LEFT: CALENDAR WIDGET -->
      <div class="col-12 col-md-5 col-lg-4">
        <q-card flat bordered class="bg-white">
          <q-date
            v-model="selectedDate"
            :events="eventsArray"
            event-color="orange"
            class="full-width"
            flat
            square
            text-color="dark"
            mask="YYYY/MM/DD"
          />
        </q-card>
      </div>

      <!-- RIGHT: EVENT DETAILS -->
      <div class="col-12 col-md-7 col-lg-8">
        <q-card flat bordered class="bg-white h-100 flex column">
          <div
            class="bg-primary text-white q-pa-md text-weight-bold flex items-center justify-between"
          >
            <div>
              <q-icon name="list_alt" class="q-mr-xs" />
              {{ selectedDate ? `กิจกรรมวันที่ ${formattedSelectedDate}` : 'กิจกรรมทั้งหมด' }}
            </div>
            <q-btn
              v-if="selectedDate"
              flat
              dense
              size="sm"
              label="ดูกิจกรรมทั้งหมด"
              @click="selectedDate = ''"
            />
          </div>

          <q-scroll-area class="flex-grow-1" style="min-height: 400px">
            <q-list separator class="q-pa-sm">
              <template v-if="filteredEvents.length > 0">
                <q-item v-for="(ev, i) in filteredEvents" :key="i" class="q-py-md hover-bg">
                  <q-item-section avatar>
                    <div
                      class="text-center rounded-borders q-pa-xs shadow-1"
                      :class="ev.color"
                      style="width: 50px; color: white"
                    >
                      <div class="text-caption bg-dark text-white" style="font-size: 11px">
                        {{ ev.monthShort }}
                      </div>
                      <div class="text-weight-bold text-h6" style="line-height: 1.2">
                        {{ ev.dayStr }}
                      </div>
                    </div>
                  </q-item-section>
                  <q-item-section class="q-pl-sm">
                    <q-item-label class="text-subtitle1 text-weight-bold text-dark">{{
                      ev.title
                    }}</q-item-label>
                    <q-item-label caption class="text-primary q-mt-xs">
                      <q-icon name="schedule" class="q-mr-xs" /> {{ ev.time }}
                      <q-icon name="place" class="q-ml-sm q-mr-xs" /> {{ ev.location }}
                    </q-item-label>
                    <q-item-label class="q-mt-sm text-body2 text-grey-9" style="line-height: 1.5">{{
                      ev.description
                    }}</q-item-label>
                  </q-item-section>
                </q-item>
              </template>
              <template v-else>
                <div class="text-center q-pa-xl text-grey-6">
                  <q-icon name="event_busy" size="64px" class="q-mb-md opacity-50" />
                  <div class="text-h6">ไม่มีกิจกรรมในวันที่เลือก</div>
                  <div class="text-caption">กรุณาเลือกวันอื่น หรือกดดูกิจกรรมทั้งหมด</div>
                </div>
              </template>
            </q-list>
          </q-scroll-area>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

const today = new Date();
const currentYear = today.getFullYear();
// Format to YYYY/MM/DD
const formatCurrentDate = (d: number) => {
  const m = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(d).padStart(2, '0');
  return `${currentYear}/${m}/${day}`;
};

// Mock Events
const allEvents = [
  {
    dateStr: formatCurrentDate(1),
    title: 'วันแรงงานแห่งชาติ',
    time: '00:00 - 23:59',
    location: 'วันหยุดราชการ',
    description: 'โรงเรียนหยุดทำการ 1 วัน เนื่องในวันแรงงานแห่งชาติ',
    color: 'bg-green-8',
    monthShort: 'พ.ค.',
    dayStr: '1',
  },
  {
    dateStr: formatCurrentDate(4),
    title: 'วันฉัตรมงคล',
    time: '00:00 - 23:59',
    location: 'วันหยุดราชการ',
    description: 'โรงเรียนหยุดทำการ 1 วัน เนื่องในวันฉัตรมงคล',
    color: 'bg-green-8',
    monthShort: 'พ.ค.',
    dayStr: '4',
  },
  {
    dateStr: formatCurrentDate(13),
    title: 'วันพืชมงคล',
    time: '00:00 - 23:59',
    location: 'วันหยุดราชการ',
    description: 'โรงเรียนหยุดทำการ 1 วัน เนื่องในวันพระราชพิธีพืชมงคลจรดพระนังคัลแรกนาขวัญ',
    color: 'bg-green-8',
    monthShort: 'พ.ค.',
    dayStr: '13',
  },
  {
    dateStr: formatCurrentDate(15),
    title: 'เปิดเทอม 1/2568',
    time: '07:30 - 15:30',
    location: 'โรงเรียนบ้านท่าซุง',
    description:
      'เปิดภาคเรียนที่ 1 ประจำปีการศึกษา 2568 ให้นักเรียนแต่งกายชุดนักเรียนมาโรงเรียนตามปกติ',
    color: 'bg-primary',
    monthShort: 'พ.ค.',
    dayStr: '15',
  },
  {
    dateStr: formatCurrentDate(22),
    title: 'ประชุมผู้ปกครอง',
    time: '08:30 - 12:00',
    location: 'หอประชุมโรงเรียน',
    description:
      'ขอเรียนเชิญผู้ปกครองนักเรียนทุกระดับชั้นเข้าร่วมประชุมผู้ปกครองเพื่อรับฟังนโยบายและแนวทางการจัดการเรียนการสอน',
    color: 'bg-orange-6',
    monthShort: 'พ.ค.',
    dayStr: '22',
  },
];

const selectedDate = ref('');

// Extract unique dates for QDate events prop
const eventsArray = computed(() => {
  const dates = allEvents.map((e) => e.dateStr);
  return [...new Set(dates)];
});

const formattedSelectedDate = computed(() => {
  if (!selectedDate.value) return '';
  // Convert YYYY/MM/DD to Thai readable
  const [y, m, d] = selectedDate.value.split('/');
  if (!y || !m || !d) return '';
  return `${parseInt(d)}/${parseInt(m)}/${parseInt(y) + 543}`;
});

const filteredEvents = computed(() => {
  if (!selectedDate.value) {
    // Sort by date ascending
    return [...allEvents].sort((a, b) => a.dateStr.localeCompare(b.dateStr));
  }
  return allEvents.filter((e) => e.dateStr === selectedDate.value);
});
</script>

<style scoped>
.h-100 {
  height: 100%;
}
.flex-grow-1 {
  flex-grow: 1;
}
.hover-bg {
  transition: background-color 0.2s;
}
.hover-bg:hover {
  background-color: #f9f9f9;
}
</style>
