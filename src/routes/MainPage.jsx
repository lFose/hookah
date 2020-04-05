import React from 'react';

import NavMenu from 'modules/NavMenu';
import PreviewSection from 'modules/PreviewSection';
import ServicesSection from 'modules/ServicesSection';
import AboutSection from 'modules/AboutSection';
import ProductSection from 'modules/ProductSection';
import SliderSection from 'modules/SliderSection';
import FaqSection from 'modules/FaqSection';
import ContactSection from 'modules/ContactSection';
import FormSection from 'modules/FormSection';
import FooterSection from 'modules/FooterSection';

export default () => {
    return <>
        <NavMenu />
        <PreviewSection />
        <ServicesSection />
        <AboutSection />
        <ProductSection />
        <SliderSection />
        <FaqSection />
        <ContactSection />
        <FormSection />
        <FooterSection />
    </>
}