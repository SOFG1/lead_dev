import { memo, useMemo, useState } from 'react';
import SettingsIcon from '../assets/settings.svg';
import s from './SettingsModal.module.css';
import type { ISettings } from '../types/ISettings';
import Select from 'react-select';
import { allQuestions } from '../questions';

interface IProps {
  settings: ISettings;
  onChangeSettings: (settings: ISettings) => void;
}

export const SettingsModal = memo(({ settings, onChangeSettings }: IProps) => {
  const [opened, setOpened] = useState(false);

  const onChangeSetting = (
    prop: keyof ISettings,
    value: ISettings[keyof ISettings]
  ) => {
    const newSettings = {
      ...settings,
      [prop]: value,
    };
    localStorage.setItem('settings', JSON.stringify(newSettings));
    onChangeSettings(newSettings);
  };

  const options = useMemo(() => {
    return Array.from(new Set(allQuestions.map((q) => q.tag))).map((o) => ({
      label: o,
      value: o,
    }));
  }, []);

  return (
    <>
      <button
        className={s.button}
        onClick={() => setOpened(!opened)}
        aria-label="Settings button"
      >
        <img className={s.icon} src={SettingsIcon} alt="Settings Icon" />
      </button>
      {opened && (
        <div className={s.modal}>
          <button
            className={s.close}
            onClick={() => setOpened(false)}
            aria-label="Close settings button"
          >
            X
          </button>
          <div className={s.content}>
            <h2 className={s.title}>Settings</h2>
            <div className={s.item}>
              <Select
                className={s.dropdown}
                options={options}
                value={settings.tags?.map((v) => ({ label: v, value: v }))}
                onChange={(v) =>
                  onChangeSetting(
                    'tags',
                    v.map((v) => v.value)
                  )
                }
                isMulti={true}
                aria-label="Category dropdown"
              />
            </div>
            <div className={s.item}>
              <label className={s.label} htmlFor="">
                Random
              </label>
              <input
                checked={settings.random}
                onChange={(e) => onChangeSetting('random', e.target.checked)}
                type="checkbox"
                aria-label="Random checkbox"
              />
            </div>
            <div className={s.item}>
              <label className={s.label} htmlFor="">
                Only lists
              </label>
              <input
                checked={settings.lists}
                onChange={(e) => onChangeSetting('lists', e.target.checked)}
                type="checkbox"
                aria-label="Lists checkbox"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
});
