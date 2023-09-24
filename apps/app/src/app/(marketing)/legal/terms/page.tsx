/* eslint-disable react/no-unescaped-entities */
import { brand } from "../../../brand.config";
import { PageHeader } from "../../_components/page-header";

export default function Page() {
  return (
    <main className="container items-center flex flex-col">
      <PageHeader
        title={"Terms of service"}
        subtitle={`Below is the terms of service for ${brand.name}.`}
      />
      <div className="prose prose-neutral dark:prose-invert prose-pre:border prose-pre:border-border prose-pre:rounded-lg prose-img:rounded-lg prose-img:border prose-img:border-border">
        <p>
          Subject to these Terms of Service (this "Agreement"),{" "}
          <a
            className="text-foreground underline underline-offset-4 hover:no-underline"
            href="/"
          >
            {brand.website}
          </a>{" "}
          ({brand.name}, "we", "us" and/or "our") provides access to
          {brand.name}'s cloud platform as a service (collectively, the
          "Services"). By using or accessing the Services, you acknowledge that
          you have read, understand, and agree to be bound by this Agreement.
        </p>
        <p>
          If you are entering into this Agreement on behalf of a company,
          business or other legal entity, you represent that you have the
          authority to bind such entity to this Agreement, in which case the
          term "you" shall refer to such entity. If you do not have such
          authority, or if you do not agree with this Agreement, you must not
          accept this Agreement and may not use the Services.
        </p>
        <h2 id="1-acceptance-of-terms">
          1. Acceptance of Terms
          <a
            className="no-underline after:content-['#'] after:text-muted-foreground/50 after:hover:text-muted-foreground ml-1 after:p-1"
            href="#1-acceptance-of-terms"
          >
            <span className="icon icon-link"></span>
          </a>
        </h2>
        <p>
          By signing up and using the services provided by {brand.name}
          (referred to as the "Service"), you are agreeing to be bound by the
          following terms and conditions ("Terms of Service"). The Service is
          owned and operated by `${brand.name}` ("Us", "We", or "Our").
        </p>
        <h2 id="2-description-of-service">
          2. Description of Service
          <a
            className="no-underline after:content-['#'] after:text-muted-foreground/50 after:hover:text-muted-foreground ml-1 after:p-1"
            href="#2-description-of-service"
          >
            <span className="icon icon-link"></span>
          </a>
        </h2>
        <p>
          {brand.name} provides an open source monitoring and status page tool.
          ("the Product"). The Product is accessible at {brand.website} and
          other domains and subdomains controlled by Us (collectively, "the
          Website").
        </p>
        <h2 id="3-fair-use">
          3. Fair Use
          <a
            className="no-underline after:content-['#'] after:text-muted-foreground/50 after:hover:text-muted-foreground ml-1 after:p-1"
            href="#3-fair-use"
          >
            <span className="icon icon-link"></span>
          </a>
        </h2>
        <p>
          You are responsible for your use of the Service and for any content
          that you post or transmit through the Service. You may not use the
          Service for any purpose that is illegal or infringes upon the rights
          of others.
        </p>
        <p>
          We reserve the right to suspend or terminate your access to the
          Service if we determine, in our sole discretion, that you have
          violated these Terms of Service, including but not limited to, adding
          phishing links, spam links, scam links, or other inappropriate or
          illegal content.
        </p>
        <h2 id="4-intellectual-property-rights">
          4. Intellectual Property Rights
          <a
            className="no-underline after:content-['#'] after:text-muted-foreground/50 after:hover:text-muted-foreground ml-1 after:p-1"
            href="#4-intellectual-property-rights"
          >
            <span className="icon icon-link"></span>
          </a>
        </h2>
        <p>
          You acknowledge and agree that the Service and its entire contents,
          features, and functionality, including but not limited to all
          information, software, code, text, displays, graphics, photographs,
          video, audio, design, presentation, selection, and arrangement, are
          owned by Us, our licensors, or other providers of such material and
          are protected by United States and international copyright, trademark,
          patent, trade secret, and other intellectual property or proprietary
          rights laws.
        </p>
        <h2 id="5-changes-to-these-terms">
          5. Changes to these Terms
          <a
            className="no-underline after:content-['#'] after:text-muted-foreground/50 after:hover:text-muted-foreground ml-1 after:p-1"
            href="#5-changes-to-these-terms"
          >
            <span className="icon icon-link"></span>
          </a>
        </h2>
        <p>
          We reserve the right to revise and update these Terms of Service from
          time to time in our sole discretion. All changes are effective
          immediately when we post them, and apply to all access to and use of
          the Website thereafter. Your continued use of the Website following
          the posting of revised Terms of Service means that you accept and
          agree to the changes.
        </p>
        <h2 id="6-contact-information">
          6. Contact Information
          <a
            className="no-underline after:content-['#'] after:text-muted-foreground/50 after:hover:text-muted-foreground ml-1 after:p-1"
            href="#6-contact-information"
          >
            <span className="icon icon-link"></span>
          </a>
        </h2>
        <p>
          Questions or comments about the Website or these Terms of Service may
          be directed to our support team at{" "}
          <a
            className="text-foreground underline underline-offset-4 hover:no-underline"
            href={`mailto:${brand.email}`}
          >
            {brand.email}
          </a>
          .
        </p>
        <h2 id="7-disclaimer-of-warranties">
          7. Disclaimer of Warranties
          <a
            className="no-underline after:content-['#'] after:text-muted-foreground/50 after:hover:text-muted-foreground ml-1 after:p-1"
            href="#7-disclaimer-of-warranties"
          >
            <span className="icon icon-link"></span>
          </a>
        </h2>
        <p>
          THE SERVICE AND ITS CONTENT ARE PROVIDED ON AN "AS IS" AND "AS
          AVAILABLE" BASIS WITHOUT ANY WARRANTIES OF ANY KIND. WE DISCLAIM ALL
          WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE WARRANTY OF TITLE,
          MERCHANTABILITY, NON-INFRINGEMENT OF THIRD PARTIES’ RIGHTS, AND
          FITNESS FOR PARTICULAR PURPOSE.
        </p>
        <h2 id="8-limitation-of-liability">
          8. Limitation of Liability
          <a
            className="no-underline after:content-['#'] after:text-muted-foreground/50 after:hover:text-muted-foreground ml-1 after:p-1"
            href="#8-limitation-of-liability"
          >
            <span className="icon icon-link"></span>
          </a>
        </h2>
        <p>
          IN NO EVENT WILL WE, OUR AFFILIATES OR THEIR LICENSORS, SERVICE
          PROVIDERS, EMPLOYEES, AGENTS, OFFICERS OR DIRECTORS BE LIABLE FOR
          DAMAGES OF ANY KIND, UNDER ANY LEGAL THEORY, ARISING OUT OF OR IN
          CONNECTION WITH YOUR USE, OR INABILITY TO USE, THE WEBSITE, THE
          SERVICE, ANY WEBSITES LINKED TO IT, ANY CONTENT ON THE WEBSITE OR SUCH
          OTHER WEBSITES, INCLUDING ANY DIRECT, INDIRECT, SPECIAL, INCIDENTAL,
          CONSEQUENTIAL, OR PUNITIVE DAMAGES.
        </p>
        <h2 id="9-governing-law-and-jurisdiction">
          9. Governing Law and Jurisdiction
          <a
            className="no-underline after:content-['#'] after:text-muted-foreground/50 after:hover:text-muted-foreground ml-1 after:p-1"
            href="#9-governing-law-and-jurisdiction"
          >
            <span className="icon icon-link"></span>
          </a>
        </h2>
        <p>
          These Terms of Service and any dispute or claim arising out of or
          related to them, their subject matter or their formation (in each
          case, including non-contractual disputes or claims) shall be governed
          by and construed in accordance with the internal laws of France
          without giving effect to any choice or conflict of law provision or
          rule. Any legal suit, action, or proceeding arising out of, or related
          to, these Terms of Service or the Website shall be instituted
          exclusively in the federal courts of France.
        </p>
        <hr />
        <p>
          By using {brand.name} , you acknowledge that you have read these Terms
          of Service, understood them, and agree to be bound by them. If you do
          not agree to these Terms of Service, you are not authorized to use the
          Service. We reserve the right to change these Terms of Service at any
          time, so please review them frequently.
        </p>
      </div>
    </main>
  );
}
