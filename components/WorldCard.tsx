"use client";

import Image from "next/image";

interface Props {
    id: number;
    title: string;
    position: string;
}

const WorldCard: React.FC<Props> = ({ id, position, title }) => {
    const styles = `absolute w-fit h-fit ${position}`
    return <div className={styles}>
        <div className="relative lg:w-[217px] w-[180px] lg:h-[167px] h-[130px] border-[10px] border-world backdrop-blur-[6px] rounded-3xl overflow-hidden z-0">
            <Image src={`/planet-0${id}.png`} alt="the upside down" height={500} width={1000} className="absolute scale-[3.5] left-8 top-0" />
        </div>
        <div className="absolute inset-0 lg:w-[217px] w-[180px] lg:h-[167px] h-[130px] rounded-3xl overflow-hidden z-10 blur-xl opacity-50 lg:scale-125 scale-110">
            <Image src={`/planet-0${id}.png`} alt="the upside down" height={500} width={1000} className="absolute scale-[3.5] left-8 top-0" />
        </div>
        <div className="absolute inset-x-0 bottom-0 h-fit px-6 pb-4 z-30 text-center">
            <div className="flex justify-center py-2">
                <Image src="/people-04.png" alt="person" width={24} height={24} className="z-50 lg:w-fit lg:h-fit w-[18px] h-[18px]" />
                <Image src="/people-05.png" alt="person" width={24} height={24} className="-ml-3 z-40 lg:w-fit lg:h-fit w-[18px] h-[18px]" />
                <Image src="/people-06.png" alt="person" width={24} height={24} className="-ml-3 -z-30 lg:w-fit lg:h-fit w-[18px] h-[18px]" /> <span className="text-white lg:pl-1 pl-[2px] font-light lg:text-base text-sm"> +264 has joined</span>
            </div>
            <h3 className="text-white lg:text-xl text-base filter drop-shadow-lg">{title}</h3>
        </div>
    </div>
}

export default WorldCard;