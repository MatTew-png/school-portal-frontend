import { defineStore } from 'pinia';

export interface CalendarEvent {
  id: string;
  dateStr: string; // YYYY/MM/DD
  title: string;
  time: string;
  location: string;
  description: string;
  color: string;
}

const today = new Date();
const currentYear = today.getFullYear();
const formatCurrentDate = (d: number) => {
  const m = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(d).padStart(2, '0');
  return `${currentYear}/${m}/${day}`;
};

export const useEventsStore = defineStore('events', {
  state: () => ({
    eventsList: [
      {
        id: '1',
        dateStr: formatCurrentDate(1),
        title: 'วันแรงงานแห่งชาติ',
        time: '00:00 - 23:59',
        location: 'วันหยุดราชการ',
        description: 'โรงเรียนหยุดทำการ 1 วัน เนื่องในวันแรงงานแห่งชาติ',
        color: 'bg-green-8',
      },
      {
        id: '2',
        dateStr: formatCurrentDate(4),
        title: 'วันฉัตรมงคล',
        time: '00:00 - 23:59',
        location: 'วันหยุดราชการ',
        description: 'โรงเรียนหยุดทำการ 1 วัน เนื่องในวันฉัตรมงคล',
        color: 'bg-green-8',
      },
      {
        id: '3',
        dateStr: formatCurrentDate(13),
        title: 'วันพืชมงคล',
        time: '00:00 - 23:59',
        location: 'วันหยุดราชการ',
        description: 'โรงเรียนหยุดทำการ 1 วัน เนื่องในวันพระราชพิธีพืชมงคลจรดพระนังคัลแรกนาขวัญ',
        color: 'bg-green-8',
      },
      {
        id: '4',
        dateStr: formatCurrentDate(15),
        title: 'เปิดเทอม 1/2568',
        time: '07:30 - 15:30',
        location: 'โรงเรียนบ้านท่าซุง',
        description:
          'เปิดภาคเรียนที่ 1 ประจำปีการศึกษา 2568 ให้นักเรียนแต่งกายชุดนักเรียนมาโรงเรียนตามปกติ',
        color: 'bg-primary',
      },
      {
        id: '5',
        dateStr: formatCurrentDate(22),
        title: 'ประชุมผู้ปกครอง',
        time: '08:30 - 12:00',
        location: 'หอประชุมโรงเรียน',
        description:
          'ขอเรียนเชิญผู้ปกครองนักเรียนทุกระดับชั้นเข้าร่วมประชุมผู้ปกครองเพื่อรับฟังนโยบายและแนวทางการจัดการเรียนการสอน',
        color: 'bg-orange-6',
      },
    ] as CalendarEvent[],
  }),
  actions: {
    addEvent(event: Omit<CalendarEvent, 'id'>) {
      const newId = String(Date.now());
      this.eventsList.push({ ...event, id: newId });
    },
    updateEvent(id: string, updatedEvent: Partial<CalendarEvent>) {
      const index = this.eventsList.findIndex((e) => e.id === id);
      if (index !== -1) {
        const target = this.eventsList[index];
        if (target) Object.assign(target, updatedEvent);
      }
    },
    deleteEvent(id: string) {
      this.eventsList = this.eventsList.filter((e) => e.id !== id);
    },
  },
});
