import Report from "../components/Report";
import { reports } from "../constants/contants";

const Reports = () => {
  return (
   <div className="h-full pb-10">
      <h1 className="text-3xl font-bold text-center">Reports</h1>
      <div className="mt-8">
        { reports.map((report) => <Report {...report}></Report>) }
      </div>
    </div>
  )
}
export default Reports;