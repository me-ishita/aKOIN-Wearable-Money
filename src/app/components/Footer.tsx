import { motion } from "motion/react";
import { useTheme } from "next-themes";

import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  X,
} from "lucide-react";
import { useNavigate } from "react-router";

import aKoinBrand from '../../assets/akoin.png';
import akoinLogo from '../../assets/akoin-logo.png';
import logoVideo from "../../assets/ashok-chakra.webm";

export function Footer() {

  const { theme, setTheme } = useTheme();
  const navigate = useNavigate();

  const [openModal, setOpenModal] = useState<
    "terms" | "privacy" | null
  >(null);

  const contactMethods = [
    {
      icon: Mail,
      title: "Email Us",
      info: "info@akoin.in",
    },
    {
      icon: Phone,
      title: "Call Us",
      info: "+44 7966 623524",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      info: "London",
    },
  ];

  const termsContent = `

Welcome to aKoin. By accessing or using our website, mobile application, wearable devices, and related services ("Services"), you agree to be bound by these Terms of Use.

1. Acceptance of Terms

By using aKoin Services, you acknowledge that you have read, understood, and agreed to these Terms. If you do not agree, please discontinue use of our Services.

2. About aKoin

aKoin provides wearable-enabled payment solutions, including smart rings, keychains, bracelets, mobile applications, wallet management features, and related financial technology services.

The availability of certain services may vary depending on region, regulations, partnerships, and product offerings.

3. User Eligibility

To use aKoin Services, you must:

Be at least 18 years of age or have parental/guardian consent.
Provide accurate registration information.
Comply with all applicable laws and regulations.
4. Account Responsibilities

You are responsible for:

Maintaining the confidentiality of your account credentials.
Ensuring all information provided is accurate and up to date.
Any activity occurring under your account.

You must notify us immediately of any unauthorized access or suspected security breach.

5. Wallets and Wearables

aKoin may provide:

Master Wallets
Sub-Wallets
Wearable-linked payment devices
Budget and spending management tools

Users are responsible for managing balances, spending limits, and wearable assignments.

6. Acceptable Use

You agree not to:

Use the Services for unlawful activities.
Attempt to interfere with system security.
Reverse engineer or copy proprietary technology.
Misuse payment systems or wearable devices.
Access accounts belonging to others.
7. Intellectual Property

All content, trademarks, logos, software, designs, branding, and technology associated with aKoin remain the property of aKoin and its licensors.

No rights are granted except those explicitly stated in these Terms.

8. Service Availability

We strive to maintain uninterrupted Services but do not guarantee:

Continuous availability
Error-free operation
Compatibility with all devices

Services may be modified, suspended, or discontinued at any time.

9. Limitation of Liability

To the maximum extent permitted by law, aKoin shall not be liable for:

Indirect or consequential damages
Loss of profits or business opportunities
Data loss
Service interruptions

Use of the Services is at your own risk.

10. Third-Party Services

Our Services may integrate with third-party providers, payment networks, merchants, or technology partners.

aKoin is not responsible for the practices, content, or services provided by third parties.

11. Termination

We reserve the right to suspend or terminate access to the Services if these Terms are violated or if required by law.

12. Changes to Terms

We may update these Terms from time to time. Continued use of the Services after updates constitutes acceptance of the revised Terms.
`;

  const privacyContent = `
At aKoin, protecting your privacy is a priority. This Privacy Policy explains how we collect, use, store, and protect your information.

1. Information We Collect
Personal Information

We may collect:

Name
Email address
Phone number
Account credentials
Profile information
Financial Information

Depending on available services, we may collect:

Wallet balances
Transaction history
Payment activity
Linked wearable information
Technical Information

We may automatically collect:

Device information
Browser type
IP address
Operating system
Usage analytics
2. How We Use Your Information

We use information to:

Provide and improve Services
Manage wearable-linked wallets
Process transactions
Prevent fraud and unauthorized activity
Provide customer support
Send important service updates
Improve user experience
3. Wallet and Transaction Data

Transaction information may be stored to:

Maintain wallet functionality
Display payment history
Enable spending analytics
Detect suspicious activity
Comply with legal obligations
4. Information Sharing

We do not sell personal information.

We may share information with:

Payment partners
Service providers
Regulatory authorities when legally required
Fraud prevention and security partners

All sharing is limited to what is necessary to operate the Services.

5. Data Security

We implement industry-standard security measures including:

Encryption
Access controls
Secure authentication
Fraud monitoring systems

However, no method of transmission or storage can be guaranteed 100% secure.

6. Wearable Device Information

aKoin wearables may be linked to wallet accounts for payment and access management purposes.

Wearable identifiers may be processed solely to enable authorized functionality and security features.

7. Cookies and Analytics

We may use cookies and similar technologies to:

Improve website performance
Analyze usage patterns
Enhance user experience

Users may adjust browser settings to manage cookie preferences.

8. Your Rights

Depending on your jurisdiction, you may have the right to:

Access your information
Correct inaccurate data
Delete personal information
Withdraw consent where applicable
Request a copy of stored data

Requests may be submitted through our support channels.

9. Data Retention

We retain information only as long as necessary to:

Provide Services
Maintain legal compliance
Resolve disputes
Protect platform security
10. Children's Privacy

aKoin Services are not intended for children under 13 years of age without parental supervision and consent.

11. International Users

Your information may be processed and stored in jurisdictions where aKoin or its service providers operate.

12. Changes to this Privacy Policy

We may periodically update this Privacy Policy. Changes will be posted on this page with an updated revision date.
`;

  return (

    <footer className="bg-muted/30 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-start min-w-[320px]">

            {/* ROTATING LOGO */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="
      relative
      w-14 h-14 md:w-16 md:h-16
      flex items-center justify-center
      rounded-full
      mb-5
    "
            >
              <video
                autoPlay
                muted
                loop
                playsInline
                className={`
        w-full h-full
        object-cover
        scale-[1.45]
        ${theme === "dark" ? "mix-blend-screen" : ""}
      `}
              >
                <source src={logoVideo} type="video/mp4" />
              </video>
            </motion.div>

            {/* TEXT */}
            <p className="text-sm text-muted-foreground lg:whitespace-nowrap">
              The future of wearable payments. Secure, seamless, and smart.
            </p>

          </div>

          {/* RIGHT */}
          <div className="flex flex-row items-center justify-end gap-12">

            {contactMethods.map((item) => (
              <div
                key={item.title}
                className="flex items-center gap-3 whitespace-nowrap"
              >
                <item.icon className="w-5 h-5 text-yellow-400" />

                <div>
                  <p className="text-xs text-muted-foreground">
                    {item.title}
                  </p>

                  <p className="text-sm font-medium">
                    {item.info}
                  </p>
                </div>
              </div>
            ))}

          </div>

        </div>
        {/* DIVIDER */}
        <div className="mt-4 border-t border-border pt-8" />

        {/* BOTTOM */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6">

          <p className="text-sm text-muted-foreground">
            © 2026 aKoin. All rights reserved.
          </p>

          <div className="flex flex-wrap justify-center gap-8">

            <button
              onClick={() => navigate("/about")}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              About Us
            </button>

            <button
              onClick={() => setOpenModal("terms")}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Terms of Use
            </button>

            <button
              onClick={() => setOpenModal("privacy")}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Privacy Policy
            </button>

          </div>

        </div>
      </div>

      {/* MODAL */}

      {openModal && (
        <div className="fixed inset-0 z-[9999] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-background border border-border rounded-3xl max-w-4xl w-full max-h-[85vh] overflow-hidden shadow-2xl">

            {/* HEADER */}
            <div className="flex items-center justify-between p-6 border-b border-border">
              <h2 className="text-2xl font-bold">
                {openModal === "terms"
                  ? "Terms of Use"
                  : "Privacy Policy"}
              </h2>

              <button
                onClick={() => setOpenModal(null)}
                className="p-2 rounded-full hover:bg-muted"
              >
                <X size={22} />
              </button>
            </div>

            {/* CONTENT */}
            <div className="p-6 overflow-y-auto max-h-[70vh]">
              <pre className="whitespace-pre-wrap text-sm leading-7 text-muted-foreground font-sans">
                {openModal === "terms"
                  ? termsContent
                  : privacyContent}
              </pre>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}

