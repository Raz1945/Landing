import { Suspense } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from '../i18n/i18n';

import { LanguageSwitcher } from "../components/LanguageSwitcher";
import { Navbar } from "../components/Navbar/Nav";
import { Wrapper } from "../components/others/wrapper"
import { Hero } from "../components/Hero/Hero";
import { Services } from "../components/Services/Services";
import { Projects } from "../components/Projects/Projects";
import { About } from "../components/About/About";
import "../styles/App.css"

export const App = () => {
  return (
    <I18nextProvider i18n={i18n}>
      <Suspense fallback={<div>Loading...</div>}>
        <LanguageSwitcher/>
        {/* <Navbar /> */}
        <Wrapper>
          <Hero route='hero' />

          {/* <Services route='services' /> */}
          {/* <Projects route='projects' /> */}
          {/* <About route='about_me' /> */}
        </Wrapper>
      </Suspense>
    </I18nextProvider>
  );
};