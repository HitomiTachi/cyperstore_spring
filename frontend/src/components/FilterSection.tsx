import React, { useState } from 'react';
import './FilterSection.css';

interface FilterOption {
  label: string;
  value: string;
}

interface FilterGroup {
  title: string;
  options: FilterOption[];
  isExpanded?: boolean;
}

const FilterSection: React.FC = () => {
  const [filters, setFilters] = useState<FilterGroup[]>([
    {
      title: 'Brand',
      isExpanded: true,
      options: [
        { label: 'Apple', value: 'apple' },
        { label: 'Samsung', value: 'samsung' },
        { label: 'Xiaomi', value: 'xiaomi' },
        { label: 'Huawei', value: 'huawei' },
        { label: 'OnePlus', value: 'oneplus' },
        { label: 'Google', value: 'google' },
        { label: 'Sony', value: 'sony' },
        { label: 'LG', value: 'lg' },
        { label: 'Motorola', value: 'motorola' },
      ],
    },
    {
      title: 'Battery capacity',
      isExpanded: false,
      options: [
        { label: '3000-4000 mAh', value: '3000-4000' },
        { label: '4000-5000 mAh', value: '4000-5000' },
        { label: '5000+ mAh', value: '5000+' },
      ],
    },
    {
      title: 'Screen type',
      isExpanded: false,
      options: [
        { label: 'OLED', value: 'oled' },
        { label: 'LCD', value: 'lcd' },
        { label: 'AMOLED', value: 'amoled' },
      ],
    },
    {
      title: 'Screen diagonal',
      isExpanded: false,
      options: [
        { label: '5.0-5.5"', value: '5.0-5.5' },
        { label: '5.5-6.0"', value: '5.5-6.0' },
        { label: '6.0-6.5"', value: '6.0-6.5' },
        { label: '6.5+"', value: '6.5+' },
      ],
    },
    {
      title: 'Protection class',
      isExpanded: false,
      options: [
        { label: 'IP67', value: 'ip67' },
        { label: 'IP68', value: 'ip68' },
      ],
    },
    {
      title: 'Built-in memory',
      isExpanded: false,
      options: [
        { label: '64 GB', value: '64' },
        { label: '128 GB', value: '128' },
        { label: '256 GB', value: '256' },
        { label: '512 GB', value: '512' },
        { label: '1 TB', value: '1024' },
      ],
    },
  ]);

  const [selectedFilters, setSelectedFilters] = useState<Record<string, string[]>>({});
  const [searchTerm, setSearchTerm] = useState('');

  const toggleFilter = (groupTitle: string) => {
    setFilters(filters.map(filter =>
      filter.title === groupTitle
        ? { ...filter, isExpanded: !filter.isExpanded }
        : filter
    ));
  };

  const toggleOption = (groupTitle: string, value: string) => {
    setSelectedFilters(prev => {
      const groupFilters = prev[groupTitle] || [];
      const isSelected = groupFilters.includes(value);
      return {
        ...prev,
        [groupTitle]: isSelected
          ? groupFilters.filter(v => v !== value)
          : [...groupFilters, value],
      };
    });
  };

  const filteredBrands = filters[0]?.options.filter(option =>
    option.label.toLowerCase().includes(searchTerm.toLowerCase())
  ) || [];

  return (
    <aside className="filter-section">
      <div className="filters-container">
        {/* Brand Filter with Search */}
        <div className="filter-group">
          <button
            className="filter-header"
            onClick={() => toggleFilter('Brand')}
          >
            <span className="filter-title">Brand</span>
            <svg
              className={`filter-icon ${filters[0]?.isExpanded ? 'expanded' : ''}`}
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M18 15L12 9L6 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          {filters[0]?.isExpanded && (
            <div className="filter-content">
              <div className="filter-search">
                <svg className="search-icon" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.33333 12.6667C10.2789 12.6667 12.6667 10.2789 12.6667 7.33333C12.6667 4.38781 10.2789 2 7.33333 2C4.38781 2 2 4.38781 2 7.33333C2 10.2789 4.38781 12.6667 7.33333 12.6667Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M14 14L11.1 11.1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <input
                  type="text"
                  placeholder="Search brand"
                  className="search-input"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="filter-options">
                {filteredBrands.map((option) => {
                  const isSelected = selectedFilters['Brand']?.includes(option.value) || false;
                  return (
                    <label key={option.value} className="checkbox-field">
                      <input
                        type="checkbox"
                        checked={isSelected}
                        onChange={() => toggleOption('Brand', option.value)}
                      />
                      <span className="checkbox-label">{option.label}</span>
                    </label>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* Other Filters */}
        {filters.slice(1).map((filter) => (
          <div key={filter.title} className="filter-group">
            <button
              className="filter-header"
              onClick={() => toggleFilter(filter.title)}
            >
              <span className="filter-title">{filter.title}</span>
              <svg
                className={`filter-icon ${filter.isExpanded ? 'expanded' : ''}`}
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M18 15L12 9L6 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            {filter.isExpanded && (
              <div className="filter-content">
                <div className="filter-options">
                  {filter.options.map((option) => {
                    const isSelected = selectedFilters[filter.title]?.includes(option.value) || false;
                    return (
                      <label key={option.value} className="checkbox-field">
                        <input
                          type="checkbox"
                          checked={isSelected}
                          onChange={() => toggleOption(filter.title, option.value)}
                        />
                        <span className="checkbox-label">{option.label}</span>
                      </label>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </aside>
  );
};

export default FilterSection;

