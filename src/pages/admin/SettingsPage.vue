<template>
  <q-page class="q-pa-xl bg-background">
    <div class="max-w-container mx-auto">
      <!-- Page Header with Actions -->
      <div class="row justify-between items-start items-md-center q-mb-xl q-col-gutter-md">
        <div class="col-12 col-md-auto">
          <h2 class="font-headline-lg text-primary q-my-none text-h4 text-weight-bold" style="color: #003b09;">ตั้งค่าระบบ</h2>
          <p class="text-on-surface-variant q-mt-sm q-mb-none" style="color: #41493e; font-size: 16px;">จัดการข้อมูลพื้นฐาน ช่องทางการติดต่อ และการตั้งค่าอื่นๆ ของโรงเรียน</p>
        </div>
        <div class="col-12 col-md-auto row q-gutter-sm">
          <button 
            class="px-md py-sm bg-primary text-on-primary rounded-lg font-bold hover-opacity shadow-sm transition-all row items-center justify-center cursor-pointer" 
            style="background-color: #003b09; color: #ffffff; border: none; padding: 12px 24px; border-radius: 8px; gap: 8px;"
            @click="saveSettings"
          >
            <q-icon name="save" size="sm" />
            <span>บันทึกการตั้งค่า</span>
          </button>
        </div>
      </div>

      <!-- Settings Form -->
      <div class="row q-col-gutter-xl">
        <!-- School Information -->
        <div class="col-12 col-md-6">
          <q-card class="bg-white border-outline-variant rounded-xl overflow-hidden transition-all no-shadow-border full-height" style="border: 1px solid #c1c9bb; border-radius: 16px; box-shadow: none;">
            <q-card-section class="q-pa-lg">
              <div class="row items-center q-gutter-sm q-mb-md">
                <q-icon name="school" size="sm" color="primary" />
                <h3 class="text-h6 text-weight-bold text-primary q-my-none">ข้อมูลโรงเรียน (School Info)</h3>
              </div>
              <div class="column q-gutter-y-md">
                <div>
                  <div class="text-grey-8 font-label q-mb-sm text-weight-medium">ชื่อโรงเรียน (ภาษาไทย)</div>
                  <q-input outlined v-model="form.schoolNameTH" placeholder="กรอกชื่อโรงเรียนภาษาไทย" />
                </div>
                <div>
                  <div class="text-grey-8 font-label q-mb-sm text-weight-medium">ชื่อโรงเรียน (ภาษาอังกฤษ)</div>
                  <q-input outlined v-model="form.schoolNameEN" placeholder="กรอกชื่อโรงเรียนภาษาอังกฤษ" />
                </div>
                <div>
                  <div class="text-grey-8 font-label q-mb-sm text-weight-medium">คำขวัญ / อัตลักษณ์โรงเรียน</div>
                  <q-input outlined v-model="form.slogan" placeholder="เช่น เรียนดี วินัยเด่น เน้นคุณธรรม" />
                </div>
                <div>
                  <div class="text-grey-8 font-label q-mb-sm text-weight-medium">ตราสัญลักษณ์โรงเรียน (โลโก้)</div>
                  <div class="row items-center q-gutter-md">
                    <q-avatar size="80px" class="bg-grey-2 border-outline-variant" style="border: 1px solid #c1c9bb;">
                      <img :src="form.logo || '/logo.png'" style="object-fit: contain; padding: 4px;" />
                    </q-avatar>
                    <q-btn outline color="primary" icon="upload" label="เปลี่ยนโลโก้" class="rounded-borders bg-white" />
                  </div>
                </div>
              </div>
            </q-card-section>
          </q-card>
        </div>

        <!-- Contact Information -->
        <div class="col-12 col-md-6">
          <q-card class="bg-white border-outline-variant rounded-xl overflow-hidden transition-all no-shadow-border full-height" style="border: 1px solid #c1c9bb; border-radius: 16px; box-shadow: none;">
            <q-card-section class="q-pa-lg">
              <div class="row items-center q-gutter-sm q-mb-md">
                <q-icon name="contacts" size="sm" color="primary" />
                <h3 class="text-h6 text-weight-bold text-primary q-my-none">ข้อมูลการติดต่อ (Contact Info)</h3>
              </div>
              <div class="column q-gutter-y-md">
                <div>
                  <div class="text-grey-8 font-label q-mb-sm text-weight-medium">ที่อยู่โรงเรียน</div>
                  <q-input outlined type="textarea" rows="3" v-model="form.address" placeholder="กรอกที่อยู่แบบเต็ม" />
                </div>
                <div>
                  <div class="text-grey-8 font-label q-mb-sm text-weight-medium">หมายเลขโทรศัพท์</div>
                  <q-input outlined v-model="form.phone" placeholder="เช่น 056-123-456" />
                </div>
                <div>
                  <div class="text-grey-8 font-label q-mb-sm text-weight-medium">อีเมล (Email)</div>
                  <q-input outlined type="email" v-model="form.email" placeholder="เช่น contact@banthasung.ac.th" />
                </div>
              </div>
            </q-card-section>
          </q-card>
        </div>

        <!-- Social Media Links -->
        <div class="col-12">
          <q-card class="bg-white border-outline-variant rounded-xl overflow-hidden transition-all no-shadow-border" style="border: 1px solid #c1c9bb; border-radius: 16px; box-shadow: none;">
            <q-card-section class="q-pa-lg">
              <div class="row items-center q-gutter-sm q-mb-md">
                <q-icon name="public" size="sm" color="primary" />
                <h3 class="text-h6 text-weight-bold text-primary q-my-none">โซเชียลมีเดีย (Social Media)</h3>
              </div>
              <div class="row q-col-gutter-lg">
                <div class="col-12 col-md-6">
                  <div class="text-grey-8 font-label q-mb-sm text-weight-medium">Facebook Page URL</div>
                  <q-input outlined v-model="form.facebook" placeholder="https://facebook.com/..." />
                </div>
                <div class="col-12 col-md-6">
                  <div class="text-grey-8 font-label q-mb-sm text-weight-medium">LINE Official Account (ID)</div>
                  <q-input outlined v-model="form.line" placeholder="@banthasung" />
                </div>
              </div>
            </q-card-section>
          </q-card>
        </div>
      </div>

    </div>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useQuasar } from 'quasar';

const $q = useQuasar();

// Mock initial data
const form = ref({
  schoolNameTH: 'โรงเรียนบ้านท่าซุง (วิจิตรวิทยาคาร)',
  schoolNameEN: 'Ban Tha Sung School',
  slogan: 'เรียนดี วินัยเด่น เน้นคุณธรรม',
  logo: '/logo.png',
  address: 'หมู่ที่ 2 ตำบลท่าซุง อำเภอเมืองอุทัยธานี จังหวัดอุทัยธานี 61000',
  phone: '056-123-456',
  email: 'info@banthasung.ac.th',
  facebook: 'https://www.facebook.com/banthasungschool',
  line: '@banthasung',
});

function saveSettings() {
  $q.notify({
    type: 'positive',
    message: 'บันทึกการตั้งค่าระบบเรียบร้อยแล้ว',
    position: 'top',
    icon: 'check_circle'
  });
}
</script>
