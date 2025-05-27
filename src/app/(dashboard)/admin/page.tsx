// import Announcements from "@/components/Announcements"
// import AttendanceChart from "@/components/AttendanceChart"
// import AttendanceChartContainer from "@/components/AttendanceChartContainer"
// import CountChart from "@/components/CountChart"
// import CountChartContainer from "@/components/CountChartContainer"
// import Eventcalendar from "@/components/EventCalendar"
// import FinanceChart from "@/components/FinanceChart"
// import UserCard from "@/components/UserCard"

// const AdminPage = () => {
//   return (
//     <div className='p-4 flex gap-4 flex-col md:flex-row'>
//       {/* LEFT */}
//       <div className='w-full lg:w-2/3 flex flex-col gap-8'>
//         {/* USER CARDS */}
//         <div className='flex gap-4 justify-between'>
//           <UserCard type="student" />
//           <UserCard type="teacher" />
//           <UserCard type="parent" />
//          {/* <UserCard type="staff" /> */}
//         </div>
//           {/*middle chart*/}
//         <div className="flex gap-4 flex-col lg:flex-row">
//           {/*CountChart*/}
//           <div className="w-full lg:w-1/3 h-[450px]">
//           <CountChartContainer/>
//           </div>
//           {/*Attendance chart*/}
//           <div className="w-full lg:w-2/3 h-[450px]">
//           <AttendanceChartContainer/>
//           </div>
//         </div>
//         {/*bottom chart*/}
//         <div className="w-full h-[500px]">
//           <FinanceChart/>
//         </div>
//       </div>
//       {/* RIGHT */}
//       <div className='w-full lg:w-1/3 flex flex-col gap-8'>
//       <Eventcalendar/>
//       <Announcements/>
//       </div>
//     </div>
//   )
// }

// export default AdminPage
const AdminPage = () => {
  return (
    <div className="p-4 flex gap-4 flex-col md:flex-row">
      <div className="w-full lg:w-2/3 flex flex-col gap-8">
        <div className="flex gap-4 justify-between">
          <div className="rounded-2xl bg-lamaPurple p-4 flex-1 min-w-[130px]">
            <h1 className="text-2xl font-semibold my-4">Loading...</h1>
            <h2 className="text-sm font-medium text-gray-500">Students</h2>
          </div>
          <div className="rounded-2xl bg-lamaYellow p-4 flex-1 min-w-[130px]">
            <h1 className="text-2xl font-semibold my-4">Loading...</h1>
            <h2 className="text-sm font-medium text-gray-500">Teachers</h2>
          </div>
          <div className="rounded-2xl bg-lamaPurple p-4 flex-1 min-w-[130px]">
            <h1 className="text-2xl font-semibold my-4">Loading...</h1>
            <h2 className="text-sm font-medium text-gray-500">Parents</h2>
          </div>
        </div>

        <div className="flex gap-4 flex-col lg:flex-row">
          <div className="w-full lg:w-1/3 h-[450px] bg-white rounded-xl p-4">
            <h1 className="text-lg font-semibold">Students Chart</h1>
            <div className="flex items-center justify-center h-full">
              <p className="text-gray-500">Chart loading...</p>
            </div>
          </div>
          <div className="w-full lg:w-2/3 h-[450px] bg-white rounded-lg p-4">
            <h1 className="text-lg font-semibold">Attendance</h1>
            <div className="flex items-center justify-center h-full">
              <p className="text-gray-500">Chart loading...</p>
            </div>
          </div>
        </div>

        <div className="w-full h-[500px] bg-white rounded-lg p-4">
          <h1 className="text-lg font-semibold">Finance Chart</h1>
          <div className="flex items-center justify-center h-full">
            <p className="text-gray-500">Chart loading...</p>
          </div>
        </div>
      </div>

      <div className="w-full lg:w-1/3 flex flex-col gap-8">
        <div className="bg-white rounded-lg p-4 h-64">
          <h1 className="text-lg font-semibold">Event Calendar</h1>
          <div className="flex items-center justify-center h-full">
            <p className="text-gray-500">Calendar loading...</p>
          </div>
        </div>
        <div className="bg-white p-4 rounded-md">
          <h1 className="text-xl font-semibold mb-4">Announcements</h1>
          <div className="space-y-4">
            <div className="bg-lamaSkyLight rounded-md p-4">
              <h2 className="font-medium">Sample Announcement</h2>
              <p className="text-sm text-gray-400 mt-1">
                Loading announcements...
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
