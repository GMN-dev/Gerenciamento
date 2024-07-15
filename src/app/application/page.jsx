import MainDashboard from "@/components/mainDashboard";
import Logs from "@/components/logs"
export default function Application(){
    return(
    <div className="h-full flex gap-8">
        <MainDashboard year="2024" />
        <Logs />
    </div>
    )
}