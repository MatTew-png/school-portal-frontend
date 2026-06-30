<template>
  <q-page class="bg-grey-2 q-pa-md">
    <div class="text-h4 text-weight-bold text-dark q-mb-lg">ภาพรวมระบบ (Dashboard)</div>

    <div class="row q-col-gutter-md">
      <div class="col-12 col-md-4">
        <q-card flat bordered class="bg-white">
          <q-card-section class="row items-center">
            <q-icon name="newspaper" size="xl" color="primary" class="q-mr-md" />
            <div>
              <div class="text-h6 text-grey-8">จำนวนข่าวทั้งหมด</div>
              <div class="text-h4 text-weight-bold">{{ totalNews }}</div>
            </div>
          </q-card-section>
          <q-card-actions align="right">
            <q-btn flat color="primary" label="จัดการข่าวสาร" to="/admin/news" />
          </q-card-actions>
        </q-card>
      </div>

      <div class="col-12 col-md-4">
        <q-card flat bordered class="bg-white">
          <q-card-section class="row items-center">
            <q-icon name="event" size="xl" color="orange-8" class="q-mr-md" />
            <div>
              <div class="text-h6 text-grey-8">จำนวนกิจกรรมทั้งหมด</div>
              <div class="text-h4 text-weight-bold">{{ totalEvents }}</div>
            </div>
          </q-card-section>
          <q-card-actions align="right">
            <q-btn flat color="orange-8" label="จัดการปฏิทิน" to="/admin/events" />
          </q-card-actions>
        </q-card>
      </div>

      <div class="col-12 col-md-4">
        <q-card flat bordered class="bg-white">
          <q-card-section class="row items-center">
            <q-icon name="visibility" size="xl" color="green-6" class="q-mr-md" />
            <div>
              <div class="text-h6 text-grey-8">ยอดการเข้าชมข่าว</div>
              <div class="text-h4 text-weight-bold">{{ totalViews }}</div>
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useNewsStore } from '@/stores/news';
import { useEventsStore } from '@/stores/events';

const newsStore = useNewsStore();
const eventsStore = useEventsStore();

const totalNews = computed(() => newsStore.newsList.length);
const totalEvents = computed(() => eventsStore.eventsList.length);
const totalViews = computed(() => {
  return newsStore.newsList.reduce((acc, curr) => acc + (curr.views || 0), 0);
});
</script>
