import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./Navigation.css";
import HelpIcon from "../../asset/icons/help_icon.svg";
import { UserOutlined } from "@ant-design/icons";

// Menu items
const items = [
  { label: "Help & Support", path: "/support", icon: HelpIcon },
  { label: "My Account", path: "/my-account", icon: UserOutlined },
];

interface INavigationProps {
  containerClass?: string;
  itemClass?: string;
  activeClass?: string;
  onItemClick?: Function;
}

type TMenuItemType = {
  label?: string;
  path?: string;
  icon?: any;
};

const Navigation = React.forwardRef<HTMLDivElement, INavigationProps>(
  (props, ref) => {
    const { containerClass = "", itemClass = "", activeClass = "", onItemClick } = props;

    const [selected, setSelected] = useState<string | undefined>(window.location.pathname);
    const navigate = useNavigate(); // Initialize useNavigate hook

    const handleSelect = (ele: TMenuItemType) => {
      setSelected(ele.path);
      onItemClick?.(ele); // Call optional onItemClick handler
      if (ele.path) {
        navigate(ele.path); // Navigate to the specified route
      }
    };

    return (
      <div ref={ref} className={`${containerClass}`}>
        {items.map((ele: TMenuItemType, i) => (
          <div
            key={i}
            onClick={() => handleSelect(ele)}
            className={`gap-1 ${
              selected?.includes(ele.path ?? "") ? `${activeClass}` : ""
            } ${itemClass}`}
          >
            {ele.icon && typeof ele.icon === "string" ? (
              <img src={ele.icon} alt={ele.label} />
            ) : (
              <ele.icon /> // Render Ant Design icon
            )}
            <span>{ele.label}</span>
          </div>
        ))}
      </div>
    );
  }
);

export default Navigation;
