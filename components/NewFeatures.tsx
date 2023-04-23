import { NewFeature } from "@/constants";

const NewFeatures: React.FC<NewFeature> = ({ imgUrl, subtitle, title }) => (
  <div className="flex-1 flex flex-col sm:max-w-[250px] min-w-[210px]">
    <div className="flex justify-center items-center w-[70px] h-[70px] rounded-[24px] bg-[#323f5d]">
      <img
        src={imgUrl}
        alt={title}
        className="w-1/2 h-1/2 object-contain"
      />
    </div>
    <h2 className="mt-[26px] font-bold text-[24px] leading-[30px] text-white">Title {title}</h2>
    <p className="flex-1 mt-[16px] font-normal text-[18px] text-[#b0b0b0] leading-[32px]">{subtitle}</p>
  </div>
);

export default NewFeatures;
