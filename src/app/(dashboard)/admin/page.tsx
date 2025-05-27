import dynamic from "next/dynamic";

const Announcements = dynamic(() => import("@/components/Announcements"), {
  ssr: false,
  loading: () => <div className="animate-pulse bg-gray-200 h-32 rounded"></div>,
});

const AttendanceChartContainer = dynamic(
  () => import("@/components/AttendanceChartContainer"),
  {
    ssr: false,
    loading: () => (
      <div className="animate-pulse bg-gray-200 h-[450px] rounded"></div>
    ),
  }
);

const CountChartContainer = dynamic(
  () => import("@/components/CountChartContainer"),
  {
    ssr: false,
    loading: () => (
      <div className="animate-pulse bg-gray-200 h-[450px] rounded"></div>
    ),
  }
);

const Eventcalendar = dynamic(() => import("@/components/EventCalendar"), {
  ssr: false,
  loading: () => <div className="animate-pulse bg-gray-200 h-64 rounded"></div>,
});

const FinanceChart = dynamic(() => import("@/components/FinanceChart"), {
  ssr: false,
  loading: () => (
    <div className="animate-pulse bg-gray-200 h-[500px] rounded"></div>
  ),
});

const UserCard = dynamic(() => import("@/components/UserCard"), {
  ssr: false,
  loading: () => <div className="animate-pulse bg-gray-200 h-24 rounded"></div>,
});

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
