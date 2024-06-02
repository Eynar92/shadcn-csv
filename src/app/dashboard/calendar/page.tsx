'use client';

import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";



export default function CalendarPage() {

    const [date, setDate] = useState<Date | undefined>(new Date());
    const [multipleDates, setMultipleDates] = useState<Date[] | undefined>([]);

    const smallDate = date?.toLocaleString('es-ES', {
        weekday: "long",
        day: "2-digit",
        month: "long"
    })

    return (
        <div className="flex sm:flex-wrap flex-col sm:flex-row gap-4">

            <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border"
                disabled={date => date.getDay() === 0 || date.getDay() === 6}
            />
            <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border"
                disabled={(date) => date <= new Date()}
            />
            <Calendar
                mode="multiple"
                selected={multipleDates}
                onSelect={setMultipleDates}
                className="rounded-md border"
            />

            <div>
                <h1 className="text-3xl">Información</h1>
                <div className="border-b"></div>
                <p>{smallDate}</p>
                <p>{multipleDates?.map(date => date.toLocaleString()).join(', ')}</p>
            </div>

        </div>

    )
}
