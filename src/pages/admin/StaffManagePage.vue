<template>
  <q-page class="q-pa-xl bg-background">
    <div class="max-w-container mx-auto">
      
      <!-- Page Header with Actions -->
      <div class="row justify-between items-start items-md-center q-mb-xl q-col-gutter-md">
        <div class="col-12 col-md-auto">
          <h2 class="font-headline-lg text-primary q-my-none text-h4 text-weight-bold" style="color: #003b09;">จัดการข้อมูลบุคลากร</h2>
          <p class="font-body-md text-on-surface-variant q-mt-sm q-mb-none" style="color: #41493e;">บริหารจัดการข้อมูลสารสนเทศ คณะครู และบุคลากรทางการศึกษา</p>
        </div>
        <div class="col-12 col-md-auto row q-gutter-sm">
          <button class="px-md py-sm border-outline-variant text-on-surface-variant rounded-lg font-bold hover-bg-surface-high transition-all row items-center justify-center cursor-pointer" style="border: 2px solid #003b09; color: #003b09; background: transparent; padding: 12px 24px; border-radius: 8px; gap: 8px;">
            <q-icon name="save" size="sm" />
            <span>บันทึกการเปลี่ยนแปลง</span>
          </button>
          <button 
            class="px-md py-sm bg-primary text-on-primary rounded-lg font-bold hover-opacity shadow-sm transition-all row items-center justify-center cursor-pointer" 
            style="background-color: #003b09; color: #ffffff; border: none; padding: 12px 24px; border-radius: 8px; gap: 8px;"
            @click="showAddDialog = true"
          >
            <q-icon name="person_add" size="sm" />
            <span>เพิ่มบุคลากรใหม่</span>
          </button>
        </div>
      </div>

      <!-- Director's Message Section -->
      <section 
        class="bg-surface-lowest border-outline-variant rounded-xl q-mb-xl overflow-hidden relative-position q-pa-xl"
        style="background-color: #ffffff; border: 1px solid #c1c9bb; border-radius: 16px;"
      >
        <div class="row q-col-gutter-xl items-stretch">
          <div class="col-12 col-md-auto text-center" style="width: 100%; max-width: 280px;">
          <div 
            class="group relative-position overflow-hidden bg-surface-high border-dashed border-outline-variant row items-center justify-center cursor-pointer transition-colors"
            style="border: 2px dashed #c1c9bb; border-radius: 8px; aspect-ratio: 3/4; background-color: #e7e9e1; width: 100%;"
          >
            <img class="absolute-full full-width full-height group-hover-opacity transition-opacity" style="object-fit: cover;" :src="directorImage"/>
            <div class="absolute-center z-10 opacity-0 group-hover-opacity-100 column items-center q-gutter-y-sm transition-opacity" @click.stop="triggerUpload('director')">
              <q-icon name="photo_camera" color="primary" size="xl" />
              <span class="text-label-lg font-bold text-primary" style="color: #003b09;">เปลี่ยนรูปภาพ</span>
            </div>
          </div>
          <p class="text-center text-label-sm text-on-surface-variant q-mt-sm" style="color: #41493e; font-size: 14px;">ขนาดแนะนำ: 600x800px (JPG, PNG)</p>
        </div>
        <div class="col-12 col-md column q-gutter-y-md">
          <div>
            <label class="block font-label-lg text-on-surface-variant q-mb-xs text-weight-medium" style="color: #41493e; font-size: 16px;">ชื่อผู้อำนวยการ</label>
            <input 
              class="w-full h-14 px-md bg-white border-outline-variant rounded-lg focus-ring transition-all" 
              style="width: 100%; height: 56px; padding: 0 16px; border: 1px solid #c1c9bb; border-radius: 8px; outline: none; font-size: 16px;" 
              type="text" 
              value="นายสมชาย บรรพต"
            />
          </div>
          <div class="col-grow column">
            <label class="block font-label-lg text-on-surface-variant q-mb-xs text-weight-medium" style="color: #41493e; font-size: 16px;">วิสัยทัศน์และข้อความจากผู้อำนวยการ</label>
            <textarea 
              class="w-full p-md bg-white border-outline-variant rounded-lg focus-ring transition-all resize-none font-body-md col-grow" 
              style="width: 100%; padding: 16px; border: 1px solid #c1c9bb; border-radius: 8px; outline: none; font-size: 16px; min-height: 120px;" 
              rows="5"
            >โรงเรียนบ้านท่าซุงมุ่งเน้นการจัดการศึกษาที่มีคุณภาพ พัฒนาผู้เรียนให้มีความรู้คู่คุณธรรม มีทักษะในศตวรรษที่ 21 และดำรงชีวิตตามหลักปรัชญาของเศรษฐกิจพอเพียง เราเชื่อมั่นในศักยภาพของเด็กทุกคนและพร้อมที่จะร่วมกับชุมชนในการสร้างสภาพแวดล้อมที่เอื้อต่อการเรียนรู้ที่ดีที่สุด</textarea>
          </div>
          <div class="row justify-end q-mt-auto">
            <span class="text-label-sm text-on-surface-variant text-italic" style="color: #41493e; font-size: 14px;">แก้ไขล่าสุด: 12 ต.ค. 2566</span>
          </div>
        </div>
      </div>
      </section>

      <!-- Staff Directory Grid -->
      <section class="q-mt-xl">
        <div class="row items-center justify-between border-bottom border-outline-variant q-pb-md q-mb-lg" style="border-bottom: 1px solid #c1c9bb;">
          <h3 class="font-headline-md text-primary row items-center q-my-none text-h5 text-weight-bold" style="color: #003b09; gap: 8px;">
            <q-icon name="groups" />
            <span>รายชื่อบุคลากรปัจจุบัน</span>
          </h3>
          <div class="row q-gutter-x-sm">
            <button class="p-sm hover-bg-surface-high rounded-full transition-colors cursor-pointer" style="border: none; background: transparent; padding: 8px; border-radius: 50%; color: #41493e;">
              <q-icon name="filter_list" size="24px" />
            </button>
            <button class="p-sm hover-bg-surface-high rounded-full transition-colors cursor-pointer" style="border: none; background: transparent; padding: 8px; border-radius: 50%; color: #41493e;">
              <q-icon name="sort" size="24px" />
            </button>
          </div>
        </div>
        
        <div class="row q-col-gutter-xl">
          <!-- Staff Cards loop -->
          <div class="col-12 col-sm-6 col-md-4 col-xl-3" v-for="staff in staffList" :key="staff.id">
            <div class="staff-card bg-white border-outline-variant overflow-hidden transition-all column full-height relative-position" style="border: 1px solid #c1c9bb; border-radius: 16px; transition: all 0.3s ease;">
              <div class="relative-position overflow-hidden bg-surface-high full-width" style="aspect-ratio: 1/1; background-color: #e7e9e1;">
                <img :src="staff.image || 'https://cdn.quasar.dev/img/avatar.png'" style="width: 100%; height: 100%; object-fit: cover;" />
                <div class="absolute top-right q-pa-sm column q-gutter-y-xs z-10" style="top: 8px; right: 8px;">
                  <button 
                    class="p-xs bg-white-90 rounded-full text-primary shadow-sm hover-bg-surface-high cursor-pointer transition-colors"
                    style="background: rgba(255,255,255,0.9); backdrop-filter: blur(4px); border: none; padding: 8px; border-radius: 50%; color: #003b09;"
                    @click="editStaff(staff)"
                    title="แก้ไข"
                  >
                    <q-icon name="edit" size="18px" />
                  </button>
                  <button 
                    class="p-xs bg-white-90 rounded-full text-red-8 shadow-sm hover-bg-error-container cursor-pointer transition-colors"
                    style="background: rgba(255,255,255,0.9); backdrop-filter: blur(4px); border: none; padding: 8px; border-radius: 50%; color: #ba1a1a;"
                    @click="confirmDelete(staff.id)"
                    title="ลบ"
                  >
                    <q-icon name="delete" size="18px" />
                  </button>
                </div>
              </div>
              <div class="q-pa-lg col-grow column items-start">
                <span 
                  class="bg-primary-10 text-primary rounded-full w-fit q-mb-md text-weight-bold"
                  style="background-color: rgba(0, 59, 9, 0.1); color: #003b09; padding: 6px 14px; border-radius: 9999px; font-size: 13px; display: inline-block; width: fit-content;"
                >
                  {{ staff.department }}
                </span>
                <h4 class="font-headline-md text-weight-bold q-my-none q-mb-sm" style="font-size: 20px; line-height: 1.4; color: #191d18;">{{ staff.name }}</h4>
                <p class="text-on-surface-variant q-mb-none" style="font-size: 15px; color: #41493e;">{{ staff.position }}</p>
              </div>
              <div class="q-px-lg q-py-md bg-surface-low border-top border-outline-variant row justify-between items-center full-width" style="background-color: #f2f5ec; border-top: 1px solid #c1c9bb;">
                <span class="text-weight-medium" style="font-size: 14px; color: #41493e;">{{ staff.status === 'Active' ? 'ปฏิบัติงาน' : 'พ้นสภาพ' }}</span>
                <button 
                  class="text-primary font-bold text-label-sm hover-underline cursor-pointer"
                  style="background: transparent; border: none; color: #003b09; font-size: 14px; padding: 0;"
                  @click="editStaff(staff)"
                >
                  ดูรายละเอียด
                </button>
              </div>
            </div>
          </div>
          
        </div>
      </section>

    </div>

    <!-- Add/Edit Dialog (Keeping Quasar style for popup) -->
    <q-dialog v-model="showAddDialog" persistent>
      <q-card style="min-width: 500px; border-radius: 16px;" class="bg-white q-pa-sm">
        <q-card-section class="row items-center q-pb-none border-bottom q-mb-md">
          <div class="text-h6 text-weight-bold text-primary" style="color: #003b09;">
            {{ isEditing ? 'แก้ไขข้อมูลบุคลากร' : 'เพิ่มบุคลากรใหม่' }}
          </div>
          <q-space />
          <q-btn icon="close" flat round dense v-close-popup />
        </q-card-section>

        <q-card-section class="q-gutter-md">
          <div class="row q-col-gutter-md">
            <div class="col-12 col-md-6">
              <q-input
                outlined
                v-model="form.name"
                label="ชื่อ-นามสกุล"
                :rules="[val => !!val || 'กรุณากรอกชื่อ']"
              />
            </div>
            <div class="col-12 col-md-6">
              <q-input
                outlined
                v-model="form.position"
                label="ตำแหน่ง"
                :rules="[val => !!val || 'กรุณากรอกตำแหน่ง']"
              />
            </div>
            <div class="col-12 col-md-6">
              <q-select
                outlined
                v-model="form.department"
                :options="['ผู้บริหาร', 'วิชาการ', 'กิจกรรม', 'ทั่วไป', 'กลุ่มสาระการเรียนรู้ภาษาไทย', 'คณิตศาสตร์', 'วิทยาศาสตร์และเทคโนโลยี']"
                label="หมวดหมู่/ฝ่าย"
              />
            </div>
            <div class="col-12 col-md-6">
              <q-select
                outlined
                v-model="form.status"
                :options="['Active', 'Inactive']"
                label="สถานะ"
              />
            </div>
            <div class="col-12 col-md-6">
              <q-input outlined v-model="form.phone" label="เบอร์โทรศัพท์" />
            </div>
            <div class="col-12 col-md-6">
              <q-input outlined v-model="form.email" label="อีเมล" />
            </div>
            <div class="col-12">
              <div class="text-grey-8 font-label q-mb-sm">รูปโปรไฟล์ (1:1)</div>
              <div class="row items-center q-gutter-md">
                <q-avatar size="100px" class="bg-grey-2 border-outline-variant" style="border: 1px solid #c1c9bb;">
                  <img :src="form.image || 'https://cdn.quasar.dev/img/avatar.png'" style="object-fit: cover;" />
                </q-avatar>
                <q-btn outline color="primary" icon="upload" label="อัปโหลดรูปภาพใหม่" @click="triggerUpload('staff')" class="rounded-borders bg-white" />
              </div>
            </div>
          </div>
        </q-card-section>

        <q-card-actions align="right" class="q-px-md q-pb-md">
          <q-btn flat label="ยกเลิก" v-close-popup class="text-grey-8 font-weight-bold" />
          <q-btn
            color="primary"
            label="บันทึกข้อมูล"
            @click="saveStaff"
            class="rounded-borders font-weight-bold q-px-lg py-sm"
            style="background-color: #003b09 !important; border-radius: 8px;"
          />
        </q-card-actions>
      </q-card>
    </q-dialog>

    <!-- Image Cropper Dialog -->
    <q-dialog v-model="showCropper" persistent>
      <q-card style="min-width: 600px; max-width: 90vw;">
        <q-card-section class="row items-center q-pb-none">
          <div class="text-h6 text-weight-bold text-primary">ครอบตัดรูปภาพ</div>
          <q-space />
          <q-btn icon="close" flat round dense v-close-popup />
        </q-card-section>

        <q-card-section>
          <div style="max-height: 60vh; overflow: hidden; background: #000; text-align: center;">
            <img ref="cropperImg" :src="cropImageSrc" style="max-width: 100%; display: block; margin: 0 auto;" />
          </div>
        </q-card-section>

        <q-card-actions align="right" class="q-pa-md bg-grey-1 border-top">
          <q-btn flat label="ยกเลิก" v-close-popup class="text-grey-8" />
          <q-btn color="primary" label="ยืนยันการครอบตัด" @click="confirmCrop" class="rounded-borders" style="background-color: #003b09 !important;" />
        </q-card-actions>
      </q-card>
    </q-dialog>

    <!-- Hidden File Input -->
    <input type="file" ref="fileInput" accept="image/png, image/jpeg, image/webp" style="display: none" @change="onFileSelected" />

  </q-page>
</template>

<script setup lang="ts">
import { ref, computed, nextTick } from 'vue';
import { useStaffStore } from '@/stores/staff';
import { useQuasar } from 'quasar';
import type { StaffItem } from '@/stores/staff';
import Cropper from 'cropperjs';
import 'cropperjs/dist/cropper.css';

const $q = useQuasar();
const staffStore = useStaffStore();

const search = ref('');
const showAddDialog = ref(false);
const isEditing = ref(false);
const editId = ref<number | null>(null);

const form = ref<Omit<StaffItem, 'id'>>({
  name: '',
  position: '',
  department: 'ทั่วไป',
  status: 'Active',
  phone: '',
  email: '',
  image: '',
});

const directorImage = ref('https://lh3.googleusercontent.com/aida-public/AB6AXuC_SRdevBuZnlilmqkZUTm1QGiBZ7Gze-V5wSIrD0cTUBKybkod5j3B2DG5aoWfHMbtuFsYNRGN3IzkaKt1FxnrRlLhfgiWmg_Z9gDSIyXfNctRsd8_FhjKBkWmPUjTKJn2O1TMRRySS1o_d_N-APTJ8n8kuMyZflNj3Vj5U_F0p1Pxsj4gz_nMOzU4rHZnxiS3yyEqzq7HPH6CCypqImXj2Tul1lQWUwLqVP-XziWTmvzjhZBOKg53');

const fileInput = ref<HTMLInputElement | null>(null);
const showCropper = ref(false);
const cropImageSrc = ref('');
const currentCropTarget = ref<'director' | 'staff'>('staff');
const cropperImg = ref<HTMLImageElement | null>(null);
let cropperInstance: Cropper | null = null;

function triggerUpload(target: 'director' | 'staff') {
  currentCropTarget.value = target;
  if (fileInput.value) {
    fileInput.value.value = ''; // Reset input
    fileInput.value.click();
  }
}

function onFileSelected(event: Event) {
  const file = (event.target as HTMLInputElement).files?.[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (e) => {
    if (e.target?.result) {
      cropImageSrc.value = e.target.result as string;
      showCropper.value = true;
      initCropper();
    }
  };
  reader.readAsDataURL(file);
}

function initCropper() {
  if (cropperInstance) {
    cropperInstance.destroy();
    cropperInstance = null;
  }
  void nextTick(() => {
    if (cropperImg.value) {
      cropperInstance = new Cropper(cropperImg.value, {
        aspectRatio: currentCropTarget.value === 'director' ? 3 / 4 : 1 / 1,
        viewMode: 1,
        autoCropArea: 1,
      });
    }
  });
}

function confirmCrop() {
  if (!cropperInstance) return;
  const canvas = cropperInstance.getCroppedCanvas({
    width: currentCropTarget.value === 'director' ? 600 : 400,
    height: currentCropTarget.value === 'director' ? 800 : 400,
  });
  const dataUrl = canvas.toDataURL('image/jpeg', 0.8);
  
  if (currentCropTarget.value === 'director') {
    directorImage.value = dataUrl;
  } else {
    form.value.image = dataUrl;
  }
  showCropper.value = false;
}

const staffList = computed(() => {
  let result = staffStore.staffList;
  if (search.value) {
    const s = search.value.toLowerCase();
    result = result.filter(n => n.name.toLowerCase().includes(s) || n.position.toLowerCase().includes(s));
  }
  return result;
});

function resetForm() {
  form.value = {
    name: '',
    position: '',
    department: 'ทั่วไป',
    status: 'Active',
    phone: '',
    email: '',
    image: '',
  };
  isEditing.value = false;
  editId.value = null;
}

function editStaff(item: StaffItem) {
  form.value = { ...item };
  isEditing.value = true;
  editId.value = item.id;
  showAddDialog.value = true;
}

function saveStaff() {
  if (!form.value.name || !form.value.position) {
    $q.notify({ type: 'warning', message: 'กรุณากรอกข้อมูลให้ครบถ้วน' });
    return;
  }
  
  if (isEditing.value && editId.value !== null) {
    staffStore.updateStaff(editId.value, form.value);
    $q.notify({ type: 'positive', message: 'แก้ไขข้อมูลสำเร็จ' });
  } else {
    staffStore.addStaff(form.value);
    $q.notify({ type: 'positive', message: 'เพิ่มบุคลากรใหม่สำเร็จ' });
  }
  
  showAddDialog.value = false;
  resetForm();
}

function confirmDelete(id: number) {
  $q.dialog({
    title: 'ยืนยันการลบ',
    message: 'คุณต้องการลบข้อมูลบุคลากรรายนี้ใช่หรือไม่?',
    cancel: true,
    persistent: true
  }).onOk(() => {
    staffStore.deleteStaff(id);
    $q.notify({ type: 'positive', message: 'ลบข้อมูลบุคลากรสำเร็จ' });
  });
}
</script>

<style scoped>
.max-w-container {
  max-width: 1200px;
}
.group-hover-opacity {
  opacity: 1;
}
.group:hover .group-hover-opacity {
  opacity: 0.4;
}
.opacity-0 {
  opacity: 0;
}
.group-hover-opacity-100 {
  opacity: 0;
}
.group:hover .group-hover-opacity-100 {
  opacity: 1;
}
.focus-ring:focus {
  border-color: #fdd01b !important;
  box-shadow: 0 0 0 3px rgba(253, 208, 27, 0.5) !important;
}
.hover-opacity:hover {
  opacity: 0.9;
}
.hover-bg-surface-high:hover {
  background-color: #e7e9e1 !important;
}
.hover-bg-error-container:hover {
  background-color: #ffdad6 !important;
}
.hover-underline:hover {
  text-decoration: underline;
}
.staff-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}
</style>
