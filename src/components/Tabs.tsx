import React from 'react';
import './Tabs.css';

interface TabsProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  labels: { [key: string]: string };
}

const Tabs: React.FC<TabsProps> = ({ activeTab, onTabChange, labels }) => {
  return (
    <div className="tabs">
      {Object.entries(labels).map(([key, label]) => (
        <button
          key={key}
          className={`tab-btn ${activeTab === key ? 'active' : ''}`}
          onClick={() => onTabChange(key)}
        >
          {label}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
