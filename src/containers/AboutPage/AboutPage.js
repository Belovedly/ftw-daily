import React from 'react';
import config from '../../config';
import { twitterPageURL } from '../../util/urlHelpers';
import { StaticPage, TopbarContainer } from '../../containers';
import {
  LayoutSingleColumn,
  LayoutWrapperTopbar,
  LayoutWrapperMain,
  LayoutWrapperFooter,
  Footer,
  ExternalLink,
} from '../../components';

import css from './AboutPage.module.css';
import image from './beloved-about-01.png';

const AboutPage = () => {
  const { siteTwitterHandle, siteFacebookPage } = config;
  const siteTwitterPage = twitterPageURL(siteTwitterHandle);

  // prettier-ignore
  return (
    <StaticPage
      title="About Us"
      schema={{
        '@context': 'http://schema.org',
        '@type': 'AboutPage',
        description: 'About Beloved',
        name: 'About page',
      }}
    >
      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
          <TopbarContainer />
        </LayoutWrapperTopbar>

        <LayoutWrapperMain className={css.staticPageWrapper}>
          <h1 className={css.pageTitle}>Experience the unique Beloved family support.</h1>
          <img className={css.coverImage} src={image} alt="Grow altogether" />

          <div className={css.contentWrapper}>
            <div className={css.contentSide}>
              <p>Did you know that Finland has 3.2 million saunas - almost one sauna per person!</p>
            </div>

            <div className={css.contentMain}>
              <h2>
                Most of the Finnish saunas are located at the homes of individuals - indeed, most
                people in Finland live in an apartment with sauna in it. In addition, lots of people
                have lakeside summer cottages, which also typically come with a separate sauna
                building near the waterfront.
              </h2>

              <p>
                To truly experience a Finnish sauna, you need to look beyond the public saunas, and
                instead visit a real home or cottage sauna. Saunatime makes this possible for
                everyone. All our saunas are owned by individuals willing to let tourists and other
                curious visitors to enter their sacred spaces.
              </p>

              <h3 className={css.subtitle}>Are you a sauna owner?</h3>

              <p>
                Saunatime offers you a good way to earn some extra cash! If you're not using your
                sauna every evening, why not rent it to other people while it's free. And even if
                you are using your sauna every evening (we understand, it's so good), why not invite
                other people to join you when the sauna is already warm! A shared sauna experience
                is often a more fulfilling one.
              </p>

              <p>
                You can also checkout our{' '}
                <ExternalLink href={siteInstagramPage}>Instagram</ExternalLink> and{' '}
                <ExternalLink href={siteTwitterPage}>Twitter</ExternalLink>.
              </p>
            </div>
          </div>
        </LayoutWrapperMain>

        <LayoutWrapperFooter>
          <Footer />
        </LayoutWrapperFooter>
      </LayoutSingleColumn>
    </StaticPage>
  );
};

export default AboutPage;
