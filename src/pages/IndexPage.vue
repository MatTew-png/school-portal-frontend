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
        <div class="absolute-bottom custom-caption animate-fade-in-up">
          <div class="text-h3 text-weight-bold q-mb-sm">โรงเรียนบ้านท่าซุง</div>
          <div class="text-h5">"เรียนดี วินัยเด่น เน้นคุณธรรม"</div>
          <q-btn color="accent" text-color="dark" label="รู้จักเรามากขึ้น" class="q-mt-md text-weight-bold" unelevated size="lg" />
        </div>
      </q-carousel-slide>
      
      <q-carousel-slide name="2" img-src="/hero2.png">
        <div class="absolute-bottom custom-caption animate-fade-in-up">
          <div class="text-h3 text-weight-bold q-mb-sm">บรรยากาศการเรียนการสอน</div>
          <div class="text-h5">ส่งเสริมการเรียนรู้ด้วยเทคโนโลยีที่ทันสมัย</div>
        </div>
      </q-carousel-slide>
      
      <q-carousel-slide name="3" img-src="/hero3.png">
        <div class="absolute-bottom custom-caption animate-fade-in-up">
          <div class="text-h3 text-weight-bold q-mb-sm">กิจกรรมสร้างสรรค์</div>
          <div class="text-h5">พัฒนาร่างกายและจิตใจให้แข็งแรงสมบูรณ์</div>
        </div>
      </q-carousel-slide>
    </q-carousel>

    <!-- [NEW] ADMISSIONS BANNER -->
    <div class="bg-secondary text-dark text-center q-pa-md q-mb-xl shadow-2 animate-fade-in">
      <div class="row items-center justify-center q-gutter-md">
        <q-icon name="campaign" size="36px" color="primary" /> 
        <div class="text-h5 text-weight-bold">เปิดรับสมัครนักเรียนใหม่ ประจำปีการศึกษา 2568</div>
        <q-btn color="primary" text-color="white" label="ดูรายละเอียดการรับสมัคร" unelevated rounded class="text-weight-bold q-px-md" />
      </div>
    </div>

    <div class="q-px-xl q-pb-xl">
      
      <!-- [NEW] DIRECTOR'S MESSAGE -->
      <section class="q-mb-xl animate-fade-in-up">
        <q-card flat bordered class="overflow-hidden bg-white" style="border-radius: 16px;">
          <div class="row items-stretch">
            <div class="col-12 col-md-4 bg-primary text-center q-pa-xl flex flex-center">
              <div>
                <q-avatar size="150px" class="shadow-4 q-mb-md" style="border: 4px solid white; background-color: white;">
                  <img src="https://api.dicebear.com/7.x/initials/svg?seed=สมศักดิ์&backgroundColor=1976d2" />
                </q-avatar>
                <div class="text-h6 text-white text-weight-bold">นายสมศักดิ์ รักการศึกษา</div>
                <div class="text-white" style="opacity: 0.9;">ผู้อำนวยการโรงเรียนบ้านท่าซุง</div>
              </div>
            </div>
            <div class="col-12 col-md-8 q-pa-xl flex column justify-center relative-position">
              <q-icon name="format_quote" color="grey-3" size="80px" class="absolute-top-right q-pa-md" style="z-index: 0;" />
              <div style="z-index: 1;">
                <div class="text-h4 text-primary text-weight-bold q-mb-md">สารจากผู้อำนวยการ</div>
                <p class="text-body1 text-grey-8" style="line-height: 1.8;">
                  "โรงเรียนบ้านท่าซุง มุ่งมั่นพัฒนาผู้เรียนให้มีความรู้คู่คุณธรรม ส่งเสริมทักษะวิชาการและทักษะชีวิตในศตวรรษที่ 21 
                  ภายใต้สภาพแวดล้อมที่ปลอดภัยและเอื้อต่อการเรียนรู้ เราพร้อมที่จะร่วมมือกับผู้ปกครองและชุมชน 
                  ในการสร้างอนาคตที่สดใสให้กับบุตรหลานของเราทุกคน เพราะเราเชื่อว่าเด็กทุกคนคืออนาคตของชาติ"
                </p>
                <div class="q-mt-lg">
                  <q-btn outline color="primary" label="อ่านวิสัยทัศน์เพิ่มเติม" rounded class="q-px-md" />
                </div>
              </div>
            </div>
          </div>
        </q-card>
      </section>

      <!-- [NEW] SCHOOL STATISTICS -->
      <section class="q-mb-xl q-pb-md" style="border-bottom: 1px solid #eee;">
        <div class="row q-col-gutter-lg justify-center">
          <div class="col-6 col-md-3 text-center animate-fade-in-up delay-1">
            <div class="text-h2 text-primary text-weight-bolder q-mb-xs">300<span class="text-h4 text-weight-bold">+</span></div>
            <div class="text-subtitle1 text-grey-8 text-weight-medium">นักเรียนปัจจุบัน</div>
          </div>
          <div class="col-6 col-md-3 text-center animate-fade-in-up delay-2">
            <div class="text-h2 text-secondary text-weight-bolder q-mb-xs">25<span class="text-h4 text-weight-bold">+</span></div>
            <div class="text-subtitle1 text-grey-8 text-weight-medium">ครูและบุคลากร</div>
          </div>
          <div class="col-6 col-md-3 text-center animate-fade-in-up delay-3">
            <div class="text-h2 text-accent text-weight-bolder q-mb-xs">40<span class="text-h4 text-weight-bold"> ปี</span></div>
            <div class="text-subtitle1 text-grey-8 text-weight-medium">ก่อตั้งและพัฒนา</div>
          </div>
          <div class="col-6 col-md-3 text-center animate-fade-in-up delay-4">
            <div class="text-h2 text-positive text-weight-bolder q-mb-xs">20<span class="text-h4 text-weight-bold">+</span></div>
            <div class="text-subtitle1 text-grey-8 text-weight-medium">กิจกรรมพัฒนาผู้เรียน</div>
          </div>
        </div>
      </section>

      <!-- [NEW] PARENT QUICK LINKS -->
      <section class="q-mb-xl">
        <div class="text-h4 text-primary text-weight-bold q-mb-lg text-center">บริการสำหรับผู้ปกครอง</div>
        <div class="row q-col-gutter-lg justify-center">
          <div class="col-6 col-md-3 text-center animate-fade-in-up delay-1">
            <q-btn type="a" href="https://drive.google.com/file/d/1_IvpsZ9n0OJX482ZkrrGwDg1srZwEjvh/view?pli=1" target="_blank" round color="blue-1" text-color="blue-8" size="32px" icon="menu_book" class="q-mb-sm shadow-3 transition-transform hover-scale" />
            <div class="text-h6 text-weight-bold">คู่มือนักเรียน</div>
            <div class="text-caption text-grey">ดาวน์โหลดระเบียบการ</div>
          </div>
          <div class="col-6 col-md-3 text-center animate-fade-in-up delay-2">
            <q-btn type="a" href="https://www.facebook.com/Banthasungschool" target="_blank" round color="indigo-1" text-color="indigo-8" size="32px" icon="facebook" class="q-mb-sm shadow-3 transition-transform hover-scale" />
            <div class="text-h6 text-weight-bold">ติดตามข่าวสาร</div>
            <div class="text-caption text-grey">เพจเฟสบุ๊คโรงเรียน</div>
          </div>
          <div class="col-6 col-md-3 text-center animate-fade-in-up delay-3">
            <q-btn type="a" href="https://m.me/Banthasungschool" target="_blank" round color="light-blue-1" text-color="light-blue-8" size="32px" icon="chat" class="q-mb-sm shadow-3 transition-transform hover-scale" />
            <div class="text-h6 text-weight-bold">ติดต่อสอบถาม</div>
            <div class="text-caption text-grey">ทักแชท Messenger</div>
          </div>
          <div class="col-6 col-md-3 text-center animate-fade-in-up delay-4">
            <q-btn type="a" href="https://maps.app.goo.gl/tBq3RzQjVfUfHpHV6" target="_blank" round color="red-1" text-color="red-8" size="32px" icon="place" class="q-mb-sm shadow-3 transition-transform hover-scale" />
            <div class="text-h6 text-weight-bold">แผนที่โรงเรียน</div>
            <div class="text-caption text-grey">การเดินทางมาติดต่อ</div>
          </div>
        </div>
      </section>

      <!-- NEWS BOARD -->
      <section class="q-mb-xl">
        <div class="text-h4 text-primary text-weight-bold q-mb-lg text-center">ข่าวสารและประกาศ</div>
        <div class="row q-col-gutter-lg">
          
          <div class="col-12 col-md-4 animate-fade-in-up delay-1">
            <q-card class="my-card h-100 shadow-2 hover-card">
              <q-img src="/hero1.png" height="200px" />
              <q-card-section>
                <div class="text-overline text-accent">ประกาศรับสมัคร</div>
                <div class="text-h6 q-mt-sm q-mb-xs">ประกาศรายชื่อผู้มีสิทธิ์เข้าศึกษาต่อ ชั้น ป.1</div>
                <div class="text-caption text-grey">
                  โรงเรียนบ้านท่าซุง ขอประกาศรายชื่อนักเรียนที่ผ่านการคัดเลือกเข้าศึกษาต่อในระดับชั้นประถมศึกษาปีที่ 1 ประจำปีการศึกษา 2568 (รอบที่ 1)...
                </div>
              </q-card-section>
              <q-card-actions align="right">
                <q-btn flat color="primary" label="อ่านเพิ่มเติม" />
              </q-card-actions>
            </q-card>
          </div>

          <div class="col-12 col-md-4 animate-fade-in-up delay-2">
            <q-card class="my-card h-100 shadow-2 hover-card">
              <q-img src="/hero2.png" height="200px" />
              <q-card-section>
                <div class="text-overline text-primary">ประชาสัมพันธ์</div>
                <div class="text-h6 q-mt-sm q-mb-xs">ประชุมผู้ปกครอง ภาคเรียนที่ 1/2568</div>
                <div class="text-caption text-grey">
                  ขอเชิญผู้ปกครองนักเรียนทุกระดับชั้น เข้าร่วมรับฟังนโยบายการจัดการศึกษาและพบปะครูประจำชั้น เพื่อเตรียมความพร้อมก่อนเปิดเทอม...
                </div>
              </q-card-section>
              <q-card-actions align="right">
                <q-btn flat color="primary" label="อ่านเพิ่มเติม" />
              </q-card-actions>
            </q-card>
          </div>

          <div class="col-12 col-md-4 animate-fade-in-up delay-3">
            <q-card class="my-card h-100 shadow-2 hover-card">
              <q-img src="/hero3.png" height="200px" />
              <q-card-section>
                <div class="text-overline text-positive">ผลงานวิชาการ</div>
                <div class="text-h6 q-mt-sm q-mb-xs">ผลการประเมินคุณภาพการศึกษา (NT) ชั้น ป.3</div>
                <div class="text-caption text-grey">
                  ขอแสดงความยินดีกับนักเรียนระดับชั้นประถมศึกษาปีที่ 3 ที่ทำคะแนนการทดสอบ NT ได้สูงกว่าระดับประเทศในทุกด้าน ประจำปีการศึกษา 2567...
                </div>
              </q-card-section>
              <q-card-actions align="right">
                <q-btn flat color="primary" label="อ่านเพิ่มเติม" />
              </q-card-actions>
            </q-card>
          </div>

        </div>
        <div class="text-center q-mt-lg">
          <q-btn outline color="primary" label="ดูข่าวสารทั้งหมด" rounded class="q-px-lg" />
        </div>
      </section>

      <!-- CALENDAR & ACTIVITY GALLERY ROW -->
      <section class="row q-col-gutter-xl q-mb-xl">
        <!-- CALENDAR -->
        <div class="col-12 col-md-4 animate-fade-in-up delay-1">
          <div class="text-h5 text-primary text-weight-bold q-mb-md"><q-icon name="event" class="q-mr-sm"/>ปฏิทินกิจกรรม</div>
          <q-card flat bordered class="bg-white shadow-2 overflow-hidden" style="border-radius: 12px;">
            <div class="row items-center justify-between q-pa-sm bg-primary text-white">
              <div class="row items-center">
                <q-btn flat round dense icon="chevron_left" size="sm" />
                <div class="text-weight-bold q-mx-sm">พฤษภาคม 2568</div>
                <q-btn flat round dense icon="chevron_right" size="sm" />
              </div>
              <q-btn-group outline rounded class="bg-primary shadow-0" style="border: 1px solid rgba(255,255,255,0.3)">
                <q-btn dense size="sm" class="q-px-sm" :color="calendarMode === 'grid' ? 'white' : 'transparent'" :text-color="calendarMode === 'grid' ? 'primary' : 'white'" icon="grid_view" @click="calendarMode = 'grid'" />
                <q-btn dense size="sm" class="q-px-sm" :color="calendarMode === 'list' ? 'white' : 'transparent'" :text-color="calendarMode === 'list' ? 'primary' : 'white'" icon="view_agenda" @click="calendarMode = 'list'" />
              </q-btn-group>
            </div>
            
            <template v-if="calendarMode === 'grid'">
              <div class="row text-center text-weight-bold text-grey-8 bg-grey-2 q-py-xs" style="font-size: 11px;">
                <div class="col text-red">อา</div>
                <div class="col">จ</div>
                <div class="col">อ</div>
                <div class="col">พ</div>
                <div class="col">พฤ</div>
                <div class="col">ศ</div>
                <div class="col">ส</div>
              </div>
              
              <div class="row" style="border-top: 1px solid #eee;">
                <div v-for="blank in startDayOfWeek" :key="'blank'+blank" style="width: 14.28%; border-right: 1px solid #eee; border-bottom: 1px solid #eee; min-height: 55px; background: #fafafa;"></div>
                
                <div v-for="day in daysInMonth" :key="'day'+day" class="q-pa-xs" style="width: 14.28%; border-right: 1px solid #eee; border-bottom: 1px solid #eee; min-height: 55px;">
                  <div class="text-right text-caption" :class="(day + startDayOfWeek) % 7 === 1 ? 'text-red text-weight-bold' : 'text-grey-9'">{{ day }}</div>
                  <template v-if="events[day]">
                    <div v-for="(ev, idx) in events[day]" :key="'ev'+day+idx" :class="ev.color" class="text-white q-px-xs q-mt-xs" style="border-radius: 3px; font-size: 9px; line-height: 1.4; overflow: hidden; white-space: nowrap; text-overflow: ellipsis;" :title="ev.title">
                      {{ ev.title }}
                    </div>
                  </template>
                </div>
              </div>
            </template>
            
            <template v-else>
              <q-list separator class="bg-white" style="height: 310px; overflow-y: auto;">
                <q-item v-for="(ev, index) in eventsList" :key="index" class="q-py-md">
                  <q-item-section avatar>
                    <q-avatar :class="ev.color" text-color="white" size="42px" font-size="16px" class="shadow-1 text-weight-bold">
                      {{ ev.day }}
                    </q-avatar>
                  </q-item-section>
                  <q-item-section>
                    <q-item-label class="text-weight-bold text-grey-9 text-body1">{{ ev.title }}</q-item-label>
                    <q-item-label caption class="text-primary"><q-icon name="event" class="q-mr-xs"/> พฤษภาคม 2568</q-item-label>
                  </q-item-section>
                  <q-item-section side>
                    <q-btn flat round dense icon="chevron_right" color="grey-5" />
                  </q-item-section>
                </q-item>
                <q-item v-if="eventsList.length === 0">
                  <q-item-section class="text-center text-grey q-pa-lg">ไม่มีกิจกรรมในเดือนนี้</q-item-section>
                </q-item>
              </q-list>
            </template>
            <div class="q-pa-sm text-center bg-grey-1">
              <q-btn flat color="primary" label="ดูปฏิทินทั้งหมด" size="sm" />
            </div>
          </q-card>
        </div>

        <!-- ACTIVITY GALLERY (ENHANCED) -->
        <div class="col-12 col-md-8 animate-fade-in-up delay-2">
          <div class="row items-center justify-between q-mb-md">
            <div class="text-h5 text-primary text-weight-bold"><q-icon name="photo_library" class="q-mr-sm"/>ภาพกิจกรรมล่าสุด</div>
            <q-tabs v-model="tab" dense class="text-grey" active-color="primary" indicator-color="primary" align="right" narrow-indicator>
              <q-tab name="all" label="ทั้งหมด" />
              <q-tab name="kg" label="อนุบาล" />
              <q-tab name="pr" label="ประถม" />
            </q-tabs>
          </div>
          <q-tab-panels v-model="tab" animated class="bg-transparent">
            
            <q-tab-panel name="all" class="q-pa-none">
              <div class="row q-col-gutter-md">
                <div class="col-6 col-sm-4" v-for="(act, index) in activities" :key="'act'+index">
                  <q-card class="hover-card">
                    <q-img :src="act.img" ratio="1.33" class="rounded-borders">
                      <div class="absolute-bottom text-center text-caption" style="padding: 8px; background: rgba(0,0,0,0.6);">
                        {{ act.title }}
                      </div>
                    </q-img>
                  </q-card>
                </div>
              </div>
            </q-tab-panel>

            <q-tab-panel name="kg" class="q-pa-none">
              <div class="text-center q-pa-xl text-grey">แสดงรูปภาพกิจกรรมสายชั้นอนุบาล</div>
            </q-tab-panel>
            <q-tab-panel name="pr" class="q-pa-none">
              <div class="text-center q-pa-xl text-grey">แสดงรูปภาพกิจกรรมสายชั้นประถม</div>
            </q-tab-panel>
          </q-tab-panels>
        </div>
      </section>

      <!-- [NEW] TEACHERS DIRECTORY -->
      <section class="q-mb-xl q-mt-xl">
        <div class="text-h4 text-primary text-weight-bold q-mb-lg text-center">ทำเนียบคุณครูประจำชั้น</div>
        <div class="row q-col-gutter-lg justify-center">
          
          <div class="col-12 col-md-4 animate-fade-in-up delay-1">
            <q-card flat bordered class="text-center q-pa-lg" style="border-radius: 16px; border-top: 4px solid var(--q-primary);">
              <div class="text-h6 text-weight-bold q-mb-md">สายชั้นอนุบาล</div>
              <div class="row justify-center q-gutter-md">
                <div class="col-5">
                  <q-avatar size="80px" class="shadow-2 q-mb-sm">
                    <img src="https://api.dicebear.com/7.x/initials/svg?seed=กมลวรรณ&backgroundColor=4caf50">
                  </q-avatar>
                  <div class="text-weight-bold">นางกมลวรรณ ใจดี</div>
                  <div class="text-caption text-grey">ครูประจำชั้น อนุบาล 1</div>
                </div>
                <div class="col-5">
                  <q-avatar size="80px" class="shadow-2 q-mb-sm">
                    <img src="https://api.dicebear.com/7.x/initials/svg?seed=สุนิสา&backgroundColor=4caf50">
                  </q-avatar>
                  <div class="text-weight-bold">นางสาวสุนิสา รักษ์เด็ก</div>
                  <div class="text-caption text-grey">ครูประจำชั้น อนุบาล 2</div>
                </div>
              </div>
            </q-card>
          </div>
          
          <div class="col-12 col-md-4 animate-fade-in-up delay-2">
            <q-card flat bordered class="text-center q-pa-lg" style="border-radius: 16px; border-top: 4px solid var(--q-secondary);">
              <div class="text-h6 text-weight-bold q-mb-md">สายชั้น ป.1 - ป.3</div>
              <div class="row justify-center q-gutter-md">
                <div class="col-5">
                  <q-avatar size="80px" class="shadow-2 q-mb-sm">
                    <img src="https://api.dicebear.com/7.x/initials/svg?seed=สมพร&backgroundColor=ffb300">
                  </q-avatar>
                  <div class="text-weight-bold">นางสมพร ประเสริฐ</div>
                  <div class="text-caption text-grey">ครูประจำชั้น ป.1</div>
                </div>
                <div class="col-5">
                  <q-avatar size="80px" class="shadow-2 q-mb-sm">
                    <img src="https://api.dicebear.com/7.x/initials/svg?seed=วิชัย&backgroundColor=ffb300">
                  </q-avatar>
                  <div class="text-weight-bold">นายวิชัย แสงทอง</div>
                  <div class="text-caption text-grey">ครูประจำชั้น ป.2</div>
                </div>
              </div>
            </q-card>
          </div>
          
          <div class="col-12 col-md-4 animate-fade-in-up delay-3">
            <q-card flat bordered class="text-center q-pa-lg" style="border-radius: 16px; border-top: 4px solid var(--q-accent);">
              <div class="text-h6 text-weight-bold q-mb-md">สายชั้น ป.4 - ป.6</div>
              <div class="row justify-center q-gutter-md">
                <div class="col-5">
                  <q-avatar size="80px" class="shadow-2 q-mb-sm">
                    <img src="https://api.dicebear.com/7.x/initials/svg?seed=สมชาย&backgroundColor=1976d2">
                  </q-avatar>
                  <div class="text-weight-bold">นายสมชาย ชาญชัย</div>
                  <div class="text-caption text-grey">ครูประจำชั้น ป.4</div>
                </div>
                <div class="col-5">
                  <q-avatar size="80px" class="shadow-2 q-mb-sm">
                    <img src="https://api.dicebear.com/7.x/initials/svg?seed=วิไลวรรณ&backgroundColor=1976d2">
                  </q-avatar>
                  <div class="text-weight-bold">น.ส.วิไลวรรณ พลเยี่ยม</div>
                  <div class="text-caption text-grey">ครูประจำชั้น ป.6</div>
                </div>
              </div>
            </q-card>
          </div>
        </div>
      </section>

      <!-- [NEW] TEACHER PORTAL -->
      <q-separator class="q-my-xl" />
      <section class="q-mb-md">
        <div class="text-subtitle1 text-grey-8 text-weight-bold q-mb-sm"><q-icon name="lock" class="q-mr-xs"/> สำหรับบุคลากรภายใน (Teacher Portal)</div>
        <div class="row q-gutter-sm">
          <q-btn flat outline color="grey-7" icon="dns" label="ระบบ BookMark" size="sm" />
          <q-btn flat outline color="grey-7" icon="font_download" label="ดาวน์โหลด 13 ฟอนต์ราชการ" size="sm" />
          <q-btn flat outline color="grey-7" icon="description" label="แบบฟอร์มเอกสารต่างๆ" size="sm" />
        </div>
      </section>

    </div>
  </q-page>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted } from 'vue';
import { useQuasar } from 'quasar';

const $q = useQuasar();

const slide = ref('1');
const tab = ref('all');
const calendarMode = ref('grid');

onMounted(() => {
  calendarMode.value = $q.screen.lt.sm ? 'list' : 'grid';
});

watch(() => $q.screen.lt.sm, (isMobile) => {
  calendarMode.value = isMobile ? 'list' : 'grid';
});

// Calendar Data Mock
const daysInMonth = Array.from({length: 31}, (_, i) => i + 1);
const startDayOfWeek = 4; // May 1st is Thursday (index 4)
const events = {
  1: [{ title: 'วันแรงงาน', color: 'bg-green-7' }],
  4: [{ title: 'วันฉัตรมงคล', color: 'bg-green-7' }],
  13: [{ title: 'วันพืชมงคล', color: 'bg-green-7' }],
  15: [{ title: 'เปิดเทอม 1/68', color: 'bg-blue-7' }]
} as Record<number, {title: string, color: string}[]>;

const eventsList = computed(() => {
  const list: { day: number; title: string; color: string }[] = [];
  for (let i = 1; i <= 31; i++) {
    events[i]?.forEach(ev => list.push({ day: i, title: ev.title, color: ev.color }));
  }
  return list;
});

// Activities Data Mock (Realistic)
const activities = [
  { title: 'กิจกรรมกีฬาสีประจำปี 2567', img: '/hero1.png' },
  { title: 'กิจกรรมวันแม่แห่งชาติ', img: '/hero2.png' },
  { title: 'ทัศนศึกษาแหล่งเรียนรู้', img: '/hero3.png' },
  { title: 'เข้าค่ายลูกเสือ-เนตรนารี', img: '/hero2.png' },
  { title: 'กิจกรรมวันสุนทรภู่', img: '/hero1.png' },
  { title: 'สัปดาห์วิทยาศาสตร์แห่งชาติ', img: '/hero3.png' },
];
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
.hover-scale {
  transition: transform 0.2s;
}
.hover-scale:hover {
  transform: scale(1.1);
}
.hover-card {
  transition: box-shadow 0.3s, transform 0.3s;
}
.hover-card:hover {
  box-shadow: 0 8px 24px rgba(0,0,0,0.15);
  transform: translateY(-5px);
}
</style>
