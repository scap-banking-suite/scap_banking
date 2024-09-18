"use client";

import * as React from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ArrowD } from "@/icons/svgComp/ArrowD";
import { Label } from "../ui/label";
import { Control, useController } from "react-hook-form";

type Props = {
  name: string;
  label?: string;
  control?: Control<any>; // Optional control prop
  rules?: { required: boolean };
  variant?: "basic" | "detailed"; // Add this to control the style
};

export const CustomDatePicker = ({
  name = '',
  control, // Optional control
  rules,
  label,
  variant = "detailed", // Default to "basic" variant
}: Props) => {
  // If control is not provided, default to an empty object to prevent errors
  const {
    field: { onChange, onBlur, value, ref } = {
      onChange: () => {},
      onBlur: () => {},
      value: null,
      ref: null,
    },
    fieldState: { error, invalid } = { error: undefined, invalid: false },
  } = control
    ? useController({
        name,
        control,
        rules,
      })
    : {};

  const [date, setDate] = React.useState<Date | undefined>(new Date());
  const [popoverOpen, setPopoverOpen] = React.useState(false);

  const handleDateSelect = (selectedDate: Date | undefined) => {
    if (selectedDate) {
      setDate(selectedDate);
      setPopoverOpen(false);
      if (onChange) onChange(selectedDate); // Call onChange if it exists
    }
  };

  return (
    <div className="w-full mb-4 space-y-2">
      {label && (
        <Label
          htmlFor={name}
          className="text-base capitalize text-[#1C2434]"
          style={{ fontFamily: "SatoshiBold" }}
        >
          {label}
        </Label>
      )}

      <Popover open={popoverOpen} onOpenChange={setPopoverOpen}>
        <PopoverTrigger asChild>
          <button
            className={cn(
              "w-full px-1.5 flex items-center gap-1.5 font-normal border border-[#E8ECF1] rounded-[6.6px]",
              !date && "text-muted-foreground"
            )}
            onClick={() => setPopoverOpen(true)}
          >
            {/* Conditionally render based on the variant prop */}
            {variant === "detailed" ? (
              <>
                <div className="w-6 h-7 border-r py-1.5 border-r-bordergrey flex items-center justify-center">
                  <CalendarIcon className=" h-4 w-4" />
                </div>
                <div className="flex items-center py-2">
                  {date ? (
                    <span className="text-[11px] text-textdark ">
                      {format(date, "PPP")}
                    </span>
                  ) : (
                    <span className="text-[11px] text-textdark ">
                      Select a date
                    </span>
                  )}
                  <ArrowD />
                </div>
              </>
            ) : (
              <>
                {/* basic version with different styles */}

                <div className="w-full flex items-center justify-between py-3 px-4">
                  {date ? (
                    <span className="text-[17px] text-[#565973] ">
                      {format(date, "MM/dd/yyyy")}
                    </span>
                  ) : (
                    <span className="text-[17px] text-[#565973] ">
                      Select a date
                    </span>
                  )}
                  <CalendarIcon className=" h-6 w-6" />
                </div>
              </>
            )}
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
    </div>
  );
};
