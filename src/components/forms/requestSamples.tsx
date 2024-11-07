/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from 'react';

declare global {
  interface Window {
    hbspt: any;
  }
}

const RequestSamplesForm = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://js.hsforms.net/forms/v2.js';
    script.async = true;
    script.onload = () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          region: 'na1',
          portalId: '9068325',
          formId: 'b2dcae8a-23ee-465d-a11f-05ea9ee0419b',
          target: '#hubspotForm'
        });
      }
    };
    document.body.appendChild(script);
  }, []);

  return <div id="hubspotForm"></div>;
};

export default RequestSamplesForm;