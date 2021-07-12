import { Button } from "./Button";

interface GenreProps {
  id: number;
  name: "action" | "comedy" | "documentary" | "drama" | "horror" | "family";
  title: string;
}

interface SideBarProps {
  genres: GenreProps[];
  handleClickButton(id: number): void;
  selectedGenreId: number;
}

export function SideBar(props: SideBarProps) {
  console.log(props);
  return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>

      <div className="buttons-container">
        {props.genres.map(genre => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            selected={props.selectedGenreId === genre.id}
            onClick= {() => props.handleClickButton(genre.id)}
          />
        ))}
      </div>
    </nav>
  )
}
