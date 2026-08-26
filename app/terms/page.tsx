import { PageIntro } from "@/components/page-intro";
import { TextLink } from "@/components/text-link";

export const metadata = {
  title: "Terms",
};

export default function TermsPage() {
  return (
    <article className="pb-32">
      <PageIntro kicker="Legal" title="Terms of use.">
        <p>Seller of travel disclosures for a company that has not yet been issued registration numbers.</p>
      </PageIntro>
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="max-w-2xl space-y-6 font-body leading-[1.8] text-graphite">
          <p>
            Follow What Lights You Up publishes these pages so guests can read
            the rules before they apply. Registration numbers are shown as
            placeholders until issued.
          </p>
          <p>CST No. X</p>
          <p>Fla. Seller of Travel Reg. No. X</p>
          <p>
            Hawaii: this seller of travel maintains a trust account, or a bond,
            as required for the protection of consumer payments until they are
            disbursed to suppliers.
          </p>
          <p>
            Washington: this business is registered with the Washington
            Department of Licensing as a seller of travel. Registration does
            not constitute state approval.
          </p>
          <p>
            The website is provided as-is for information and invitation
            requests. Content may change as open decisions close — vessel
            quote, group size, founder hosting, totality site, and Afterglow
            talent.
          </p>
          <TextLink href="/booking-terms">Booking conditions</TextLink>
        </div>
      </div>
    </article>
  );
}
