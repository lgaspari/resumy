import { IconCheck, IconFlame } from '@tabler/icons-react';
import type { Skill as SkillType } from 'types/Resume';

type SkillProps = Pick<SkillType, 'details' | 'highlight' | 'name'>;

export default function Skill({ details, highlight, name }: SkillProps) {
  return (
    <div className="flex items-start gap-1">
      <div className="mt-0.5">
        {highlight ? (
          <IconFlame
            className="text-orange-600 fill-red-500"
            size={16}
            stroke={1}
          />
        ) : (
          <IconCheck size={16} />
        )}
      </div>

      <div>
        <div
          className={`${
            highlight ? 'font-bold' : 'font-normal'
          } text-sm text-slate-900`}
        >
          {name}
        </div>
        <div className="font-normal text-xs text-slate-400">
          {details}
        </div>
      </div>
    </div>
  );
}
