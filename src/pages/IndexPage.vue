<template>
  <q-page>
    <!-- HERO SECTION (CAROUSEL) -->
    <q-carousel
      v-model="slide"
      animated
      infinite
      autoplay
      arrows
      navigation
      height="600px"
      class="text-white"
    >
      <q-carousel-slide name="1" img-src="/hero1.png">
        <div class="absolute-bottom custom-caption">
          <div class="text-h3 text-weight-bold q-mb-sm">โรงเรียนบ้านท่าซุง</div>
          <div class="text-h5">"เรียนดี วินัยเด่น เน้นคุณธรรม"</div>
          <q-btn color="accent" text-color="dark" label="รู้จักเรามากขึ้น" class="q-mt-md text-weight-bold" unelevated size="lg" />
        </div>
      </q-carousel-slide>
      
      <q-carousel-slide name="2" img-src="/hero2.png">
        <div class="absolute-bottom custom-caption">
          <div class="text-h3 text-weight-bold q-mb-sm">บรรยากาศการเรียนการสอน</div>
          <div class="text-h5">ส่งเสริมการเรียนรู้ด้วยเทคโนโลยีที่ทันสมัย</div>
        </div>
      </q-carousel-slide>
      
      <q-carousel-slide name="3" img-src="/hero3.png">
        <div class="absolute-bottom custom-caption">
          <div class="text-h3 text-weight-bold q-mb-sm">กิจกรรมสร้างสรรค์</div>
          <div class="text-h5">พัฒนาร่างกายและจิตใจให้แข็งแรงสมบูรณ์</div>
        </div>
      </q-carousel-slide>
    </q-carousel>

    <div class="q-pa-xl">
      <!-- NEWS BOARD -->
      <section class="q-mb-xl">
        <div class="text-h4 text-primary text-weight-bold q-mb-lg text-center">ข่าวสารและประกาศ</div>
        <div class="row q-col-gutter-lg">
          <div class="col-12 col-md-4" v-for="i in 3" :key="'news'+i">
            <q-card class="my-card h-100">
              <q-img src="https://cdn.quasar.dev/img/mountains.jpg" height="200px" />
              <q-card-section>
                <div class="text-overline text-accent">ประชาสัมพันธ์</div>
                <div class="text-h6 q-mt-sm q-mb-xs">กิจกรรมวันสำคัญทางศาสนา ประจำปี 2567</div>
                <div class="text-caption text-grey">
                  ขอเชิญชวนผู้ปกครองและนักเรียนเข้าร่วมกิจกรรมทำบุญตักบาตร ณ วัดท่าซุง...
                </div>
              </q-card-section>
              <q-card-actions align="right">
                <q-btn flat color="primary" label="อ่านเพิ่มเติม" />
              </q-card-actions>
            </q-card>
          </div>
        </div>
        <div class="text-center q-mt-lg">
          <q-btn outline color="primary" label="ดูข่าวสารทั้งหมด" />
        </div>
      </section>

      <!-- CALENDAR & ACTIVITY GALLERY ROW -->
      <section class="row q-col-gutter-xl q-mb-xl">
        
        <!-- CALENDAR -->
        <div class="col-12 col-md-5">
          <div class="text-h5 text-primary text-weight-bold q-mb-md">ปฏิทินกิจกรรม</div>
          <q-card flat bordered class="bg-white">
            <q-list separator>
              <q-item>
                <q-item-section avatar>
                  <q-avatar color="primary" text-color="white" class="text-weight-bold">15</q-avatar>
                  <div class="text-caption text-center text-primary q-mt-xs">พ.ค.</div>
                </q-item-section>
                <q-item-section>
                  <q-item-label class="text-weight-bold">วันเปิดภาคเรียนที่ 1/2567</q-item-label>
                  <q-item-label caption>นักเรียนทุกระดับชั้นมาโรงเรียนตามปกติ</q-item-label>
                </q-item-section>
              </q-item>
              
              <q-item>
                <q-item-section avatar>
                  <q-avatar color="primary" text-color="white" class="text-weight-bold">03</q-avatar>
                  <div class="text-caption text-center text-primary q-mt-xs">มิ.ย.</div>
                </q-item-section>
                <q-item-section>
                  <q-item-label class="text-weight-bold">วันเฉลิมพระชนมพรรษาฯ</q-item-label>
                  <q-item-label caption>หยุดทำการเรียนการสอน 1 วัน</q-item-label>
                </q-item-section>
              </q-item>
              
              <q-item>
                <q-item-section avatar>
                  <q-avatar color="primary" text-color="white" class="text-weight-bold">12</q-avatar>
                  <div class="text-caption text-center text-primary q-mt-xs">ส.ค.</div>
                </q-item-section>
                <q-item-section>
                  <q-item-label class="text-weight-bold">กิจกรรมวันแม่แห่งชาติ</q-item-label>
                  <q-item-label caption>ประกวดวาดภาพระบายสีและเรียงความ</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
            <div class="q-pa-md text-center">
              <q-btn flat color="primary" label="ดูปฏิทินทั้งหมด" />
            </div>
          </q-card>
        </div>

        <!-- ACTIVITY GALLERY -->
        <div class="col-12 col-md-7">
          <div class="text-h5 text-primary text-weight-bold q-mb-md">ภาพกิจกรรมล่าสุด</div>
          <div class="row q-col-gutter-sm">
            <div class="col-6 col-sm-4" v-for="i in 6" :key="'img'+i">
              <q-img :src="`https://picsum.photos/400/300?random=${i}`" ratio="1" class="rounded-borders cursor-pointer" >
                <div class="absolute-bottom text-center text-caption" style="padding: 4px;">
                  กิจกรรมที่ {{i}}
                </div>
              </q-img>
            </div>
          </div>
        </div>

      </section>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const slide = ref('1');
</script>

<style scoped>
.custom-caption {
  text-align: center;
  padding: 40px;
  color: white;
  background-color: rgba(0, 0, 0, 0.4);
  width: 100%;
}
.h-100 {
  height: 100%;
}
</style>
