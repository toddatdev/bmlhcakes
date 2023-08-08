import React from "react";
import Layout from "../components/Layout";
import ContactUs from "../components/contact/Contact";
import NewsLetter from "../components/NewsLetter";

const Contact = () => {
    return (
        <Layout>
            <ContactUs/>
            <NewsLetter/>
        </Layout>
    )
}

export default Contact
export const Head = () => <title>BMLHCakes | Contact</title>
