import type { Education as EducationType } from 'types/Resume';

type EducationProps = Pick<
  EducationType,
  'degree' | 'image' | 'school' | 'year'
>;

export default function Education({
  degree,
  image,
  school,
  year,
}: EducationProps) {
  return (
    <div className="flex items-start gap-2">
      <img
        alt={school}
        className="aspect-square border"
        height={48}
        src={image}
        width={48}
      />
      <div>
        <div className="font-bold text-base text-black">{school}</div>
        <div className="font-normal text-sm text-slate-900">{degree}</div>
        <div className="font-semibold text-xs text-slate-400">{year}</div>
      </div>
    </div>
  );
}
