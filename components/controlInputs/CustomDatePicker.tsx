"use client";

import * as React from "react";
import { format } from "date-fns";
import { ArrowDown, Calendar as CalendarIcon, ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ArrowD } from "@/icons/svgComp/ArrowD";

type Props = {};

export const CustomDatePicker = (props: Props) => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  const [popoverOpen, setPopoverOpen] = React.useState(false);

  const handleDateSelect = (selectedDate: Date | undefined) => {
    if (selectedDate) {
      setDate(selectedDate);
      setPopoverOpen(false);
    }
  };

  return (
    <Popover open={popoverOpen} onOpenChange={setPopoverOpen}>
      <PopoverTrigger asChild>
        <button
          className={cn(
            "w-fit px-1.5 flex items-center gap-1.5 font-normal border border-[#E8ECF1] rounded-[6.6px]",
            !date && "text-muted-foreground"
          )}
          onClick={() => setPopoverOpen(true)} 
        >
          <div className="w-6 h-7 border-r py-1.5 border-r-bordergrey flex items-center justify-center">
            <CalendarIcon className=" h-4 w-4" />
          </div>
          <div className="flex items-center py-2">
            {date ? (
              <span className="text-[11px] text-textdark ">
                {format(date, "PPP")}
              </span>
            ) : (
              <span className="text-[11px] text-textdark ">Select a date</span>
            )}
            <ArrowD />
          </div>
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={handleDateSelect}
          initialFocus
          className="text-[11px] text-textdark "
        />
      </PopoverContent>
    </Popover>
  );
};
