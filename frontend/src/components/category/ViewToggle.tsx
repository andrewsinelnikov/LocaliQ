import '../../styles/ViewToggle.css';

type ViewMode = 'hybrid' | 'list' | 'map';

interface ViewToggleProps {
  onViewChange: (mode: ViewMode) => void;
  currentView: ViewMode;
}

const ViewToggle = ({ onViewChange, currentView }: ViewToggleProps) => {
  return (
    <div className="view-toggle">
      <button
        className={`toggle-btn ${currentView === 'hybrid' ? 'active' : ''}`}
        onClick={() => onViewChange('hybrid')}
      >
        ☰ Гібридний вигляд
      </button>
      <button
        className={`toggle-btn ${currentView === 'list' ? 'active' : ''}`}
        onClick={() => onViewChange('list')}
      >
        ≡ Список
      </button>
      <button
        className={`toggle-btn ${currentView === 'map' ? 'active' : ''}`}
        onClick={() => onViewChange('map')}
      >
        🗺 Карта
      </button>
    </div>
  );
};

export default ViewToggle;