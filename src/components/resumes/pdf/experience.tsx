import { IconPointFilled } from '@tabler/icons-react';
import { humanizeExperiencePositionDuration } from 'helpers/datetime';
import type {
  ExperiencePosition,
  Experience as ExperienceType,
} from 'types/Resume';

interface ExperienceProps extends Pick<ExperienceType, 'company' | 'image'> {
  duration: number;
  positions: Array<ExperiencePosition & { duration: number }>;
}

export default function Experience({
  company,
  duration,
  image,
  positions,
}: ExperienceProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 print:portrait:grid-cols-2 print:landscape:grid-cols-1 gap-4 items-start">
      {/* Summary */}
      <div className="flex items-center gap-2">
        <img
          alt={company}
          className="aspect-square border"
          height={48}
          src={image}
          width={48}
        />
        <div>
          <div className="font-bold text-lg">{company}</div>
          <div className="font-normal text-sm text-slate-500">
            {humanizeExperiencePositionDuration(duration)}
          </div>
        </div>
      </div>

      {/* Details */}
      <div className="flex flex-col gap-4">
        {positions.map(({ duration, employmentType, from, title, to }) => (
          <div className="flex items-start gap-2" key={`${title}-${from}-${to}`}>
            <IconPointFilled className="mt-1 text-slate-700" size={16} />
            <div>
              <div>
                <div className="inline font-bold text-sm text-slate-700">{title}</div>
                <div className="inline ml-2 font-normal text-xs text-slate-500">
                  {employmentType}
                </div>
              </div>
              <div className="font-normal text-xs text-slate-500">
                {from} - {to} ({humanizeExperiencePositionDuration(duration)})
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
