"use client"
import { useState, useEffect } from "react"
import dashboardData from "../api/dashboard.json"
import { BarChart, XAxis, YAxis, Bar, ResponsiveContainer, Tooltip } from "recharts"

export default function MainDashboard(props){
    const [data, setData] = useState();

    useEffect(() => {
        setData(dashboardData)
      }, []);

    return(<>
        <section className=" bg-white-secondary p-5 rounded-lg w-2/4 h-full shadow-md">
            <div className="mb-6" >
                <h3 className="font-semibold text-xl text-primary">Manutenções realizadas em {props.year}</h3>
            </div>
            <div className="h-5/6 flex items-center justify-center" >
                <ResponsiveContainer height="100%" width="100%">
                    <BarChart  data={data}>
                        <XAxis dataKey="month" padding="gap" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey={"maintenance"} fill="#222831" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </section>
    </>)
}