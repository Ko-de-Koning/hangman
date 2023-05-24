import styles from "./Keyboard.module.css";

const KEYS = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

type KeyboardProps = {
<<<<<<< HEAD
=======
  disabled?: boolean;
>>>>>>> 8cb092c (completed-win-lose-logic)
  activeLetters: string[];
  inactiveLetters: string[];
  addGuessedLetter: (letter: string) => void;
};

export function Keyboard({
  activeLetters,
  inactiveLetters,
  addGuessedLetter,
<<<<<<< HEAD
=======
  disabled = false,
>>>>>>> 8cb092c (completed-win-lose-logic)
}: KeyboardProps) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(75px, 1fr))",
        gap: ".5rem",
      }}
    >
      {KEYS.map((key) => {
        const isActive = activeLetters.includes(key);
        const isInactive = inactiveLetters.includes(key);
        return (
          <button
            onClick={() => addGuessedLetter(key)}
<<<<<<< HEAD
            className={
              '${styles.btn} ${isActive ? styles.active : ""} ${isInactive ? styles.inactive : ""} '
            }
            disabled={isInactive || isActive}
=======
            className={`${styles.btn} ${isActive ? styles.active : ""} ${
              isInactive ? styles.inactive : ""
            }`}
            disabled={isInactive || isActive || disabled}
>>>>>>> 8cb092c (completed-win-lose-logic)
            key={key}
          >
            {key}
          </button>
        );
      })}
    </div>
  );
}
<<<<<<< HEAD

export default Keyboard;
=======
>>>>>>> 8cb092c (completed-win-lose-logic)
