import Image from 'next/image'
import type { Locale } from '@/lib/i18n'
import { site, getUi, sectionIds } from '@/content'
import { Section } from '@/components/layout/Section'
import s from './sections.module.css'

export function NameSection({ locale }: { locale: Locale }) {
  const ui = getUi(locale)
  return (
    <Section id={sectionIds.name} title={ui.sections.name}>
      <div className={s.name}>
        <Image
          src={`${site.avatar}?s=144`}
          alt={ui.name.avatarAlt}
          width={72}
          height={72}
          sizes="72px"
          priority
          className={s.avatar}
        />
        <h1 className={s.nameLine}>
          <strong className={s.cmd}>{site.command}</strong> — {ui.name.summary}
        </h1>
      </div>
    </Section>
  )
}
