const IS_DEV = process.env.APP_VARIANT === 'development'
const IS_PREVIEW = process.env.APP_VARIANT === 'preview'

const getUniqueIdentifier = () => {
  if (IS_DEV) {
    return 'com.philipbill.stickersmash.dev'
  }

  if (IS_PREVIEW) {
    return 'com.philipbill.stickersmash.preview'
  }

  return 'com.philipbill.stickersmash'
}

const getAppName = () => {
  if (IS_DEV) {
    return 'StickerSmash (Dev)'
  }

  if (IS_PREVIEW) {
    return 'StickerSmash (Preview)'
  }

  return 'StickerSmash: Emoji Stickers'
}

export default {
  // "expo": {}
  name: getAppName(),
  slug: 'StickerSmash',
  version: '1.0.0',
  orientation: 'portrait',
  icon: './assets/icon.png',
  userInterfaceStyle: 'light',
  splash: {
    image: './assets/splash.png',
    resizeMode: 'contain',
    backgroundColor: '#25292e'
  },
  ios: {
    bundleIdentifier: getUniqueIdentifier(),
    supportsTablet: true,
    bundleIdentifier: 'com.philipbill.StickerSmash',
    buildNumber: '1'
  },
  android: {
    adaptiveIcon: {
      foregroundImage: './assets/adaptive-icon.png',
      backgroundColor: '#ffffff'
    },
    package: getUniqueIdentifier(),
    versionCode: '1'
  },
  web: {
    favicon: './assets/favicon.png'
  },
  extra: {
    eas: {
      projectId: '1b174086-6745-4644-84fc-a1d475f4d1b6'
    }
  },
  owner: 'philipbill'
}
