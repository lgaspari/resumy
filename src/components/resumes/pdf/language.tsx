import type { Language as LanguageType } from 'types/Resume';

type LanguageProps = Pick<LanguageType, 'image' | 'name' | 'level'>;

export default function Language({ image, name, level }: LanguageProps) {
  return (
    <div className="flex items-start gap-2">
      <img
        alt={name}
        className="border"
        height={48}
        src={image}
        width={48}
      />
      <div>
        <div className="font-bold text-base text-black">{name}</div>
        <div className="font-normal text-sm text-slate-900">{level}</div>
      </div>
    </div>
  );
}
