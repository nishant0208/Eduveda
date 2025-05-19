import Announcements from "@/components/Announcements"
import AttendanceChart from "@/components/AttendanceChart"
import AttendanceChartContainer from "@/components/AttendanceChartContainer"
import CountChart from "@/components/CountChart"
import CountChartContainer from "@/components/CountChartContainer"
import Eventcalendar from "@/components/EventCalendar"
import FinanceChart from "@/components/FinanceChart"
import UserCard from "@/components/UserCard"

const AdminPage = () => {
  return (
    <div className='p-4 flex gap-4 flex-col md:flex-row'>
      {/* LEFT */}
      <div className='w-full lg:w-2/3 flex flex-col gap-8'>
        {/* USER CARDS */}
        <div className='flex gap-4 justify-between'>
          <UserCard type="student" />
          <UserCard type="teacher" />
          <UserCard type="parent" />
         {/* <UserCard type="staff" /> */}
        </div>
          {/*middle chart*/}
        <div className="flex gap-4 flex-col lg:flex-row">
          {/*CountChart*/}
          <div className="w-full lg:w-1/3 h-[450px]">
          <CountChartContainer/>
          </div>
          {/*Attendance chart*/}
          <div className="w-full lg:w-2/3 h-[450px]">
          <AttendanceChartContainer/>
          </div>
        </div>
        {/*bottom chart*/}
        <div className="w-full h-[500px]">
          <FinanceChart/>
        </div>
      </div>
      {/* RIGHT */}
      <div className='w-full lg:w-1/3 flex flex-col gap-8'>
      <Eventcalendar/>
      <Announcements/>
      </div>
    </div>
  )
}

export default AdminPage