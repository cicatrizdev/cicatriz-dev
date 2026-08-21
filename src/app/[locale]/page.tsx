import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { isLocale } from '@/lib/i18n'
import { buildMetadata } from '@/lib/metadata'
import { JsonLd } from '@/components/seo/JsonLd'
import { SectionNav } from '@/components/layout/SectionNav'
import { NameSection } from '@/components/sections/NameSection'
import { SynopsisSection } from '@/components/sections/SynopsisSection'
import { DescriptionSection } from '@/components/sections/DescriptionSection'
import { OptionsSection } from '@/components/sections/OptionsSection'
import { ExamplesSection } from '@/components/sections/ExamplesSection'
import { HistorySection } from '@/components/sections/HistorySection'
import { BugsSection } from '@/components/sections/BugsSection'
import { SeeAlsoSection } from '@/components/sections/SeeAlsoSection'

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  return isLocale(locale) ? buildMetadata(locale) : {}
}

export default async function Page({ params }: Props) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()

  return (
    <>
      <JsonLd locale={locale} />
      <SectionNav locale={locale} />
      <NameSection locale={locale} />
      <SynopsisSection locale={locale} />
      <DescriptionSection locale={locale} />
      <OptionsSection locale={locale} />
      <ExamplesSection locale={locale} />
      <HistorySection locale={locale} />
      <BugsSection locale={locale} />
      <SeeAlsoSection locale={locale} />
    </>
  )
}
