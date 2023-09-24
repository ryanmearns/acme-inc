/* eslint-disable react/no-unescaped-entities */
import { brand } from "../../../brand.config";
import { PageHeader } from "../../_components/page-header";

export default function Page() {
  return (
    <main className="container items-center flex flex-col">
      <PageHeader
        title={"Privacy policy"}
        subtitle={`Below is the privacy policy for ${brand.name}.`}
      />
      <div className="prose prose-neutral dark:prose-invert prose-pre:border prose-pre:border-border prose-pre:rounded-lg prose-img:rounded-lg max-w-2xl prose-img:border prose-img:border-border">
        <p>
          Welcome to{" "}
          <a
            className="text-foreground underline underline-offset-4 hover:no-underline"
            href="/"
          >
            {brand.name}.com
          </a>{" "}
          (the "Site"), hosted by {brand.name} ({brand.name}, "we", "us", and/or
          "our"). {brand.name} provides a platform for creating and managing
          short links (the "Services")1. We value your privacy and are dedicated
          to protecting your personal data. This Privacy Policy covers how we
          collect, handle, and disclose personal data on our Platform.
        </p>
        <p>
          If you have any questions, comments, or concerns regarding this
          Privacy Policy, our data practices, or would like to exercise your
          rights, do not hesitate to contact us.
        </p>
        <h2 id="to-whom-does-this-policy-apply">
          To Whom Does This Policy Apply
          <a
            className="no-underline after:content-['#'] after:text-muted-foreground/50 after:hover:text-muted-foreground ml-1 after:p-1"
            href="#to-whom-does-this-policy-apply"
          >
            <span className="icon icon-link"></span>
          </a>
        </h2>
        <p>
          This Privacy Policy applies to customers and site visitors. Each
          customer is responsible for posting its own terms, conditions, and
          privacy policies, and ensuring compliance with all applicable laws and
          regulations.
        </p>
        <h2 id="changes-to-this-privacy-policy">
          Changes To This Privacy Policy
          <a
            className="no-underline after:content-['#'] after:text-muted-foreground/50 after:hover:text-muted-foreground ml-1 after:p-1"
            href="#changes-to-this-privacy-policy"
          >
            <span className="icon icon-link"></span>
          </a>
        </h2>
        <p>
          This Privacy Policy may change from time to time, as our Platform and
          our business may change. Your continued use of the Platform after any
          changes to this Privacy Policy indicates your agreement with the terms
          of the revised Privacy Policy.
        </p>
        <h2 id="what-information-do-we-collect">
          What Information Do We Collect
          <a
            className="no-underline after:content-['#'] after:text-muted-foreground/50 after:hover:text-muted-foreground ml-1 after:p-1"
            href="#what-information-do-we-collect"
          >
            <span className="icon icon-link"></span>
          </a>
        </h2>
        <p>
          We collect information directly from you when you provide it to us
          explicitly on our Site. We do not use third-party cookies on our Site.
        </p>
        <h2 id="what-we-use-your-information-for">
          What We Use Your Information For
          <a
            className="no-underline after:content-['#'] after:text-muted-foreground/50 after:hover:text-muted-foreground ml-1 after:p-1"
            href="#what-we-use-your-information-for"
          >
            <span className="icon icon-link"></span>
          </a>
        </h2>
        <p>
          We use your information to provide our Services, to improve our
          Platform, to understand how you use our Platform, and to communicate
          with you.
        </p>
        <h2 id="how-to-contact-us">
          How To Contact Us
          <a
            className="no-underline after:content-['#'] after:text-muted-foreground/50 after:hover:text-muted-foreground ml-1 after:p-1"
            href="#how-to-contact-us"
          >
            <span className="icon icon-link"></span>
          </a>
        </h2>
        <p>
          For privacy-related questions, please contact us at{" "}
          <a
            className="text-foreground underline underline-offset-4 hover:no-underline"
            href={`mailto:${brand.email}`}
          >
            {brand.email}
          </a>
          .
        </p>
      </div>
    </main>
  );
}
