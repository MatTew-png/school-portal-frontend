<template>
  <q-layout view="lhh lpR lff">
    <!-- HEADER -->
    <q-header elevated class="bg-primary text-white">
      <q-toolbar class="q-py-sm q-px-md">
        <!-- Logo and Title -->
        <q-btn flat no-caps :ripple="false" to="/" class="q-pa-none">
          <q-avatar size="48px" class="q-mr-sm bg-white">
            <img src="/logo.png" alt="School Logo" style="padding: 2px;" />
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
          <q-btn color="accent" text-color="dark" label="ระบบรับสมัคร" class="q-ml-md text-weight-bold" unelevated />
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
          <q-btn color="accent" text-color="dark" label="ระบบรับสมัคร" class="full-width" unelevated />
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
          <div class="col-12 col-md-4">
            <div class="row items-center q-mb-md">
              <q-avatar size="40px" class="q-mr-sm bg-white">
                <img src="/logo.png" style="padding: 2px;" />
              </q-avatar>
              <div class="text-h6 text-weight-bold">โรงเรียนบ้านท่าซุง</div>
            </div>
            <p>สังกัด สพป.ฉะเชิงเทรา เขต 2</p>
            <p><q-icon name="phone" class="q-mr-sm"/> 038-xxx-xxxx</p>
            <p><q-icon name="email" class="q-mr-sm"/> admin@baanthasung.ac.th</p>
            <q-btn color="accent" text-color="dark" label="ติดต่อโรงเรียน" class="q-mt-sm text-weight-bold" unelevated icon="contact_support" />
          </div>

          <!-- Column 2: Admission -->
          <div class="col-12 col-md-4">
            <div class="text-h6 q-mb-md">ฝ่ายวิชาการและธุรการ</div>
            <div class="row items-center q-mb-sm">
              <q-icon name="school" size="32px" class="q-mr-md" />
              <span>สอบถามข้อมูลการรับสมัครนักเรียนใหม่ ประจำปีการศึกษา 2567</span>
            </div>
            <q-btn color="accent" text-color="dark" label="ระบบรับสมัครนักเรียน" class="q-mt-sm text-weight-bold full-width-sm" unelevated icon="how_to_reg" />
          </div>

          <!-- Column 3: Feedback & CTA -->
          <div class="col-12 col-md-4 text-right">
            <q-btn color="accent" text-color="dark" label="ส่งข้อเสนอแนะ" unelevated icon="feedback" class="text-weight-bold q-mb-lg" />
          </div>

        </div>

        <q-separator color="white" class="q-my-lg opacity-50" style="opacity: 0.3;" />

        <!-- Bottom Footer -->
        <div class="row items-center justify-between">
          <div>&copy; 2026 โรงเรียนบ้านท่าซุง. All rights reserved.</div>
          <div class="row q-gutter-sm">
            <q-btn flat round dense icon="facebook" />
            <q-btn flat round dense icon="ondemand_video" /> <!-- YouTube -->
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
