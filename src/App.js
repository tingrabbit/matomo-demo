import React from "react";
import { useMatomo } from "@datapunt/matomo-tracker-react";

const MyPage = () => {
  const { trackPageView, trackEvent } = useMatomo();

  // Track page view
  React.useEffect(() => {
    trackPageView();
  }, []);

  const handleOnClick = () => {
    // Track click on button
    trackEvent({ category: "Menu", action: "Freedom" });
  };

  return (
    <button type="button" onClick={handleOnClick}>
      Click me
    </button>
  );
};

export default MyPage;
