import { createSignal } from 'solid-js';
import type { Component } from 'solid-js';
import { styled } from 'solid-styled-components';
import IconButton from '../components/IconButton';
import ArrowRightIcon from '../components/icons/ArrowRightIcon';
import SearchIcon from '../components/icons/SearchIcon';

type SearchProps = {
  onTrackSelected: (trackId: string) => void;
};

const SearchSection = styled.section`
  height: calc(100vh - 48px);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Form = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
`;

const Field = styled.div`
  position: relative;
`;

const SearchInput = styled.input`
  height: 40px;
  padding: 6px 48px;
  border: none;
  border-radius: var(--border-radius);
`;

const SearchIconStyled = styled(SearchIcon)`
  position: absolute;
  width: 28px;
  height: 28px;
  color: var(--color-dark);
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
`;

const Search: Component<SearchProps> = props => {
  const [inputValue, setInputValue] = createSignal('');
  const [error, setError] = createSignal('');

  const handleChange = (e: Event) => {
    const value = (e.currentTarget as HTMLInputElement).value;
    setInputValue(value);
    setError('');
  };

  const handleSubmit = async (e: SubmitEvent) => {
    e.preventDefault();
    const value = inputValue();
    try {
      const url = new URL(value);
      const [, resource, trackId] = url.pathname.split('/');

      if (resource !== 'track') {
        return setError('Not a Spotify track valid URL');
      }

      props.onTrackSelected(trackId);
    } catch (err) {
      setError('Not a Spotify track valid URL');
    }
  };

  return (
    <SearchSection>
      <Form onSubmit={handleSubmit}>
        <Field>
          <SearchInput onInput={handleChange} placeholder="Spotify track URL" required type="url" />
          <SearchIconStyled />
        </Field>
        <IconButton type="submit">
          <ArrowRightIcon />
        </IconButton>
        <div>{error()}</div>
      </Form>
    </SearchSection>
  );
};

export default Search;
