import { ApplyForm } from "@/components/apply-form";
import { PageIntro } from "@/components/page-intro";
import { StickyDock } from "@/components/sticky-dock";
import { namedContact } from "@/lib/content";

export const metadata = {
  title: "Request an invitation",
};

export default function ApplyPage() {
  return (
    <article className="pb-32">
      <PageIntro
        kicker="Waitlist → application → 20-minute call → invitation → deposit"
        title="Request an invitation."
      >
        <p>
          This is a qualification, not a checkout. If the mix is right, a
          founder writes within 48 hours to schedule a call. {namedContact.line}
        </p>
      </PageIntro>
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="max-w-2xl">
          <ApplyForm />
        </div>
      </div>
      <StickyDock />
    </article>
  );
}
