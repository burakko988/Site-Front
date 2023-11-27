import { useState, useEffect } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import slugify from 'slugify';

interface Option {
  category: string;
  label: string;
}

const StyledTextField = styled(TextField)({
  '& .MuiInputAdornment-root .MuiSvgIcon-root': {
    transition: 'transform 0.2s ease-in-out, color 0.2s ease-in-out',
    cursor: 'pointer',
  },
  '&:focus-within .MuiInputAdornment-root .MuiSvgIcon-root': {
    color: 'primary.main',
    transform: 'scale(1.2)',
  },
});

const FilterBar = () => {
  const defaultOptions = [
    { label: 'Option 1', value: 1 },
    { label: 'Option 2', value: 2 },
    // ... daha fazla varsayılan seçenek
  ];
  const [query, setQuery] = useState('');
  const [options, setOptions] = useState<Option[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/publicEvent/filter-events?search=${query}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log('Gelen datalar', data);
        console.log('query', query);

        const newOptions: Option[] = [...data.titles.map((item: any) => ({ label: item.title, category: 'Events' })), ...data.places.map((item: any) => ({ label: item.place, category: 'Places' }))];

        setOptions(newOptions);
      } catch (error) {
        console.error('Fetch error:', error);
      }
    };

    if (query) {
      const delayDebounce = setTimeout(() => fetchData(), 500);

      return () => clearTimeout(delayDebounce);
    } else {
      setOptions([]); // Query boşsa options'ı sıfırla
    }
  }, [query]);

  return (
    <>
      {query}
      <Autocomplete
        sx={{
          background: '#7FFF00',
          transition: 'background 0.3s',
          '&:focus-within': {
            background: 'white',
          },
        }}
        freeSolo
        options={options}
        groupBy={(option) => option.category}
        getOptionLabel={(option) => (typeof option === 'string' ? option : option.label)}
        renderOption={(props, option) => {
          const basePath = option.category === 'Events' ? '/event-details' : '/place';
          const url = `${basePath}/${slugify(option.label, { lower: true, strict: true })}`;

          return (
            <li {...props}>
              <Link to={url} onClick={(e) => e.stopPropagation()}>
                {option.label}
              </Link>
            </li>
          );
        }}
        renderInput={(params) => (
          <StyledTextField
            {...params}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search Events..."
            InputProps={{
              ...params.InputProps,
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            style={{ width: 300 }}
          />
        )}
      />
    </>
  );
};

export default FilterBar;
