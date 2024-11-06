import { useHubspotForm } from 'next-hubspot';

const LocateDealerForm = () => {
  const { formCreated } = useHubspotForm({
    portalId: "9068325",
    formId: "b2dcae8a-23ee-465d-a11f-05ea9ee0419b",
    target: "#hubspotForm",
  })
  return formCreated && <div id="hubspotForm"></div>;
};

export default LocateDealerForm;