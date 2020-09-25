import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
import CodeBlock from '../../node_modules/@docusaurus/theme-classic/lib/theme/CodeBlock';

function Feature({ imageUrl, index, title, children }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature, [
      styles.feature__0,
      styles.feature__1,
      styles.feature__2
    ][index])}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.icon} src={imgUrl} width="64" height="64" />
        </div>
      )}
      <h3>{title}</h3>
      { children}
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      description="A library for rapidly building cross-platform apps in Rust 🦀.">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <div className="row">
            <div className={clsx("col col--6", styles.hero_content)}>
              <h1 className="hero__title">
                {siteConfig.title}
                <img src="/img/emoji-polyhorn.png" width="48" height="48" />
                <span>Preview</span>
              </h1>
              <p className="hero__subtitle">{siteConfig.tagline}</p>
              <div className={styles.buttons}>
                <Link
                  className={clsx(
                    'button button--outline button--secondary button--lg',
                    styles.getStarted,
                  )}
                  to={useBaseUrl('docs/')}>
                  Get Started
                </Link>
              </div>
            </div>
            <div className="col col--6">
              <div className={styles.devices}>
                <div className={styles.column}>
                  <div className={styles.device} />
                  <div className={styles.device} />
                  <div className={styles.device} />
                  <div className={styles.device} />
                  <div className={styles.device} />
                  <div className={styles.device} />
                </div>
                <div className={styles.column}>
                  <div className={styles.device} />
                  <div className={styles.device} />
                  <div className={styles.device} />
                  <div className={styles.device} />
                </div>
                <div className={styles.column}>
                  <div className={styles.device} />
                  <div className={styles.device} />
                  <div className={styles.device} />
                  <div className={styles.device} />
                </div>
              </div>
            </div>
            <div className={styles.hero_backdrop} />
          </div>
          <div className={styles.hero_skew_safe_area} />
          <div className={clsx(styles.hero_skew, styles.hero_skew__south)} />
        </div>
      </header>
      <main>
        <section className={styles.features}>
          <div className="container">
            <div className="row">
              <Feature index={0} imageUrl="/img/emoji-hammer-and-wrench.png" title="Write Once, Run Everywhere">
                <p>
                  Use Polyhorn to write apps that run on every supported
                  platform from a single codebase without compromising quality.
                </p>
              </Feature>
              <Feature index={1} imageUrl="/img/emoji-fire.png" title="Blazing Fast">
                <p>
                  Polyhorn apps are really native, not just "Native". They
                  even outperform Swift apps with faster renders, lower energy
                  consumption and smaller binaries.
                </p>
              </Feature>
              <Feature index={2} imageUrl="/img/emoji-crab.png" title="Powered by Rust">
                <p>
                  If it compiles, it works. Memory safety is guaranteed by
                  the Rust compiler, so you never get those hard-to-debug errors
                  caused by race conditions.
                </p>
              </Feature>
            </div>
          </div>
        </section>

        <section className={styles.taxi_banner}>
          <div className="container">
            <div className={clsx(styles.hero_skew, styles.hero_skew__north)} />
            <div className={styles.hero_skew_safe_area} />

            <div className="row">
              <div className={clsx('col col--5')}>
                <h2>Taxi 🚕 <span>Navigation</span></h2>
                <p>
                  Easy-to-use, compile-time checked, static-typed navigation
                  for your apps.
                </p>
                <p>
                  Built-in stack, tab and modal navigators that feel just like
                  the real thing on all supported platforms, yet are fully
                  customizable and lightning fast.
                </p>
                <p>
                  <Link to="/plugins/taxi/">
                    Read More
                    <img src="/img/link.png" width="8" height="12" />
                  </Link>
                </p>
              </div>
              <div className={clsx('col col--7')}>
                <p className={styles.code}>
                  <CodeBlock className="rust">
                    {
                      `#[derive(Routes)]
pub enum Routes {
    #[tab(icon = "frontpage")]
    Welcome(WelcomeScreen),

    #[tab(icon = "settings")]
    Settings(SettingsScreen),
}

impl Component for App {
    fn render(&self, _manager: &mut Manager) -> Element {
        poly!(<tab::Navigator::<Routes> ... />)
    }
}`}
                  </CodeBlock>
                </p>
              </div>
            </div>

            <div className={styles.hero_skew_safe_area} />
            <div className={clsx(styles.hero_skew, styles.hero_skew__south)} />
          </div>
        </section>

        <section className={styles.features}>
          <div className="container">
            <div className="row">
              <Feature index={0} imageUrl="/img/emoji-earth-globe-europe-africa.png" title="Protect our Planet">
                <p>
                  Apps written in Rust can be up to 40x less energy
                  consuming than apps written in TypeScript<sup>1</sup>.
                </p>
              </Feature>
              <Feature index={1} imageUrl="/img/emoji-battery.png" title="Batteries Included">
                <p>
                  Polyhorn comes with (almost) all of the features you already
                  know from React: state, references, context, effects and much
                  more.
                </p>
              </Feature>
              <Feature index={2} imageUrl="/img/emoji-mechanical-arm.png" title="Fully Automated">
                <p>
                  You don't need to open Xcode once. We take care of compiling
                  high-resolution icons, code signing, localization and more. And
                  Polyhorn comes with a <em>No Migration Guarantee™</em>:
                  effortless upgrades.
                </p>
              </Feature>
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <div className="row">
              <div className="col col--12" style={{
                textAlign: "center",
                marginBottom: 40,
                opacity: .5
              }}>
                <sup>1</sup> According to <em>Energy Efficiency across Programming Languages</em>. <a href="https://greenlab.di.uminho.pt/wp-content/uploads/2017/10/sleFinal.pdf" target="blank">View paper</a>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.yoyo_banner}>
          <div className="container">
            <div className={clsx(styles.hero_skew, styles.hero_skew__north)} />
            <div className={styles.hero_skew_safe_area} />

            <div className="row">
              <div className={clsx('col col--7')}>
                <p className={styles.code}>
                  <CodeBlock className="rust">
                    {
                      `yoyo!(States, {
    :initial {
      opacity: 0;

      // Only animate from \`:press\` to \`:initial\`,
      // not vice-versa.
      &:from(:press) {
        transition_opacity: ease_in_out(0.4);
      }
    }

    :press {
      opacity: 1;
    }
});

impl Component for TouchableOpacity {
    fn render(&self, _manager: &mut Manager) -> Element {
        poly!(<View::<States> ... />)
    }
}`}
                  </CodeBlock>
                </p>
              </div>
              <div className={clsx('col col--5')}>
                <h2>Yoyo 🪀 <span>Animation</span></h2>
                <p>
                  Intuitive, zero-cost, physics-based, continuous animations
                  for your apps.
                </p>
                <p>
                  Built-in closed-form inertia, springs and bezier curves that are
                  pre-computed on a background thread and handed off to the
                  platform's native display compositor.
                </p>
                <p>
                  <Link to="/plugins/yoyo/">
                    Read More
                    <img src="/img/link.png" width="8" height="12" />
                  </Link>
                </p>
              </div>
            </div>

            <div className={styles.hero_skew_safe_area} />
            <div className={clsx(styles.hero_skew, styles.hero_skew__south)} />
          </div>
        </section>
        <section className={styles.features}>
          <div className="container">
            <div className="row">
              <Feature index={0} title="Flourishing Ecosystem" imageUrl="/img/emoji-package.png">
                <p>
                  Use tens of thousands of existing Rust packages in your
                  Polyhorn app. Or even better: create your own and share
                  your experience with the community!
                </p>
              </Feature>
              <Feature index={1} title="Under Construction" imageUrl="/img/emoji-construction.png">
                <p>
                  Polyhorn is still in preview, which means that there
                  will probably be some breaking changes and missing features
                  before its official launch (sorry for this).
                </p>
              </Feature>
              <Feature index={2} title="Get Involved" imageUrl="/img/emoji-speech-balloon.png">
                <p>
                  Having said that, we'd love to welcome you on board.
                  This is a unique opportunity to help steer a brand new
                  framework and community to open water. We discuss ideas at
                  our <a href="https://github.com/polyhorn/polyhorn"
                    target="blank">Github</a> and <a
                      href="https://spectrum.chat/polyhorn"
                      target="blank">Spectrum</a>.
                </p>
              </Feature>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default Home;
