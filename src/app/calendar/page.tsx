'use client';

import * as React from 'react';
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const events = [
  { date: new Date(2026, 1, 25), title: "School Box Packing", time: "10:00 AM", category: "Volunteer" },
  { date: new Date(2026, 2, 5), title: "Prayer Gathering", time: "6:30 PM", category: "Spiritual" },
  { date: new Date(2026, 2, 12), title: "Hygiene Bag Distribution", time: "1:00 PM", category: "Outreach" },
];

export default function CalendarPage() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <div className="container px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-primary text-center">Community Calendar</h1>
      <div className="grid md:grid-cols-2 gap-12">
        <div className="flex justify-center">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border shadow p-4"
          />
        </div>
        <div className="flex flex-col gap-6">
          <h2 className="text-2xl font-semibold mb-2">Upcoming Events</h2>
          {events.map((event, i) => (
            <Card key={i}>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-xl">{event.title}</CardTitle>
                  <Badge variant="outline">{event.category}</Badge>
                </div>
                <CardDescription>
                  {event.date.toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm font-medium text-primary">Time: {event.time}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
