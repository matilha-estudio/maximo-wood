import { useHubspotForm } from 'next-hubspot';

const ScheduleCeuForm = () => {
  const { formCreated } = useHubspotForm({
    portalId: "9068325",
    formId: "f92d6105-c730-4e80-a8da-a43954b35684",
    target: "#hubspotFormCEU",
  })
  return formCreated && <div id="hubspotFormCEU"></div>;
};

export default ScheduleCeuForm;