import { Space, Button } from 'antd'
import Icon from '@ant-design/icons'

import LinkExternal from '@/components/systems/link-external'

import {
  GlobalIcon,
  DiscordIcon,
  TelegramIcon,
  XIcon,
  YoutubeIcon,
} from '@/assets/icon/socials'

import './socials.scss'

export type SocialsType = {
  name: SOCIAL_NAME
  url?: string
}

export enum SOCIAL_NAME {
  WEBSITE = 'website',
  DISCORD = 'discord',
  TELEGRAM = 'telegram',
  X = 'x',
  YOUTUBE = 'youtube',
}

const SOCIAL_ICON = {
  [SOCIAL_NAME.WEBSITE]: GlobalIcon,
  [SOCIAL_NAME.DISCORD]: DiscordIcon,
  [SOCIAL_NAME.TELEGRAM]: TelegramIcon,
  [SOCIAL_NAME.X]: XIcon,
  [SOCIAL_NAME.YOUTUBE]: YoutubeIcon,
}

// NOTE: Keep for using later
// const SOCIALS: SocialsType = {
//   GLOBAL: { url: 'https://ancient8.gg', icon: GlobalIcon },
//   DISCORD: { url: 'https://discord.com/invite/ancient8', icon: DiscordIcon },
//   TELEGRAM: { url: 'https://t.me/ancient8_gg', icon: TelegramIcon },
//   X: { url: 'https://x.com/Ancient8_gg', icon: XIcon },
//   YOUTUBE: { url: 'https://www.youtube.com/@Ancient8_gg', icon: YoutubeIcon },
// }

function Socials({ socials }: { socials: SocialsType[] }) {
  if (!socials.length) return null

  return (
    <Space size={8} className="home-widget--social">
      {socials.map(({ name, url }) => (
        <LinkExternal href={url} key={name}>
          <Button
            type="text"
            icon={<Icon component={SOCIAL_ICON[name]} />}
            className="home-widget--social-btn"
          />
        </LinkExternal>
      ))}
    </Space>
  )
}

export default Socials
