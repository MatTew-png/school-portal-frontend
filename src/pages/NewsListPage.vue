<template>
  <q-page class="bg-grey-2 q-pa-md">
    <!-- PAGE HEADER -->
    <q-card
      flat
      class="q-mb-md bg-secondary text-white shadow-3"
      style="border-radius: 12px; overflow: hidden"
    >
      <q-img src="/hero2.png" style="height: 160px; opacity: 0.7" />
      <div class="absolute-full flex flex-center column" style="background: rgba(0, 0, 0, 0.25)">
        <div class="text-h3 text-weight-bold flex items-center text-center">
          <q-icon name="campaign" class="q-mr-md" size="xl" /> ข่าวสารและประกาศ
        </div>
        <div class="text-subtitle1 q-mt-sm text-center">
          อัปเดตข่าวสารและกิจกรรมล่าสุดจากโรงเรียนบ้านท่าซุง
        </div>
      </div>
    </q-card>

    <!-- SEARCH BAR -->
    <div class="row items-center justify-end q-mb-lg">
      <q-input
        dense
        outlined
        v-model="searchQuery"
        placeholder="ค้นหาหัวข้อข่าว หรือเนื้อหา..."
        class="bg-white shadow-1"
        style="min-width: 300px; border-radius: 8px"
      >
        <template v-slot:append>
          <q-icon name="search" color="primary" />
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
