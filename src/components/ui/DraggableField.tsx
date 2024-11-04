"use client";

import { Trash2 } from "lucide-react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Button } from "./button";
import { Input } from "./input";
import { Calendar } from "./calendar";
import { useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

interface Field {
  id: string;
  type: string;
  icon: JSX.Element;
}

interface DraggableFieldProps {
  field: Field;
  onRemove: (id: string) => void;
}

export function DraggableField({ field, onRemove }: DraggableFieldProps) {
  const [date, setDate] = useState<Date>();
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: field.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const renderInput = () => {
    switch (field.type) {
      case "Date":
        return (
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn(
                  "w-full justify-start text-left font-normal",
                  !date && "text-muted-foreground"
                )}
              >
                {date ? format(date, "PPP") : "Pick a date"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar mode="single" selected={date} onSelect={setDate} />
            </PopoverContent>
          </Popover>
        );
      case "Number":
        return (
          <Input
            type="number"
            placeholder={`Enter ${field.type.toLowerCase()}`}
          />
        );
      case "Email":
        return <Input type="email" placeholder="Enter email" />;
      case "Phone":
        return <Input type="tel" placeholder="Enter phone number" />;
      case "Link":
        return <Input type="url" placeholder="Enter URL" />;
      default:
        return (
          <Input
            type="text"
            placeholder={`Enter ${field.type.toLowerCase()}`}
          />
        );
    }
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      className="flex items-center gap-3 p-3 bg-white rounded-md shadow-sm border group"
    >
      <div {...listeners} className="cursor-move">
        {field.icon}
      </div>
      <div className="flex-1">{renderInput()}</div>
      <Button
        variant="ghost"
        size="icon"
        className="opacity-0 group-hover:opacity-100 transition-opacity"
        onClick={() => onRemove(field.id)}
      >
        <Trash2 className="h-4 w-4 text-red-500" />
      </Button>
    </div>
  );
}
