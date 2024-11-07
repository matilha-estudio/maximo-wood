/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from 'react';

declare global {
  interface Window {
    hbspt: any;
  }
}

const ScheduleCeuForm = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://js.hsforms.net/forms/v2.js';
    script.async = true;
    script.onload = () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          region: 'na1',
          portalId: '9068325',
          formId: 'f92d6105-c730-4e80-a8da-a43954b35684',
          target: '#hubspotForm'
        });
      }
    };
    document.body.appendChild(script);
  }, []);

  return <div id="hubspotForm"></div>;
};

export default ScheduleCeuForm;