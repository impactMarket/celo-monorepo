import { NextPage } from 'next'
import * as React from 'react'
import { StyleSheet, View } from 'react-native'
import CCLicense from 'src/brandkit/common/CCLicense'
import { GAP } from 'src/brandkit/common/constants'
import { brandStyles } from 'src/brandkit/common/constants'
import Page, { ICONS_PATH } from 'src/brandkit/common/Page'
import PageHeadline from 'src/brandkit/common/PageHeadline'
import IconShowcase from 'src/brandkit/common/Showcase'
import { AssetTypes, EXCHANGE_ICONS_PKG_TRACKING, trackDownload } from 'src/brandkit/tracking'
import { NameSpaces, useTranslation } from 'src/i18n'
import Button, { BTN } from 'src/shared/Button.3'
import { hashNav } from 'src/shared/menu-items'
import { colors } from 'src/styles'

const icons = [
  {
    description: 'cUSD Exchange Icon, Full Color\n',
    uri: '/images/marketplace-icons/icon-celo-dollar-color-f.svg',
  },
  {
    description: 'cGLD Exchange Icon, Full Color\n',
    uri: '/images/marketplace-icons/icon-celo-gold-color-f.svg',
  },
  null,
  null,
  {
    description: 'cUSD Exchange Icon, Monochrome\n',
    uri: '/images/marketplace-icons/icon-celo-dollar-black-f.svg',
    variant: 'circle-white',
  },
  {
    description: 'cGLD Exchange Icon, Monochrome\n',
    uri: '/images/marketplace-icons/icon-celo-gold-black-f.svg',
    variant: 'circle-white',
  },
  {
    description: 'cUSD Exchange Icon, Reverse Monochrome\n',
    uri: '/images/marketplace-icons/icon-celo-dollar-white-f.svg',
    variant: 'circle-black',
  },
  {
    description: 'cGLD Exchange Icon, Reverse Monochrome\n',
    uri: '/images/marketplace-icons/icon-celo-gold-white-f.svg',
    variant: 'circle-black',
  },
]

const IconExchangePage: NextPage = React.memo(() => {
  const { t } = useTranslation(NameSpaces.brand)
  return (
    <Page
      title={t('exchangeIcons.title')}
      metaDescription={t('exchangeIcons.headline')}
      path={ICONS_PATH}
      sections={[{ id: hashNav.brandIcons.overview, children: <Overview /> }]}
    />
  )
})

export default IconExchangePage

export interface IconData {
  description: string
  name: string
  preview: string
  uri: string
  tags: string[]
  id: string
}

function Overview() {
  const { t } = useTranslation(NameSpaces.brand)

  const onPressDownload = React.useCallback(async () => {
    await trackDownload(EXCHANGE_ICONS_PKG_TRACKING)
  }, [])

  return (
    <View style={styles.container}>
      <PageHeadline title={t('exchangeIcons.title')} headline={t('exchangeIcons.headline')} />

      <Button
        kind={BTN.PRIMARY}
        text={t('logo.overviewBtn')}
        onPress={onPressDownload}
        href="/assets/CeloMarketplaceIcons.zip"
      />

      <CCLicense textI18nKey="exchangeIcons.license" />

      <View style={styles.root}>
        <View style={brandStyles.tiling}>
          {icons.map((icon, i) =>
            icon === null ? (
              <View key={i} style={styles.empty} />
            ) : (
              <View key={i}>
                <IconShowcase
                  key={i}
                  ratio={1}
                  variant={(icon.variant || 'circle') as any}
                  description={icon.description}
                  name={''}
                  preview={icon.uri}
                  uri={icon.uri}
                  loading={false}
                  assetType={AssetTypes.icon}
                  size={160}
                />
              </View>
            )
          )}
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: { paddingHorizontal: GAP },
  root: { minHeight: '75vh' },
  offScreen: {
    display: 'none',
  },
  empty: {
    width: 160,
    marginTop: 20,
  },
  matches: {
    color: colors.primaryPress,
    opacity: 0,
    transitionDuration: '200ms',
    transitionProperty: 'opacity',
  },
  visible: {
    opacity: 1,
  },
})