/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from 'react';

declare global {
  interface Window {
    hbspt: any;
  }
}

const BecomeDealerForm = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://js.hsforms.net/forms/v2.js';
    script.async = true;
    script.onload = () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          region: 'na1',
          portalId: '9068325',
          formId: 'de92da33-a035-4781-b069-850da0624dc2',
          target: '#hubspotForm'
        });
      }
    };
    document.body.appendChild(script);
}, []);
  return <div id="hubspotForm"></div>;
};

export default BecomeDealerForm;