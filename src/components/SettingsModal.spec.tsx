// @vitest-environment jsdom
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import { vi, beforeEach, describe, it, expect } from 'vitest';

// Mock react-select to a simple native multiple select for easier testing.
interface MockSelectProps {
  isMulti?: boolean;
  className?: string;
  options?: { label: string; value: string }[];
  onChange: (selected: { label: string; value: string }[]) => void;
}

vi.mock('react-select', () => {
  return {
    default: (props: MockSelectProps) => {
      return (
        <select
          data-testid="react-select"
          multiple={props.isMulti}
          className={props.className}
          onChange={(e) => {
            const selected = Array.from(
              (e.target as HTMLSelectElement).selectedOptions
            ).map((o) => ({ label: o.label, value: o.value }));
            // call the provided onChange with format similar to react-select
            props.onChange(selected);
          }}
        >
          {(props.options || []).map((o: { label: string; value: string }) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
      );
    },
  };
});

// Tests for SettingsModal
import { SettingsModal } from './SettingsModal';
import type { ISettings } from '../types/ISettings';

// keep localStorage isolated per test
beforeEach(() => {
  cleanup();
  localStorage.clear();
  vi.restoreAllMocks();
});

describe('SettingsModal', () => {
  const baseSettings: ISettings = {
    tags: [],
    random: false,
    lists: false,
  };

  it('opens and closes modal when clicking buttons', () => {
    const onChange = vi.fn();
    render(
      <SettingsModal settings={baseSettings} onChangeSettings={onChange} />
    );

    // modal not visible initially
    expect(screen.queryByText('Settings')).toBeNull();

    // open modal
    fireEvent.click(screen.getByRole('button', { name: 'Settings button' }));
    expect(screen.getByText('Settings')).not.toBeNull();

    // close modal
    fireEvent.click(
      screen.getByRole('button', { name: 'Close settings button' })
    );
    expect(screen.queryByText('Settings')).toBeNull();
  });

  it('toggles checkbox and persists to localStorage and calls onChangeSettings', () => {
    const onChange = vi.fn();
    render(
      <SettingsModal settings={baseSettings} onChangeSettings={onChange} />
    );

    fireEvent.click(screen.getByRole('button', { name: 'Settings button' }));

    const randomCheckbox = screen.getByLabelText(
      'Random checkbox'
    ) as HTMLInputElement;
    expect(randomCheckbox.checked).toBe(false);

    // toggle checkbox
    fireEvent.click(randomCheckbox);

    // onChangeSettings should be called with updated settings
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange.mock.calls[0][0]).toEqual({
      ...baseSettings,
      random: true,
    });

    // localStorage should contain the updated settings
    const stored = JSON.parse(localStorage.getItem('settings') || '{}');
    expect(stored).toEqual({ ...baseSettings, random: true });
  });

  it('selects tags using the mocked react-select and updates settings', () => {
    const onChange = vi.fn();
    render(
      <SettingsModal settings={baseSettings} onChangeSettings={onChange} />
    );

    fireEvent.click(screen.getByRole('button', { name: 'Settings button' }));

    const select = screen.getByTestId('react-select') as HTMLSelectElement;
    // ensure there are options
    expect(select.options.length).toBeGreaterThan(0);

    // select the first option
    select.options[0].selected = true;
    fireEvent.change(select);

    // onChangeSettings should be called and tags updated to contain the selected value
    expect(onChange).toHaveBeenCalled();
    const updated = onChange.mock.calls[0][0];
    expect(Array.isArray(updated.tags)).toBe(true);
    expect(updated.tags.length).toBe(1);

    // localStorage should also be updated
    const stored = JSON.parse(localStorage.getItem('settings') || '{}');
    expect(stored.tags).toEqual(updated.tags);
  });
});
