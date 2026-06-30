<template>
  <q-page class="bg-grey-1 q-pb-xl">
    <!-- HERO SECTION -->
    <section class="bg-primary text-white text-center q-py-xl relative-position">
      <div class="text-h3 text-weight-bold q-mb-md animate-fade-in-up">ข้อมูลองค์กร</div>
      <div class="text-subtitle1 text-grey-3 animate-fade-in-up delay-1">
        โรงเรียนบ้านท่าซุง - เรียนดี วินัยเด่น เน้นคุณธรรม
      </div>
    </section>

    <!-- TABS NAVIGATION -->
    <div class="bg-white shadow-2 q-mb-lg sticky-tabs" style="z-index: 10;">
      <q-tabs
        v-model="activeTab"
        dense
        class="text-grey-8"
        active-color="primary"
        indicator-color="primary"
        align="center"
        narrow-indicator
      >
        <q-tab name="history" icon="history_edu" label="ประวัติ & สัญลักษณ์" />
        <q-tab name="chart" icon="account_tree" label="โครงสร้างบริหาร" />
        <q-tab name="teachers" icon="groups" label="ทำเนียบครู" />
      </q-tabs>
    </div>

    <div class="q-px-md q-px-md-xl">
      <q-tab-panels v-model="activeTab" animated class="bg-transparent">
        
        <!-- ============================== -->
        <!-- TAB 1: HISTORY & SYMBOLS       -->
        <!-- ============================== -->
        <q-tab-panel name="history">
          <div class="row q-col-gutter-lg justify-center">
            
            <!-- Symbols Card -->
            <div class="col-12 col-md-4">
              <q-card flat bordered class="h-100" style="border-radius: 12px;">
                <q-card-section class="bg-primary text-white text-center">
                  <div class="text-h6 text-weight-bold">สัญลักษณ์ประจำโรงเรียน</div>
                </q-card-section>
                <q-card-section class="q-pa-lg text-center">
                  <q-avatar size="150px" class="q-mb-lg shadow-2" style="border: 2px solid #eee;">
                    <img src="/logo.png" />
                  </q-avatar>
                  <div class="text-h6 text-primary q-mb-sm">{{ schoolData.symbolName }}</div>
                  <p class="text-grey-8">{{ schoolData.symbolDesc }}</p>
                  
                  <q-separator class="q-my-md" />
                  
                  <div class="row q-col-gutter-md text-left">
                    <div class="col-6">
                      <div class="text-caption text-grey">สีประจำโรงเรียน</div>
                      <div class="text-body2 text-weight-bold">{{ schoolData.colors }}</div>
                      <div class="row q-mt-xs q-gutter-xs">
                        <div style="width: 20px; height: 20px; background: #1976d2; border-radius: 4px;"></div>
                        <div style="width: 20px; height: 20px; background: #ffeb3b; border-radius: 4px;"></div>
                      </div>
                    </div>
                    <div class="col-6">
                      <div class="text-caption text-grey">ดอกไม้ประจำโรงเรียน</div>
                      <div class="text-body2 text-weight-bold">{{ schoolData.flower }}</div>
                    </div>
                  </div>
                </q-card-section>
              </q-card>
            </div>

            <!-- History Timeline -->
            <div class="col-12 col-md-8">
              <q-card flat bordered style="border-radius: 12px;">
                <q-card-section>
                  <div class="text-h5 text-primary text-weight-bold q-mb-lg">
                    <q-icon name="menu_book" class="q-mr-sm" />ประวัติความเป็นมา
                  </div>
                  <q-timeline color="secondary">
                    <q-timeline-entry
                      v-for="(event, index) in historyEvents"
                      :key="index"
                      :title="event.title"
                      :subtitle="event.year"
                    >
                      <div>
                        {{ event.description }}
                      </div>
                    </q-timeline-entry>
                  </q-timeline>
                </q-card-section>
              </q-card>
            </div>
            
          </div>
        </q-tab-panel>

        <!-- ============================== -->
        <!-- TAB 2: ORGANIZATION CHART      -->
        <!-- ============================== -->
        <q-tab-panel name="chart">
          <div class="text-center q-mb-xl">
            <div class="text-h4 text-primary text-weight-bold q-mb-md">โครงสร้างการบริหารงาน</div>
            <div class="text-subtitle1 text-grey-8">คณะผู้บริหารโรงเรียนบ้านท่าซุง ประจำปีการศึกษา 2568</div>
          </div>

          <!-- Director -->
          <div class="row justify-center q-mb-xl relative-position">
            <div class="col-12 col-sm-6 col-md-4 text-center">
              <q-card flat bordered class="q-pa-md shadow-2 hover-card" style="border-radius: 16px; border-top: 4px solid var(--q-primary);">
                <q-avatar size="120px" class="shadow-4 q-mb-md">
                  <img :src="orgChart.director.image" />
                </q-avatar>
                <div class="text-h6 text-weight-bold">{{ orgChart.director.name }}</div>
                <div class="text-subtitle2 text-primary">{{ orgChart.director.position }}</div>
              </q-card>
            </div>
          </div>

          <div class="row justify-center">
            <div style="width: 2px; height: 40px; background-color: #ccc; margin-top: -40px; margin-bottom: 20px;"></div>
          </div>

          <!-- Vice Directors / Heads -->
          <div class="row q-col-gutter-lg justify-center">
            <div class="col-12 col-sm-6 col-md-3 text-center" v-for="(vice, index) in orgChart.viceDirectors" :key="index">
              <q-card flat bordered class="q-pa-md hover-card" style="border-radius: 12px; border-top: 3px solid var(--q-secondary);">
                <q-avatar size="90px" class="shadow-2 q-mb-md">
                  <img :src="vice.image" />
                </q-avatar>
                <div class="text-body1 text-weight-bold">{{ vice.name }}</div>
                <div class="text-caption text-secondary">{{ vice.position }}</div>
              </q-card>
            </div>
          </div>
        </q-tab-panel>

        <!-- ============================== -->
        <!-- TAB 3: TEACHERS DIRECTORY      -->
        <!-- ============================== -->
        <q-tab-panel name="teachers">
          <div class="text-center q-mb-lg">
            <div class="text-h4 text-primary text-weight-bold q-mb-md">ทำเนียบคุณครูและบุคลากร</div>
          </div>

          <!-- Categorized Teachers -->
          <div v-for="(category, catIndex) in teacherCategories" :key="catIndex" class="q-mb-xl">
            <div class="text-h6 text-weight-bold q-mb-md text-dark text-center">
              <q-icon name="school" color="primary" class="q-mr-sm" size="sm" />
              {{ category.department }}
            </div>
            
            <div class="row q-col-gutter-lg justify-center">
              <div class="col-12 col-sm-6 col-md-4 col-lg-3" v-for="(teacher, tIndex) in category.members" :key="tIndex">
                <q-card flat bordered class="text-center q-pa-lg hover-card h-100" style="border-radius: 16px;">
                  <q-avatar size="160px" class="q-mb-md shadow-3" style="border: 4px solid white;">
                    <img :src="teacher.image" />
                  </q-avatar>
                  <div class="text-h6 text-weight-bold ellipsis" :title="teacher.name">{{ teacher.name }}</div>
                  <div class="text-subtitle1 text-secondary ellipsis" :title="teacher.position">{{ teacher.position }}</div>
                </q-card>
              </div>
            </div>
          </div>
        </q-tab-panel>

      </q-tab-panels>
    </div>
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
  { immediate: true }
);

// Watch for tab changes to update route query
watch(activeTab, (newTab) => {
  router.replace({ query: { ...route.query, tab: newTab } }).catch(() => {});
});

// --- Mock Data: School Information ---
const schoolData = ref({
  symbolName: 'คบเพลิงและหนังสือ',
  symbolDesc: 'คบเพลิงหมายถึงแสงสว่างแห่งปัญญา หนังสือหมายถึงแหล่งรวมความรู้ การศึกษาคือแสงสว่างนำทางชีวิต',
  colors: 'น้ำเงิน - เหลือง',
  flower: 'ดอกราชพฤกษ์'
});

// --- Mock Data: History Timeline ---
const historyEvents = ref([
  {
    year: 'พ.ศ. 2520',
    title: 'ริเริ่มก่อตั้งโรงเรียน',
    description: 'โรงเรียนบ้านท่าซุงเริ่มก่อตั้งขึ้นจากความร่วมมือของชาวชุมชนลาดกระทิง อำเภอสนามชัยเขต และหน่วยงานราชการ เพื่อขยายโอกาสทางการศึกษา'
  },
  {
    year: 'พ.ศ. 2525',
    title: 'ก่อสร้างอาคารเรียนหลังแรก',
    description: 'ได้รับงบประมาณสนับสนุนในการก่อสร้างอาคารเรียนไม้ 2 ชั้น และเปิดทำการสอนอย่างเป็นทางการ'
  },
  {
    year: 'พ.ศ. 2540',
    title: 'ขยายโอกาสทางการศึกษา',
    description: 'เริ่มเปิดทำการสอนในระดับชั้นประถมศึกษาตอนปลาย (ป.4 - ป.6) อย่างเต็มรูปแบบ'
  },
  {
    year: 'พ.ศ. 2555',
    title: 'โรงเรียนส่งเสริมสุขภาพระดับทอง',
    description: 'ได้รับรางวัลโรงเรียนส่งเสริมสุขภาพระดับทอง จากกรมอนามัย กระทรวงสาธารณสุข'
  },
  {
    year: 'พ.ศ. 2565 - ปัจจุบัน',
    title: 'ก้าวสู่การศึกษาแห่งศตวรรษที่ 21',
    description: 'มุ่งเน้นการใช้สื่อเทคโนโลยีในการจัดการเรียนการสอน และพัฒนาสภาพแวดล้อมให้เป็นแหล่งเรียนรู้ที่ทันสมัย'
  }
]);

// --- Mock Data: Organization Chart ---
const orgChart = ref({
  director: {
    name: 'นายสมศักดิ์ รักการศึกษา',
    position: 'ผู้อำนวยการสถานศึกษา',
    image: 'https://api.dicebear.com/7.x/initials/svg?seed=สมศักดิ์&backgroundColor=1976d2'
  },
  viceDirectors: [
    { name: 'นางวันดี บริหารงานดี', position: 'รองฯ ฝ่ายบริหารวิชาการ', image: 'https://api.dicebear.com/7.x/initials/svg?seed=วันดี&backgroundColor=26a69a' },
    { name: 'นายวีระ จัดการเยี่ยม', position: 'รองฯ ฝ่ายบริหารทั่วไป', image: 'https://api.dicebear.com/7.x/initials/svg?seed=วีระ&backgroundColor=26a69a' },
    { name: 'นางสาวสุดใจ ดูแลดี', position: 'รองฯ ฝ่ายบริหารงานบุคคล', image: 'https://api.dicebear.com/7.x/initials/svg?seed=สุดใจ&backgroundColor=26a69a' },
    { name: 'นายมั่งคั่ง โปร่งใส', position: 'รองฯ ฝ่ายงบประมาณ', image: 'https://api.dicebear.com/7.x/initials/svg?seed=มั่งคั่ง&backgroundColor=26a69a' }
  ]
});

// --- Mock Data: Teachers Directory ---
const teacherCategories = ref([
  {
    department: 'สายชั้นอนุบาล',
    members: [
      { name: 'นางกมลวรรณ ใจดี', position: 'ครูประจำชั้น อ.1', image: 'https://api.dicebear.com/7.x/initials/svg?seed=กมลวรรณ&backgroundColor=4caf50' },
      { name: 'นางสาวสุนิสา รักษ์เด็ก', position: 'ครูประจำชั้น อ.2', image: 'https://api.dicebear.com/7.x/initials/svg?seed=สุนิสา&backgroundColor=4caf50' },
      { name: 'นางปราณี มีเมตตา', position: 'ครูประจำชั้น อ.3', image: 'https://api.dicebear.com/7.x/initials/svg?seed=ปราณี&backgroundColor=4caf50' }
    ]
  },
  {
    department: 'สายชั้นประถมศึกษาปีที่ 1-3',
    members: [
      { name: 'นางสมพร ประเสริฐ', position: 'ครูประจำชั้น ป.1/1', image: 'https://api.dicebear.com/7.x/initials/svg?seed=สมพร&backgroundColor=ffb300' },
      { name: 'นายวิชัย แสงทอง', position: 'ครูประจำชั้น ป.2/1', image: 'https://api.dicebear.com/7.x/initials/svg?seed=วิชัย&backgroundColor=ffb300' },
      { name: 'นางสาววิมล ใฝ่รู้', position: 'ครูประจำชั้น ป.3/1', image: 'https://api.dicebear.com/7.x/initials/svg?seed=วิมล&backgroundColor=ffb300' }
    ]
  },
  {
    department: 'สายชั้นประถมศึกษาปีที่ 4-6',
    members: [
      { name: 'นายสมชาย ชาญชัย', position: 'ครูประจำชั้น ป.4/1', image: 'https://api.dicebear.com/7.x/initials/svg?seed=สมชาย&backgroundColor=1976d2' },
      { name: 'นางวิไลวรรณ พลเยี่ยม', position: 'ครูประจำชั้น ป.5/1', image: 'https://api.dicebear.com/7.x/initials/svg?seed=วิไลวรรณ&backgroundColor=1976d2' },
      { name: 'นายธนกร เก่งกาจ', position: 'ครูประจำชั้น ป.6/1', image: 'https://api.dicebear.com/7.x/initials/svg?seed=ธนกร&backgroundColor=1976d2' }
    ]
  },
  {
    department: 'กลุ่มวิชาพิเศษ',
    members: [
      { name: 'นายพละ แข็งแรง', position: 'ครูพละศึกษา', image: 'https://api.dicebear.com/7.x/initials/svg?seed=พละ&backgroundColor=e91e63' },
      { name: 'นางสาวศิลป์ สวยงาม', position: 'ครูศิลปะ', image: 'https://api.dicebear.com/7.x/initials/svg?seed=ศิลป์&backgroundColor=e91e63' },
      { name: 'มิสเตอร์จอห์น สมิธ', position: 'ครูภาษาอังกฤษ', image: 'https://api.dicebear.com/7.x/initials/svg?seed=John&backgroundColor=e91e63' }
    ]
  }
]);

</script>

<style scoped>
.sticky-tabs {
  position: sticky;
  top: 50px; /* Adjust based on your header height */
  background: white;
}
.hover-card {
  transition: transform 0.3s, box-shadow 0.3s;
}
.hover-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 20px rgba(0,0,0,0.1) !important;
}
.h-100 {
  height: 100%;
}
</style>
