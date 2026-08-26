import { PageIntro } from "@/components/page-intro";

export const metadata = {
  title: "Privacy",
};

export default function PrivacyPage() {
  return (
    <article className="pb-32">
      <PageIntro kicker="Legal" title="Privacy.">
        <p>
          This first iteration stores waitlist, notification, and application
          data in your browser only. Nothing is sent to a server.
        </p>
      </PageIntro>
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="max-w-2xl space-y-6 font-body leading-[1.8] text-graphite">
          <p>
            When a later iteration connects capture to a host, we will collect
            first name, email, phone, city, party details, and the drawing
            question in order to qualify invitations. We will not sell that
            list.
          </p>
          <p>
            Referral source is asked so we can thank the right people. Future
            eclipse years are tagged so we can write when 2028, 2030, 2033, or
            2034 opens.
          </p>
          <p>
            You may ask us to delete a record by writing the named contact,
            Chelsea.
          </p>
        </div>
      </div>
    </article>
  );
}
