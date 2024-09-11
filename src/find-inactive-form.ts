const file = './dump.json';
const fileData = Bun.file(file);

type FormData = {
  FormPublisherSettings?: {
    fpStatus: 'enable' | 'disable';
  };
};

const fileContent = await fileData.json();

const transformIdToFormUrl = (id: string) => {
  return `https://docs.google.com/forms/d/${id}/edit`;
};

const saveToFile = async (data: string) => {
  const path = './find-inactive-forms.output';
  await Bun.write(path, data);
};

const findActiveForms = async () => {
  const forms = Object.entries<FormData>(fileContent);
  const activeForms = forms.filter(([_, formData]) => {
    const fpSettings = formData.FormPublisherSettings;
    if (!fpSettings) return false;
    return fpSettings.fpStatus !== 'enable';
  });

  const formUrls = activeForms.map(([id]) => transformIdToFormUrl(id));
  const data = formUrls.join('\n');
  await saveToFile(data);
  process.exit(0);
};

await findActiveForms();
