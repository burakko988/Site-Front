import { useState, useMemo } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import slugify from 'slugify';
import { useQuery } from 'react-query';
import { fetchFilteredEvents } from '../../services/eventService';

const StyledTextField = styled(TextField)({
  '& .MuiInputAdornment-root .MuiSvgIcon-root': {
    transition: 'transform 0.2s ease-in-out, color 0.2s ease-in-out',
    cursor: 'pointer',
  },
  '&:focus-within .MuiInputAdornment-root .MuiSvgIcon-root': {
    color: 'primary.main',
    transform: 'scale(1.2)',
  },
  '&:hover .MuiInputAdornment-root .MuiSvgIcon-root': {
    color: 'primary.main',
    transform: 'scale(1.2)',
  },
});

const FilterBar = () => {
  const [query, setQuery] = useState('');

  const { data } = useQuery(['events', query], () => fetchFilteredEvents(query), {
    enabled: !!query, // Query boş değilse isteği etkinleştir
  });

  const options = useMemo(() => {
    if (!data) return [];
    return [
      ...data.titles.map((item: any) => ({ label: item.title, images: item.images || ['No Image'], category: 'Events' })),
      ...data.places.map((item: any) => ({ label: item.place, category: 'Places' })),
    ];
  }, [data]);

  return (
    <>
      <Autocomplete
        freeSolo
        value={query}
        onInputChange={(_, newInputValue) => {
          setQuery(newInputValue);
        }}
        options={options}
        groupBy={(option) => option.category}
        getOptionLabel={(option) => (typeof option === 'string' ? option : option.label)}
        renderOption={(props, option) => {
          const basePath = option.category === 'Events' ? '/event-details' : '/place';
          const url = `${basePath}/${slugify(option.label, { lower: true, strict: true })}`;

          return (
            <li {...props} style={{ padding: 0 }}>
              <Link
                to={url}
                onClick={(e) => e.stopPropagation()}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  width: '100%',
                  padding: '15px',
                }}
              >
                <img
                  src={option.images}
                  alt={option.label}
                  style={{
                    height: '25px',
                    width: '20px',
                    marginRight: '10px', // Resim ve metin arasında boşluk bırakır
                  }}
                />
                {option.label}
              </Link>
            </li>
          );
        }}
        renderInput={(params) => (
          <StyledTextField
            {...params}
            placeholder="Search Events..."
            onChange={(e) => setQuery(e.target.value)}
            InputProps={{
              ...params.InputProps,
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        )}
      />
    </>
  );
};

export default FilterBar;
