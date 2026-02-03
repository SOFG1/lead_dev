import { useState } from "react";
import SettingsIcon from "../assets/settings.svg";
import s from "./SettingsModal.module.css";
import type { ISettings } from "../types/ISettings";

interface IProps {
  settings: ISettings;
  onChangeSettings: (settings: ISettings) => void
}

export const SettingsModal = ({ settings, onChangeSettings }: IProps) => {
  const [opened, setOpened] = useState(false);

  const onChangeSetting = (
    prop: keyof ISettings,
    value: ISettings[keyof ISettings]
  ) => {
    const newSettings = {
      ...settings,
      [prop]: value,
    };
    localStorage.setItem("settings", JSON.stringify(newSettings));
    onChangeSettings(newSettings)

  };

  return (
    <>
      <button className={s.button} onClick={() => setOpened(true)}>
        <img className={s.icon} src={SettingsIcon} alt="Settings Icon" />
      </button>
      {opened && (
        <div className={s.modal}>
          <button className={s.close} onClick={() => setOpened(false)}>
            X
          </button>
          <div className={s.content}>
            <div className={s.item}>
              <label htmlFor="">Random</label>
              <input
                checked={settings.random}
                onChange={(e) => onChangeSetting("random", e.target.checked)}
                type="checkbox"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};
