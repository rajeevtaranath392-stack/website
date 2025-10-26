import { Tooltip } from "../components/Tooltip";
import { socialIcons } from "../config/dataConfig";

const SocialLinks = () => {
  return (
    <>
      {socialIcons.length > 0 &&
        socialIcons.map((value, index) => (
          <li className={value?.className} key={index}>
            <Tooltip text={value?.title} placement="top">
              <a href={value?.href} target="_blank" rel="noopener noreferrer">
                <i className={value?.icon} />
              </a>
            </Tooltip>
          </li>
        ))}
    </>
  );
};

export default SocialLinks;
