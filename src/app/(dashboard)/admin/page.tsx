// Replace your admin/page.tsx with this:

"use client"; // This forces everything to run client-side

import dynamic from "next/dynamic";

// Import ALL your async server components dynamically with no SSR
const Announcements = dynamic(() => import("@/components/Announcements"), {
  ssr: false,
  loading: () => (
    <div className="bg-white p-4 rounded-md h-48 animate-pulse bg-gray-200"></div>
  ),
});

const AttendanceChartContainer = dynamic(
  () => import("@/components/AttendanceChartContainer"),
  {
    ssr: false,
    loading: () => (
      <div className="bg-white rounded-lg p-4 h-full animate-pulse bg-gray-200"></div>
    ),
  }
);

const CountChartContainer = dynamic(
  () => import("@/components/CountChartContainer"),
  {
    ssr: false,
    loading: () => (
      <div className="h-[450px] bg-white rounded-lg animate-pulse bg-gray-200"></div>
    ),
  }
);

const UserCard = dynamic(() => import("@/components/UserCard"), {
  ssr: false,
  loading: () => (
    <div className="rounded-2xl bg-gray-200 p-4 flex-1 min-w-[130px] h-24 animate-pulse"></div>
  ),
});

const Eventcalendar = dynamic(() => import("@/components/EventCalendar"), {
  ssr: false,
  loading: () => (
    <div className="bg-white rounded-lg p-4 h-64 animate-pulse bg-gray-200"></div>
  ),
});

const FinanceChart = dynamic(() => import("@/components/FinanceChart"), {
  ssr: false,
  loading: () => (
    <div className="bg-white rounded-lg p-4 h-[500px] animate-pulse bg-gray-200"></div>
  ),
});

// Note: AttendanceChart and CountChart are client components that don't fetch data
// so they don't need dynamic imports, but since we're importing them through
// the containers above, we don't need to import them here at all

const AdminPage = () => {
  return (
    <div className="p-4 flex gap-4 flex-col md:flex-row">
      {/* LEFT */}
      <div className="w-full lg:w-2/3 flex flex-col gap-8">
        {/* USER CARDS */}
        <div className="flex gap-4 justify-between">
          <UserCard type="student" />
          <UserCard type="teacher" />
          <UserCard type="parent" />
        </div>
        {/*middle chart*/}
        <div className="flex gap-4 flex-col lg:flex-row">
          {/*CountChart*/}
          <div className="w-full lg:w-1/3 h-[450px]">
            <CountChartContainer />
          </div>
          {/*Attendance chart*/}
          <div className="w-full lg:w-2/3 h-[450px]">
            <AttendanceChartContainer />
          </div>
        </div>
        {/*bottom chart*/}
        <div className="w-full h-[500px]">
          <FinanceChart />
        </div>
      </div>
      {/* RIGHT */}
      <div className="w-full lg:w-1/3 flex flex-col gap-8">
        <Eventcalendar />
        <Announcements />
      </div>
    </div>
  );
};

export default AdminPage;
