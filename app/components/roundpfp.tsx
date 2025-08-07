import Image from 'next/image';

interface RoundProfileImageProps {
  src: string;
  alt?: string;
  size?: number; // e.g. 128
  borderColor?: string;
}

export default function RoundProfileImage({
  src,
  alt = 'Profile Picture',
  size = 128,
  borderColor = 'border-gray-300',
}: RoundProfileImageProps) {
  return (
    <div
      className={`relative rounded-full overflow-hidden border ${borderColor} mx-auto`}
      style={{ width: size, height: size }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
      />
    </div>
  );
}