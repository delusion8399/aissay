"use client";

import React, { useState } from 'react';

interface Tab {
  id: string;
  label: string;
  content: React.ReactNode;
}

interface TabGroupProps {
  tabs: Tab[];
  defaultTabId?: string;
}

const TabGroup: React.FC<TabGroupProps> = ({ tabs, defaultTabId }) => {
  const [activeTabId, setActiveTabId] = useState(defaultTabId || tabs[0].id);

  const activeTab = tabs.find(tab => tab.id === activeTabId) || tabs[0];

  return (
    <div>
      <div className="flex mb-0 relative z-10">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`chunky-tab ${tab.id === activeTabId ? 'active' : ''}`}
            onClick={() => setActiveTabId(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="chunky-tab-content">
        {activeTab.content}
      </div>
    </div>
  );
};

export default TabGroup;
