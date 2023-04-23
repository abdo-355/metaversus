import Image from "next/image";

interface Props {
    id: number;
    position: string;
}

const WorldAvatar: React.FC<Props> = ({ id, position }) => {
    return <div className={`absolute ${position} lg:w-[70px] w-[60px] lg:h-[70px] h-[60px] p-[6px] rounded-full bg-world backdrop-blur-[6px]`}>
        <Image src={`/people-0${id}.png`} alt="people" height={100} width={100} className={`h-full w-full rounded-full filter drop-shadow-glow-${id}`} />
    </div>
}

export default WorldAvatar;