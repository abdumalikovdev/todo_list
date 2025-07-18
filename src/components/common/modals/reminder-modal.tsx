// ReminderModal.tsx
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { useNavigate } from "react-router-dom";

interface ReminderModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  isTimeSelected: boolean;
}

export const ReminderModal: React.FC<ReminderModalProps> = ({
  open,
  onOpenChange,
  isTimeSelected,
}) => {
  const [reminderOn, setReminderOn] = React.useState(true);
  const [reminderAt, setReminderAt] = React.useState("5m");
  const [reminderType] = React.useState("notification");
  const [screenLock] = React.useState("off");
  const navigate = useNavigate();

  const handleDone = () => {
    onOpenChange(false);
    // Optional: Emit selected values here if needed
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="rounded-2xl p-4 bg-white">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-between text-lg font-semibold">
            Reminder is on
            <Switch
              className="bg-pink-200"
              checked={reminderOn}
              onCheckedChange={setReminderOn}
              disabled={!isTimeSelected}
            />
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4 mt-4">
          <div>
            <Label className="text-sm">Reminder at</Label>
            <Select
              value={reminderAt}
              onValueChange={setReminderAt}
              disabled={!reminderOn}
            >
              <SelectTrigger className="mt-1 w-full">
                <SelectValue placeholder="Select reminder time" />
              </SelectTrigger>
              <SelectContent className="bg-white">
                <SelectItem value="1m">1 minute before</SelectItem>
                <SelectItem value="5m">5 minutes before</SelectItem>
                <SelectItem value="10m">10 minutes before</SelectItem>
                <SelectItem value="30m">30 minutes before</SelectItem>
                <SelectItem value="1h">1 hour before</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label className="text-sm">Reminder Type 👑</Label>
            <Select
              value={reminderType}
              disabled={true} // doimiy disable
              onValueChange={() => navigate("/pro")}
            >
              <SelectTrigger
                className="mt-1 w-full"
                onMouseDown={(e) => {
                  e.preventDefault(); // ochilishni to‘xtatadi
                  navigate("/pro"); // /pro sahifaga yo‘naltiradi
                }}
              >
                <SelectValue placeholder="Select reminder type" />
              </SelectTrigger>
              <SelectContent className="bg-white">
                <SelectItem value="notification">Notification</SelectItem>
                <SelectItem value="alarm">Alarm</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label className="text-sm">ScreenLock Reminder 👑</Label>
            <p className="text-xs text-muted-foreground mb-1">
              Show task reminder on phone unlock screen
            </p>
            <Select
              value={screenLock}
              disabled={true}
              onValueChange={() => navigate("/pro")}
            >
              <SelectTrigger
                className="w-full"
                onMouseDown={(e) => {
                  e.preventDefault();
                  navigate("/pro");
                }}
              >
                <SelectValue placeholder="Select lock option" />
              </SelectTrigger>
              <SelectContent className="bg-white">
                <SelectItem value="on">On</SelectItem>
                <SelectItem value="off">Off</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="flex justify-between pt-4">
          <button className="text-sm text-gray-500 font-medium">CANCEL</button>
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
