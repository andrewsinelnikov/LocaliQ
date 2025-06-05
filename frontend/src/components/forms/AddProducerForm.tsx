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
  contact: string;
}

const categories = ['Їжа', 'Декор', 'Одяг', 'Послуги', 'Інше'];

const AddProducerForm = () => {
  const [form, setForm] = useState<IProducerForm>({
    name: '',
    category: categories[0],
    description: '',
    photo: null,
    location: { lat: 49.8397, lng: 24.0297 }, // Lviv за замовчуванням
    contact: '',
  });

  const navigate = useNavigate();

  const handleInputChange = (field: keyof IProducerForm, value: any) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // TODO: Зберегти дані - API, localStorage тощо
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
              onChange={(e) =>
                handleInputChange('photo', e.target.files ? e.target.files[0] : null)
              }
            />
          </label>

          <label>
            Контакти
            <input
              type="text"
              value={form.contact}
              onChange={(e) => handleInputChange('contact', e.target.value)}
              placeholder="Телефон, Email, соцмережі"
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

          <button type="submit">Додати виробника</button>
        </form>
      </div>
    </div>
  );
};

export default AddProducerForm;
