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
          <q-btn flat label="ข่าวสาร" to="/news" />
          <q-btn flat label="ปฏิทินกิจกรรม" to="/calendar" />

          <!-- Dropdown -->
          <q-btn-dropdown flat label="ข้อมูลเพิ่มเติม">
            <q-list>
              <q-item clickable v-close-popup to="/about?tab=history">
                <q-item-section>ประวัติโรงเรียน และตราสัญลักษณ์</q-item-section>
              </q-item>
              <q-item clickable v-close-popup to="/about?tab=chart">
                <q-item-section>ผังโครงสร้างการบริหารงาน</q-item-section>
              </q-item>
              <q-item clickable v-close-popup to="/about?tab=teachers">
                <q-item-section>ทำเนียบครูและบุคลากร</q-item-section>
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
      <div
        class="row justify-between items-center q-pa-md bg-grey-1"
        style="border-bottom: 1px solid #eee"
      >
        <div class="text-weight-bold text-primary text-subtitle1">เมนูหลัก</div>
        <q-btn flat round dense icon="close" @click="rightDrawerOpen = false" color="grey-7" />
      </div>
      <q-list class="q-pt-sm">
        <q-item clickable to="/" @click="rightDrawerOpen = false">
          <q-item-section avatar><q-icon name="home" color="primary" /></q-item-section>
          <q-item-section>หน้าแรก</q-item-section>
        </q-item>
        <q-item clickable to="/news" @click="rightDrawerOpen = false">
          <q-item-section avatar><q-icon name="article" color="primary" /></q-item-section>
          <q-item-section>ข่าวสาร</q-item-section>
        </q-item>
        <q-item clickable to="/calendar" @click="rightDrawerOpen = false">
          <q-item-section avatar><q-icon name="event" color="primary" /></q-item-section>
          <q-item-section>ปฏิทินกิจกรรม</q-item-section>
        </q-item>
        <q-expansion-item label="ข้อมูลเพิ่มเติม" icon="info" expand-separator class="text-primary">
          <q-list class="q-pl-lg">
            <q-item clickable to="/about?tab=history" @click="rightDrawerOpen = false"
              ><q-item-section class="text-dark">ประวัติโรงเรียน</q-item-section></q-item
            >
            <q-item clickable to="/about?tab=chart" @click="rightDrawerOpen = false"
              ><q-item-section class="text-dark">โครงสร้างการบริหาร</q-item-section></q-item
            >
            <q-item clickable to="/about?tab=teachers" @click="rightDrawerOpen = false"
              ><q-item-section class="text-dark">ทำเนียบครู</q-item-section></q-item
            >
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
        <div class="q-pa-md">
          <div class="row items-center justify-between">
            <div class="col-12 col-md-6 q-mb-md-none q-mb-sm text-center text-md-left">
              <div class="text-subtitle1 text-weight-bold q-mb-xs">
                <q-avatar size="28px" class="q-mr-sm bg-white">
                  <img src="/logo.png" style="padding: 2px" />
                </q-avatar>
                โรงเรียนบ้านท่าซุง
              </div>
              <div class="text-caption text-grey-4">
                206 หมู่ 3 ต.ลาดกระทิง อ.สนามชัยเขต จ.ฉะเชิงเทรา 24160 | โทร: 089-9822037
              </div>
            </div>

            <div class="col-12 col-md-6 text-center text-md-right">
              <div class="q-gutter-sm">
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
              </div>
              <div class="text-caption text-grey-4 q-mt-xs">
                &copy; 2026 โรงเรียนบ้านท่าซุง. All rights reserved. |
                <a href="#" class="text-grey-4">Teacher Portal</a>
              </div>
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
/* No extra footer CSS needed for compact footer */
</style>
