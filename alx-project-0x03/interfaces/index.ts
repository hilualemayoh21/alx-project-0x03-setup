export type ButtonColor = 'red' | 'blue' | 'orange' | 'green';

export interface ButtonProps {
  buttonLabel: string;
  buttonSize: string; // Example: 'text-sm', 'text-lg'
  buttonBackgroundColor?: ButtonColor;
  action: () => void;
}
