import React from 'react';
import { Dimensions } from 'react-native';

import ScreenOrientation from '_utils/ScreenOrientation';

const useScreenOrientation = () => {
  const [screenOrientation, setScreenOrientation] = React.useState(
    ScreenOrientation.getScreenOrientation(),
  );

  const updateScreenOrientation = () => {
    setScreenOrientation(ScreenOrientation.getScreenOrientation());
  };

  React.useEffect(() => {
    const eventListener = Dimensions.addEventListener(
      'change',
      updateScreenOrientation,
    );
    return () => {
      eventListener.remove();
    };
  }, []);

  return screenOrientation;
};

export default useScreenOrientation;
