import { ToggleItemProps } from './types';
import './Styles/ToggleItem.css';

function ToggleItem({ label, checked, onChange }: ToggleItemProps) {
  return (
    <label className="toggle-item">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />
      <span className="toggle-label">{label}</span>
    </label>
  );
}

export default ToggleItem;