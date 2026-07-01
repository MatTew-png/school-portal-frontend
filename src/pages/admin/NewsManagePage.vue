<template>
  <q-page class="q-pa-lg bg-background">
    <div class="max-w-container mx-auto">
      <!-- Page Header Section -->
      <div class="row justify-between items-end q-mb-xl">
        <div class="col-12 col-md-8">
          <div class="row items-center q-gutter-x-sm text-primary font-label-lg q-mb-sm">
            <q-icon name="home" size="20px" />
            <span>/</span>
            <span>Content Management</span>
          </div>
          <h1 class="text-h4 font-headline-lg font-bold text-on-background q-my-none" style="color: #191d18; font-family: 'Hanken Grotesk', sans-serif;">จัดการข่าวสารและประกาศ</h1>
          <p class="text-on-surface-variant font-body-md q-mt-sm q-mb-none" style="color: #41493e;">
            บริหารจัดการเนื้อหาข่าวสาร กิจกรรม และประกาศสำคัญสำหรับโรงเรียนบ้านท่าซุง
          </p>
        </div>
        <div class="col-12 col-md-4 text-right q-mt-md q-mt-md-none">
          <button 
            class="bg-primary text-on-primary font-bold px-xl py-md rounded-xl row items-center justify-center q-ml-auto hover-scale shadow-sm cursor-pointer"
            style="background-color: #003b09; color: #ffffff; padding: 12px 24px; border: none; border-radius: 12px; gap: 8px;"
            @click="showAddDialog = true"
          >
            <q-icon name="add" size="sm" />
            <span>เพิ่มข่าวใหม่</span>
          </button>
        </div>
      </div>

      <!-- Filter & Search Bar -->
      <div 
        class="bg-surface-lowest p-lg rounded-2xl border-outline-variant row items-center q-gutter-md q-mb-lg"
        style="background-color: #ffffff; border: 1px solid #c1c9bb; border-radius: 16px; padding: 24px;"
      >
        <div class="col-12 col-lg relative-position">
          <q-icon name="search" class="absolute text-outline" size="sm" style="left: 16px; top: 50%; transform: translateY(-50%); color: #71796d; z-index: 1;" />
          <input 
            class="w-full h-56 pl-xl pr-md bg-white border-outline-variant rounded-xl focus-ring transition-all"
            style="width: 100%; height: 56px; padding-left: 48px; padding-right: 16px; border: 1px solid #c1c9bb; border-radius: 12px; outline: none;"
            placeholder="ค้นหาตามชื่อเรื่องหรือเนื้อหา..." 
            type="text"
            v-model="search"
          />
        </div>
        <div class="col-12 col-lg-auto row q-gutter-x-md">
          <div class="relative-position" style="min-width: 180px;">
            <select 
              class="w-full h-56 pl-md pr-xl bg-white border-outline-variant rounded-xl appearance-none focus-ring transition-all cursor-pointer"
              style="width: 100%; height: 56px; padding-left: 16px; padding-right: 40px; border: 1px solid #c1c9bb; border-radius: 12px; outline: none;"
              v-model="categoryFilter"
            >
              <option value="">ทั้งหมด</option>
              <option value="ทั่วไป">ข่าวทั่วไป (General)</option>
              <option value="วิชาการ">ข่าววิชาการ (Academic)</option>
              <option value="ประกาศรับสมัคร">รับสมัครนักเรียน (Admissions)</option>
              <option value="กิจกรรม">กิจกรรม (Events)</option>
            </select>
            <q-icon name="expand_more" class="absolute text-outline pointer-events-none" size="sm" style="right: 12px; top: 50%; transform: translateY(-50%); color: #71796d;" />
          </div>
          <button 
            class="h-56 px-lg bg-surface-high text-on-surface-variant font-bold rounded-xl row items-center justify-center hover-bg-surface-variant transition-colors cursor-pointer"
            style="height: 56px; padding: 0 24px; background-color: #e7e9e1; color: #41493e; border: none; border-radius: 12px; gap: 8px;"
          >
            <q-icon name="filter_list" size="sm" />
            <span>กรองข้อมูล</span>
          </button>
        </div>
      </div>

      <!-- News List Table Container -->
      <div 
        class="bg-surface-lowest rounded-2xl border-outline-variant overflow-hidden"
        style="background-color: #ffffff; border: 1px solid #c1c9bb; border-radius: 16px;"
      >
        <div style="overflow-x: auto;">
          <table style="width: 100%; text-align: left; border-collapse: collapse;">
            <thead>
              <tr style="background-color: #ecefe7; color: #41493e;" class="font-label-lg">
                <th style="padding: 12px 16px; font-weight: 600; white-space: nowrap;">รายการข่าว</th>
                <th style="padding: 12px 16px; font-weight: 600; white-space: nowrap;">หมวดหมู่</th>
                <th style="padding: 12px 16px; font-weight: 600; white-space: nowrap;">วันที่เผยแพร่</th>
                <th style="padding: 12px 16px; font-weight: 600; white-space: nowrap;">สถานะ</th>
                <th style="padding: 12px 16px; font-weight: 600; white-space: nowrap;">จัดการ</th>
              </tr>
            </thead>
            <tbody>
              <tr 
                v-for="item in filteredNews" 
                :key="item.id"
                class="border-b border-outline-variant hover-bg-surface-low transition-colors group"
                style="border-bottom: 1px solid #c1c9bb;"
              >
                <td style="padding: 8px 16px;">
                  <div class="row items-center no-wrap" style="gap: 12px;">
                    <div 
                      class="bg-surface rounded-lg overflow-hidden border-outline-variant flex-shrink-0"
                      style="width: 48px; height: 36px; border: 1px solid #c1c9bb; border-radius: 6px; background-color: #ecefe7;"
                    >
                      <img v-if="item.image" :src="item.image" style="width: 100%; height: 100%; object-fit: cover;" />
                      <div v-else class="full-width full-height row items-center justify-center">
                        <q-icon name="image" color="grey-5" size="xs" />
                      </div>
                    </div>
                    <div style="min-width: 0; flex: 1; max-width: 300px;">
                      <div class="text-on-surface group-hover-text-primary transition-colors q-my-none" style="font-size: 13px; font-weight: 600; color: #191d18; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; white-space: normal; line-height: 1.4;">
                        {{ item.title }}
                      </div>
                      <div class="text-on-surface-variant q-mb-none q-mt-xs" style="font-size: 11px; color: #41493e; display: -webkit-box; -webkit-line-clamp: 1; -webkit-box-orient: vertical; overflow: hidden; white-space: normal;">
                        {{ item.summary }}
                      </div>
                    </div>
                  </div>
                </td>
                <td style="padding: 12px 16px; white-space: nowrap;">
                  <span 
                    class="inline-flex items-center px-md py-xs bg-secondary-container text-on-secondary-container rounded-full text-xs font-bold"
                    style="background-color: #fdd01b; color: #6f5900; border-radius: 9999px; padding: 4px 12px; font-size: 12px; font-weight: 700; white-space: nowrap;"
                  >
                    {{ item.category || 'ทั่วไป' }}
                  </span>
                </td>
                <td style="padding: 12px 16px; white-space: nowrap;">
                  <div class="font-body-md text-on-surface" style="font-size: 13px; color: #191d18;">{{ item.date }}</div>
                  <div class="text-xs text-outline" style="color: #71796d;">10:00 น.</div>
                </td>
                <td style="padding: 12px 16px; white-space: nowrap;">
                  <span class="row items-center text-primary" style="gap: 4px; color: #003b09; flex-wrap: nowrap;">
                    <span style="width: 8px; height: 8px; border-radius: 50%; background-color: #003b09; flex-shrink: 0;"></span>
                    <span class="font-label-sm text-xs" style="font-size: 12px; font-weight: 500; white-space: nowrap;">เผยแพร่แล้ว</span>
                  </span>
                </td>
                <td style="padding: 12px 16px; white-space: nowrap;">
                  <div class="row items-center no-wrap" style="gap: 4px;">
                    <button 
                      class="text-primary hover-bg-surface-high rounded-full transition-colors cursor-pointer"
                      style="background: transparent; border: none; padding: 6px; border-radius: 50%; display: flex;"
                      @click="editNews(item)"
                      title="แก้ไข"
                    >
                      <q-icon name="edit" size="18px" />
                    </button>
                    <button 
                      class="text-red-8 hover-bg-error-container rounded-full transition-colors cursor-pointer"
                      style="background: transparent; border: none; padding: 6px; border-radius: 50%; display: flex;"
                      @click="confirmDelete(item.id)"
                      title="ลบ"
                    >
                      <q-icon name="delete" size="18px" />
                    </button>
                  </div>
                </td>
              </tr>
              <tr v-if="filteredNews.length === 0">
                <td colspan="5" class="text-center q-pa-xl text-grey-6">
                  ไม่พบข้อมูลข่าวสาร
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      
      <!-- Pagination (Mock) -->
      <div class="row justify-between items-center q-mt-lg">
        <div class="text-on-surface-variant font-body-md" style="color: #41493e; font-size: 14px;">
          แสดงผล {{ filteredNews.length }} รายการ จากทั้งหมด {{ newsList.length }} รายการ
        </div>
        <div class="row q-gutter-x-sm">
          <button class="w-10 h-10 rounded-lg border-outline-variant row items-center justify-center cursor-pointer bg-white" style="width: 40px; height: 40px; border: 1px solid #c1c9bb; border-radius: 8px; color: #71796d;">
            <q-icon name="chevron_left" />
          </button>
          <button class="w-10 h-10 rounded-lg border-none bg-primary text-on-primary row items-center justify-center font-bold" style="width: 40px; height: 40px; background-color: #003b09; color: #ffffff; border-radius: 8px;">
            1
          </button>
          <button class="w-10 h-10 rounded-lg border-outline-variant row items-center justify-center cursor-pointer bg-white hover-bg-surface-low transition-colors" style="width: 40px; height: 40px; border: 1px solid #c1c9bb; border-radius: 8px; color: #41493e;">
            2
          </button>
          <button class="w-10 h-10 rounded-lg border-outline-variant row items-center justify-center cursor-pointer bg-white hover-bg-surface-low transition-colors" style="width: 40px; height: 40px; border: 1px solid #c1c9bb; border-radius: 8px; color: #41493e;">
            3
          </button>
          <button class="w-10 h-10 rounded-lg border-outline-variant row items-center justify-center cursor-pointer bg-white" style="width: 40px; height: 40px; border: 1px solid #c1c9bb; border-radius: 8px; color: #71796d;">
            <q-icon name="chevron_right" />
          </button>
        </div>
      </div>
    </div>

    <!-- Add/Edit Dialog (Keeping Quasar style for popup) -->
    <q-dialog v-model="showAddDialog" persistent maximized>
      <q-card class="bg-grey-2 column">
        <q-card-section class="row items-center q-pb-none bg-white border-bottom q-pa-md shadow-1">
          <div class="text-h6 text-weight-bold text-primary font-headline" style="color: #003b09;">
            {{ isEditing ? 'แก้ไขข่าวสาร' : 'เพิ่มข่าวสารใหม่' }}
          </div>
          <q-space />
          <q-btn icon="close" flat round dense v-close-popup />
        </q-card-section>

        <q-card-section class="col q-pa-xl scroll">
          <div class="row q-col-gutter-lg max-w-container mx-auto">
            <div class="col-12 col-md-8">
              <q-card class="rounded-borders no-shadow-border bg-white q-pa-lg q-mb-lg" style="border-radius: 16px;">
                <div class="text-h6 font-label text-weight-bold q-mb-md">เนื้อหาข่าว</div>
                <q-input
                  outlined
                  v-model="form.title"
                  label="หัวข้อข่าว"
                  class="q-mb-md"
                  :rules="[val => !!val || 'กรุณากรอกหัวข้อข่าว']"
                />
                <q-input
                  outlined
                  v-model="form.summary"
                  label="คำโปรย (Summary)"
                  type="textarea"
                  rows="3"
                  class="q-mb-md"
                />
                <div class="q-mb-sm text-grey-8 font-label">เนื้อหาฉบับเต็ม</div>
                <q-editor v-model="form.content" min-height="300px" class="rounded-borders" />
              </q-card>
            </div>

            <div class="col-12 col-md-4">
              <q-card class="rounded-borders no-shadow-border bg-white q-pa-lg q-mb-lg" style="border-radius: 16px;">
                <div class="text-h6 font-label text-weight-bold q-mb-md">การตั้งค่า</div>
                <q-input outlined v-model="form.date" label="วันที่ประกาศ" class="q-mb-md">
                  <template v-slot:append>
                    <q-icon name="event" class="cursor-pointer">
                      <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                        <q-date v-model="form.date" mask="D MMM YYYY">
                          <div class="row items-center justify-end">
                            <q-btn v-close-popup label="ปิด" color="primary" flat />
                          </div>
                        </q-date>
                      </q-popup-proxy>
                    </q-icon>
                  </template>
                </q-input>
                <q-select 
                  outlined 
                  v-model="form.category" 
                  :options="['ทั่วไป', 'วิชาการ', 'ประกาศรับสมัคร', 'กิจกรรม']" 
                  label="หมวดหมู่" 
                  class="q-mb-md" 
                />
                <div class="q-mb-sm text-grey-8 font-label">รูปภาพปก URL</div>
                <q-input outlined v-model="form.image" label="ลิงก์รูปภาพ (URL)" class="q-mb-md">
                  <template v-slot:prepend>
                    <q-icon name="link" />
                  </template>
                </q-input>

                <div v-if="form.image" class="rounded-borders overflow-hidden q-mt-md" style="height: 150px; border: 1px solid #e0e0e0;">
                  <img :src="form.image" class="full-width full-height" style="object-fit: cover;" />
                </div>
              </q-card>
            </div>
          </div>
        </q-card-section>

        <q-separator />
        <q-card-actions align="right" class="bg-white q-pa-md shadow-up-1">
          <q-btn flat label="ยกเลิก" v-close-popup class="text-grey-8 font-label q-mr-sm" />
          <q-btn color="primary" label="บันทึกและเผยแพร่" @click="saveNews" class="rounded-borders font-label q-px-xl py-sm" style="background-color: #003b09; border-radius: 12px; height: 48px;" />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useNewsStore } from '@/stores/news';
import { useQuasar } from 'quasar';
import type { NewsItem } from '@/stores/news';

const $q = useQuasar();
const newsStore = useNewsStore();

const search = ref('');
const categoryFilter = ref('');
const showAddDialog = ref(false);
const isEditing = ref(false);
const editId = ref<string | null>(null);

const form = ref({
  title: '',
  date: '',
  summary: '',
  content: '',
  image: '',
  category: 'ทั่วไป'
});

const newsList = computed(() => newsStore.newsList);

const filteredNews = computed(() => {
  let result = newsList.value;
  
  if (categoryFilter.value) {
    result = result.filter(n => n.category === categoryFilter.value);
  }
  
  if (search.value) {
    const s = search.value.toLowerCase();
    result = result.filter(n => 
      n.title.toLowerCase().includes(s) || 
      n.summary.toLowerCase().includes(s)
    );
  }
  
  return result;
});

function resetForm() {
  form.value = {
    title: '',
    date: '',
    summary: '',
    content: '',
    image: '',
    category: 'ทั่วไป'
  };
  isEditing.value = false;
  editId.value = null;
}

function editNews(item: NewsItem) {
  form.value = {
    title: item.title,
    date: item.date,
    summary: item.summary,
    content: item.content || '',
    image: item.image,
    category: item.category || 'ทั่วไป'
  };
  isEditing.value = true;
  editId.value = item.id;
  showAddDialog.value = true;
}

function saveNews() {
  if (!form.value.title) {
    $q.notify({ type: 'warning', message: 'กรุณากรอกหัวข้อข่าว' });
    return;
  }
  
  if (isEditing.value && editId.value) {
    newsStore.updateNews(editId.value, form.value);
    $q.notify({ type: 'positive', message: 'แก้ไขข่าวสารสำเร็จ' });
  } else {
    newsStore.addNews(form.value);
    $q.notify({ type: 'positive', message: 'เพิ่มข่าวสารใหม่สำเร็จ' });
  }
  
  showAddDialog.value = false;
  resetForm();
}

function confirmDelete(id: string) {
  $q.dialog({
    title: 'ยืนยันการลบ',
    message: 'คุณต้องการลบข่าวสารนี้ใช่หรือไม่?',
    cancel: true,
    persistent: true
  }).onOk(() => {
    newsStore.deleteNews(id);
    $q.notify({ type: 'positive', message: 'ลบข่าวสารสำเร็จ' });
  });
}
</script>

<style scoped>
.bg-background {
  background-color: #f8faf2;
}
.max-w-container {
  max-width: 1200px;
}
.hover-scale {
  transition: transform 0.2s ease;
}
.hover-scale:hover {
  transform: scale(1.02);
}
.focus-ring:focus {
  border-color: #003b09 !important;
  box-shadow: 0 0 0 3px rgba(253, 208, 27, 0.5) !important;
}
.hover-bg-surface-variant:hover {
  background-color: #e1e3db !important;
}
.hover-bg-surface-low:hover {
  background-color: #f2f5ec !important;
}
.group-hover-text-primary {
  transition: color 0.2s ease;
}
.group:hover .group-hover-text-primary {
  color: #003b09 !important;
}
.hover-text-primary:hover {
  color: #003b09 !important;
  background-color: #e7e9e1 !important;
}
.hover-text-error:hover {
  color: #ba1a1a !important;
  background-color: #ffdad6 !important;
}
tbody tr:last-child {
  border-bottom: none !important;
}
</style>
