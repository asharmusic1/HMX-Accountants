import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full pt-section-margin pb-8 bg-surface-container-lowest dark:bg-inverse-surface border-t border-outline-variant/30 mt-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter px-margin-mobile md:px-container-padding max-w-[1280px] mx-auto">
        <div className="col-span-1 lg:col-span-2 mb-8 lg:mb-0">
          <span className="font-headline-lg text-lg md:text-2xl text-primary block mb-4 font-bold tracking-wide">
            HMX ACCOUNTANTS
          </span>
          <p className="font-body-md text-on-surface-variant dark:text-surface-dim max-w-sm mb-4">
            © {new Date().getFullYear()} HMX Accounting Services UK Ltd. Registered in England and Wales.
          </p>
          <div>
            <span className="text-white md:text-on-surface text-sm font-medium">
              AAT licensed accounting practice. Supervised by AAT for Anti-Money Laundering compliance.
            </span>
          </div>
        </div>
        
        <div className="col-span-1 flex flex-col space-y-4">
          <Link 
            href="/privacy-policy"
            className="font-body-md text-on-surface-variant dark:text-surface-dim hover:text-primary dark:hover:text-primary-fixed transition-colors"
          >
            Privacy Policy
          </Link>
          <Link 
            href="/terms-of-service"
            className="font-body-md text-on-surface-variant dark:text-surface-dim hover:text-primary dark:hover:text-primary-fixed transition-colors"
          >
            Terms of Service
          </Link>
        </div>
        
        <div className="col-span-1 flex flex-col space-y-4">
          <Link 
            href="/hmrc-disclosure"
            className="font-body-md text-on-surface-variant dark:text-surface-dim hover:text-primary dark:hover:text-primary-fixed transition-colors"
          >
            HMRC Disclosure
          </Link>
          <Link 
            href="/anti-money-laundering"
            className="font-body-md text-on-surface-variant dark:text-surface-dim hover:text-primary dark:hover:text-primary-fixed transition-colors"
          >
            Anti-Money Laundering
          </Link>
        </div>
      </div>
    </footer>
  );
}
