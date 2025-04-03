import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowUp } from 'react-icons/fa';

const Terms = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black py-20">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4"
      >
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-8 text-4xl font-bold text-white">Terms of Use</h1>
          <div className="rounded-xl bg-gray-900/50 p-8 text-gray-300 shadow-xl backdrop-blur-sm">
            <div className="prose prose-lg prose-invert max-w-none">
              {/* Version */}
              <div className="mb-8">
                <p className="text-lg font-semibold text-[#FFD700]">Version 1.0</p>
                <p className="mt-4">
                  The Wonders.travel website located at www.wonders.travel is a copyrighted work belonging to Grupo Mendra SCA (www.grupomendra.com).
                  These Terms of Use described the legally binding terms and conditions that oversee your use of the Site. 
                  By logging into the site, you are being compliant with these terms and you represent that you have the authority 
                  and capacity to enter into these Terms. If you disagree with all of the provisions of these terms, do not log 
                  into and/or use this site.
                </p>
              </div>

              {/* Table of Contents */}
              <div className="mb-8 rounded-lg bg-gray-800/50 p-6">
                <h2 className="mb-4 text-xl font-semibold text-[#FFD700]">Table of Contents</h2>
                <ul className="space-y-2">
                  <li><a href="#access" className="text-gray-300 hover:text-[#FFD700]">1. Access to the Site</a></li>
                  <li><a href="#user-content" className="text-gray-300 hover:text-[#FFD700]">2. User Content</a></li>
                  <li><a href="#acceptable-use" className="text-gray-300 hover:text-[#FFD700]">3. Acceptable Use Policy</a></li>
                  <li><a href="#third-party" className="text-gray-300 hover:text-[#FFD700]">4. Third-Party Links & Other Users</a></li>
                  <li><a href="#cookies" className="text-gray-300 hover:text-[#FFD700]">5. Cookies and Web Beacons</a></li>
                  <li><a href="#disclaimers" className="text-gray-300 hover:text-[#FFD700]">6. Disclaimers</a></li>
                  <li><a href="#liability" className="text-gray-300 hover:text-[#FFD700]">7. Limitation on Liability</a></li>
                  <li><a href="#termination" className="text-gray-300 hover:text-[#FFD700]">8. Term and Termination</a></li>
                  <li><a href="#copyright" className="text-gray-300 hover:text-[#FFD700]">9. Copyright Policy</a></li>
                  <li><a href="#general" className="text-gray-300 hover:text-[#FFD700]">10. General</a></li>
                </ul>
              </div>

              {/* Content Sections */}
              <section id="access" className="mb-8">
                <h2 className="mb-4 text-2xl font-bold text-[#FFD700]">1. Access to the Site</h2>
                <h3 className="mb-3 text-xl font-semibold text-white">Subject to these Terms</h3>
                <p className="mb-4">
                  The Company grants you a non-transferable, non-exclusive, revocable, limited license to access 
                  the Site solely for your own personal, noncommercial use.
                </p>
                
                <h3 className="mb-3 text-xl font-semibold text-white">Certain Restrictions</h3>
                <p className="mb-4">
                  The rights approved to you in these Terms are subject to the following restrictions: 
                  (a) you shall not sell, rent, lease, transfer, assign, distribute, host, or otherwise commercially 
                  exploit the Site; (b) you shall not change, make derivative works of, disassemble, reverse compile 
                  or reverse engineer any part of the Site; (c) you shall not access the Site in order to build a 
                  similar or competitive website; and (d) except as expressly stated herein, no part of the Site may 
                  be copied, reproduced, distributed, republished, downloaded, displayed, posted or transmitted in any 
                  form or by any means unless otherwise indicated, any future release, update, or other addition to 
                  functionality of the Site shall be subject to these Terms. All copyright and other proprietary notices 
                  on the Site must be retained on all copies thereof.
                </p>
              </section>

              {/* Additional sections... */}
              <section id="user-content" className="mb-8">
                <h2 className="mb-4 text-2xl font-bold text-[#FFD700]">2. User Content</h2>
                <p className="mb-4">
                  "User Content" means any and all information and content that a user submits to the Site. You are 
                  exclusively responsible for your User Content. You bear all risks associated with the use of your 
                  User Content. You hereby certify that your User Content does not violate our Acceptable Use Policy.
                </p>
                {/* Add more user content terms... */}
              </section>

              {/* Continue with other sections... */}
              <section id="acceptable-use" className="mb-8">
                <h2 className="mb-4 text-2xl font-bold text-[#FFD700]">3. Acceptable Use Policy</h2>
                <p className="mb-4">
                  The following terms constitute our "Acceptable Use Policy": You agree not to use the Site to collect, 
                  upload, transmit, display, or distribute any User Content (i) that violates any third-party right or 
                  any intellectual property or proprietary right; (ii) that is unlawful, harassing, abusive, tortious, 
                  threatening, harmful, invasive of another's privacy, vulgar, defamatory, false, intentionally misleading, 
                  trade libellous, pornographic, obscene, patently offensive, promotes racism, bigotry, hatred, or physical 
                  harm of any kind against any group or individual; (iii) that is harmful to minors in any way; or (iv) that 
                  is in violation of any law, regulation, or obligations or restrictions imposed by any third party.
                </p>
              </section>

              <section id="third-party" className="mb-8">
                <h2 className="mb-4 text-2xl font-bold text-[#FFD700]">4. Third-Party Links & Other Users</h2>
                <h3 className="mb-3 text-xl font-semibold text-white">Third-Party Links</h3>
                <p className="mb-4">
                  The Site may contain links to third-party websites and services. Such Third-Party Links are not under 
                  the control of the Company, and ready AG is not responsible for any Third-Party Links. The Company 
                  provides access to these Third-Party Links only as a convenience to you and does not review, approve, 
                  monitor, endorse, warrant, or make any representations with respect to Third-Party Links.
                </p>
              </section>

              <section id="cookies" className="mb-8">
                <h2 className="mb-4 text-2xl font-bold text-[#FFD700]">5. Cookies and Web Beacons</h2>
                <p className="mb-4">
                  Like any other website, Wonders.travel uses 'cookies'. These cookies are used to store information 
                  including visitors' preferences, and the pages on the website that the visitor accessed or visited. 
                  The information is used to optimize the users' experience by customizing our web page content based 
                  on visitors' browser type and/or other information.
                </p>
              </section>

              <section id="disclaimers" className="mb-8">
                <h2 className="mb-4 text-2xl font-bold text-[#FFD700]">6. Disclaimers</h2>
                <p className="mb-4">
                  The site is provided on an "as-is" and "as-available" basis, and the company and our suppliers 
                  expressly disclaim any and all warranties and conditions of any kind, whether express, implied, or 
                  statutory, including all warranties or conditions of merchantability, fitness for a particular purpose, 
                  title, quiet enjoyment, accuracy, or non-infringement.
                </p>
              </section>

              <section id="liability" className="mb-8">
                <h2 className="mb-4 text-2xl font-bold text-[#FFD700]">7. Limitation on Liability</h2>
                <p className="mb-4">
                  To the maximum extent permitted by law, in no event shall Company or our suppliers be liable to you 
                  or any third party for any lost profits, lost data, costs of procurement of substitute products, or 
                  any indirect, consequential, exemplary, incidental, special, or punitive damages arising from or 
                  relating to these terms or your use of, or incapability to use the site.
                </p>
              </section>

              <section id="termination" className="mb-8">
                <h2 className="mb-4 text-2xl font-bold text-[#FFD700]">8. Term and Termination</h2>
                <p className="mb-4">
                  Subject to this Section, these Terms will remain in full force and effect while you use the Site. 
                  We may suspend or terminate your rights to use the Site at any time for any reason at our sole 
                  discretion, including for any use of the Site in violation of these Terms.
                </p>
              </section>

              <section id="copyright" className="mb-8">
                <h2 className="mb-4 text-2xl font-bold text-[#FFD700]">9. Copyright Policy</h2>
                <p className="mb-4">
                  The company respects the intellectual property of others and asks that users of our Site do the same. 
                  In connection with our Site, we have adopted and implemented a policy respecting copyright law that 
                  provides for the removal of any infringing materials and for the termination of users of our online 
                  Site who are repeated infringers of intellectual property rights, including copyrights.
                </p>
              </section>

              <section id="general" className="mb-8">
                <h2 className="mb-4 text-2xl font-bold text-[#FFD700]">10. General</h2>
                <p className="mb-4">
                  These Terms are subject to occasional revision, and if we make any substantial changes, we may notify 
                  you by sending you an e-mail to the last e-mail address you provided to us and/or by prominently 
                  posting notice of the changes on our Site.
                </p>
                <h3 className="mb-3 text-xl font-semibold text-white">Entire Terms</h3>
                <p className="mb-4">
                  These Terms constitute the entire agreement between you and us regarding the use of the Site. Our 
                  failure to exercise or enforce any right or provision of these Terms shall not operate as a waiver 
                  of such right or provision.
                </p>
              </section>

              {/* Contact Information */}
              <div className="mt-8 rounded-lg bg-gray-800/50 p-6">
                <h2 className="mb-4 text-xl font-semibold text-[#FFD700]">Contact Information</h2>
                <p className="mb-2">Address: Pl. Cruz, 9, 29140, Churriana, Málaga, Spain</p>
                <p>Email: <a href="mailto:info@wonders.travel" className="text-[#FFD700] hover:underline">
                  info@wonders.travel
                </a></p>
                <p className="mt-4 text-sm text-gray-400">
                  Last updated: {new Date().toLocaleDateString()}
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 rounded-full bg-[#FFD700] p-4 text-gray-900 shadow-lg transition-all hover:bg-[#FFD700]/90 hover:shadow-xl"
        aria-label="Back to top"
      >
        <FaArrowUp className="h-6 w-6" />
      </button>
    </div>
  );
};

export default Terms; 