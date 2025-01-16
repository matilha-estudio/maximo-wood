/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from 'react';

declare global {
  interface Window {
    hbspt: any;
  }
}

const BecomeDealerForm = ({ formId = '', portalId ='' }) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://js.hsforms.net/forms/v2.js';
    script.async = true;
    script.onload = () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          region: 'na1',
          portalId: portalId,
          formId: formId,
          target: '#hubspotForm'
        });
      }
    };
    document.body.appendChild(script);
}, []);
  return <div id="hubspotForm"></div>;
};

export default BecomeDealerForm;