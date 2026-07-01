<template>
  <q-layout view="lHh Lpr lff" style="background-color: #f8faf2;">
    <!-- HEADER -->
    <q-header class="bg-white text-dark border-bottom" height-hint="64">
      <q-toolbar class="q-py-sm px-md">
        <q-btn flat round dense icon="menu" @click="toggleLeftDrawer" class="q-mr-sm text-grey-8" />
        <q-toolbar-title
          class="text-weight-bold text-primary"
          style="font-family: 'Be Vietnam Pro', sans-serif"
        >
          Ban Tha Sung Admin
        </q-toolbar-title>
        <q-space />
        <div class="flex items-center q-gutter-md">
          <q-btn flat round dense icon="notifications" class="text-grey-7">
            <q-badge color="red" rounded floating />
          </q-btn>
          <q-btn flat round dense icon="help_outline" class="text-grey-7" />
          <q-separator vertical class="q-mx-sm" />
          <div class="flex items-center q-gutter-sm">
            <div class="text-right">
              <div class="text-weight-bold text-body2 leading-tight">Super Admin</div>
              <div class="text-caption text-grey-6 leading-none">System Owner</div>
            </div>
            <q-avatar
              size="40px"
              class="q-ml-sm border-primary"
              style="border: 2px solid var(--q-primary)"
            >
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBB8XjLL7nhCdj6bvYvzPd7_SSY6iym8y8zE5FpsALN3zQhBqLcqnlxP49dsHMICNOggajcIr6tct0GVW-NSRbieA-Gt1XPebwoF71TZjfIDutqLVR1uGIywbN_qUZ2c9oCXqAUZgEcDEuJL1nPIhjmiDSXQpWSJGeDhzeuO9zADk12Jibv08hhrziLwbVlMQGGB7JaFFCJozI4eMSM8YuBbQlP8rkjXmZK24jOiVAmlADE1wY-agTL"
              />
            </q-avatar>
          </div>
        </div>
      </q-toolbar>
    </q-header>

    <!-- SIDEBAR -->
    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      class="bg-white flex column justify-between"
    >
      <div>
        <div class="q-pa-lg flex items-center q-gutter-md">
          <q-avatar size="48px" class="bg-primary-1" style="background-color: #e3f2fd">
            <img src="/logo.png" style="padding: 6px" />
          </q-avatar>
          <div>
            <div class="text-weight-bold text-primary text-h6" style="line-height: 1.2">
              Admin Portal
            </div>
            <div class="text-caption text-grey-7">Ban Tha Sung School</div>
          </div>
        </div>

        <q-list class="q-px-sm q-mt-md" style="gap: 4px; display: flex; flex-direction: column">
          <q-item
            clickable
            v-ripple
            to="/admin"
            exact
            active-class="bg-blue-1 text-primary text-weight-bold rounded-borders"
          >
            <q-item-section avatar>
              <q-icon name="dashboard" />
            </q-item-section>
            <q-item-section>Dashboard</q-item-section>
          </q-item>

          <q-item
            clickable
            v-ripple
            to="/admin/news"
            active-class="bg-blue-1 text-primary text-weight-bold rounded-borders"
            class="text-grey-8"
          >
            <q-item-section avatar>
              <q-icon name="newspaper" />
            </q-item-section>
            <q-item-section>News Management</q-item-section>
          </q-item>

          <q-item
            clickable
            v-ripple
            to="/admin/events"
            active-class="bg-blue-1 text-primary text-weight-bold rounded-borders"
            class="text-grey-8"
          >
            <q-item-section avatar>
              <q-icon name="calendar_month" />
            </q-item-section>
            <q-item-section>Events Calendar</q-item-section>
          </q-item>

          <q-item
            clickable
            v-ripple
            to="/admin/staff"
            active-class="bg-blue-1 text-primary text-weight-bold rounded-borders"
            class="text-grey-8"
          >
            <q-item-section avatar>
              <q-icon name="group" />
            </q-item-section>
            <q-item-section>Staff Directory</q-item-section>
          </q-item>
        </q-list>
      </div>

      <div class="q-pa-md">
        <q-separator class="q-mb-md" />
        <q-list style="gap: 4px; display: flex; flex-direction: column">
          <q-item clickable v-ripple class="text-grey-8">
            <q-item-section avatar>
              <q-icon name="settings" />
            </q-item-section>
            <q-item-section>Settings</q-item-section>
          </q-item>
          <q-item clickable v-ripple class="text-red-8 hover-bg-red-1">
            <q-item-section avatar>
              <q-icon name="logout" color="red" />
            </q-item-section>
            <q-item-section>Logout</q-item-section>
          </q-item>
        </q-list>
      </div>
    </q-drawer>

    <!-- CONTENT -->
    <q-page-container>
      <router-view />

      <!-- Footer -->
      <div class="text-center q-py-md text-grey-6 text-caption border-top bg-white q-mt-xl">
        © 2026 Ban Tha Sung School. All rights reserved. Admin System v2.4.0
      </div>
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

<style scoped>
.border-bottom {
  border-bottom: 1px solid #e0e0e0;
}
.border-top {
  border-top: 1px solid #e0e0e0;
}
.rounded-borders {
  border-radius: 8px;
}
.hover-bg-red-1:hover {
  background-color: #ffebee;
  border-radius: 8px;
}
</style>
