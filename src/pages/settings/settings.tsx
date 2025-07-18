import type { FC } from "react";
import { useNavigate } from "react-router-dom";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { SETTINGS_TABS } from "@/constants";
import { FaArrowLeft } from "react-icons/fa";

export const SettingsPage: FC = () => {
  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    navigate(path);
  };

  return (
    <div className="max-w-md mx-auto  mb-[100px]">
      <div className="fixed flex items-center top-0 w-full p-2 mb-4 gap-2 bg-white">
        <button onClick={() => navigate("-1")}>
          <FaArrowLeft size={20} />
        </button>
        <h1 className="text-2xl font-semibold">Settings</h1>
      </div>

      <div className="space-y-4 p-4 mt-[40px]">
        <Section title="Customize">
          {SETTINGS_TABS.slice(0, 6).map((item) => (
            <SettingsButton
              key={item.id}
              icon={item.icon}
              title={item.title}
              onClick={() => handleNavigate(item.path)}
            />
          ))}

          <SettingsSwitch title={SETTINGS_TABS[5].title} />
        </Section>

        <Separator className="w-full border-t border-gray-100" />

        <Section title="Date & Time">
          {SETTINGS_TABS.slice(6, 11).map((item) => (
            <SettingsButton
              key={item.id}
              icon={item.icon}
              title={item.title}
              onClick={() => handleNavigate(item.path)}
            />
          ))}
        </Section>

        <Separator className="w-full border-t border-gray-100" />
        <Section title="Task Appearance Customize">
          {SETTINGS_TABS.slice(11, 12).map((item) => (
            <SettingsButton
              key={item.id}
              icon={item.icon}
              title={item.title}
              onClick={() => handleNavigate(item.path)}
            />
          ))}
        </Section>

        <Separator className="w-full border-t border-gray-100" />
        <Section title="About">
          {SETTINGS_TABS.slice(12, 22).map((item) => (
            <SettingsButton
              key={item.id}
              icon={item.icon}
              title={item.title}
              onClick={() => handleNavigate(item.path)}
            />
          ))}
        </Section>
      </div>
    </div>
  );
};

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

const Section: FC<SectionProps> = ({ title, children }) => (
  <div>
    <p className="text-sm text-muted-foreground mb-2">{title}</p>
    <div className="space-y-1">{children}</div>
  </div>
);

interface SettingsButtonProps {
  icon?: React.ReactNode;
  title: string;
  onClick: () => void;
}

const SettingsButton: FC<SettingsButtonProps> = ({ icon, title, onClick }) => (
  <button
    onClick={onClick}
    className="w-full flex items-center gap-3 px-4 py-3 rounded-md text-left
               hover:bg-gray-100 active:bg-gray-200 transition-colors"
  >
    {icon && <div className="text-blue-500">{icon}</div>}
    <span className="text-sm font-medium">{title}</span>
  </button>
);

interface SettingsSwitchProps {
  title: string;
}

const SettingsSwitch: FC<SettingsSwitchProps> = ({ title }) => (
  <div
    className="w-full flex items-center justify-between px-4 py-3 rounded-md
               hover:bg-gray-100 active:bg-gray-200 transition-colors"
  >
    <span className="text-sm font-medium">{title}</span>
    <Switch />
  </div>
);

export default SettingsPage;
