import { PageIntro } from "@/components/page-intro";

export const metadata = {
  title: "Booking conditions",
};

export default function BookingTermsPage() {
  return (
    <article className="pb-32">
      <PageIntro kicker="Booking conditions" title="What the deposit binds.">
        <p>
          Adults 21 and over. Maximum 24 guests. Travel insurance is a
          condition of booking.
        </p>
      </PageIntro>
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="max-w-2xl space-y-6 font-body leading-[1.8] text-graphite">
          <p>
            A $3,000 per-person deposit is due at booking and is non-refundable
            after 14 days. $5,000 per person is due January 15, 2027. The
            balance is due April 15, 2027. International airfare, Egypt visa,
            insurance, and gratuities are not included.
          </p>
          <p>
            Force majeure: weather, including cloud cover during totality, does
            not entitle a refund. The Witness pillar protects the hour. It
            cannot command the sky.
          </p>
          <p>
            Go / no-go is March 1, 2027. A minimum of 12 deposits is required
            before operator cancellation penalty windows. If the departure is
            cancelled by us before that date, deposits are returned.
          </p>
          <p>
            CST No. X. Fla. Seller of Travel Reg. No. X. Hawaii trust-account
            compliance. Washington Department of Licensing seller-of-travel
            disclosure. Registration numbers will replace “X” when issued.
          </p>
          <p>
            Remaining cabin counts on the Egypt page reflect confirmed deposits
            only. Applications and holds are not inventory.
          </p>
        </div>
      </div>
    </article>
  );
}
