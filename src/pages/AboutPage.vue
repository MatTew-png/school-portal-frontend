<template>
  <q-page class="bg-grey-2 q-pa-sm">
    <!-- HERO SECTION (Dense) -->
    <section
      class="bg-primary text-white text-center q-pa-md relative-position q-mb-sm"
      style="border-radius: 4px"
    >
      <div class="text-h5 text-weight-bold q-mb-xs">ข้อมูลองค์กร</div>
      <div class="text-body2 text-grey-3">โรงเรียนบ้านท่าซุง - เรียนดี วินัยเด่น เน้นคุณธรรม</div>
    </section>

    <!-- TABS NAVIGATION (Dense) -->
    <div class="bg-white shadow-1 q-mb-sm sticky-tabs" style="z-index: 10; border-radius: 4px">
      <q-tabs
        v-model="activeTab"
        dense
        class="text-grey-9 text-body2"
        active-color="primary"
        indicator-color="primary"
        align="justify"
        narrow-indicator
      >
        <q-tab name="history" icon="history_edu" label="ประวัติ & สัญลักษณ์" />
        <q-tab name="chart" icon="account_tree" label="โครงสร้างบริหาร" />
        <q-tab name="teachers" icon="groups" label="ทำเนียบครู" />
      </q-tabs>
    </div>

    <!-- MAIN CONTENT AREA -->
    <q-card flat bordered class="bg-white" style="border-radius: 4px">
      <q-tab-panels v-model="activeTab" animated class="bg-transparent">
        <!-- ============================== -->
        <!-- TAB 1: HISTORY & SYMBOLS       -->
        <!-- ============================== -->
        <q-tab-panel name="history" class="q-pa-sm">
          <div class="row q-col-gutter-sm">
            <!-- Symbols Card -->
            <div class="col-12 col-md-4">
              <q-card flat bordered class="h-100 bg-grey-1" style="border-radius: 4px">
                <div class="bg-primary text-white text-center q-pa-sm text-weight-bold">
                  สัญลักษณ์ประจำโรงเรียน
                </div>
                <div class="q-pa-sm text-center">
                  <q-avatar
                    size="100px"
                    class="q-mb-sm shadow-1 bg-white"
                    style="border: 1px solid #ddd"
                  >
                    <img src="/logo.png" />
                  </q-avatar>
                  <div class="text-body1 text-weight-bold text-primary q-mb-xs">
                    {{ schoolData.symbolName }}
                  </div>
                  <p class="text-caption text-grey-8" style="line-height: 1.4">
                    {{ schoolData.symbolDesc }}
                  </p>

                  <q-separator class="q-my-sm" />

                  <div class="row q-col-gutter-sm text-left">
                    <div class="col-6">
                      <div class="text-caption text-grey-7">สีประจำโรงเรียน</div>
                      <div class="text-body2 text-weight-bold">{{ schoolData.colors }}</div>
                      <div class="row q-mt-xs q-gutter-xs">
                        <div
                          style="width: 16px; height: 16px; background: #1b5e20; border-radius: 2px"
                        ></div>
                        <div
                          style="width: 16px; height: 16px; background: #ffc107; border-radius: 2px"
                        ></div>
                      </div>
                    </div>
                    <div class="col-6">
                      <div class="text-caption text-grey-7">ดอกไม้ประจำโรงเรียน</div>
                      <div class="text-body2 text-weight-bold">{{ schoolData.flower }}</div>
                    </div>
                  </div>
                </div>
              </q-card>
            </div>

            <!-- History Timeline -->
            <div class="col-12 col-md-8">
              <q-card flat bordered class="h-100" style="border-radius: 4px">
                <div class="bg-secondary text-white q-pa-sm text-weight-bold">
                  <q-icon name="menu_book" class="q-mr-xs" /> ประวัติความเป็นมา
                </div>
                <div class="q-pa-sm">
                  <q-timeline color="secondary" layout="dense">
                    <q-timeline-entry
                      v-for="(event, index) in historyEvents"
                      :key="index"
                      :title="event.title"
                      :subtitle="event.year"
                      class="text-body2"
                    >
                      <div class="text-caption text-grey-9">
                        {{ event.description }}
                      </div>
                    </q-timeline-entry>
                  </q-timeline>
                </div>
              </q-card>
            </div>
          </div>
        </q-tab-panel>

        <!-- ============================== -->
        <!-- TAB 2: ORGANIZATION CHART      -->
        <!-- ============================== -->
        <q-tab-panel name="chart" class="q-pa-sm">
          <div
            class="bg-primary text-white text-center q-pa-sm text-weight-bold q-mb-md rounded-borders"
          >
            ผังโครงสร้างการบริหารงาน ประจำปีการศึกษา 2568
          </div>

          <!-- Director -->
          <div class="row justify-center q-mb-md relative-position">
            <div class="col-12 col-sm-6 col-md-4 text-center">
              <q-card
                flat
                bordered
                class="q-pa-sm bg-grey-1 hover-bg"
                style="border-radius: 4px; border-top: 3px solid var(--q-primary)"
              >
                <q-avatar size="90px" class="shadow-1 q-mb-xs bg-white">
                  <img :src="orgChart.director.image" />
                </q-avatar>
                <div class="text-body1 text-weight-bold">{{ orgChart.director.name }}</div>
                <div class="text-caption text-primary text-weight-bold">
                  {{ orgChart.director.position }}
                </div>
              </q-card>
            </div>
          </div>

          <div class="row justify-center hidden">
            <div
              style="
                width: 2px;
                height: 20px;
                background-color: #ccc;
                margin-top: -20px;
                margin-bottom: 10px;
              "
            ></div>
          </div>

          <!-- Vice Directors / Heads -->
          <div class="row q-col-gutter-sm justify-center">
            <div
              class="col-6 col-sm-4 col-md-3 text-center"
              v-for="(vice, index) in orgChart.viceDirectors"
              :key="index"
            >
              <q-card
                flat
                bordered
                class="q-pa-sm hover-bg h-100"
                style="border-radius: 4px; border-top: 3px solid var(--q-secondary)"
              >
                <q-avatar size="70px" class="shadow-1 q-mb-xs bg-white">
                  <img :src="vice.image" />
                </q-avatar>
                <div class="text-body2 text-weight-bold ellipsis">{{ vice.name }}</div>
                <div class="text-caption text-secondary ellipsis">{{ vice.position }}</div>
              </q-card>
            </div>
          </div>
        </q-tab-panel>

        <!-- ============================== -->
        <!-- TAB 3: TEACHERS DIRECTORY      -->
        <!-- ============================== -->
        <q-tab-panel name="teachers" class="q-pa-sm">
          <!-- Categorized Teachers -->
          <div v-for="(category, catIndex) in teacherCategories" :key="catIndex" class="q-mb-md">
            <div
              class="bg-secondary text-white q-pa-xs q-px-sm text-weight-bold text-body2 q-mb-sm"
              style="border-radius: 4px"
            >
              <q-icon name="school" class="q-mr-xs" size="xs" />
              {{ category.department }}
            </div>

            <div class="row q-col-gutter-sm">
              <div
                class="col-6 col-sm-4 col-md-3 col-lg-2"
                v-for="(teacher, tIndex) in category.members"
                :key="tIndex"
              >
                <q-card
                  flat
                  bordered
                  class="text-center q-pa-sm hover-bg h-100"
                  style="border-radius: 4px"
                >
                  <q-avatar
                    size="80px"
                    class="q-mb-xs shadow-1 bg-grey-3"
                    style="border: 2px solid white"
                  >
                    <img :src="teacher.image" />
                  </q-avatar>
                  <div class="text-body2 text-weight-bold ellipsis" :title="teacher.name">
                    {{ teacher.name }}
                  </div>
                  <div class="text-caption text-grey-8 ellipsis" :title="teacher.position">
                    {{ teacher.position }}
                  </div>
                </q-card>
              </div>
            </div>
          </div>
        </q-tab-panel>
      </q-tab-panels>
    </q-card>
  </q-page>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

// ==========================================
// STATE & VARIABLES (Ready for Backend API)
// ==========================================
const activeTab = ref('history');

// Watch for route query changes to update tab
watch(
  () => route.query.tab,
  (newTab) => {
    if (newTab && typeof newTab === 'string') {
      activeTab.value = newTab;
    }
  },
  { immediate: true },
);

// Watch for tab changes to update route query
watch(activeTab, (newTab) => {
  router.replace({ query: { ...route.query, tab: newTab } }).catch(() => {});
});

// --- Mock Data: School Information ---
const schoolData = ref({
  symbolName: 'คบเพลิงและหนังสือ',
  symbolDesc:
    'คบเพลิงหมายถึงแสงสว่างแห่งปัญญา หนังสือหมายถึงแหล่งรวมความรู้ การศึกษาคือแสงสว่างนำทางชีวิต',
  colors: 'เขียว - เหลือง',
  flower: 'ดอกราชพฤกษ์',
});

// --- Mock Data: History Timeline ---
const historyEvents = ref([
  {
    year: 'พ.ศ. 2520',
    title: 'ริเริ่มก่อตั้งโรงเรียน',
    description:
      'โรงเรียนบ้านท่าซุงเริ่มก่อตั้งขึ้นจากความร่วมมือของชาวชุมชนลาดกระทิง อำเภอสนามชัยเขต และหน่วยงานราชการ',
  },
  {
    year: 'พ.ศ. 2525',
    title: 'ก่อสร้างอาคารเรียนหลังแรก',
    description:
      'ได้รับงบประมาณสนับสนุนในการก่อสร้างอาคารเรียนไม้ 2 ชั้น และเปิดทำการสอนอย่างเป็นทางการ',
  },
  {
    year: 'พ.ศ. 2540',
    title: 'ขยายโอกาสทางการศึกษา',
    description: 'เริ่มเปิดทำการสอนในระดับชั้นประถมศึกษาตอนปลาย (ป.4 - ป.6) อย่างเต็มรูปแบบ',
  },
  {
    year: 'พ.ศ. 2555',
    title: 'โรงเรียนส่งเสริมสุขภาพระดับทอง',
    description: 'ได้รับรางวัลจากกรมอนามัย กระทรวงสาธารณสุข',
  },
  {
    year: 'พ.ศ. 2565 - ปัจจุบัน',
    title: 'ก้าวสู่การศึกษาแห่งศตวรรษที่ 21',
    description: 'มุ่งเน้นเทคโนโลยีในการจัดการเรียนการสอน พัฒนาสภาพแวดล้อมให้ทันสมัย',
  },
]);

// --- Mock Data: Organization Chart ---
const orgChart = ref({
  director: {
    name: 'นายสมศักดิ์ รักการศึกษา',
    position: 'ผู้อำนวยการสถานศึกษา',
    image: 'https://api.dicebear.com/7.x/initials/svg?seed=สมศักดิ์&backgroundColor=1976d2',
  },
  viceDirectors: [
    {
      name: 'นางวันดี บริหารงานดี',
      position: 'รองฯ วิชาการ',
      image: 'https://api.dicebear.com/7.x/initials/svg?seed=วันดี&backgroundColor=26a69a',
    },
    {
      name: 'นายวีระ จัดการเยี่ยม',
      position: 'รองฯ บริหารทั่วไป',
      image: 'https://api.dicebear.com/7.x/initials/svg?seed=วีระ&backgroundColor=26a69a',
    },
    {
      name: 'นางสาวสุดใจ ดูแลดี',
      position: 'รองฯ บุคคล',
      image: 'https://api.dicebear.com/7.x/initials/svg?seed=สุดใจ&backgroundColor=26a69a',
    },
    {
      name: 'นายมั่งคั่ง โปร่งใส',
      position: 'รองฯ งบประมาณ',
      image: 'https://api.dicebear.com/7.x/initials/svg?seed=มั่งคั่ง&backgroundColor=26a69a',
    },
  ],
});

// --- Mock Data: Teachers Directory ---
const teacherCategories = ref([
  {
    department: 'สายชั้นอนุบาล',
    members: [
      {
        name: 'นางกมลวรรณ ใจดี',
        position: 'ครู อ.1',
        image: 'https://api.dicebear.com/7.x/initials/svg?seed=กมลวรรณ&backgroundColor=4caf50',
      },
      {
        name: 'น.ส.สุนิสา รักษ์เด็ก',
        position: 'ครู อ.2',
        image: 'https://api.dicebear.com/7.x/initials/svg?seed=สุนิสา&backgroundColor=4caf50',
      },
      {
        name: 'นางปราณี มีเมตตา',
        position: 'ครู อ.3',
        image: 'https://api.dicebear.com/7.x/initials/svg?seed=ปราณี&backgroundColor=4caf50',
      },
    ],
  },
  {
    department: 'สายชั้นประถมศึกษาปีที่ 1-3',
    members: [
      {
        name: 'นางสมพร ประเสริฐ',
        position: 'ครู ป.1',
        image: 'https://api.dicebear.com/7.x/initials/svg?seed=สมพร&backgroundColor=ffb300',
      },
      {
        name: 'นายวิชัย แสงทอง',
        position: 'ครู ป.2',
        image: 'https://api.dicebear.com/7.x/initials/svg?seed=วิชัย&backgroundColor=ffb300',
      },
      {
        name: 'น.ส.วิมล ใฝ่รู้',
        position: 'ครู ป.3',
        image: 'https://api.dicebear.com/7.x/initials/svg?seed=วิมล&backgroundColor=ffb300',
      },
    ],
  },
  {
    department: 'สายชั้นประถมศึกษาปีที่ 4-6',
    members: [
      {
        name: 'นายสมชาย ชาญชัย',
        position: 'ครู ป.4',
        image: 'https://api.dicebear.com/7.x/initials/svg?seed=สมชาย&backgroundColor=1976d2',
      },
      {
        name: 'นางวิไลวรรณ พลเยี่ยม',
        position: 'ครู ป.5',
        image: 'https://api.dicebear.com/7.x/initials/svg?seed=วิไลวรรณ&backgroundColor=1976d2',
      },
      {
        name: 'นายธนกร เก่งกาจ',
        position: 'ครู ป.6',
        image: 'https://api.dicebear.com/7.x/initials/svg?seed=ธนกร&backgroundColor=1976d2',
      },
    ],
  },
  {
    department: 'กลุ่มวิชาพิเศษ',
    members: [
      {
        name: 'นายพละ แข็งแรง',
        position: 'ครูพละ',
        image: 'https://api.dicebear.com/7.x/initials/svg?seed=พละ&backgroundColor=e91e63',
      },
      {
        name: 'น.ส.ศิลป์ สวยงาม',
        position: 'ครูศิลปะ',
        image: 'https://api.dicebear.com/7.x/initials/svg?seed=ศิลป์&backgroundColor=e91e63',
      },
      {
        name: 'จอห์น สมิธ',
        position: 'ครูอังกฤษ',
        image: 'https://api.dicebear.com/7.x/initials/svg?seed=John&backgroundColor=e91e63',
      },
    ],
  },
]);
</script>

<style scoped>
.sticky-tabs {
  position: sticky;
  top: 0px;
}
.hover-bg {
  transition: background-color 0.2s;
}
.hover-bg:hover {
  background-color: #f0f0f0;
}
.h-100 {
  height: 100%;
}
</style>
