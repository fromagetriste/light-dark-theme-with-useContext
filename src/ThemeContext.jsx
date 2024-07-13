// étape 1 : on importe le createContext et le useContext (react.createContext et react.useContext, destructuré)
import { createContext, useContext, useState } from "react";

// étape 2 : on crée un 'context object' qu'on nomme comme UserContext, ThemeContext (react.createContext). The default value argument is only used when a component does not have a matching Provider above it in the tree.
const ThemeContext = createContext(undefined);

// étape 3 : On crée un Provider
export const ThemeProvider = ({ children }) => {
  // étape 4 : On crée local state pour le thème
  const [theme, setTheme] = useState("dark");
  // étape 5 : Dans le return statement, le ThemeContext.Provider (méthode) component doit être retourné, et wrap le children props
  return (
    // ici on définit dans le ThemeContext.Provider les props qu'on veut pouvoir transmettre aux composants enfants
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme: () => setTheme(theme === "dark" ? "light" : "dark"),
      }}
    >
      {/*Dans mon cas, ce sera <App /> le children car le thème englobe tout */}
      {children}
    </ThemeContext.Provider>
  );
};

// étape 6 : on crée le useTheme component à partir de notre useContext, pour pouvoir utiliser le useTheme dans notre application
export const useTheme = () => useContext(ThemeContext);

// Voir étape 7 dans le Switch folder

// Pour résumer, on crée notre objet ThemeContext (grâce à createContext).
// Ensuite, on donne à ThemeContext un local state const [theme, setTheme] = useState("dark");
// On peut alors retourner le ThemeContext.Provider, et ce dernier va porter avec lui les props qu'on veut transmettre (ici, le theme et la toggle function) aux composants (les composants sont représentés par le {children})
// Enfin, les composants qui devront recevoir le props utiliseront le useTheme qu'on exporte en bas de page

// more info on this website : https://www.telerik.com/blogs/react-basics-how-when-use-react-context
