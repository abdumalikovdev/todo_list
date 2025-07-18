import { type FC, useEffect, useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

interface TimeModalProps {
  open: boolean;
  onClose: () => void;
  onSelect: (time: string | null) => void;
}

const quickTimes = [
  { label: "No Time", value: null },
  { label: "Default", value: "09:00" },
  { label: "09:00", value: "09:00" },
  { label: "09:30", value: "09:30" },
  { label: "10:00", value: "10:00" },
  { label: "10:45", value: "10:45" },
  { label: "12:00", value: "12:00" },
  { label: "13:30", value: "13:30" },
  { label: "17:30", value: "17:30" },
];

export const TimeModal: FC<TimeModalProps> = ({ open, onClose, onSelect }) => {
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  useEffect(() => {
    if (!open) {
      setSelectedTime(null);
    }
  }, [open]);

  const handleDone = () => {
    onSelect(selectedTime);
    onClose();
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="p-4 rounded-2xl w-[95%] max-w-sm bg-white">
        <div className="text-center font-semibold">SET TIME</div>

        <div className="text-center text-3xl font-bold">
          {selectedTime || "00:00"}
        </div>

        <div className="grid grid-cols-2 gap-2 text-sm">
          {quickTimes.slice(0, 2).map((q) => (
            <button
              key={q.label}
              onClick={() => setSelectedTime(q.value)}
              className={cn(
                "py-1 rounded-full border text-center",
                q.value === selectedTime
                  ? "bg-pink-500 text-white border-pink-500"
                  : "bg-gray-100 text-gray-700"
              )}
            >
              {q.label}
            </button>
          ))}
        </div>

        <div className="space-y-2 max-h-[200px] overflow-y-auto">
          {quickTimes.map((t) => (
            <button
              key={t.label}
              onClick={() => setSelectedTime(t.value)}
              className={cn(
                "w-full text-left px-4 py-2 rounded-lg",
                selectedTime === t.value
                  ? "bg-pink-100 text-pink-600"
                  : "hover:bg-gray-100"
              )}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div className="flex justify-between pt-4">
          <button
            onClick={onClose}
            className="text-sm text-gray-500 font-medium"
          >
            CANCEL
          </button>
          <button
            onClick={handleDone}
            className="text-sm text-pink-500 font-semibold"
          >
            DONE
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
