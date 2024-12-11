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

type SocialsType = Record<
  string,
  {
    url: string
    icon: any // Couldn't infer type, so we cast to any
  }
>

const SOCIALS: SocialsType = {
  GLOBAL: { url: 'https://ancient8.gg', icon: GlobalIcon },
  DISCORD: { url: 'https://discord.com/invite/ancient8', icon: DiscordIcon },
  TELEGRAM: { url: 'https://t.me/ancient8_gg', icon: TelegramIcon },
  X: { url: 'https://x.com/Ancient8_gg', icon: XIcon },
  YOUTUBE: { url: 'https://www.youtube.com/@Ancient8_gg', icon: YoutubeIcon },
}

function Socials() {
  return (
    <Space size={8} className="home-widget--social">
      {Object.keys(SOCIALS).map((name) => (
        <LinkExternal href={SOCIALS[name].url} key={name}>
          <Button
            type="text"
            icon={<Icon component={SOCIALS[name].icon} />}
            className="home-widget--social-btn"
          />
        </LinkExternal>
      ))}
    </Space>
  )
}

export default Socials
