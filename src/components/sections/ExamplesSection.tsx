import type { Locale } from '@/lib/i18n'
import { site, projects, getUi, sectionIds } from '@/content'
import { langTag } from '@/lib/i18n'
import { Section } from '@/components/layout/Section'
import { Tag } from '@/components/ui/Tag'
import s from './sections.module.css'

export function ExamplesSection({ locale }: { locale: Locale }) {
  const ui = getUi(locale)
  if (projects.length === 0) return null
  return (
    <Section id={sectionIds.examples} title={ui.sections.examples}>
      <p className={s.lead}>
        {ui.examples.lead}{' '}
        <a href={`#${sectionIds.history}`} lang={langTag[locale]}>
          {ui.sections.history.toUpperCase()}
        </a>
        .
      </p>
      <ul className={s.examples}>
        {projects.map((project) => (
          <li key={project.slug} className={s.example}>
            <p className={s.cmdLine}>
              <span className={s.prompt} aria-hidden="true">
                ${' '}
              </span>
              <code>
                {site.command} {project.flag} {project.slug}
              </code>
            </p>
            <h3 className={s.exTitle}>
              {project.name}
              {project.status === 'wip' ? (
                <span className={s.dim}> · {ui.examples.wip}</span>
              ) : (
                project.year && <span className={s.dim}> · {project.year}</span>
              )}
            </h3>
            <p>{project.summary[locale]}</p>
            <p className={s.exMeta}>
              {project.stack.map((item) => (
                <Tag key={item}>{item}</Tag>
              ))}
              {project.url && (
                <a href={project.url} target="_blank" rel="noopener">
                  {ui.examples.visit} ↗
                </a>
              )}
              {project.repo && (
                <a href={project.repo} target="_blank" rel="noopener">
                  {ui.examples.source} ↗
                </a>
              )}
            </p>
          </li>
        ))}
      </ul>
    </Section>
  )
}
