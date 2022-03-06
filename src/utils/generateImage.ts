const Snow = "assets/images/Snow.png";
const Sleet = "assets/images/Sleet.png";
const Hail = "assets/images/Hail.png";
const Thunderstorm = "assets/images/Thunderstorm.png";
const Thunder = "assets/images/Thunderstorm.png";
const HeavyRain = "assets/images/HeavyRain.png";
const LightRain = "assets/images/LightRain.png";
const Showers = "assets/images/Shower.png";
const HeavyCloud = "assets/images/HeavyCloud.png";
const LightCloud = "assets/images/LightCloud.png";
const Clear = "assets/images/Clear.png";

const generateImage = (image: string) => {
  const normalizer = image.replace(" ", "");
  const listImages = {
    Snow,
    Sleet,
    Hail,
    Thunderstorm,
    Thunder,
    HeavyCloud,
    HeavyRain,
    LightRain,
    LightCloud,
    Showers,
    Clear,
  };

  if ((listImages as any)[normalizer]) {
    return (listImages as any)[normalizer];
  }
};

export default generateImage;
