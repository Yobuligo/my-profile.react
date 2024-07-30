import { useState } from "react";
import { SearchIcon } from "../../icons/SearchIcon";
import { Button } from "../button/Button";
import { Input } from "../input/Input";
import { ISearchProps } from "./ISearchProps";
import styles from "./Search.module.scss";

export const Search: React.FC<ISearchProps> = (props) => {
  const [query, setQuery] = useState("");

  const onSearch = () => props.onSearch?.(query);

  const onEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      onSearch();
    }
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setQuery(event.target.value);

  return (
    <div className={styles.search}>
      <Input
        className={styles.input}
        onChange={onChange}
        onKeyDown={onEnter}
        placeholder="Search"
        type="text"
        value={query}
      />
      <Button>
        <SearchIcon className={styles.icon} onClick={onSearch} />
      </Button>
    </div>
  );
};
