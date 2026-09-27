import { SiteHeader } from '@/components/site/site-header'
import { Hero } from '@/components/site/hero'
import { SolutionWizard } from '@/components/site/solution-wizard'
import { KnowledgeBase } from '@/components/site/knowledge-base'
import { HuginModels } from '@/components/site/hugin-models'
import { SupportSection } from '@/components/site/support-section'
import { SiteFooter } from '@/components/site/site-footer'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <SolutionWizard />
        <HuginModels />
        <KnowledgeBase />
        <SupportSection />
      </main>
      <SiteFooter />
    </>
  )
}
