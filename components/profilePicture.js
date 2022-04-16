import Image from "next/image";

const ProfilePicture = (props) => (
    <Image
        src={props.src}
        height={144}
        width={144}
        alt={props.alt}
    />
)

export default ProfilePicture;