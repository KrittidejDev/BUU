import { SocialVerticalWidgetContainer } from "./styled";

const SocialVerticalWidget = () => {
  return (
    <SocialVerticalWidgetContainer>
      {SOCIAL_LIST.map((e, i) => (
        <div key={i} className="social_item">
          <img className="social_img" alt="social" src={e.src} />
        </div>
      ))}
    </SocialVerticalWidgetContainer>
  );
};

const SOCIAL_LIST = [
  {
    src: "/images/icons/social-facebook.png",
  },
  {
    src: "/images/icons/social-line.png",
  },
  {
    src: "/images/icons/social-tiktok.png",
  },
  {
    src: "/images/icons/social-youtube.png",
  },
  {
    src: "/images/icons/social-instagram.png",
  },
];

export default SocialVerticalWidget;
