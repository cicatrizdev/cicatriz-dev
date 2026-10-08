import Image from 'next/image'
import type { Locale } from '@/lib/i18n'
import { site, getUi, pageSectionTitle, sectionIds } from '@/content'
import { Section } from '@/components/layout/Section'
import s from './sections.module.css'

export function NameSection({ locale }: { locale: Locale }) {
  const ui = getUi(locale)
  return (
    <Section id={sectionIds.name} title={pageSectionTitle(locale, 'name')}>
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
        <div className={s.nameCopy}>
          <h1 className={s.nameLine}>
            <strong className={s.cmd}>{site.command}</strong> —{' '}
            {ui.name.summary}
          </h1>
          <p className={s.pitch}>{ui.name.pitch}</p>
          <p className={s.proof}>{ui.name.proof}</p>
        </div>
      </div>
    </Section>
  )
}
