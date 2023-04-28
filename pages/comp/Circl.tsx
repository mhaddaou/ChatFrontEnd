/* eslint-disable @next/next/no-img-element */
import next from "next/types";
import Image from "next/image";

const CircleImage = (props : any) => {
  return (
    <div className=" w-12 h-13 rounded-full overflow-hidden">
      {/* <Image src="https://cdn.intra.42.fr/users/d4d754cbf571f0b52778dfedbd79de0f/mhaddaou.jpg" alt="img" width={20} height={20} layout="responsive" /> */}
      {/* // eslint-disable-next-line @next/next/no-img-element */}
      <img src={props.url} alt="" />
    </div>
  );
};

export default CircleImage;
