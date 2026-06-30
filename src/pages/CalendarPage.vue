<template>
  <q-page class="bg-grey-2 q-pa-md">
    <!-- PAGE HEADER -->
    <q-card flat class="q-mb-lg bg-dark text-white shadow-3" style="border-radius: 12px; overflow: hidden;">
      <q-img src="/hero1.png" style="height: 160px; opacity: 0.6;" />
      <div class="absolute-full flex flex-center column" style="background: rgba(0,0,0,0.3)">
        <div class="text-h3 text-weight-bold flex items-center">
          <q-icon name="event_note" class="q-mr-md" size="xl" /> ปฏิทินกิจกรรม
        </div>
        <div class="text-subtitle1 q-mt-sm">โรงเรียนบ้านท่าซุง ประจำปีการศึกษา 2568</div>
      </div>
    </q-card>

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

        <!-- LEGEND -->
        <q-card flat bordered class="bg-white q-mt-md" style="border-radius: 4px">
          <div class="bg-grey-2 q-pa-sm text-weight-bold text-dark text-center" style="border-bottom: 1px solid #ddd">
            คำอธิบายสัญลักษณ์สี
          </div>
          <q-list dense class="q-pa-sm">
            <q-item>
              <q-item-section avatar style="min-width: 30px">
                <q-icon name="circle" color="green-8" size="sm" />
              </q-item-section>
              <q-item-section class="text-body2 text-grey-9">วันหยุดราชการ / นักขัตฤกษ์</q-item-section>
            </q-item>
            <q-item>
              <q-item-section avatar style="min-width: 30px">
                <q-icon name="circle" color="primary" size="sm" />
              </q-item-section>
              <q-item-section class="text-body2 text-grey-9">กิจกรรมวิชาการ / เปิดภาคเรียน</q-item-section>
            </q-item>
            <q-item>
              <q-item-section avatar style="min-width: 30px">
                <q-icon name="circle" color="orange-6" size="sm" />
              </q-item-section>
              <q-item-section class="text-body2 text-grey-9">กิจกรรมทั่วไป / ประชุม</q-item-section>
            </q-item>
          </q-list>
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
            <div class="q-pa-md">
              <template v-if="filteredEvents.length > 0">
                <q-timeline color="primary">
                  <q-timeline-entry
                    v-for="(ev, i) in filteredEvents"
                    :key="i"
                    :title="ev.title"
                    :subtitle="`${ev.dayStr} ${ev.monthShort} | ${ev.time}`"
                    :color="ev.color.replace('bg-', '')"
                    icon="event"
                  >
                    <div class="text-body1 q-mt-sm" style="line-height: 1.6;">
                      {{ ev.description }}
                    </div>
                    <div class="q-mt-sm flex items-center text-primary text-weight-bold">
                      <q-icon name="place" class="q-mr-xs" size="sm" /> 
                      {{ ev.location }}
                    </div>
                  </q-timeline-entry>
                </q-timeline>
              </template>
              <template v-else>
                <div class="text-center q-pa-xl text-grey-6">
                  <q-icon name="event_busy" size="80px" class="q-mb-md opacity-30" />
                  <div class="text-h5 text-weight-bold q-mb-sm">ไม่มีกิจกรรมในวันที่เลือก</div>
                  <div class="text-body1">กรุณาเลือกวันอื่นบนปฏิทิน หรือกดดูกิจกรรมทั้งหมด</div>
                </div>
              </template>
            </div>
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
