export interface IProducer {
  id: number;
  name: string;
  category: string;
  description: string;
  location: {
    lat: number;
    lng: number;
  };
}

export interface IProducerForm {
  name: string;
  categoryId: string;
  subcategorySlug: string;
  description: string;
  photo: File | null;
  location: { lat: number; lng: number };
  contactPhone: string;
  contactEmail: string;
  contactSocial: string;
}

export interface FormStepProps {
  form: IProducerForm;
  onChange: (field: keyof IProducerForm, value: any) => void;
  nextStep: () => void;
  prevStep?: () => void;
}