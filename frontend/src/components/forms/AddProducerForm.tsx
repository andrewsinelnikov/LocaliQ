import { useState } from 'react';
import { useNavigate } from 'react-router';
import { MapContainer, TileLayer } from 'react-leaflet';
import LocationPicker from '../map/LocationPicker';

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
    location: { lat: 49.8397, lng: 24.0297 }, // Львів
    contactPhone: '',
    contactEmail: '',
    contactSocial: '',
  });

  const [photoPreview, setPhotoPreview] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleInputChange = (field: keyof IProducerForm, value: any) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handlePhotoChange = (file: File | null) => {
    handleInputChange('photo', file);
    if (file) {
      const previewUrl = URL.createObjectURL(file);
      setPhotoPreview(previewUrl);
    } else {
      setPhotoPreview(null);
    }
  };

  const handleGeolocation = () => {
    if (!navigator.geolocation) {
      alert('Геолокація не підтримується вашим браузером.');
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        handleInputChange('location', {
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
        });
      },
      () => alert('Не вдалося визначити вашу локацію.')
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: зберегти форму через API/localStorage
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
                <option key={cat} value={cat}>{cat}</option>
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
              onChange={(e) =>
                handlePhotoChange(e.target.files ? e.target.files[0] : null)
              }
            />
          </label>

          {photoPreview && (
            <img
              src={photoPreview}
              alt="Фото превʼю"
              style={{ maxWidth: '100%', marginTop: 10, borderRadius: 10 }}
            />
          )}

          <label>Контакти: Телефон
            <input
              type="text"
              value={form.contactPhone}
              onChange={(e) => handleInputChange('contactPhone', e.target.value)}
              placeholder="+38..."
            />
          </label>

          <label>Контакти: Email
            <input
              type="email"
              value={form.contactEmail}
              onChange={(e) => handleInputChange('contactEmail', e.target.value)}
              placeholder="example@email.com"
            />
          </label>

          <label>Контакти: Соцмережі
            <input
              type="text"
              value={form.contactSocial}
              onChange={(e) => handleInputChange('contactSocial', e.target.value)}
              placeholder="Instagram, Facebook тощо"
            />
          </label>

          <label>Оберіть локацію на карті</label>
          <div className="map-wrapper">
            <MapContainer
              center={[form.location.lat, form.location.lng]}
              zoom={13}
              scrollWheelZoom={false}
              style={{ height: 250, width: '100%', borderRadius: '12px' }}
            >
              <TileLayer
                attribution='&copy; <a href="https://osm.org">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <LocationPicker
                location={form.location}
                onChange={(lat, lng) => handleInputChange('location', { lat, lng })}
              />
            </MapContainer>
          </div>
          <p className="geo-hint">
            <span onClick={handleGeolocation} className="geo-hint-text">
              Визначити мою локацію автоматично
            </span>
          </p>

          <button type="submit">Додати виробника</button>
        </form>
      </div>
    </div>
  );
};

export default AddProducerForm;