import { useHubspotForm } from 'next-hubspot';

const BecomeDealerForm = () => {
  const { formCreated } = useHubspotForm({
    portalId: "9068325",
    formId: "de92da33-a035-4781-b069-850da0624dc2",
    target: "#hubspotForm",
  })
  return formCreated && <div id="hubspotForm"></div>;
};

export default BecomeDealerForm;