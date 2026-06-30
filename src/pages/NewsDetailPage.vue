<template>
  <q-page class="bg-grey-1 q-pb-xl">
    
    <!-- LOADING STATE -->
    <div v-if="loading" class="flex flex-center q-pa-xl" style="min-height: 50vh;">
      <q-spinner-dots color="primary" size="3em" />
    </div>

    <!-- NOT FOUND STATE -->
    <div v-else-if="!newsItem" class="flex flex-center q-pa-xl" style="min-height: 50vh;">
      <div class="text-center">
        <q-icon name="error_outline" size="4em" color="grey-6" class="q-mb-md" />
        <div class="text-h5 text-grey-8 q-mb-md">ไม่พบข่าวสารที่คุณต้องการ</div>
        <q-btn color="primary" label="กลับไปหน้าข่าวสาร" to="/news" unelevated rounded />
      </div>
    </div>

    <!-- CONTENT STATE -->
    <div v-else>
      <!-- Hero Image -->
      <div class="relative-position" style="height: 400px; max-height: 50vh; overflow: hidden;">
        <q-img :src="newsItem.image" class="fit">
          <template v-slot:error>
            <div class="absolute-full flex flex-center bg-grey-3 text-grey-6">
              No Image
            </div>
          </template>
        </q-img>
        <div class="absolute-bottom text-white q-pa-xl" style="background: linear-gradient(transparent, rgba(0,0,0,0.9));">
          <div style="max-width: 900px; margin: 0 auto;">
            <q-chip color="accent" text-color="dark" class="text-weight-bold q-mb-sm">{{ newsItem.category }}</q-chip>
            <div class="text-h3 text-weight-bold q-mb-sm" style="line-height: 1.3;">{{ newsItem.title }}</div>
          </div>
        </div>
      </div>

      <!-- Main Content -->
      <div class="q-pa-md q-pa-md-xl q-mt-md" style="max-width: 900px; margin: 0 auto; background: white; border-radius: 12px; transform: translateY(-40px); box-shadow: 0 4px 20px rgba(0,0,0,0.05);">
        
        <!-- Metadata -->
        <div class="row items-center q-mb-lg text-grey-7" style="border-bottom: 1px solid #eee; padding-bottom: 16px;">
          <q-icon name="calendar_today" size="sm" class="q-mr-sm" /> 
          <span class="text-subtitle1 q-mr-lg">{{ newsItem.date }}</span>
          <q-icon name="visibility" size="sm" class="q-mr-sm" /> 
          <span class="text-subtitle1">{{ newsItem.views }} ครั้ง</span>
          <q-space />
          <q-btn flat round icon="share" color="primary" title="แชร์" @click="shareNews" />
        </div>

        <!-- Article -->
        <div class="text-body1 text-dark article-content q-mb-xl" v-html="formattedContent"></div>

        <q-separator class="q-my-lg" />

        <!-- Back Button -->
        <div class="text-center">
          <q-btn 
            color="primary" 
            outline 
            :label="route.query.from === 'home' ? 'กลับไปหน้าแรก' : 'กลับไปหน้ารวมข่าวสาร'" 
            icon="arrow_back" 
            :to="route.query.from === 'home' ? '/' : '/news'" 
            class="q-px-lg" 
            rounded 
            size="lg" 
          />
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useQuasar } from 'quasar';
import { useNewsStore, type NewsItem } from '@/stores/news';

const route = useRoute();
const $q = useQuasar();
const newsStore = useNewsStore();

const loading = ref(true);
const newsItem = ref<NewsItem | undefined>(undefined);

onMounted(() => {
  const id = route.params.id as string;
  if (id) {
    void newsStore.getNewsById(id).then((item) => {
      newsItem.value = item;
      loading.value = false;
    }).catch(() => {
      loading.value = false;
    });
  } else {
    loading.value = false;
  }
});

// A simple formatter to render the mock markdown content
const formattedContent = computed(() => {
  if (!newsItem.value?.content) return '';
  let content = newsItem.value.content;
  // bold
  content = content.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  // newlines
  content = content.replace(/\n/g, '<br/>');
  return content;
});

const shareNews = () => {
  $q.notify({
    message: 'คัดลอกลิงก์สำเร็จ!',
    color: 'positive',
    icon: 'check_circle'
  });
};
</script>

<style scoped>
.article-content {
  line-height: 1.8;
  font-size: 1.15rem;
}
.article-content strong {
  color: var(--q-primary);
}
</style>
