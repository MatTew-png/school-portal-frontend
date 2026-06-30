<template>
  <q-page class="bg-grey-2 q-pa-md">
    <!-- PAGE HEADER -->
    <div class="row items-center q-mb-md">
      <div class="text-h5 text-weight-bold text-primary flex items-center">
        <q-icon name="newspaper" class="q-mr-sm" size="md" /> ข่าวสารและประกาศทั้งหมด
      </div>
      <q-space />
      <q-input
        dense
        outlined
        v-model="searchQuery"
        placeholder="ค้นหาข่าวสาร..."
        class="bg-white"
        style="min-width: 250px"
      >
        <template v-slot:append>
          <q-icon name="search" />
        </template>
      </q-input>
    </div>

    <!-- NEWS GRID -->
    <div class="row q-col-gutter-md">
      <div class="col-12 col-sm-6 col-md-4 col-lg-3" v-for="news in filteredNews" :key="news.id">
        <q-card class="news-card h-100 flex column bg-white" flat bordered>
          <img :src="news.image" class="full-width" style="aspect-ratio: 16/9; object-fit: cover" />

          <q-card-section class="q-pb-none">
            <div class="row items-center justify-between q-mb-xs">
              <q-badge color="primary" class="text-weight-bold">{{ news.category }}</q-badge>
              <div class="text-caption text-grey-6 flex items-center">
                <q-icon name="event" class="q-mr-xs" /> {{ news.date }}
              </div>
            </div>
            <div
              class="text-subtitle1 text-weight-bold text-dark ellipsis-2-lines q-mt-sm"
              style="line-height: 1.4"
            >
              {{ news.title }}
            </div>
          </q-card-section>

          <q-card-section class="q-pt-sm text-body2 text-grey-8 ellipsis-3-lines flex-grow-1">
            {{ news.summary }}
          </q-card-section>

          <q-separator />

          <q-card-actions align="between" class="bg-grey-1">
            <div class="text-caption text-grey-6 flex items-center q-pl-sm">
              <q-icon name="visibility" class="q-mr-xs" /> {{ news.views }}
            </div>
            <q-btn
              flat
              color="primary"
              label="อ่านเพิ่มเติม"
              @click="router.push(`/news/${news.id}`)"
            />
          </q-card-actions>
        </q-card>
      </div>
    </div>

    <!-- EMPTY STATE -->
    <div v-if="filteredNews.length === 0" class="text-center q-pa-xl text-grey-6">
      <q-icon name="search_off" size="64px" class="q-mb-md" />
      <div class="text-h6">ไม่พบข่าวสารที่ค้นหา</div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useNewsStore } from '@/stores/news';

const router = useRouter();
const newsStore = useNewsStore();

const searchQuery = ref('');

onMounted(() => {
  void newsStore.fetchNews();
});

const allNews = computed(() => newsStore.newsList);

const filteredNews = computed(() => {
  if (!searchQuery.value) return allNews.value;
  const q = searchQuery.value.toLowerCase();
  return allNews.value.filter(
    (n) =>
      n.title.toLowerCase().includes(q) ||
      n.summary.toLowerCase().includes(q) ||
      n.category.toLowerCase().includes(q),
  );
});
</script>

<style scoped>
.news-card {
  transition:
    transform 0.2s,
    box-shadow 0.2s;
  border-radius: 8px;
  overflow: hidden;
}
.news-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}
.h-100 {
  height: 100%;
}
.flex-grow-1 {
  flex-grow: 1;
}
</style>
