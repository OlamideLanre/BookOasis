import "./Terms.css"

export const TermsOfUse = () => {
  return (
    <>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" defaultChecked />
        <div className="collapse-title text-xl font-medium">Terms of use</div>
        <div className="collapse-content">
          <li>
            Use of Site: By accessing or using Book Oasis, you agree to be bound
            by these Terms of Use.
          </li>
          <li>
            Content Ownership: All content on Book Oasis, including text,
            images, and logos, is the property of Book Oasis and may not be used
            without permission
          </li>
          <li>
            User Conduct: You agree to use Book Oasis for lawful purposes only
            and not to engage in any illegal or fraudulent activity.
          </li>
          <li>
            Privacy: We value your privacy and will not share your personal
            information with third parties without your consent.
          </li>
          <li>
            Changes to Terms: We may update these Terms of Use from time to
            time, and it is your responsibility to review them periodically.
          </li>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">Cookie policy</div>
        <div className="collapse-content">
            <p className="font-semibold">
            Cookies are small text files stored on your device when you visit a
          website. They help the website remember your preferences and enhance
          your user experience.
            </p>
          
          <li>
            How we use cookies: We use cookies to personalize your experience on
            Book Oasis, remember your login information, and track website usage
            to improve our services.
          </li>
          <li>
            Third-party cookies: We may also use third-party cookies for
            advertising and analytics purposes.
          </li>
          <li>
            Managing cookies: You can manage your cookie preferences through
            your browser settings. However, please note that disabling cookies
            may impact your ability to use certain features on Book Oasis.
          </li>
          <li>
            Changes to cookie policy: We may update this cookie policy from time
            to time, so please check back periodically for any changes.
          </li>
          <span >
            By using Book Oasis, you consent to our use of cookies as outlined
            in this policy.
          </span>
        </div>
      </div>
      <div className="FAQs collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">FAQs</div>
        <div className="collapse-content">
          <div>
            <h3> How do I place an order on Book Oasis?</h3>
            <p>
              To place an order, simply add the books you'd like to purchase to
              your cart and proceed to checkout. Follow the on-screen
              instructions to enter your shipping and payment information, and
              your order will be processed within 24 hours.
            </p>
          </div>
          <div>
            <h3>What payment methods do you accept?</h3>
            <p>
              We accept all major credit cards, including Visa, Mastercard, and
              American Express, as well as PayPal
            </p>
          </div>
          <div>
            <h3>How long will it take for my order to arrive?</h3>
            <p>
              Shipping times may vary depending on your location, but most
              orders arrive within 5-7 business days. You'll receive a
              confirmation email with tracking information once your order has
              shipped.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
