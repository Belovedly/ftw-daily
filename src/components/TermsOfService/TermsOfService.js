import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import css from './TermsOfService.module.css';

const TermsOfService = props => {
  const { rootClassName, className } = props;
  const classes = classNames(rootClassName || css.root, className);

  // prettier-ignore
  return (
    <div className={classes}>
      <p className={css.lastUpdated}>Last updated April 21st, 2022</p>

      <p>
        Hey hey 👋
      </p>

      <p>
        These are our Terms of Use which detail the agreement between you and Beloved for
        using the Beloved services.If you have any questions, please reach out to us on 
        support@joinbeloved.com.
      </p>

      <p>
        The use of this website and services on this website provided by Belovedly, Inc.
        (hereinafter referred to as "Company") are subject to the following Terms of Use 
        (hereinafter the "Agreement"), all parts and sub-parts of which are specifically
        incorporated by reference here. This Agreement shall govern the use of all pages
        on this website (hereinafter collectively referred to as "Website") and any services 
        provided by or on this Website ("Services").
      </p>

      <h2>1. Definitions</h2>
      <p>
        The parties referred to in this Agreement shall be defined as follows:
      </p>

      <p>
        a) Company, Us, We: The Company, as the creator, operator, and publisher of the 
        Website, makes the Website, and certain Services on it, available to users. 
        Belovedly, Inc., Company, Us, We, Our, Ours and other first-person pronouns will
        refer to the Company, as well as all employees and affiliates of the Company.
      </p>

      <p>
        b) You, the User, the Client: You, as the user of the Website, will be referred 
        to throughout this Agreement with second-person pronouns such as You, Your, Yours, 
        or as User or Client.
      </p>

      <p>
        c) Parties: Collectively, the parties to this Agreement (the Company and You) will 
        be referred to as Parties.
      </p>

      <h2>2. Assent & Acceptance</h2>
      <p>
        By using the Website, You warrant that You have read and reviewed this Agreement and 
        that You agree to be bound by it. If You do not agree to be bound by this Agreement, 
        please leave the Website immediately. The Company only agrees to provide use of this 
        Website and Services to You if You assent to this Agreement.
      </p>

      <h2>3. Age Restriction</h2>
      <p>
        You must be at least 18 (eighteen) years of age to use this Website or any Services 
        contained herein. By using this Website, You represent and warrant that You are at 
        least 18 years of age and may legally agree to this Agreement. The Company assumes 
        no responsibility or liability for any misrepresentation of Your age.
      </p>

      <h2>4. License to Use Website</h2>
      <p>
        The Company may provide You with certain information as a result of Your use of the 
        Website or Services. Such information may include, but is not limited to, documentation, 
        data, or information developed by the Company, and other materials which may assist 
        in Your use of the Website or Services ("Company Materials"). Subject to this Agreement, 
        the Company grants You a non-exclusive, limited, non-transferable and revocable license 
        to use the Company Materials solely in connection with Your use of the Website and 
        Services. The Company Materials may not be used for any other purpose, and this license 
        terminates upon Your cessation of use of the Website or Services or at the termination 
        of this Agreement.
      </p>

      <h2>5. Intellectual Property</h2>
      <p>
        You agree that the Website and all Services provided by the Company are the property of 
        the Company, including all copyrights, trademarks, trade secrets, patents, and other 
        intellectual property ("Company IP"). You agree that the Company owns all right, title 
        and interest in and to the Company IP and that You will not use the Company IP for any 
        unlawful or infringing purpose. You agree not to reproduce or distribute the Company IP 
        in any way, including electronically or via registration of any new trademarks, trade 
        names, service marks or Uniform Resource Locators (URLs), without express written 
        permission from the Company.a) In order to make the Website and Services available to 
        You, You hereby grant the Company a royalty-free, non-exclusive, worldwide license to 
        copy, display, use, broadcast, transmit and make derivative works of any content You 
        publish, upload, or otherwise make available to the Website ("Your Content"). The Company 
        claims no further proprietary rights in Your Content.b) If You feel that any of Your 
        intellectual property rights have been infringed or otherwise violated by the posting of 
        information or media by another of Our users, please contact Us and let Us know.
      </p>

      <h2>6. User Obligations</h2>
      <p>
        As a user of the Website or Services, You may be asked to register with Us. When You do so, 
        You will choose a user identifier, which may be Your email address or another term, as well 
        as a password. You may also provide personal information, including, but not limited to, 
        Your name. You are responsible for ensuring the accuracy of this information. This identifying 
        information will enable You to use the Website and Services. You must not share such identifying 
        information with any third party, and if You discover that Your identifying information has been 
        compromised, You agree to notify Us immediately in writing. Email notification will suffice. 
        You are responsible for maintaining the safety and security of Your identifying information as 
        well as keeping Us apprised of any changes to Your identifying information. Providing false or 
        inaccurate information, or using the Website or Services to further fraud or unlawful activity 
        is grounds for immediate termination of this Agreement.
      </p>

      <h2>7. Acceptable Use</h2>
      <p>
        You agree not to use the Website or Services for any unlawful purpose or any purpose prohibited 
        under this clause. You agree not to use the Website or Services in any way that could damage the 
        Website, Services, or general business of the Company.

        a) You further agree not to use the Website or Services:
          I) To harass, abuse, or threaten others or otherwise violate any person's legal rights;
          II) To violate any intellectual property rights of the Company or any third party;
          III) To upload or otherwise disseminate any computer viruses or other software that may damage 
          the property of another;
          IV) To perpetrate any fraud;
          V) To engage in or create any unlawful gambling, sweepstakes, or pyramid scheme;
          VI) To publish or distribute any obscene or defamatory material;
          VII) To publish or distribute any material that incites violence, hate, or discrimination 
          towards any group;
          VIII) To unlawfully gather information about others.
      </p>

      <h2>8. Affiliate Marketing & Advertising</h2>
      <p>
        The Company, through the Website and Services, may engage in affiliate marketing whereby the Company 
        receives a commission on or percentage of the sale of goods or services on or through the Website. 
        The Company may also accept advertising and sponsorships from commercial businesses or receive other 
        forms of advertising compensation. This disclosure is intended to comply with the US Federal Trade 
        Commission Rules on marketing and advertising, as well as any other legal requirements which may apply.
      </p>

      <h2>9. Privacy Information</h2>
      <p>
        Through Your Use of the Website and Services, You may provide Us with certain information. By using 
        the Website or the Services, You authorize the Company to use Your information in the United States 
        and any other country where We may operate.

        a) Information We May Collect or Receive: When You register for an account, You provide Us with a 
        valid email address and may provide Us with additional information, such as Your name or billing 
        information. Depending on how You use Our Website or Services, We may also receive information 
        from external applications that You use to access Our Website, or We may receive information through 
        various web technologies, such as cookies, log files, clear gifs, web beacons or others.

        b) How We Use Information: We use the information gathered from You to ensure Your continued good 
        experience on Our website, including through email communication. We may also track certain aspects 
        of the passive information received to improve Our marketing and analytics, and for this, We may 
        work with third-party providers.

        c) How You Can Protect Your Information: If You would like to disable Our access to any passive 
        information We receive from the use of various technologies, You may choose to disable cookies in 
        Your web browser. Please be aware that the Company will still receive information about You that 
        You have provided, such as Your email address. If You choose to terminate Your account, the 
        Company will store information about You for the following number of days: 90. After that time, 
        it will be deleted.

      </p>


    </div>
  );
};

TermsOfService.defaultProps = {
  rootClassName: null,
  className: null,
};

const { string } = PropTypes;

TermsOfService.propTypes = {
  rootClassName: string,
  className: string,
};

export default TermsOfService;
