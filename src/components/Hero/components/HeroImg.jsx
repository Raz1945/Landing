import { images } from "../../../assets/images";

export const HeroImg = () => {
  return (
    <picture className='hero__picture'>
      <img
        className='hero__picture-img'
        src={images.MyPicture}
        alt="Retrato"
      />
    </picture>
  );
};