import { useState, useRef } from 'react';
import { useNavigate } from 'react-router';
import { MapContainer, TileLayer } from 'react-leaflet';
import LocationPicker from '../map/LocationPicker';
import AutoCenterMap from '../map/AutoCenterMap';
import type L from 'leaflet';

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // TODO: API або localStorage
    alert(`Виробник "${form.name}" доданий!`);
    navigate('/');
  };

  return (
    <div className="form-producer-page">
      <div className="form-producer-box">
        <h2>Додати виробника</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Ім’я / Назва бізнесу
            <input
              type="text"
              required
              value={form.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
            />
          </label>

          <label>
            Категорія
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
            Опис
            <textarea
              required
              value={form.description}
              onChange={(e) => handleInputChange('description', e.target.value)}
              rows={3}
            />
          </label>

          <label>
            Фото
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
                alt="Фото превʼю"
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
              Телефон
              <input
                type="text"
                value={form.contactPhone}
                onChange={(e) => handleInputChange('contactPhone', e.target.value)}
              />
          </label>
          <label>
              Email
              <input
                type="email"
                value={form.contactEmail}
                onChange={(e) => handleInputChange('contactEmail', e.target.value)}
              />
          </label>
          <label>
              Соцмережі
            <input
                type="text"
                value={form.contactSocial}
                onChange={(e) => handleInputChange('contactSocial', e.target.value)}
                placeholder="Instagram, Facebook тощо"
              />
          </label>

          <label>Оберіть локацію на карті</label>
          <div className="map-wrapper" style={{ marginTop: '0' }}>
            <MapContainer
              center={[form.location.lat, form.location.lng]}
              zoom={13}
              scrollWheelZoom={true}
              style={{ height: 250, width: '99%', borderRadius: '12px' }}
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
              Визначити мою локацію
            </span>
          </p>

          <button type="submit">Додати виробника</button>
        </form>
      </div>
    </div>
  );
};

export default AddProducerForm;