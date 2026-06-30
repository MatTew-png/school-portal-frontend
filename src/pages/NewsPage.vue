<template>
  <q-page class="bg-grey-1 q-pb-xl">
    <!-- HERO SECTION -->
    <section class="bg-primary text-white text-center q-py-xl relative-position">
      <div class="text-h3 text-weight-bold q-mb-md animate-fade-in-up">ข่าวสารและประกาศ</div>
      <div class="text-subtitle1 text-grey-3 animate-fade-in-up delay-1">
        อัปเดตความเคลื่อนไหว กิจกรรม และประกาศสำคัญจากโรงเรียน
      </div>
    </section>

    <div class="q-pa-md q-px-md-xl q-mt-md">
      <!-- FILTERS -->
      <div class="row justify-center q-mb-xl">
        <q-tabs
          v-model="activeCategory"
          dense
          class="text-grey-8 bg-white shadow-2"
          active-color="primary"
          indicator-color="primary"
          align="center"
          narrow-indicator
          style="border-radius: 12px; padding: 4px;"
        >
          <q-tab name="ทั้งหมด" label="ทั้งหมด" />
          <q-tab name="ประกาศรับสมัคร" label="รับสมัคร" />
          <q-tab name="กิจกรรม" label="กิจกรรม" />
          <q-tab name="วิชาการ" label="วิชาการ" />
          <q-tab name="ทั่วไป" label="ทั่วไป" />
        </q-tabs>
      </div>

      <!-- LOADING STATE -->
      <div v-if="loading" class="row justify-center q-py-xl">
        <q-spinner-dots color="primary" size="3em" />
      </div>

      <!-- NEWS GRID -->
      <div v-else class="row q-col-gutter-lg justify-center">
        <div 
          class="col-12 col-sm-6 col-md-4 col-lg-3 animate-fade-in-up" 
          v-for="(item, index) in filteredNews" 
          :key="item.id"
          :style="{ animationDelay: `${index * 0.1}s` }"
        >
          <q-card class="my-card h-100 shadow-2 hover-card" @click="router.push(`/news/${item.id}`)" style="cursor: pointer; border-radius: 16px; overflow: hidden;">
            <q-img :src="item.image" height="220px">
              <template v-slot:error>
                <div class="absolute-full flex flex-center bg-grey-3 text-grey-6">
                  No Image
                </div>
              </template>
            </q-img>
            <q-card-section>
              <div class="text-overline text-accent text-weight-bold">{{ item.category }}</div>
              <div class="text-h6 q-mt-xs q-mb-sm ellipsis-2-lines" style="line-height: 1.3;">{{ item.title }}</div>
              <div class="text-caption text-grey flex items-center q-mb-md">
                <q-icon name="calendar_today" class="q-mr-xs" /> {{ item.date }}
                <q-space />
                <q-icon name="visibility" class="q-mr-xs" /> {{ item.views }}
              </div>
              <div class="text-body2 text-grey-8 ellipsis-3-lines">
                {{ item.summary }}
              </div>
            </q-card-section>
          </q-card>
        </div>
      </div>
      
      <!-- EMPTY STATE -->
      <div v-if="!loading && filteredNews.length === 0" class="text-center q-py-xl text-grey-6">
        <q-icon name="article" size="4em" class="q-mb-md" />
        <div class="text-h6">ไม่มีข่าวสารในหมวดหมู่นี้</div>
      </div>

    </div>
  </q-page>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useNewsStore, type NewsItem } from '@/stores/news';

const router = useRouter();
const newsStore = useNewsStore();

const activeCategory = ref('ทั้งหมด');
const loading = ref(true);
const allNews = ref<NewsItem[]>([]);

onMounted(() => {
  void newsStore.fetchNews().then((news) => {
    allNews.value = news;
    loading.value = false;
  }).catch(() => {
    loading.value = false;
  });
});

const filteredNews = computed(() => {
  if (activeCategory.value === 'ทั้งหมด') {
    return allNews.value;
  }
  return allNews.value.filter(n => n.category === activeCategory.value);
});
</script>

<style scoped>
.hover-card {
  transition: transform 0.3s, box-shadow 0.3s;
}
.hover-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0,0,0,0.12) !important;
}
.h-100 {
  height: 100%;
}
.ellipsis-2-lines {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.ellipsis-3-lines {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
