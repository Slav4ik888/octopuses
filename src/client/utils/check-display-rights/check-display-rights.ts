

// Условие для НЕ показа контейнера RootAuthContainer
export const noRootAuthContainer = (authenticated: boolean) => {
  return !authenticated
};



// Условие для приветствия нового пользовател
export const noDisplayGreeting = (isVerified: boolean) => {
  return isVerified;
};



