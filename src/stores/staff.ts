import { defineStore } from 'pinia';

export interface StaffItem {
  id: number;
  name: string;
  position: string;
  department: string;
  image?: string;
  phone?: string;
  email?: string;
  status: 'Active' | 'Inactive';
}

export const useStaffStore = defineStore('staff', {
  state: () => ({
    staffList: [
      {
        id: 1,
        name: 'นายสมศักดิ์ รักเรียน',
        position: 'ผู้อำนวยการโรงเรียน',
        department: 'ผู้บริหาร',
        status: 'Active',
        phone: '081-234-5678',
        email: 'somsak@banthasung.ac.th',
        image: 'https://cdn.quasar.dev/img/avatar.png',
      },
      {
        id: 2,
        name: 'นางสาววิไล นามดี',
        position: 'ครูประจำชั้น ป.6',
        department: 'วิชาการ',
        status: 'Active',
        phone: '089-876-5432',
        email: 'wilai@banthasung.ac.th',
        image: 'https://cdn.quasar.dev/img/avatar2.jpg',
      },
      {
        id: 3,
        name: 'นายพงศกร ใจดี',
        position: 'ครูพละ',
        department: 'กิจกรรม',
        status: 'Active',
        image: 'https://cdn.quasar.dev/img/avatar3.jpg',
      },
    ] as StaffItem[],
  }),
  actions: {
    addStaff(staff: Omit<StaffItem, 'id'>) {
      const newId =
        this.staffList.length > 0 ? Math.max(...this.staffList.map((s) => s.id)) + 1 : 1;
      this.staffList.unshift({ ...staff, id: newId });
    },
    updateStaff(id: number, data: Partial<StaffItem>) {
      const index = this.staffList.findIndex((s) => s.id === id);
      if (index !== -1) {
        const staff = this.staffList[index];
        if (staff) {
          Object.assign(staff, data);
        }
      }
    },
    deleteStaff(id: number) {
      this.staffList = this.staffList.filter((s) => s.id !== id);
    },
  },
});
