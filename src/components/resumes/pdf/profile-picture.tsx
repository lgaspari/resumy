const SIZE = 192;

interface ProfilePictureProps {
  fullName: string;
  profilePicture: string;
}

export default function ProfilePicture({
  fullName,
  profilePicture,
}: ProfilePictureProps) {
  return (
    <div className="rounded-full overflow-hidden">
      <img
        alt={fullName}
        className="aspect-square"
        height={SIZE}
        src={profilePicture}
        width={SIZE}
      />
    </div>
  );
}
