import { GenreResponseProps } from '../App';
import { Button } from './Button';

import '../styles/sidebar.scss';

interface SideBarProps {
  genres: GenreResponseProps[];
  handleClick: (id: number) => void;
  selectedGenreId: number;
}

export function SideBar({ genres, handleClick, selectedGenreId }: SideBarProps) {

  return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>

      <div className="buttons-container">
        {genres.map(genre => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClick(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>

    </nav>);
  // Complete aqui
}