import React, { useEffect } from 'react';
import '../Pages/Css/traduction.css';

const TranslateWidget = () => {
  useEffect(() => {
    // Google Translate initialization function
    const googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        { pageLanguage: 'en', layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE },
        'google_translate_element'
      );
    };

    // Call the initialization function
    googleTranslateElementInit();
  }, []);

  return <div id="google_translate_element"></div>;
};

export default TranslateWidget;
