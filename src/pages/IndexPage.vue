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
          <q-btn
            color="accent"
            text-color="dark"
            label="รู้จักเรามากขึ้น"
            class="q-mt-md text-weight-bold"
            unelevated
            size="lg"
          />
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

    <!-- [NEW] FAST NOTICES ALERT BANNER -->
    <div v-if="fastNotices && fastNotices.length" class="bg-red-1 text-red-9 q-pa-sm shadow-2">
      <div class="row items-center justify-center no-wrap">
        <q-icon name="campaign" size="24px" class="q-mr-sm" />
        <strong class="q-mr-sm">ประกาศด่วน:</strong>
        <q-carousel
          v-model="noticeSlide"
          vertical
          transition-prev="slide-down"
          transition-next="slide-up"
          swipeable
          animated
          autoplay
          infinite
          height="24px"
          class="bg-transparent"
          style="width: 100%; max-width: 600px;"
        >
          <q-carousel-slide v-for="(notice, index) in fastNotices" :name="index" :key="notice.id" class="q-pa-none flex items-center cursor-pointer" @click="router.push('/news/' + notice.id)">
            <div class="ellipsis text-body1">{{ notice.title }}</div>
          </q-carousel-slide>
        </q-carousel>
      </div>
    </div>

    <!-- [NEW] ADMISSIONS BANNER -->
    <div class="bg-secondary text-dark text-center q-pa-lg q-mb-xl shadow-1 animate-fade-in">
      <div class="row items-center justify-center q-gutter-lg">
        <div class="text-h4 text-weight-bold">เปิดรับสมัครนักเรียนใหม่ ประจำปีการศึกษา 2568</div>
        <q-btn
          color="primary"
          text-color="white"
          label="ดูรายละเอียดการรับสมัคร"
          unelevated
          size="xl"
          class="text-weight-bold q-px-xl rounded-borders"
        />
      </div>
    </div>

    <div class="q-px-xl q-pb-xl">
      <!-- [NEW] PARENT QUICK LINKS (Redesigned) -->
      <section class="q-mb-xl q-mt-lg">
        <div class="text-h3 text-primary text-weight-bold q-mb-xl text-center">
          เมนูลัดสำหรับผู้ปกครอง
        </div>
        <div class="row q-col-gutter-lg justify-center items-stretch">
          <div class="col-12 col-sm-6 col-md-3 animate-fade-in-up delay-1">
            <a href="https://drive.google.com/file/d/1_IvpsZ9n0OJX482ZkrrGwDg1srZwEjvh/view?pli=1" target="_blank" style="text-decoration: none;" class="block h-100">
              <q-card class="bg-blue-1 text-center q-pa-lg cursor-pointer hover-card shadow-2 h-100 flex column flex-center no-wrap" style="border-radius: 24px;">
                <q-icon name="menu_book" size="64px" color="blue-8" class="q-mb-md" />
                <div class="text-h5 text-blue-10 text-weight-bold q-mb-sm line-height-normal">คู่มือนักเรียน</div>
                <div class="text-body1 text-blue-8">ดาวน์โหลดระเบียบการ</div>
              </q-card>
            </a>
          </div>
          <div class="col-12 col-sm-6 col-md-3 animate-fade-in-up delay-2">
            <a href="https://www.facebook.com/Banthasungschool" target="_blank" style="text-decoration: none;" class="block h-100">
              <q-card class="bg-indigo-1 text-center q-pa-lg cursor-pointer hover-card shadow-2 h-100 flex column flex-center no-wrap" style="border-radius: 24px;">
                <q-icon name="facebook" size="64px" color="indigo-8" class="q-mb-md" />
                <div class="text-h5 text-indigo-10 text-weight-bold q-mb-sm line-height-normal">ติดตามข่าวสาร</div>
                <div class="text-body1 text-indigo-8">เพจเฟสบุ๊คโรงเรียน</div>
              </q-card>
            </a>
          </div>
          <div class="col-12 col-sm-6 col-md-3 animate-fade-in-up delay-3">
            <a href="https://m.me/Banthasungschool" target="_blank" style="text-decoration: none;" class="block h-100">
              <q-card class="bg-light-blue-1 text-center q-pa-lg cursor-pointer hover-card shadow-2 h-100 flex column flex-center no-wrap" style="border-radius: 24px;">
                <q-icon name="chat" size="64px" color="light-blue-8" class="q-mb-md" />
                <div class="text-h5 text-light-blue-10 text-weight-bold q-mb-sm line-height-normal">ติดต่อสอบถาม</div>
                <div class="text-body1 text-light-blue-8">ทักแชท Messenger</div>
              </q-card>
            </a>
          </div>
          <div class="col-12 col-sm-6 col-md-3 animate-fade-in-up delay-4">
            <a href="https://maps.app.goo.gl/tBq3RzQjVfUfHpHV6" target="_blank" style="text-decoration: none;" class="block h-100">
              <q-card class="bg-red-1 text-center q-pa-lg cursor-pointer hover-card shadow-2 h-100 flex column flex-center no-wrap" style="border-radius: 24px;">
                <q-icon name="place" size="64px" color="red-8" class="q-mb-md" />
                <div class="text-h5 text-red-10 text-weight-bold q-mb-sm line-height-normal">แผนที่โรงเรียน</div>
                <div class="text-body1 text-red-8">การเดินทางมาติดต่อ</div>
              </q-card>
            </a>
          </div>
        </div>
      </section>
      <!-- NEWS BOARD -->
      <section class="q-mb-xl" id="news-section">
        <div class="row justify-between items-end q-mb-lg">
          <div class="text-h4 text-primary text-weight-bold">
            ข่าวสารและประกาศ
          </div>
        </div>
        <div class="q-gutter-y-xl q-mt-md">
          
          <!-- FEATURED NEWS (First Item) -->
          <div v-if="featuredNews" class="featured-news cursor-pointer animate-fade-in-up shadow-3 rounded-borders overflow-hidden bg-white hover-featured" @click="router.push(`/news/${featuredNews.id}?from=home`)">
            <div class="row items-stretch">
              <div class="col-12 col-md-7">
                <q-img :src="featuredNews.image" class="fit" style="min-height: 350px;">
                  <template v-slot:error><div class="absolute-full flex flex-center bg-grey-3">No Image</div></template>
                </q-img>
              </div>
              <div class="col-12 col-md-5 q-pa-xl flex column justify-center">
                <q-chip color="accent" text-color="dark" class="text-weight-bold q-mb-md self-start">{{ featuredNews.category }}</q-chip>
                <div class="text-h4 text-weight-bold q-mb-md text-dark hover-title" style="line-height: 1.4;">{{ featuredNews.title }}</div>
                <div class="text-body1 text-grey-8 ellipsis-3-lines q-mb-lg">{{ featuredNews.summary }}</div>
                <div class="text-caption text-grey flex items-center q-mt-auto">
                  <q-icon name="calendar_today" class="q-mr-xs" /> {{ featuredNews.date }}
                  <q-icon name="visibility" class="q-ml-lg q-mr-xs" /> {{ featuredNews.views }} ครั้ง
                </div>
              </div>
            </div>
          </div>

          <!-- MAIN CONTENT: LIST & SIDEBAR -->
          <q-separator class="q-my-xl" color="grey-3" />
          <div class="row q-col-gutter-xl q-mt-xl">
            <!-- LEFT: NEWS LIST -->
            <div class="col-12 col-md-8">
              <div class="text-h4 text-weight-bold q-mb-lg text-dark flex items-center" style="border-left: 5px solid var(--q-primary); padding-left: 12px;">
                ข่าวสารล่าสุดอื่นๆ
              </div>
              
              <div class="column" style="gap: 24px;">
                <div 
                  v-for="(item, index) in regularNewsList" 
                  :key="item.id"
                  class="row bg-white rounded-borders overflow-hidden hover-article shadow-1 cursor-pointer animate-fade-in-up"
                  :style="{ animationDelay: `${index * 0.1}s` }"
                  @click="router.push(`/news/${item.id}?from=home`)"
                >
                  <div class="col-12 col-sm-4">
                    <q-img :src="item.image" height="180px" class="fit" />
                  </div>
                  <div class="col-12 col-sm-8 q-pa-md flex column justify-between">
                    <div>
                      <div class="text-overline text-primary text-weight-bold">{{ item.category }}</div>
                      <div class="text-h6 q-mt-xs q-mb-sm ellipsis-2-lines text-dark hover-title" style="line-height: 1.4;">{{ item.title }}</div>
                      <div class="text-body2 text-grey-8 ellipsis-2-lines q-mb-md">{{ item.summary }}</div>
                    </div>
                    <div class="text-caption text-grey flex items-center">
                      <q-icon name="calendar_today" class="q-mr-xs" /> {{ item.date }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- RIGHT: SIDEBAR -->
            <div class="col-12 col-md-4">
              <!-- Sidebar Widget: Facebook Page -->
              <q-card flat bordered class="q-pa-md bg-white q-mb-xl rounded-borders shadow-1">
                <div class="text-h6 text-weight-bold q-mb-sm flex items-center text-dark">
                  <q-icon name="facebook" color="indigo" class="q-mr-sm" size="md" /> 
                  เพจโรงเรียน
                </div>
                <q-separator class="q-mb-md" />
                <div class="flex flex-center overflow-hidden rounded-borders" style="height: 350px;">
                  <iframe
                    src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FBanthasungschool&tabs=timeline&width=300&height=350&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=false&appId"
                    width="100%"
                    height="350"
                    style="border: none; overflow: hidden;"
                    scrolling="no"
                    frameborder="0"
                    allowfullscreen="true"
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  ></iframe>
                </div>
              </q-card>
            </div>
          </div>
        </div>
      </section>


      <!-- CALENDAR & ACTIVITY GALLERY ROW -->
      <section class="row q-col-gutter-xl q-mb-xl">
        <!-- CALENDAR -->
        <div class="col-12 col-md-4 animate-fade-in-up delay-1">
          <div class="text-h5 text-primary text-weight-bold q-mb-md">
            <q-icon name="event" class="q-mr-sm" />ปฏิทินกิจกรรม
          </div>
          <q-card
            flat
            bordered
            class="bg-white shadow-2 overflow-hidden"
            style="border-radius: 12px"
          >
            <div class="row items-center justify-between q-pa-md bg-primary text-white">
              <div class="text-h6 text-weight-bold">พฤษภาคม 2568</div>
              <q-icon name="event_note" size="28px" />
            </div>

            <q-list separator class="bg-white">
              <q-item v-for="(ev, index) in eventsList.slice(0, 4)" :key="index" class="q-py-md hover-card">
                <q-item-section avatar>
                  <q-avatar
                    :class="ev.color"
                    text-color="white"
                    size="48px"
                    font-size="20px"
                    class="shadow-2 text-weight-bold"
                  >
                    {{ ev.day }}
                  </q-avatar>
                </q-item-section>
                <q-item-section>
                  <q-item-label class="text-weight-bold text-dark text-body1">{{
                    ev.title
                  }}</q-item-label>
                  <q-item-label caption class="text-primary text-weight-medium"
                    ><q-icon name="event" class="q-mr-xs" /> พฤษภาคม 2568</q-item-label
                  >
                </q-item-section>
                <q-item-section side>
                  <q-btn flat round dense icon="chevron_right" color="grey-7" />
                </q-item-section>
              </q-item>
              <q-item v-if="eventsList.length === 0">
                <q-item-section class="text-center text-grey q-pa-xl"
                  >ไม่มีกิจกรรมในเดือนนี้</q-item-section
                >
              </q-item>
            </q-list>
            <div class="q-pa-sm text-center bg-grey-1">
              <q-btn flat color="primary" label="ดูปฏิทินทั้งหมด" size="sm" />
            </div>
          </q-card>
        </div>

        <!-- ACTIVITY GALLERY (ENHANCED) -->
        <div class="col-12 col-md-8 animate-fade-in-up delay-2">
          <div class="row items-center justify-between q-mb-md">
            <div class="text-h5 text-primary text-weight-bold">
              <q-icon name="photo_library" class="q-mr-sm" />ภาพกิจกรรมล่าสุด
            </div>
            <q-tabs
              v-model="tab"
              dense
              class="text-grey"
              active-color="primary"
              indicator-color="primary"
              align="right"
              narrow-indicator
            >
              <q-tab name="all" label="ทั้งหมด" />
              <q-tab name="kg" label="อนุบาล" />
              <q-tab name="pr" label="ประถม" />
            </q-tabs>
          </div>
          <q-tab-panels v-model="tab" animated class="bg-transparent">
            <q-tab-panel name="all" class="q-pa-none">
              <div class="row q-col-gutter-md">
                <div class="col-6 col-sm-4" v-for="(act, index) in activities" :key="'act' + index">
                  <q-card class="hover-card">
                    <q-img :src="act.img" ratio="1.33" class="rounded-borders">
                      <div
                        class="absolute-bottom text-center text-caption"
                        style="padding: 8px; background: rgba(0, 0, 0, 0.6)"
                      >
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
        <div class="text-h4 text-primary text-weight-bold q-mb-lg text-center">
          ทำเนียบคุณครูประจำชั้น
        </div>
        <div class="row q-col-gutter-lg justify-center">
          <div class="col-12 col-md-4 animate-fade-in-up delay-1">
            <q-card
              flat
              bordered
              class="text-center q-pa-lg"
              style="border-radius: 16px; border-top: 4px solid var(--q-primary)"
            >
              <div class="text-h6 text-weight-bold q-mb-md">สายชั้นอนุบาล</div>
              <div class="row justify-center q-gutter-md">
                <div class="col-5">
                  <q-avatar size="80px" class="shadow-2 q-mb-sm">
                    <img
                      src="https://api.dicebear.com/7.x/initials/svg?seed=กมลวรรณ&backgroundColor=4caf50"
                    />
                  </q-avatar>
                  <div class="text-weight-bold">นางกมลวรรณ ใจดี</div>
                  <div class="text-caption text-grey">ครูประจำชั้น อนุบาล 1</div>
                </div>
                <div class="col-5">
                  <q-avatar size="80px" class="shadow-2 q-mb-sm">
                    <img
                      src="https://api.dicebear.com/7.x/initials/svg?seed=สุนิสา&backgroundColor=4caf50"
                    />
                  </q-avatar>
                  <div class="text-weight-bold">นางสาวสุนิสา รักษ์เด็ก</div>
                  <div class="text-caption text-grey">ครูประจำชั้น อนุบาล 2</div>
                </div>
              </div>
            </q-card>
          </div>

          <div class="col-12 col-md-4 animate-fade-in-up delay-2">
            <q-card
              flat
              bordered
              class="text-center q-pa-lg"
              style="border-radius: 16px; border-top: 4px solid var(--q-secondary)"
            >
              <div class="text-h6 text-weight-bold q-mb-md">สายชั้น ป.1 - ป.3</div>
              <div class="row justify-center q-gutter-md">
                <div class="col-5">
                  <q-avatar size="80px" class="shadow-2 q-mb-sm">
                    <img
                      src="https://api.dicebear.com/7.x/initials/svg?seed=สมพร&backgroundColor=ffb300"
                    />
                  </q-avatar>
                  <div class="text-weight-bold">นางสมพร ประเสริฐ</div>
                  <div class="text-caption text-grey">ครูประจำชั้น ป.1</div>
                </div>
                <div class="col-5">
                  <q-avatar size="80px" class="shadow-2 q-mb-sm">
                    <img
                      src="https://api.dicebear.com/7.x/initials/svg?seed=วิชัย&backgroundColor=ffb300"
                    />
                  </q-avatar>
                  <div class="text-weight-bold">นายวิชัย แสงทอง</div>
                  <div class="text-caption text-grey">ครูประจำชั้น ป.2</div>
                </div>
              </div>
            </q-card>
          </div>

          <div class="col-12 col-md-4 animate-fade-in-up delay-3">
            <q-card
              flat
              bordered
              class="text-center q-pa-lg"
              style="border-radius: 16px; border-top: 4px solid var(--q-accent)"
            >
              <div class="text-h6 text-weight-bold q-mb-md">สายชั้น ป.4 - ป.6</div>
              <div class="row justify-center q-gutter-md">
                <div class="col-5">
                  <q-avatar size="80px" class="shadow-2 q-mb-sm">
                    <img
                      src="https://api.dicebear.com/7.x/initials/svg?seed=สมชาย&backgroundColor=1976d2"
                    />
                  </q-avatar>
                  <div class="text-weight-bold">นายสมชาย ชาญชัย</div>
                  <div class="text-caption text-grey">ครูประจำชั้น ป.4</div>
                </div>
                <div class="col-5">
                  <q-avatar size="80px" class="shadow-2 q-mb-sm">
                    <img
                      src="https://api.dicebear.com/7.x/initials/svg?seed=วิไลวรรณ&backgroundColor=1976d2"
                    />
                  </q-avatar>
                  <div class="text-weight-bold">น.ส.วิไลวรรณ พลเยี่ยม</div>
                  <div class="text-caption text-grey">ครูประจำชั้น ป.6</div>
                </div>
              </div>
            </q-card>
          </div>
        </div>
      </section>

      <!-- [NEW] DIRECTOR'S MESSAGE -->
      <section class="q-mb-xl q-mt-xl animate-fade-in-up">
        <q-card flat bordered class="overflow-hidden bg-white" style="border-radius: 16px">
          <div class="row items-stretch">
            <div class="col-12 col-md-4 bg-primary text-center q-pa-xl flex flex-center">
              <div>
                <q-avatar
                  size="150px"
                  class="shadow-4 q-mb-md"
                  style="border: 4px solid white; background-color: white"
                >
                  <img
                    src="https://api.dicebear.com/7.x/initials/svg?seed=สมศักดิ์&backgroundColor=1976d2"
                  />
                </q-avatar>
                <div class="text-h6 text-white text-weight-bold">นายสมศักดิ์ รักการศึกษา</div>
                <div class="text-white" style="opacity: 0.9">ผู้อำนวยการโรงเรียนบ้านท่าซุง</div>
              </div>
            </div>
            <div class="col-12 col-md-8 q-pa-xl flex column justify-center relative-position">
              <q-icon
                name="format_quote"
                color="grey-3"
                size="80px"
                class="absolute-top-right q-pa-md"
                style="z-index: 0"
              />
              <div style="z-index: 1">
                <div class="text-h4 text-primary text-weight-bold q-mb-md">สารจากผู้อำนวยการ</div>
                <p class="text-body1 text-grey-8" style="line-height: 1.8">
                  "โรงเรียนบ้านท่าซุง มุ่งมั่นพัฒนาผู้เรียนให้มีความรู้คู่คุณธรรม
                  ส่งเสริมทักษะวิชาการและทักษะชีวิตในศตวรรษที่ 21
                  ภายใต้สภาพแวดล้อมที่ปลอดภัยและเอื้อต่อการเรียนรู้
                  เราพร้อมที่จะร่วมมือกับผู้ปกครองและชุมชน
                  ในการสร้างอนาคตที่สดใสให้กับบุตรหลานของเราทุกคน
                  เพราะเราเชื่อว่าเด็กทุกคนคืออนาคตของชาติ"
                </p>
                <div class="q-mt-lg">
                  <q-btn
                    outline
                    color="primary"
                    label="อ่านวิสัยทัศน์เพิ่มเติม"
                    rounded
                    class="q-px-md"
                  />
                </div>
              </div>
            </div>
          </div>
        </q-card>
      </section>

      <!-- [NEW] SCHOOL STATISTICS -->
      <section class="q-mb-xl q-pb-md">
        <div class="row q-col-gutter-lg justify-center">
          <div class="col-6 col-md-3 text-center animate-fade-in-up delay-1">
            <div class="text-h2 text-primary text-weight-bolder q-mb-xs">
              300<span class="text-h4 text-weight-bold">+</span>
            </div>
            <div class="text-subtitle1 text-grey-8 text-weight-medium">นักเรียนปัจจุบัน</div>
          </div>
          <div class="col-6 col-md-3 text-center animate-fade-in-up delay-2">
            <div class="text-h2 text-secondary text-weight-bolder q-mb-xs">
              25<span class="text-h4 text-weight-bold">+</span>
            </div>
            <div class="text-subtitle1 text-grey-8 text-weight-medium">ครูและบุคลากร</div>
          </div>
          <div class="col-6 col-md-3 text-center animate-fade-in-up delay-3">
            <div class="text-h2 text-accent text-weight-bolder q-mb-xs">
              40<span class="text-h4 text-weight-bold"> ปี</span>
            </div>
            <div class="text-subtitle1 text-grey-8 text-weight-medium">ก่อตั้งและพัฒนา</div>
          </div>
          <div class="col-6 col-md-3 text-center animate-fade-in-up delay-4">
            <div class="text-h2 text-positive text-weight-bolder q-mb-xs">
              20<span class="text-h4 text-weight-bold">+</span>
            </div>
            <div class="text-subtitle1 text-grey-8 text-weight-medium">กิจกรรมพัฒนาผู้เรียน</div>
          </div>
        </div>
      </section>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useQuasar } from 'quasar';
import { useNewsStore } from '@/stores/news';

const $q = useQuasar();
const router = useRouter();
const newsStore = useNewsStore();

const slide = ref('1');
const noticeSlide = ref(0);
const tab = ref('all');
const calendarMode = ref('grid');
const latestNews = computed(() => newsStore.getLatestNews);
const featuredNews = computed(() => latestNews.value.length > 0 ? latestNews.value[0] : null);
const regularNewsList = computed(() => latestNews.value.length > 1 ? latestNews.value.slice(1) : []);

// Mock fast notices for the sidebar
const fastNotices = [
  { id: '101', title: 'ประกาศหยุดเรียนกรณีพิเศษ วันที่ 15 ส.ค.', date: '1 ชม. ที่แล้ว', image: '/hero1.png' },
  { id: '102', title: 'แจ้งเปลี่ยนแปลงกำหนดการจ่ายเงินอุดหนุน', date: '3 ชม. ที่แล้ว', image: '/hero2.png' },
  { id: '103', title: 'รายชื่อผู้ผ่านการสอบคัดเลือกครูอัตราจ้าง', date: 'เมื่อวานนี้', image: '/hero3.png' }
];
onMounted(() => {
  calendarMode.value = $q.screen.lt.sm ? 'list' : 'grid';
  void newsStore.fetchNews();
});

watch(
  () => $q.screen.lt.sm,
  (isMobile) => {
    calendarMode.value = isMobile ? 'list' : 'grid';
  },
);

// Calendar Data Mock
const events = {
  1: [{ title: 'วันแรงงาน', color: 'bg-green-7' }],
  4: [{ title: 'วันฉัตรมงคล', color: 'bg-green-7' }],
  13: [{ title: 'วันพืชมงคล', color: 'bg-green-7' }],
  15: [{ title: 'เปิดเทอม 1/68', color: 'bg-blue-7' }],
} as Record<number, { title: string; color: string }[]>;

const eventsList = computed(() => {
  const list: { day: number; title: string; color: string }[] = [];
  for (let i = 1; i <= 31; i++) {
    events[i]?.forEach((ev) => list.push({ day: i, title: ev.title, color: ev.color }));
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
  transition:
    box-shadow 0.3s,
    transform 0.3s;
}
.hover-card:hover {
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  transform: translateY(-5px);
}
</style>
