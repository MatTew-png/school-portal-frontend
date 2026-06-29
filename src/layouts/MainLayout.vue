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
          <q-btn flat round dense icon="menu" @click="toggleLeftDrawer" />
        </div>
      </q-toolbar>
    </q-header>

    <!-- MOBILE DRAWER -->
    <q-drawer v-model="leftDrawerOpen" side="left" bordered overlay>
      <q-list class="q-mt-md">
        <q-item clickable to="/">
          <q-item-section>หน้าแรก</q-item-section>
        </q-item>
        <q-item clickable>
          <q-item-section>ข่าวสาร</q-item-section>
        </q-item>
        <q-expansion-item label="ข้อมูลเพิ่มเติม">
          <q-list class="q-pl-md">
            <q-item clickable><q-item-section>ประวัติโรงเรียน</q-item-section></q-item>
            <q-item clickable><q-item-section>ทำเนียบครู</q-item-section></q-item>
          </q-list>
        </q-expansion-item>
        <q-item class="q-mt-md">
          <q-btn
            color="accent"
            text-color="dark"
            label="ระบบรับสมัคร"
            class="full-width"
            unelevated
          />
        </q-item>
      </q-list>
    </q-drawer>

    <!-- PAGE CONTAINER -->
    <q-page-container>
      <router-view />
    </q-page-container>

    <!-- FOOTER -->
    <q-footer class="bg-primary text-white">
      <div class="q-pa-xl">
        <div class="row q-col-gutter-lg justify-between">
          <!-- Column 1: Contact Info -->
          <div class="col-12 col-md-4 footer-col">
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
              <p><q-icon name="phone" class="q-mr-sm" /> 038-xxx-xxxx</p>
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
          <div class="col-12 col-md-4 footer-col">
            <div class="footer-col-inner">
              <div class="text-h6 q-mb-md row items-center">
                <q-icon name="facebook" size="28px" class="q-mr-sm" /> ติดตามข่าวสารจากเพจ
              </div>
              <div class="bg-white shadow-4" style="border-radius: 12px; padding: 6px;">
                <div style="border-radius: 8px; overflow: hidden; height: 400px; -webkit-mask-image: -webkit-radial-gradient(white, black); transform: translateZ(0);">
                  <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FBanthasungschool&tabs=timeline&width=360&height=400&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=false&appId" width="100%" height="400" style="border:none;overflow:hidden;" scrolling="yes" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                </div>
              </div>
            </div>
          </div>

          <!-- Column 3: Google Map -->
          <div class="col-12 col-md-4 footer-col">
            <div class="footer-col-inner">
              <div class="text-h6 q-mb-md row items-center">
                <q-icon name="place" size="28px" class="q-mr-sm" /> แผนที่การเดินทาง
              </div>
              <div class="bg-white shadow-4" style="border-radius: 12px; padding: 6px;">
                <div style="border-radius: 8px; overflow: hidden; height: 400px; -webkit-mask-image: -webkit-radial-gradient(white, black); transform: translateZ(0);">
                  <iframe src="https://maps.google.com/maps?q=13.5809976,101.517889&t=k&z=16&output=embed" width="100%" height="400" style="border:none;overflow:hidden;" allowfullscreen="true" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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
    </q-footer>
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const leftDrawerOpen = ref(false);

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
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
