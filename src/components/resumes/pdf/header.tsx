import type { TablerIconsProps } from '@tabler/icons-react';

interface HeaderProps {
  children: React.ReactNode;
  Icon: React.ComponentType<TablerIconsProps>;
}

export default function Header({ children, Icon }: HeaderProps) {
  return (
    <div className="flex items-center gap-2 text-neutral-500">
      <Icon size={32} />
      <h3>{children}</h3>
    </div>
  );
}
