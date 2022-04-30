import * as React from 'react';

export const useModal = () => {
  const [isShowing, setIsShowing] = React.useState(false);

  function toggleModal() {
    setIsShowing(!isShowing);
  }

  return { isShowing, toggleModal };
};
