import { useState, useEffect } from 'react';
export default function useDarkSide() {
  const [theme, setTheme] = useState(localStorage.theme)
}