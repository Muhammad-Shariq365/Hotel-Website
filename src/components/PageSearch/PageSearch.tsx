'use client';

import { useState } from 'react';

import Search from '../Search/Search';

const PageSearch = () => {
  const [roomTypeFilter, setRoomTypeFilter] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    /* Rendering search component coming from search */
    <Search
      roomTypeFilter={roomTypeFilter}
      searchQuery={searchQuery}
      setRoomTypeFilter={setRoomTypeFilter}
      setSearchQuery={setSearchQuery}
    />
  );
};

export default PageSearch;