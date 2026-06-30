<template>
  <q-layout view="hHh Lpr lff">
    <!-- HEADER -->
    <q-header elevated class="bg-dark text-white">
      <q-toolbar class="q-py-sm">
        <q-btn flat round dense icon="menu" @click="toggleLeftDrawer" />
        <q-toolbar-title class="text-weight-bold"> ระบบจัดการหลังบ้าน (Admin) </q-toolbar-title>
        <q-btn flat icon="open_in_new" label="ดูหน้าเว็บ" to="/" />
      </q-toolbar>
    </q-header>

    <!-- SIDEBAR -->
    <q-drawer v-model="leftDrawerOpen" show-if-above bordered class="bg-grey-1">
      <div class="q-pa-md flex flex-center column bg-primary text-white">
        <q-avatar size="64px" class="bg-white q-mb-sm">
          <img src="/logo.png" style="padding: 4px" />
        </q-avatar>
        <div class="text-weight-bold">ผู้ดูแลระบบ</div>
      </div>

      <q-list class="q-pt-md">
        <q-item clickable v-ripple to="/admin" exact>
          <q-item-section avatar>
            <q-icon name="dashboard" color="dark" />
          </q-item-section>
          <q-item-section class="text-weight-bold text-dark">ภาพรวม (Dashboard)</q-item-section>
        </q-item>

        <q-separator class="q-my-sm" />

        <q-item clickable v-ripple to="/admin/news">
          <q-item-section avatar>
            <q-icon name="article" color="primary" />
          </q-item-section>
          <q-item-section class="text-weight-bold text-dark">จัดการข่าวสาร</q-item-section>
        </q-item>

        <q-item clickable v-ripple to="/admin/events">
          <q-item-section avatar>
            <q-icon name="event" color="orange-8" />
          </q-item-section>
          <q-item-section class="text-weight-bold text-dark">จัดการปฏิทินกิจกรรม</q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <!-- CONTENT -->
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const leftDrawerOpen = ref(true);

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
</script>
