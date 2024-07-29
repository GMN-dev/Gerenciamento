import MainDashboard from "@/components/mainDashboard";
import Logs from "@/components/logs"
import MainButton from "@/components/mainButton";

export default function Application(){
    return(
    <div className="h-full flex gap-8">
        <MainDashboard year="2024" />
        <div className="w-2/4 flex flex-col justify-between gap-8">
            <Logs />
            <div className="flex flex-col gap-3 ">
                <MainButton action="Iniciar manutenção"/>
                <MainButton action="Adicionar estoque"/>
            </div>
        </div>
    </div>
    )
}