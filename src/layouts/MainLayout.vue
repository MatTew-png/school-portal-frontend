<template>
  <q-layout view="lhh lpR lff">
    <!-- HEADER -->
    <q-header elevated class="bg-primary text-white">
      <q-toolbar class="q-py-sm q-px-md">
        <!-- Logo and Title -->
        <q-btn flat no-caps :ripple="false" to="/" class="q-pa-none">
          <q-avatar size="48px" class="q-mr-sm bg-white">
            <img src="/logo.png" alt="School Logo" style="padding: 2px" />
          </q-avatar>
          <div class="text-h6 text-weight-bold">โรงเรียนบ้านท่าซุง</div>
        </q-btn>

        <q-space />

        <!-- Navigation Desktop -->
        <div class="gt-sm row items-center">
          <q-btn flat label="หน้าแรก" to="/" />
          <q-btn flat label="ข่าวสาร" />
          <q-btn flat label="ปฏิทินกิจกรรม" />

          <!-- Dropdown -->
          <q-btn-dropdown flat label="ข้อมูลเพิ่มเติม">
            <q-list>
              <q-item clickable v-close-popup>
                <q-item-section>ประวัติโรงเรียน และตราสัญลักษณ์</q-item-section>
              </q-item>
              <q-item clickable v-close-popup>
                <q-item-section>คลิปวีดีโอแนะนำโรงเรียน</q-item-section>
              </q-item>
              <q-item clickable v-close-popup>
                <q-item-section>คณะกรรมการบริหาร และที่ปรึกษา</q-item-section>
              </q-item>
              <q-item clickable v-close-popup>
                <q-item-section>ทำเนียบครู</q-item-section>
              </q-item>
              <q-item clickable v-close-popup>
                <q-item-section>ผังโครงสร้างการบริหารงาน</q-item-section>
              </q-item>
              <q-item clickable v-close-popup>
                <q-item-section>แผนการเรียน ระดับประถม</q-item-section>
              </q-item>
            </q-list>
          </q-btn-dropdown>

          <!-- CTA Button -->
          <q-btn
            color="accent"
            text-color="dark"
            label="ระบบรับสมัคร"
            class="q-ml-md text-weight-bold"
            unelevated
          />
        </div>

        <!-- Mobile Menu -->
        <div class="lt-md">
          <q-btn flat round dense icon="menu" @click="toggleRightDrawer" />
        </div>
      </q-toolbar>
    </q-header>

    <!-- MOBILE DRAWER -->
    <q-drawer v-model="rightDrawerOpen" side="right" bordered overlay>
      <div class="row justify-between items-center q-pa-md bg-grey-1" style="border-bottom: 1px solid #eee;">
        <div class="text-weight-bold text-primary text-subtitle1">เมนูหลัก</div>
        <q-btn flat round dense icon="close" @click="rightDrawerOpen = false" color="grey-7" />
      </div>
      <q-list class="q-pt-sm">
        <q-item clickable to="/" @click="rightDrawerOpen = false">
          <q-item-section avatar><q-icon name="home" color="primary" /></q-item-section>
          <q-item-section>หน้าแรก</q-item-section>
        </q-item>
        <q-item clickable @click="rightDrawerOpen = false">
          <q-item-section avatar><q-icon name="article" color="primary" /></q-item-section>
          <q-item-section>ข่าวสาร</q-item-section>
        </q-item>
        <q-expansion-item label="ข้อมูลเพิ่มเติม" icon="info" expand-separator class="text-primary">
          <q-list class="q-pl-lg">
            <q-item clickable @click="rightDrawerOpen = false"><q-item-section class="text-dark">ประวัติโรงเรียน</q-item-section></q-item>
            <q-item clickable @click="rightDrawerOpen = false"><q-item-section class="text-dark">ทำเนียบครู</q-item-section></q-item>
          </q-list>
        </q-expansion-item>
        <q-item class="q-mt-lg">
          <q-btn
            color="accent"
            text-color="dark"
            label="ระบบรับสมัคร"
            class="full-width text-weight-bold"
            unelevated
            @click="rightDrawerOpen = false"
          />
        </q-item>
      </q-list>
    </q-drawer>

    <!-- PAGE CONTAINER -->
    <q-page-container>
      <router-view />

      <!-- FOOTER -->
      <footer class="bg-primary text-white">
        <div class="q-pa-xl">
          <div class="row q-col-gutter-lg justify-between">
            <!-- Column 1: Contact Info -->
            <div class="col-12 col-md-4 footer-col animate-fade-in-up delay-1">
              <div class="footer-col-inner">
                <div class="row items-center q-mb-md">
                  <q-avatar size="40px" class="q-mr-sm bg-white">
                    <img src="/logo.png" style="padding: 2px" />
                  </q-avatar>
                  <div class="text-h6 text-weight-bold">โรงเรียนบ้านท่าซุง</div>
                </div>
                <p>สังกัด สพป.ฉะเชิงเทรา เขต 2</p>
                <p class="row no-wrap">
                  <q-icon name="place" class="q-mr-sm q-mt-xs" size="18px" /> 206 หมู่ 3 ต.ลาดกระทิง
                  อ.สนามชัยเขต จ.ฉะเชิงเทรา 24160
                </p>
                <p><q-icon name="phone" class="q-mr-sm" /> 089-9822037</p>
                <p><q-icon name="email" class="q-mr-sm" />thasungschool.ccs2@gmail.com</p>
                <div class="q-gutter-sm q-mt-sm">
                  <q-btn
                    color="accent"
                    text-color="dark"
                    label="ติดต่อโรงเรียน"
                    unelevated
                    icon="contact_support"
                  />
                  <q-btn
                    color="accent"
                    text-color="dark"
                    label="ระบบรับสมัคร"
                    unelevated
                    icon="how_to_reg"
                  />
                </div>
              </div>
            </div>

            <!-- Column 2: Facebook Page -->
            <div class="col-12 col-md-4 footer-col animate-fade-in-up delay-2">
              <div class="footer-col-inner">
                <div class="text-h6 q-mb-md row items-center">
                  <q-icon name="facebook" size="28px" class="q-mr-sm" /> ติดตามข่าวสารจากเพจ
                </div>
                <div class="bg-white shadow-4 hover-grow" style="border-radius: 12px; padding: 6px">
                  <div
                    style="
                      border-radius: 8px;
                      overflow: hidden;
                      height: 400px;
                      -webkit-mask-image: -webkit-radial-gradient(white, black);
                      transform: translateZ(0);
                    "
                  >
                    <iframe
                      src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FBanthasungschool&tabs=timeline&width=360&height=400&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=false&appId"
                      width="100%"
                      height="400"
                      style="border: none; overflow: hidden"
                      scrolling="yes"
                      frameborder="0"
                      allowfullscreen="true"
                      allow="
                        autoplay;
                        clipboard-write;
                        encrypted-media;
                        picture-in-picture;
                        web-share;
                      "
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>

            <!-- Column 3: Google Map -->
            <div class="col-12 col-md-4 footer-col animate-fade-in-up delay-3">
              <div class="footer-col-inner">
                <div class="text-h6 q-mb-md row items-center">
                  <q-icon name="place" size="28px" class="q-mr-sm" /> แผนที่การเดินทาง
                </div>
                <div class="bg-white shadow-4 hover-grow" style="border-radius: 12px; padding: 6px">
                  <div
                    style="
                      border-radius: 8px;
                      overflow: hidden;
                      height: 400px;
                      -webkit-mask-image: -webkit-radial-gradient(white, black);
                      transform: translateZ(0);
                    "
                  >
                    <iframe
                      src="https://maps.google.com/maps?q=13.5809976,101.517889&t=k&z=16&output=embed"
                      width="100%"
                      height="400"
                      style="border: none; overflow: hidden"
                      allowfullscreen="true"
                      loading="lazy"
                      referrerpolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <q-separator color="white" class="q-my-lg opacity-50" style="opacity: 0.3" />

          <!-- Bottom Footer -->
          <div class="row items-center justify-between">
            <div>&copy; 2026 โรงเรียนบ้านท่าซุง. All rights reserved.</div>
            <div class="row q-gutter-sm">
              <q-btn
                flat
                round
                dense
                icon="facebook"
                type="a"
                href="https://www.facebook.com/Banthasungschool?ref=embed_page"
                target="_blank"
              />
              <q-btn flat round dense icon="ondemand_video" />
              <!-- YouTube -->
            </div>
          </div>
        </div>
      </footer>
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const rightDrawerOpen = ref(false);

function toggleRightDrawer() {
  rightDrawerOpen.value = !rightDrawerOpen.value;
}
</script>

<style scoped>
.footer-col-inner {
  max-width: 360px;
  width: 100%;
}

@media (min-width: 1024px) {
  .footer-col {
    padding-left: 32px;
    padding-right: 32px;
  }

  .footer-col:first-child {
    padding-left: 0;
  }

  .footer-col:last-child {
    padding-right: 0;
  }

  .footer-col:not(:last-child) {
    border-right: 1px solid rgba(255, 255, 255, 0.2);
  }

  .footer-col:first-child .footer-col-inner {
    margin-right: auto;
    margin-left: 0;
  }

  .footer-col:nth-child(2) .footer-col-inner {
    margin: 0 auto;
  }

  .footer-col:last-child .footer-col-inner {
    margin-left: auto;
    margin-right: 0;
  }
}

@media (max-width: 1023px) {
  .footer-col:not(:last-child) {
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    padding-bottom: 24px;
    margin-bottom: 24px;
  }

  .footer-col-inner {
    margin: 0 auto;
  }
}
</style>
