import type { Locale } from '@/lib/i18n'
import { skills, getUi, sectionIds } from '@/content'
import { Section } from '@/components/layout/Section'
import { Tag } from '@/components/ui/Tag'
import s from './sections.module.css'

export function DescriptionSection({ locale }: { locale: Locale }) {
  const ui = getUi(locale)
  return (
    <Section id={sectionIds.description} title={ui.sections.description}>
      {ui.description.paragraphs.map((text) => (
        <p key={text.slice(0, 24)}>{text}</p>
      ))}
      <h3 className={s.sub}>{ui.description.skillsLead}</h3>
      <dl className={s.skills}>
        {skills.map((group) => (
          <div key={group.label.en}>
            <dt>{group.label[locale]}</dt>
            <dd>
              {group.items.map((item) => (
                <Tag
                  key={item.name}
                  quality={item.quality}
                  title={ui.description.quality[item.quality]}
                >
                  {item.name}
                </Tag>
              ))}
            </dd>
          </div>
        ))}
      </dl>
      <p className={s.legend}>
        {ui.description.qualityLegend}{' '}
        {(['legendary', 'epic', 'rare', 'uncommon'] as const).map((quality) => (
          <span key={quality} className={s.legendItem}>
            <Tag quality={quality}>{quality}</Tag>{' '}
            {ui.description.quality[quality]}
          </span>
        ))}
      </p>
    </Section>
  )
}
