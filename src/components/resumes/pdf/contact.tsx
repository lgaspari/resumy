import { TablerIconsProps } from '@tabler/icons-react';
import type { Contact as ContactType } from 'types/Resume';

interface ContactProps {
  contact: ContactType;
  Icon: React.ElementType<TablerIconsProps>;
}

export default function Contact({
  contact: { label, url },
  Icon,
}: ContactProps) {
  return (
    <a
      className="flex items-center gap-1 text-sm text-slate-900 underline hover:text-slate-100"
      href={url}
      rel="noreferrer"
      target="_blank"
    >
      <Icon size={16} />
      {label}
    </a>
  );
}
