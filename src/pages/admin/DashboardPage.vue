<template>
  <q-page class="bg-background" :class="$q.screen.lt.md ? 'q-pa-md' : 'q-pa-xl'">
    <!-- Welcome Banner -->
    <div
      class="bg-primary text-white rounded-xl q-mb-xl relative-position overflow-hidden shadow-2"
      :class="$q.screen.lt.md ? 'q-pa-lg' : 'q-pa-xl'"
      style="border-radius: 16px;"
    >
      <div class="row items-center justify-between relative-position z-max">
        <div class="col-12 col-md-8">
          <div class="text-h4 text-weight-bold q-mb-sm font-headline">
            สวัสดีคุณครูแอดมิน ยินดีต้อนรับสู่ระบบจัดการหลังบ้าน
          </div>
          <div class="text-body1" style="opacity: 0.9">
            ดูแลและบริหารจัดการข้อมูลโรงเรียนบ้านท่าซุงให้ทันสมัย
            เข้าถึงง่ายสำหรับนักเรียนและผู้ปกครองทุกคน
          </div>
        </div>
        <div class="col-12 col-md-4 text-right q-mt-md q-mt-md-none flex justify-end q-gutter-sm" :class="{ 'justify-start': $q.screen.lt.md }">
          <q-btn
            color="orange-8"
            text-color="white"
            icon="edit_note"
            label="เขียนข่าวใหม่"
            no-caps
            class="text-weight-bold rounded-borders"
            style="border-radius: 8px"
            to="/admin/news"
          />
          <q-btn
            outline
            color="white"
            icon="add_circle"
            label="เพิ่มกิจกรรม"
            no-caps
            class="text-weight-bold rounded-borders"
            style="border-radius: 8px"
            to="/admin/events"
          />
        </div>
      </div>
      <!-- Background Graphic Element -->
      <q-icon
        name="school"
        size="250px"
        class="absolute"
        style="top: -50px; right: -50px; opacity: 0.1; transform: rotate(-15deg)"
      />
    </div>

    <!-- Stat Cards -->
    <div :class="['row', $q.screen.lt.md ? 'q-col-gutter-md' : 'q-col-gutter-xl', 'q-mb-xl']">
      <!-- Visitor Today -->
      <div class="col-12 col-sm-6 col-md-3">
        <q-card class="bg-white border-outline-variant rounded-xl overflow-hidden transition-all no-shadow-border" style="border: 1px solid #c1c9bb; border-radius: 16px; box-shadow: none;">
          <q-card-section class="q-pa-lg">
            <div class="row items-center justify-between q-mb-sm">
              <q-avatar size="48px" color="blue-1" text-color="primary" icon="visibility" />
              <q-chip
                color="green-1"
                text-color="green-8"
                icon="trending_up"
                size="sm"
                class="text-weight-bold"
                >+12%</q-chip
              >
            </div>
            <div class="text-subtitle2 text-grey-7 font-label">ผู้เข้าชมวันนี้</div>
            <div class="text-h4 text-weight-bold text-primary">142</div>
          </q-card-section>
        </q-card>
      </div>

      <!-- Total News -->
      <div class="col-12 col-sm-6 col-md-3">
        <q-card class="bg-white border-outline-variant rounded-xl overflow-hidden transition-all no-shadow-border" style="border: 1px solid #c1c9bb; border-radius: 16px; box-shadow: none;">
          <q-card-section class="q-pa-lg">
            <div class="row items-center justify-between q-mb-sm">
              <q-avatar size="48px" color="blue-1" text-color="primary" icon="newspaper" />
            </div>
            <div class="text-subtitle2 text-grey-7 font-label">ข่าวสารทั้งหมด</div>
            <div class="text-h4 text-weight-bold text-primary">
              {{ totalNews }} <span class="text-body2 text-grey-6 text-weight-regular">รายการ</span>
            </div>
          </q-card-section>
        </q-card>
      </div>

      <!-- Upcoming Events -->
      <div class="col-12 col-sm-6 col-md-3">
        <q-card class="bg-white border-outline-variant rounded-xl overflow-hidden transition-all no-shadow-border" style="border: 1px solid #c1c9bb; border-radius: 16px; box-shadow: none;">
          <q-card-section class="q-pa-lg">
            <div class="row items-center justify-between q-mb-sm">
              <q-avatar size="48px" color="blue-1" text-color="primary" icon="event" />
            </div>
            <div class="text-subtitle2 text-grey-7 font-label">กิจกรรมที่กำลังมาถึง</div>
            <div class="text-h4 text-weight-bold text-primary">
              {{ totalEvents }}
              <span class="text-body2 text-grey-6 text-weight-regular">รายการ</span>
            </div>
          </q-card-section>
        </q-card>
      </div>

      <!-- Downloads -->
      <div class="col-12 col-sm-6 col-md-3">
        <q-card class="bg-white border-outline-variant rounded-xl overflow-hidden transition-all no-shadow-border" style="border: 1px solid #c1c9bb; border-radius: 16px; box-shadow: none;">
          <q-card-section class="q-pa-lg">
            <div class="row items-center justify-between q-mb-sm">
              <q-avatar size="48px" color="blue-1" text-color="primary" icon="download" />
            </div>
            <div class="text-subtitle2 text-grey-7 font-label">ยอดเข้าชมข่าวทั้งหมด</div>
            <div class="text-h4 text-weight-bold text-primary">{{ totalViews }}</div>
          </q-card-section>
        </q-card>
      </div>
    </div>

    <!-- Bottom Layout: Table and Quick Actions -->
    <div :class="['row', $q.screen.lt.md ? 'q-col-gutter-md' : 'q-col-gutter-xl']">
      <!-- Recent Activity Table -->
      <div class="col-12 col-md-8">
        <q-card class="bg-white border-outline-variant rounded-xl overflow-hidden transition-all no-shadow-border" style="border: 1px solid #c1c9bb; border-radius: 16px; box-shadow: none;">
          <q-card-section class="row items-center justify-between border-bottom q-pa-lg">
            <div class="text-h6 text-weight-bold text-primary">การอัปเดตล่าสุด</div>
            <q-btn flat color="primary" label="ดูทั้งหมด" no-caps />
          </q-card-section>

          <div class="scroll">
            <q-markup-table flat separator="horizontal" class="text-left" style="min-width: 500px;">
              <thead class="bg-grey-1 text-grey-8 font-label">
              <tr>
                <th class="text-left text-weight-bold">หัวข้อ / รายการ</th>
                <th class="text-left text-weight-bold">หมวดหมู่</th>
                <th class="text-left text-weight-bold">ผู้ดูแล</th>
                <th class="text-right text-weight-bold">วันที่</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div class="row items-center q-gutter-sm">
                    <q-icon name="edit_square" color="primary" size="sm" />
                    <span class="text-weight-medium"
                      >อัปเดตข่าว: เปิดรับสมัครนักเรียนใหม่ ปีการศึกษา 2569</span
                    >
                  </div>
                </td>
                <td>
                  <q-chip size="sm" color="blue-1" text-color="primary" class="text-weight-bold"
                    >ข่าวสาร</q-chip
                  >
                </td>
                <td class="text-grey-7">Super Admin</td>
                <td class="text-right text-grey-7">2 ชั่วโมงที่แล้ว</td>
              </tr>
              <tr>
                <td>
                  <div class="row items-center q-gutter-sm">
                    <q-icon name="add_circle" color="orange-8" size="sm" />
                    <span class="text-weight-medium">เพิ่มกิจกรรม: วันไหว้ครู</span>
                  </div>
                </td>
                <td>
                  <q-chip size="sm" color="orange-1" text-color="orange-8" class="text-weight-bold"
                    >กิจกรรม</q-chip
                  >
                </td>
                <td class="text-grey-7">Admin Somsak</td>
                <td class="text-right text-grey-7">เมื่อวานนี้</td>
              </tr>
              <tr>
                <td>
                  <div class="row items-center q-gutter-sm">
                    <q-icon name="image" color="purple-6" size="sm" />
                    <span class="text-weight-medium">อัปโหลดอัลบั้ม: กีฬาสีประจำปี</span>
                  </div>
                </td>
                <td>
                  <q-chip size="sm" color="purple-1" text-color="purple-6" class="text-weight-bold"
                    >รูปภาพ</q-chip
                  >
                </td>
                <td class="text-grey-7">Super Admin</td>
                <td class="text-right text-grey-7">12 ม.ค. 2569</td>
              </tr>
              <tr>
                <td>
                  <div class="row items-center q-gutter-sm">
                    <q-icon name="campaign" color="primary" size="sm" />
                    <span class="text-weight-medium">ประกาศด่วน: แจ้งหยุดเรียนกรณีพิเศษ</span>
                  </div>
                </td>
                <td>
                  <q-chip size="sm" color="blue-1" text-color="primary" class="text-weight-bold"
                    >ประกาศด่วน</q-chip
                  >
                </td>
                <td class="text-grey-7">Super Admin</td>
                <td class="text-right text-grey-7">08 ม.ค. 2569</td>
              </tr>
            </tbody>
          </q-markup-table>
          </div>
        </q-card>
      </div>

      <!-- Quick Actions / System Health -->
      <div class="col-12 col-md-4">
        <q-card class="bg-white border-outline-variant rounded-xl overflow-hidden transition-all q-mb-md no-shadow-border" style="border: 1px solid #c1c9bb; border-radius: 16px; box-shadow: none;">
          <q-card-section class="q-pa-lg">
            <div class="text-h6 text-weight-bold text-primary q-mb-md">เครื่องมือด่วน</div>
            <q-list class="q-gutter-sm">
              <q-item clickable v-ripple class="bg-grey-1 rounded-borders item-hover">
                <q-item-section avatar>
                  <q-avatar rounded color="white" text-color="primary" icon="add_photo_alternate" />
                </q-item-section>
                <q-item-section class="text-weight-bold">อัปโหลดภาพกิจกรรม</q-item-section>
                <q-item-section side>
                  <q-icon name="chevron_right" />
                </q-item-section>
              </q-item>

              <q-item clickable v-ripple class="bg-grey-1 rounded-borders item-hover">
                <q-item-section avatar>
                  <q-avatar rounded color="white" text-color="primary" icon="description" />
                </q-item-section>
                <q-item-section class="text-weight-bold">เพิ่มเอกสารดาวน์โหลด</q-item-section>
                <q-item-section side>
                  <q-icon name="chevron_right" />
                </q-item-section>
              </q-item>

              <q-item
                clickable
                v-ripple
                class="bg-grey-1 rounded-borders item-hover"
                to="/admin/staff"
              >
                <q-item-section avatar>
                  <q-avatar rounded color="white" text-color="primary" icon="person_add" />
                </q-item-section>
                <q-item-section class="text-weight-bold">เพิ่มรายชื่อบุคลากร</q-item-section>
                <q-item-section side>
                  <q-icon name="chevron_right" />
                </q-item-section>
              </q-item>
            </q-list>
          </q-card-section>
        </q-card>
        <q-card class="bg-primary text-white rounded-xl overflow-hidden shadow-2" style="border-radius: 16px; margin-top: 24px;">
          <q-card-section class="q-pa-lg">
            <div class="row items-center justify-between q-mb-md">
              <div class="text-subtitle1 text-weight-bold font-label">
                สถานะระบบ (System Status)
              </div>
              <div class="row items-center q-gutter-xs">
                <q-spinner-puff color="green-4" size="1.2em" />
                <span class="text-weight-medium">Live</span>
              </div>
            </div>

            <div class="text-caption q-mb-xs row justify-between">
              <span>การใช้งานพื้นที่จัดเก็บข้อมูล (Storage)</span>
              <span>72%</span>
            </div>
            <q-linear-progress
              :value="0.72"
              color="orange-8"
              track-color="white"
              class="q-mb-md rounded-borders"
              size="8px"
            />

            <div class="text-caption text-italic" style="opacity: 0.7">
              * ทำการสำรองข้อมูลล่าสุดเมื่อ 03:00 น. วันนี้
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useNewsStore } from '@/stores/news';
import { useEventsStore } from '@/stores/events';

const newsStore = useNewsStore();
const eventsStore = useEventsStore();

const totalNews = computed(() => newsStore.newsList.length);
const totalEvents = computed(() => eventsStore.eventsList.length);
const totalViews = computed(() => {
  return newsStore.newsList.reduce((acc, curr) => acc + (curr.views || 0), 0);
});
</script>

<style scoped>
.rounded-borders {
  border-radius: 12px;
}
.border-bottom {
  border-bottom: 1px solid #e0e0e0;
}
.no-shadow-border {
  border: 1px solid #e0e0e0;
}
.hover-shadow:hover {
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transform: translateY(-2px);
}
.transition-shadow {
  transition: all 0.3s ease;
}
.item-hover:hover {
  background-color: #e3f2fd !important;
}
.font-headline {
  font-family: 'Be Vietnam Pro', sans-serif;
}
.font-label {
  letter-spacing: 0.5px;
}
</style>
