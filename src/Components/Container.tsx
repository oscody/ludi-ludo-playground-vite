import React, { useState, useEffect, ReactNode } from "react";
import "./ResponsiveContainer.css";

interface ResponsiveContainerProps {
  children: ReactNode;
}

type ScreenType = "mobile" | "tablet-sm" | "tablet-lg" | "laptop" | "desktop";

interface ScreenSize {
  width: number;
  height: number;
  type: ScreenType;
}

const getScreenType = (width: number): ScreenType => {
  if (width < 576) return "mobile";
  if (width < 768) return "tablet-sm";
  if (width < 992) return "tablet-lg";
  if (width < 1200) return "laptop";
  return "desktop";
};

const ResponsiveContainer: React.FC<ResponsiveContainerProps> = ({
  children,
}) => {
  const [screenSize, setScreenSize] = useState<ScreenSize>({
    width: window.innerWidth,
    height: window.innerHeight,
    type: getScreenType(window.innerWidth),
  });

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setScreenSize({
        width: width,
        height: window.innerHeight,
        type: getScreenType(width),
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getDeviceIcon = () => {
    switch (screenSize.type) {
      case "mobile":
        return "📱";
      case "tablet-sm":
      case "tablet-lg":
        return "📱";
      case "laptop":
        return "💻";
      case "desktop":
        return "🖥️";
      default:
        return "📱";
    }
  };

  return (
    <div className="responsive-container">
      <div className={`screen-size-indicator ${screenSize.type}`}>
        <span className="device-icon">{getDeviceIcon()}</span>
        <span className="size-text">
          {screenSize.width} × {screenSize.height}px
        </span>
        <span className="device-type">{screenSize.type.replace("-", " ")}</span>
      </div>
      <div className={`content-wrapper ${screenSize.type}`}>{children}</div>
    </div>
  );
};

export default ResponsiveContainer;
