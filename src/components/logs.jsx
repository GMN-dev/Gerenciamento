import LogCard from "./logCard"

export default function Logs(){
    return(<>
        <section className="bg-white-secondary flex flex-col p-5 rounded-lg shadow-md overflow-hidden">
            <div> 
                <h3 className="font-semibold text-xl text-primary ">Ultimas atualizações</h3>
            </div>
            <div className="flex-1 flex flex-col gap-2 overflow-auto">
               <LogCard name={"Rafael Lucas"} log={"Retirou hardware do equipamento C012332"} date={"10/12/2023 - 13:00"}/>
               <LogCard name={"Rafael Lucas"} log={"Retirou hardware do equipamento C012332"} date={"10/12/2023 - 13:00"}/>
               <LogCard name={"Rafael Lucas"} log={"Retirou hardware do equipamento C012332"} date={"10/12/2023 - 13:00"}/>
               <LogCard name={"Rafael Lucas"} log={"Retirou hardware do equipamento C012332"} date={"10/12/2023 - 13:00"}/>  
               <LogCard name={"Rafael Lucas"} log={"Retirou hardware do equipamento C012332"} date={"10/12/2023 - 13:00"}/>  
               <LogCard name={"Rafael Lucas"} log={"Retirou hardware do equipamento C012332"} date={"10/12/2023 - 13:00"}/>  
               <LogCard name={"Rafael Lucas"} log={"Retirou hardware do equipamento C012332"} date={"10/12/2023 - 13:00"}/>  
               <LogCard name={"Rafael Lucas"} log={"Retirou hardware do equipamento C012332"} date={"10/12/2023 - 13:00"}/>  
               <LogCard name={"Rafael Lucas"} log={"Retirou hardware do equipamento C012332"} date={"10/12/2023 - 13:00"}/>  
               <LogCard name={"Rafael Lucas"} log={"Retirou hardware do equipamento C012332"} date={"10/12/2023 - 13:00"}/>
            </div>
        </section>   
    </>)
}