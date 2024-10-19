// global.d.ts

import 'react-native';

declare module 'react-native' {
  interface ViewProps {
    className?: string;
  }

  interface TextProps {
    className?: string;
  }
  interface TouchableOpacityProps {
    className?: string;
  }
  interface ImageBackgroundProps {
    className?: string;
  }
  interface ScrollViewProps {
    contentContainerClassName?: string;
  }

  // Add more components here as needed, like Image, ScrollView, etc.
}
