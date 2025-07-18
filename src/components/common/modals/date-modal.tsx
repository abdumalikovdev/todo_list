import { type FC, useEffect, useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import dayjs from "dayjs";
import { TimeModal } from "./time-modal";
import { ReminderModal } from "./reminder-modal";
import { IoMdTime } from "react-icons/io";
import { Bell } from "lucide-react";

interface DateModalProps {
  open: boolean;
  onClose: () => void;
  onSelect: (date: string | null) => void;
}

const quickDates = [
  { label: "No Date", value: null },
  { label: "Today", value: dayjs().format("YYYY-MM-DD") },
  { label: "Tomorrow", value: dayjs().add(1, "day").format("YYYY-MM-DD") },
  { label: "3 Days Later", value: dayjs().add(3, "day").format("YYYY-MM-DD") },
  { label: "This Sunday", value: dayjs().day(0).format("YYYY-MM-DD") },
];

export const DateModal: FC<DateModalProps> = ({ open, onClose, onSelect }) => {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [showTimeModal, setShowTimeModal] = useState(false);
  const [showReminderModal, setShowReminderModal] = useState(false); // ✅ Reminder modal state
  const [dueTime, setDueTime] = useState<string | null>(null);

  useEffect(() => {
    if (!open) {
      setSelectedDate(null);
      setDueTime(null);
      setShowReminderModal(false); // ❗ modal yopilganda reset qilinadi
    }
  }, [open]);

  const handleDone = () => {
    onSelect(selectedDate);
    onClose();
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="p-4 rounded-2xl w-[95%] max-w-sm bg-white">
        <div className="text-center font-semibold">IYUL 2025</div>

        <div className="grid grid-cols-7 gap-2 text-center text-sm text-gray-500">
          {["Yak", "Dush", "Sesh", "Chor", "Pay", "Jum", "Shan"].map((d) => (
            <div key={d}>{d}</div>
          ))}
          {Array.from({ length: 31 }, (_, i) => i + 1).map((day) => (
            <button
              key={day}
              onClick={() =>
                setSelectedDate(`2025-07-${day.toString().padStart(2, "0")}`)
              }
              className={cn(
                "aspect-square rounded-full text-sm",
                selectedDate?.endsWith(`-${day.toString().padStart(2, "0")}`)
                  ? "bg-pink-500 text-white"
                  : "hover:bg-gray-200"
              )}
            >
              {day}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-2 text-sm">
          {quickDates.map((q) => (
            <button
              key={q.label}
              onClick={() => setSelectedDate(q.value)}
              className={cn(
                "py-1 rounded-lg border text-center",
                q.value === selectedDate
                  ? "bg-pink-500 text-white border-pink-500"
                  : "bg-gray-100 text-gray-700"
              )}
            >
              {q.label}
            </button>
          ))}
        </div>

        {/* Time tanlash */}
        <div
          className="flex items-center justify-between mt-2 cursor-pointer"
          onClick={() => setShowTimeModal(true)}
        >
          <div className="flex items-center space-x-3">
            <IoMdTime size={20} />
            <span>Time</span>
          </div>
          <span className="bg-gray-200 px-3 py-1 rounded-full">
            {dueTime ? `Time: ${dueTime}` : "No"}
          </span>
        </div>

        {/* Reminder chaqirish */}
        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center space-x-3">
            <Bell size={18} />
            <span>Reminder</span>
          </div>
          <button
            onClick={() => setShowReminderModal(true)}
            disabled={!dueTime}
            className={cn(
              "px-3 py-1 rounded-full text-sm font-medium",
              dueTime
                ? "bg-pink-500 text-white hover:bg-pink-600"
                : "bg-gray-200 text-gray-400 cursor-not-allowed"
            )}
          >
            Set Reminder
          </button>
        </div>

        {/* Time Modal */}
        <TimeModal
          open={showTimeModal}
          onClose={() => setShowTimeModal(false)}
          onSelect={(time) => {
            setDueTime(time);
            if (!time) setShowReminderModal(false); // time o‘chirilsa, reminder ham yopilsin
          }}
        />

        {/* Reminder Modal */}
        <ReminderModal
          open={showReminderModal}
          onOpenChange={setShowReminderModal}
          isTimeSelected={!!dueTime}
        />

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
