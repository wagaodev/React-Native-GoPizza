jest.mock('./src/global/index', () => ({
  useTheme: () => ({
    theme: jest.fn(),
  }),
}));

jest.mock('react-native-safe-area-context', () => ({
  useSafeAreaInsets: jest.fn(),
}));

jest.mock('@react-native-firebase/crashlytics', () => {
  return () => ({
    crashlytics: jest.fn(() => ({
      recordError: jest.fn(),
    })),
  });
});

jest.mock('@react-native-firebase/analytics', () => {
  return () => ({
    analytics: jest.fn(() => ({})),
  });
});
