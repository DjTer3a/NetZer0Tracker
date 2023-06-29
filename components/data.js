import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../public/img/benefit-one.png";
import benefitTwoImg from "../public/img/benefit-two.png";

const benefitOne = {
  title: "Our Benefits",
  desc: "You can use this space to highlight your first benefit or a feature of your product. It can also contain an image or Illustration like in the example along with some bullet points.",
  image: benefitOneImg,
  bullets: [
    {
      title: "In-depth Carbon Tracking",
      desc: "NetZer0Tracker helps you understand your carbon emissions with a comprehensive Carbon Calculator. It provides a detailed breakdown of your business's carbon footprint, helping you identify areas for improvement.",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Incentivize Green Initiatives",
      desc: "Our unique Green Tokens system rewards businesses for adopting sustainable practices. These tokens can be redeemed in our integrated Green Marketplace, encouraging continued eco-friendly actions.",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Long-term Sustainability",
      desc: "NetZer0Tracker is designed to support your business in its journey towards Net Zero emissions, leading to improved sustainability and increased customer retention due to your visible commitment to the environment.",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Our Differentiators",
  desc: "You can use this same layout with a flip image to highlight your rest of the benefits of your product. It can also contain an image or Illustration as above section along with some bullet points.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Sector-Specific Guidance",
      desc: "NetZer0Tracker offers industry-specific suggestions and best practices to improve sustainability. With our Green Ideas feature, your business gains insights tailored to your sector's unique challenges and opportunities.",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Web 3.0 & Blockchain Technologies",
      desc: "NetZer0Tracker is built using cutting-edge Web 3.0 and blockchain technologies. This ensures transparent, secure, and accurate tracking of your green initiatives and carbon emissions.",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "User-Friendly & Intuitive Design",
      desc: "Our web application comes with an intuitive, user-friendly design, making it easy to track your progress towards Net Zero, earn and redeem tokens, and access green ideas and the marketplace.",
      icon: <SunIcon />,
    },
  ],
};

export { benefitOne, benefitTwo };
