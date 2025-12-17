import React from 'react';
import { FilterBar } from './components/FilterBar';
import { Table } from './components/Table';
import { Pagination } from './components/Pagination';
import { MOCK_WARRANTY_DATA } from './constants';
import { SystemNotice } from './components/SystemNotice';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#f0f2f5] p-4 font-sans">
      <div className="max-w-[1920px] mx-auto">
        
        {/* System Notice */}
        <SystemNotice />
        
        {/* Filter Section */}
        <FilterBar />

        {/* Action Buttons Row */}
        <div className="flex items-center gap-2 mb-3">
            <button className="bg-[#1890FF] hover:bg-[#096DD9] text-white px-4 py-1.5 rounded text-xs transition-colors shadow-sm">
                新增
            </button>
            <button className="bg-[#52C41A] hover:bg-[#389E0D] text-white px-4 py-1.5 rounded text-xs transition-colors shadow-sm">
                上传excel
            </button>
        </div>

        {/* Main Table */}
        <div className="space-y-4">
          <Table 
            data={MOCK_WARRANTY_DATA} 
          />
          {/* Pagination */}
          <Pagination total={570} pageSize={20} current={1} />
        </div>

      </div>
    </div>
  );
};

export default App;