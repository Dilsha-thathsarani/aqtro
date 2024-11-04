"use client";

import {
  Plus,
  Edit,
  Copy,
  Type,
  Calendar,
  Users,
  Phone,
  Mail,
  Hash,
  Link,
  Image,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/Card";
import { useState } from "react";
import { DndContext, DragEndEvent, closestCenter } from "@dnd-kit/core";
import {
  SortableContext,
  arrayMove,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { DraggableField } from "./DraggableField";
import { toast } from "./use-toast";
import { Input } from "@/components/ui/input";

interface Field {
  id: string;
  type: string;
  icon: JSX.Element;
}

const availableFields: Field[] = [
  {
    id: "text",
    type: "Text",
    icon: <Type className="h-4 w-4" aria-hidden="true" />,
  },
  {
    id: "date",
    type: "Date",
    icon: <Calendar className="h-4 w-4" aria-hidden="true" />,
  },
  {
    id: "member",
    type: "Member",
    icon: <Users className="h-4 w-4" aria-hidden="true" />,
  },
  {
    id: "phone",
    type: "Phone",
    icon: <Phone className="h-4 w-4" aria-hidden="true" />,
  },
  {
    id: "email",
    type: "Email",
    icon: <Mail className="h-4 w-4" aria-hidden="true" />,
  },
  {
    id: "number",
    type: "Number",
    icon: <Hash className="h-4 w-4" aria-hidden="true" />,
  },
  {
    id: "link",
    type: "Link",
    icon: <Link className="h-4 w-4" aria-hidden="true" />,
  },
  {
    id: "image",
    type: "Image",
    icon: <Image className="h-4 w-4" aria-hidden="true" />,
  },
];

export function NewApp() {
  const [selectedFields, setSelectedFields] = useState<Field[]>([]);

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over) return;

    if (active.id !== over.id) {
      const oldIndex = selectedFields.findIndex(
        (field) => field.id === active.id
      );
      const newIndex = selectedFields.findIndex(
        (field) => field.id === over.id
      );
      setSelectedFields(arrayMove(selectedFields, oldIndex, newIndex));
    }
  };

  const handleFieldClick = (field: Field) => {
    if (!selectedFields.find((f) => f.id === field.id)) {
      setSelectedFields([...selectedFields, field]);
      toast({
        title: "Field added",
        description: `${field.type} field has been added to the form.`,
      });
    }
  };

  const handleRemoveField = (id: string) => {
    setSelectedFields(selectedFields.filter((field) => field.id !== id));
    toast({
      title: "Field removed",
      description: "The field has been removed from the form.",
    });
  };

  return (
    <div className="flex h-screen">
      {/* Left Panel */}
      <div className="w-64 border-r bg-white p-4">
        <div className="space-y-4">
          <div className="border rounded p-2">
            <div className="flex justify-between items-center">
              <span className="font-medium">New App</span>
              <Plus className="h-4 w-4" aria-hidden="true" />
            </div>
          </div>

          <div className="space-y-2">
            <div className="border-b pb-2">Routine 1</div>
            <select className="w-full border rounded p-2 bg-white">
              <option>Process</option>
            </select>
            <select className="w-full border rounded p-2 bg-white">
              <option>Tasks</option>
            </select>
          </div>
        </div>
      </div>

      {/* Middle Panel */}
      <div className="flex-1 p-6 border-r">
        <Card className="h-full">
          <div className="p-6 space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">Frontend design maken</h2>
              <Button variant="outline" size="sm">
                <Plus className="h-4 w-4 mr-2" aria-hidden="true" />
                New Process Step
              </Button>
            </div>

            <div className="space-y-4">
              <Input type="text" placeholder="Rol" />
              <Input type="text" placeholder="Workload" />
            </div>

            <div className="border rounded-lg p-4">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-medium">Lo-fi design maken</h3>
                <div className="flex gap-2">
                  <Button variant="ghost" size="sm">
                    <Edit className="h-4 w-4" aria-hidden="true" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Copy className="h-4 w-4" aria-hidden="true" />
                  </Button>
                </div>
              </div>
              <DndContext
                collisionDetection={closestCenter}
                onDragEnd={handleDragEnd}
              >
                <SortableContext
                  items={selectedFields}
                  strategy={verticalListSortingStrategy}
                >
                  <div className="space-y-2">
                    {selectedFields.map((field) => (
                      <DraggableField
                        key={field.id}
                        field={field}
                        onRemove={handleRemoveField}
                      />
                    ))}
                  </div>
                </SortableContext>
              </DndContext>
            </div>
          </div>
        </Card>
      </div>

      {/* Right Panel */}
      <div className="w-96 p-6 bg-gray-50">
        <h3 className="font-medium mb-4">Available Fields</h3>
        <div className="space-y-2">
          {availableFields.map((field) => (
            <button
              key={field.id}
              onClick={() => handleFieldClick(field)}
              className="flex items-center space-x-3 w-full p-3 bg-white hover:bg-gray-50 rounded-md transition-colors"
              type="button"
            >
              {field.icon}
              <span>{field.type}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default NewApp;
