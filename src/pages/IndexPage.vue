<template>
  <q-page class="q-pa-sm bg-grey-2">
    <!-- MAIN 3-COLUMN LAYOUT -->
    <div class="row q-col-gutter-sm">
      <!-- ================= LEFT COLUMN ================= -->
      <div class="col-12 col-md-3 col-left">
        <!-- DIRECTOR'S MESSAGE -->
        <q-card flat bordered class="q-mb-sm bg-white" style="border-radius: 4px">
          <div class="bg-primary text-white text-center q-pa-sm text-weight-bold">
            สารจากผู้อำนวยการ
          </div>
          <div class="q-pa-sm text-center">
            <q-avatar size="100px" class="q-mb-sm shadow-1">
              <img
                src="https://api.dicebear.com/7.x/initials/svg?seed=สมศักดิ์&backgroundColor=1976d2"
              />
            </q-avatar>
            <div class="text-body2 text-weight-bold text-primary">นายสมศักดิ์ รักการศึกษา</div>
            <div class="text-caption text-grey-8 q-mb-sm">ผู้อำนวยการโรงเรียนบ้านท่าซุง</div>
            <p class="text-caption text-left text-grey-9 q-mb-none" style="line-height: 1.4">
              "มุ่งมั่นพัฒนาผู้เรียนให้มีความรู้คู่คุณธรรม
              ส่งเสริมทักษะวิชาการและทักษะชีวิตในศตวรรษที่ 21..."
            </p>
            <q-btn
              flat
              dense
              color="primary"
              label="อ่านต่อ"
              size="sm"
              class="full-width q-mt-xs"
              @click="showDirectorMessage = true"
            />
          </div>
        </q-card>

        <!-- DIRECTOR MESSAGE DIALOG -->
        <q-dialog v-model="showDirectorMessage">
          <q-card style="min-width: 350px; max-width: 500px">
            <q-card-section class="bg-primary text-white row items-center">
              <div class="text-h6">สารจากผู้อำนวยการ</div>
              <q-space />
              <q-btn icon="close" flat round dense v-close-popup />
            </q-card-section>

            <q-card-section class="q-pt-md text-center">
              <q-avatar size="100px" class="q-mb-md shadow-1">
                <img src="https://api.dicebear.com/7.x/initials/svg?seed=สมศักดิ์&backgroundColor=1976d2" />
              </q-avatar>
              <div class="text-h6 text-primary">นายสมศักดิ์ รักการศึกษา</div>
              <div class="text-subtitle2 text-grey-8 q-mb-md">ผู้อำนวยการโรงเรียนบ้านท่าซุง</div>
              
              <p class="text-body1 text-left" style="line-height: 1.6;">
                "โรงเรียนบ้านท่าซุง มุ่งมั่นพัฒนาผู้เรียนให้มีความรู้คู่คุณธรรม ส่งเสริมทักษะวิชาการและทักษะชีวิตในศตวรรษที่ 21 เพื่อให้เด็กนักเรียนทุกคนเติบโตเป็นบุคลากรที่มีคุณภาพของสังคม 
              </p>
              <p class="text-body1 text-left" style="line-height: 1.6;">
                พวกเราคณะครูและบุคลากรทางการศึกษาทุกคน พร้อมที่จะทุ่มเทแรงกายแรงใจในการจัดการเรียนการสอน สร้างสภาพแวดล้อมที่เอื้อต่อการเรียนรู้ และดูแลนักเรียนทุกคนเปรียบเสมือนลูกหลานของเราเอง"
              </p>
            </q-card-section>
          </q-card>
        </q-dialog>

        <!-- PARENT QUICK LINKS -->
        <q-card flat bordered class="q-mb-sm bg-white" style="border-radius: 4px">
          <div class="bg-secondary text-white q-pa-sm text-weight-bold flex items-center">
            <q-icon name="family_restroom" class="q-mr-xs" /> เมนูสำหรับผู้ปกครอง
          </div>
          <q-list separator dense class="text-body2">
            <q-item
              clickable
              tag="a"
              href="https://drive.google.com/file/d/1_IvpsZ9n0OJX482ZkrrGwDg1srZwEjvh/view?pli=1"
              target="_blank"
              class="q-pa-sm hover-bg"
            >
              <q-item-section avatar min-width="30px"
                ><q-icon name="menu_book" color="primary" size="sm"
              /></q-item-section>
              <q-item-section>คู่มือนักเรียน / ดาวน์โหลดระเบียบการ</q-item-section>
            </q-item>
            <q-item
              clickable
              tag="a"
              href="https://www.facebook.com/Banthasungschool"
              target="_blank"
              class="q-pa-sm hover-bg"
            >
              <q-item-section avatar min-width="30px"
                ><q-icon name="facebook" color="primary" size="sm"
              /></q-item-section>
              <q-item-section>ติดตามเพจโรงเรียน</q-item-section>
            </q-item>
            <q-item
              clickable
              tag="a"
              href="https://m.me/Banthasungschool"
              target="_blank"
              class="q-pa-sm hover-bg"
            >
              <q-item-section avatar min-width="30px"
                ><q-icon name="chat" color="secondary" size="sm"
              /></q-item-section>
              <q-item-section>ติดต่อสอบถาม (Messenger)</q-item-section>
            </q-item>
            <q-item
              clickable
              tag="a"
              href="https://maps.app.goo.gl/tBq3RzQjVfUfHpHV6"
              target="_blank"
              class="q-pa-sm hover-bg"
            >
              <q-item-section avatar min-width="30px"
                ><q-icon name="place" color="accent" size="sm"
              /></q-item-section>
              <q-item-section>แผนที่การเดินทาง</q-item-section>
            </q-item>
          </q-list>
        </q-card>

        <!-- TEACHER PORTAL -->
        <q-card flat bordered class="q-mb-sm bg-white" style="border-radius: 4px">
          <div class="bg-accent text-dark q-pa-sm text-weight-bold flex items-center">
            <q-icon name="school" class="q-mr-xs" /> ระบบสารสนเทศภายใน
          </div>
          <q-list separator dense class="text-body2">
            <q-item clickable class="q-pa-sm hover-bg">
              <q-item-section avatar min-width="30px"
                ><q-icon name="assignment" color="orange" size="sm"
              /></q-item-section>
              <q-item-section>ระบบบันทึกคะแนน (SGS)</q-item-section>
            </q-item>
            <q-item clickable class="q-pa-sm hover-bg">
              <q-item-section avatar min-width="30px"
                ><q-icon name="email" color="red" size="sm"
              /></q-item-section>
              <q-item-section>อีเมลบุคลากร (Webmail)</q-item-section>
            </q-item>
            <q-item clickable class="q-pa-sm hover-bg">
              <q-item-section avatar min-width="30px"
                ><q-icon name="folder_shared" color="green" size="sm"
              /></q-item-section>
              <q-item-section>ระบบคลังข้อสอบ</q-item-section>
            </q-item>
          </q-list>
        </q-card>
        <!-- MAP -->
        <q-card flat bordered class="q-mb-sm bg-white" style="border-radius: 4px">
          <div class="bg-primary text-white q-pa-sm text-weight-bold flex items-center">
            <q-icon name="place" class="q-mr-xs" /> แผนที่การเดินทาง
          </div>
          <div class="q-pa-xs overflow-hidden" style="height: 250px">
            <iframe
              src="https://maps.google.com/maps?q=13.5809976,101.517889&t=k&z=16&output=embed"
              width="100%"
              height="250"
              style="border: none; overflow: hidden"
              allowfullscreen="true"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </q-card>
      </div>

      <!-- ================= MIDDLE COLUMN ================= -->
      <div class="col-12 col-md-6 col-middle">
        <!-- HERO CAROUSEL -->
        <q-card flat bordered class="q-mb-sm bg-white" style="border-radius: 4px">
          <q-carousel
            v-model="slide"
            animated
            infinite
            autoplay
            arrows
            navigation
            height="350px"
            class="text-white"
          >
            <q-carousel-slide name="1" img-src="/hero1.png">
              <div
                class="absolute-bottom text-center q-pa-sm"
                style="background: rgba(0, 0, 0, 0.6)"
              >
                <div class="text-h6 text-weight-bold">โรงเรียนบ้านท่าซุง</div>
                <div class="text-body2">"เรียนดี วินัยเด่น เน้นคุณธรรม"</div>
              </div>
            </q-carousel-slide>
            <q-carousel-slide name="2" img-src="/hero2.png">
              <div
                class="absolute-bottom text-center q-pa-sm"
                style="background: rgba(0, 0, 0, 0.6)"
              >
                <div class="text-body1 text-weight-bold">บรรยากาศการเรียนการสอน</div>
              </div>
            </q-carousel-slide>
            <q-carousel-slide name="3" img-src="/hero3.png">
              <div
                class="absolute-bottom text-center q-pa-sm"
                style="background: rgba(0, 0, 0, 0.6)"
              >
                <div class="text-body1 text-weight-bold">กิจกรรมสร้างสรรค์</div>
              </div>
            </q-carousel-slide>
          </q-carousel>
        </q-card>

        <!-- FAST NOTICES (Marquee style) -->
        <q-card
          flat
          bordered
          class="q-mb-sm bg-red-1 text-red-9"
          style="border-radius: 4px; border-color: var(--q-negative)"
        >
          <div class="row items-center no-wrap q-pa-xs">
            <div
              class="bg-negative text-white q-px-sm q-py-xs q-mr-sm text-weight-bold text-caption rounded-borders"
            >
              ประกาศด่วน
            </div>
            <marquee scrollamount="5" class="text-body2 text-weight-bold cursor-pointer">
              <span
                v-for="(notice, i) in fastNotices"
                :key="i"
                class="q-mr-xl"
                @click="router.push('/news/' + notice.id)"
              >
                » {{ notice.title }} ({{ notice.date }})
              </span>
            </marquee>
          </div>
        </q-card>

        <!-- FEATURED NEWS -->
        <q-card flat bordered class="q-mb-sm bg-white" style="border-radius: 4px">
          <div
            class="bg-primary text-white q-pa-sm text-weight-bold flex items-center justify-between"
          >
            <div><q-icon name="newspaper" class="q-mr-xs" /> ข่าวเด่นโรงเรียน</div>
            <q-btn flat dense size="sm" label="ดูทั้งหมด" />
          </div>
          <div class="q-pa-sm">
            <div
              v-if="featuredNews"
              class="row q-col-gutter-sm cursor-pointer hover-bg"
              @click="router.push(`/news/${featuredNews.id}?from=home`)"
            >
              <div class="col-5">
                <img :src="featuredNews.image" class="rounded-borders border-grey full-width" style="aspect-ratio: 4/3; object-fit: cover; display: block;" />
              </div>
              <div class="col-7 flex column justify-between">
                <div>
                  <div class="text-caption text-primary text-weight-bold">
                    {{ featuredNews.category }}
                  </div>
                  <div
                    class="text-subtitle2 text-weight-bold text-dark ellipsis-2-lines q-mt-xs"
                    style="line-height: 1.3"
                  >
                    {{ featuredNews.title }}
                  </div>
                  <div class="text-caption text-grey-8 ellipsis-2-lines q-mt-xs">
                    {{ featuredNews.summary }}
                  </div>
                </div>
                <div class="text-caption text-grey-6 flex items-center q-mt-sm">
                  <q-icon name="event" class="q-mr-xs" /> {{ featuredNews.date }}
                </div>
              </div>
            </div>
          </div>
        </q-card>

        <!-- LATEST NEWS LIST (Dense) -->
        <q-card flat bordered class="q-mb-sm bg-white" style="border-radius: 4px">
          <div
            class="bg-primary text-white q-pa-sm text-weight-bold flex items-center justify-between"
          >
            <div><q-icon name="list_alt" class="q-mr-xs" /> ข่าวสารประชาสัมพันธ์ทั่วไป</div>
          </div>
          <div class="q-pa-sm">
            <div class="row q-col-gutter-sm">
              <div class="col-12" v-for="item in regularNewsList" :key="item.id">
                <div
                  class="row q-col-gutter-sm items-center cursor-pointer hover-bg q-pa-xs border-bottom-dashed"
                  @click="router.push(`/news/${item.id}?from=home`)"
                >
                  <div class="col-3">
                    <img :src="item.image" class="rounded-borders border-grey full-width" style="aspect-ratio: 16/9; object-fit: cover; display: block;" />
                  </div>
                  <div class="col-9">
                    <div class="text-body2 text-weight-bold text-dark ellipsis">
                      {{ item.title }}
                    </div>
                    <div class="text-caption text-grey-7 flex items-center q-mt-xs">
                      <q-icon name="event" class="q-mr-xs" /> {{ item.date }} |
                      <span class="text-primary q-ml-xs">{{ item.category }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </q-card>

        <!-- ACTIVITIES GALLERY -->
        <q-card flat bordered class="q-mb-sm bg-white" style="border-radius: 4px">
          <div
            class="bg-primary text-white q-pa-sm text-weight-bold flex items-center justify-between"
          >
            <div><q-icon name="photo_library" class="q-mr-xs" /> ภาพกิจกรรมล่าสุด</div>
            <q-btn flat dense size="sm" label="แกลเลอรี่" />
          </div>
          <div class="q-pa-sm row q-col-gutter-xs">
            <div class="col-4" v-for="(act, index) in activities.slice(0, 6)" :key="index">
              <q-img
                :src="act.img"
                ratio="1"
                class="rounded-borders border-grey cursor-pointer hover-opacity"
              >
                <div
                  class="absolute-bottom text-center text-caption ellipsis q-pa-xs"
                  style="background: rgba(0, 0, 0, 0.6); font-size: 10px"
                >
                  {{ act.title }}
                </div>
              </q-img>
            </div>
          </div>
        </q-card>
      </div>

      <!-- ================= RIGHT COLUMN ================= -->
      <div class="col-12 col-md-3 col-right">
        <!-- SEARCH -->
        <q-card flat bordered class="q-mb-sm bg-white" style="border-radius: 4px">
          <div class="bg-primary text-white q-pa-sm text-weight-bold flex items-center">
            <q-icon name="search" class="q-mr-xs" /> ค้นหา
          </div>
          <div class="q-pa-sm">
            <q-input
              dense
              outlined
              v-model="searchQuery"
              placeholder="ค้นหาข่าวสาร..."
              class="bg-white"
            >
              <template v-slot:append>
                <q-icon name="search" class="cursor-pointer" />
              </template>
            </q-input>
          </div>
        </q-card>

        <!-- CALENDAR -->
        <q-card flat bordered class="q-mb-sm bg-white" style="border-radius: 4px">
          <div
            class="bg-primary text-white q-pa-sm text-weight-bold flex items-center justify-between"
          >
            <div><q-icon name="event" class="q-mr-xs" /> ปฏิทินกิจกรรม</div>
          </div>
          <q-list separator dense>
            <q-item
              v-for="(ev, index) in eventsList.slice(0, 5)"
              :key="index"
              class="q-py-sm hover-bg"
            >
              <q-item-section avatar min-width="40px">
                <div
                  class="text-center rounded-borders"
                  :class="ev.color"
                  style="width: 40px; color: white"
                >
                  <div class="text-caption bg-dark text-white" style="font-size: 10px">พ.ค.</div>
                  <div class="text-weight-bold text-body1">{{ ev.day }}</div>
                </div>
              </q-item-section>
              <q-item-section>
                <q-item-label class="text-body2 text-dark text-weight-bold ellipsis-2-lines">{{
                  ev.title
                }}</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
          <div class="q-pa-xs text-center bg-grey-2 border-top-dashed">
            <q-btn flat dense color="primary" label="ปฏิทินทั้งหมด" size="sm" />
          </div>
        </q-card>

        <!-- FACEBOOK PAGE -->
        <q-card flat bordered class="q-mb-sm bg-white" style="border-radius: 4px">
          <div class="bg-secondary text-white q-pa-sm text-weight-bold flex items-center">
            <q-icon name="facebook" class="q-mr-xs" /> ติดตามแฟนเพจ
          </div>
          <div class="q-pa-xs overflow-hidden" style="height: 350px">
            <iframe
              src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FBanthasungschool&tabs=timeline&width=300&height=350&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=false&appId"
              width="100%"
              height="350"
              style="border: none; overflow: hidden"
              scrolling="no"
              frameborder="0"
              allowfullscreen="true"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            ></iframe>
          </div>
        </q-card>

        <!-- STATISTICS -->
        <q-card flat bordered class="q-mb-sm bg-white" style="border-radius: 4px">
          <div class="bg-primary text-white q-pa-sm text-weight-bold flex items-center">
            <q-icon name="bar_chart" class="q-mr-xs" /> ข้อมูลสถิติ
          </div>
          <q-list dense separator>
            <q-item class="q-py-sm">
              <q-item-section>นักเรียนทั้งหมด</q-item-section>
              <q-item-section side class="text-primary text-weight-bold">300 คน</q-item-section>
            </q-item>
            <q-item class="q-py-sm">
              <q-item-section>บุคลากรทั้งหมด</q-item-section>
              <q-item-section side class="text-primary text-weight-bold">25 คน</q-item-section>
            </q-item>
            <q-item class="q-py-sm">
              <q-item-section>ผู้เข้าชมวันนี้</q-item-section>
              <q-item-section side class="text-primary text-weight-bold">142 ครั้ง</q-item-section>
            </q-item>
            <q-item class="q-py-sm">
              <q-item-section>ผู้เข้าชมรวม</q-item-section>
              <q-item-section side class="text-primary text-weight-bold"
                >45,102 ครั้ง</q-item-section
              >
            </q-item>
          </q-list>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useNewsStore } from '@/stores/news';

const router = useRouter();
const newsStore = useNewsStore();

const slide = ref('1');
const searchQuery = ref('');
const showDirectorMessage = ref(false);

const latestNews = computed(() => newsStore.getLatestNews);
const featuredNews = computed(() => (latestNews.value.length > 0 ? latestNews.value[0] : null));
const regularNewsList = computed(() =>
  latestNews.value.length > 1 ? latestNews.value.slice(1) : [],
);

// Mock fast notices
const fastNotices = [
  { id: '101', title: 'ประกาศหยุดเรียนกรณีพิเศษ วันที่ 15 ส.ค.', date: '1 ชม. ที่แล้ว' },
  { id: '102', title: 'แจ้งเปลี่ยนแปลงกำหนดการจ่ายเงินอุดหนุน', date: '3 ชม. ที่แล้ว' },
  { id: '103', title: 'รายชื่อผู้ผ่านการสอบคัดเลือกครูอัตราจ้าง', date: 'เมื่อวานนี้' },
];

onMounted(() => {
  void newsStore.fetchNews();
});

// Calendar Data Mock
const events = {
  1: [{ title: 'วันแรงงานแห่งชาติ', color: 'bg-green-8' }],
  4: [{ title: 'วันฉัตรมงคล', color: 'bg-green-8' }],
  13: [{ title: 'วันพืชมงคล', color: 'bg-green-8' }],
  15: [{ title: 'เปิดเทอม 1/2568', color: 'bg-green-8' }],
  22: [{ title: 'ประชุมผู้ปกครอง', color: 'bg-orange-6' }],
} as Record<number, { title: string; color: string }[]>;

const eventsList = computed(() => {
  const list: { day: number; title: string; color: string }[] = [];
  for (let i = 1; i <= 31; i++) {
    events[i]?.forEach((ev) => list.push({ day: i, title: ev.title, color: ev.color }));
  }
  return list;
});

// Activities Data Mock
const activities = [
  { title: 'กีฬาสี 67', img: '/hero1.png' },
  { title: 'วันแม่', img: '/hero2.png' },
  { title: 'ทัศนศึกษา', img: '/hero3.png' },
  { title: 'ลูกเสือ', img: '/hero2.png' },
  { title: 'วันสุนทรภู่', img: '/hero1.png' },
  { title: 'วิทย์', img: '/hero3.png' },
];
</script>

<style scoped>
.border-grey {
  border: 1px solid #e0e0e0;
}
.border-bottom-dashed {
  border-bottom: 1px dashed #e0e0e0;
}
.border-top-dashed {
  border-top: 1px dashed #e0e0e0;
}
.hover-bg {
  transition: background-color 0.2s;
}
.hover-bg:hover {
  background-color: #f5f5f5;
}
.hover-opacity {
  transition: opacity 0.2s;
}
.hover-opacity:hover {
  opacity: 0.8;
}

/* --- Mobile Reordering --- */
@media (min-width: 1024px) {
  .col-left { order: 1; }
  .col-middle { order: 2; }
  .col-right { order: 3; }
}
@media (max-width: 1023px) {
  .col-middle { order: 1; }
  .col-left { order: 2; }
  .col-right { order: 3; }
}
</style>
