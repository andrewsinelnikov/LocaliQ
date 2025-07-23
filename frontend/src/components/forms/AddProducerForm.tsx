import { useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';
import { MapContainer, TileLayer } from 'react-leaflet';
import type L from 'leaflet';
import LocationPicker from '../map/LocationPicker';
import AutoCenterMap from '../map/AutoCenterMap';

interface IProducerForm {
  name: string;
  category: string;
  description: string;
  photo: File | null;
  location: { lat: number; lng: number };
  contactPhone: string;
  contactEmail: string;
  contactSocial: string;
}

const categories = ['Їжа', 'Декор', 'Одяг', 'Послуги', 'Інше'];

const AddProducerForm = () => {
  const [form, setForm] = useState<IProducerForm>({
    name: '',
    category: categories[0],
    description: '',
    photo: null,
    location: { lat: 49.8397, lng: 24.0297 }, // Lviv
    contactPhone: '',
    contactEmail: '',
    contactSocial: '',
  });

  const { t } = useTranslation();
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);
  const mapRef = useRef<L.Map | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const navigate = useNavigate();

  const handleInputChange = (field: keyof IProducerForm, value: any) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };
  
  const handlePhotoChange = (file: File | null) => {
    if (photoPreview) {
      URL.revokeObjectURL(photoPreview);
    }

    handleInputChange('photo', file);
    if (file) {
      const previewUrl = URL.createObjectURL(file);
      setPhotoPreview(previewUrl);
    } else {
      setPhotoPreview(null);
    }
  };

  const handleGeolocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((pos) => {
        const { latitude, longitude } = pos.coords;
        handleInputChange('location', { lat: latitude, lng: longitude });

        // Центрувати карту
        if (mapRef.current) {
          mapRef.current.setView([latitude, longitude], 13);
        }
      });
    } else {
      alert('Геолокація недоступна.');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  // Prepare payload for backend
  const payload = {
    name: form.name,
    description: form.description,
    category: form.category,
    latitude: form.location.lat,
    longitude: form.location.lng,
    city: '', // You can add a city field to your form if needed
    contact: [form.contactPhone, form.contactEmail, form.contactSocial].filter(Boolean).join(', ')
  };

  try {
    const response = await fetch('http://localhost:8000/api/producers/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    if (response.ok) {
      alert(`Виробник "${form.name}" доданий!`);
      navigate('/');
    } else {
      alert('Помилка при додаванні виробника');
    }
  } catch (error) {
    alert('Помилка мережі');
  }
};

  return (
    <div className="form-producer-page">
      <div className="form-producer-box">
        <h2>{t('addProducer.title')}</h2>
        <p className="description">{t('addProducer.subtitle')}</p>
        <form onSubmit={handleSubmit}>
          <label>
            {t('addProducer.name')}
            <input
              type="text"
              required
              value={form.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
            />
          </label>

          <label>
            {t('addProducer.category')}
            <select
              value={form.category}
              onChange={(e) => handleInputChange('category', e.target.value)}
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </label>

          <label>
            {t('addProducer.description')}
            <textarea
              required
              value={form.description}
              onChange={(e) => handleInputChange('description', e.target.value)}
              rows={3}
            />
          </label>

          <label>
            {t('addProducer.photo')}
            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              onChange={(e) =>
                handlePhotoChange(e.target.files ? e.target.files[0] : null)
              }
            />
          </label>

          {photoPreview && (
            <div className="photo-preview-wrapper">
              <img
                src={photoPreview}
                alt={t('addProducer.previewAlt')}
                className="photo-preview"
              />
              <button
                type="button"
                className="photo-remove-btn"
                onClick={() => {
                  setPhotoPreview(null);
                  handleInputChange('photo', null);
                  handlePhotoChange(null);
                  if (fileInputRef.current) {
                    fileInputRef.current.value = '';
                  }
                }}
                aria-label="Видалити фото"
              >
                <i className="fas fa-times"></i>
              </button>
            </div>
          )}

          <label>
              {t('addProducer.phone')}
              <input
                type="text"
                value={form.contactPhone}
                onChange={(e) => handleInputChange('contactPhone', e.target.value)}
              />
          </label>
          <label>
              {t('addProducer.email')}
              <input
                type="email"
                value={form.contactEmail}
                onChange={(e) => handleInputChange('contactEmail', e.target.value)}
              />
          </label>
          <label>
              {t('addProducer.social')}
            <input
                type="text"
                value={form.contactSocial}
                onChange={(e) => handleInputChange('contactSocial', e.target.value)}
                placeholder={t('addProducer.placeholderSocial')}
              />
          </label>

          <label>{t('addProducer.mapLabel')}</label>
          <div className="map-wrapper" style={{ marginTop: '0' }}>
            <MapContainer
              center={[form.location.lat, form.location.lng]}
              zoom={13}
              scrollWheelZoom={true}
              style={{ height: 250, width: '99%', borderRadius: '12px', border: '2px solid var(--color-border)' }}
              // className="leaflet-container"
            >
              <TileLayer
                attribution='&copy; <a href="https://osm.org">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <LocationPicker
                location={form.location}
                onChange={(lat, lng) => handleInputChange('location', { lat, lng })}
              />
              <AutoCenterMap lat={form.location.lat} lng={form.location.lng} />
            </MapContainer>

          </div>
          <p className="geo-hint">
            <span onClick={handleGeolocation} className="geo-hint-text">
              {t('addProducer.detectLocation')}
            </span>
          </p>

          <button type="submit">{t('addProducer.submit')}</button>
        </form>
      </div>
    </div>
  );
};

export default AddProducerForm;