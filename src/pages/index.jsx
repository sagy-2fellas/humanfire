import Layout from "./Layout.jsx";

import Home from "./Home";

import BookDemo from "./BookDemo";

import Services from "./Services";

import About from "./About";

import HumanAssist from "./HumanAssist";

import HumanDesign from "./HumanDesign";

import HumanCulture from "./HumanCulture";

import HumanInsight from "./HumanInsight";

import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

const PAGES = {
    
    Home: Home,
    
    BookDemo: BookDemo,
    
    Services: Services,
    
    About: About,
    
    HumanAssist: HumanAssist,
    
    HumanDesign: HumanDesign,
    
    HumanCulture: HumanCulture,
    
    HumanInsight: HumanInsight,
    
}

function _getCurrentPage(url) {
    if (url.endsWith('/')) {
        url = url.slice(0, -1);
    }
    let urlLastPart = url.split('/').pop();
    if (urlLastPart.includes('?')) {
        urlLastPart = urlLastPart.split('?')[0];
    }

    const pageName = Object.keys(PAGES).find(page => page.toLowerCase() === urlLastPart.toLowerCase());
    return pageName || Object.keys(PAGES)[0];
}

// Create a wrapper component that uses useLocation inside the Router context
function PagesContent() {
    const location = useLocation();
    const currentPage = _getCurrentPage(location.pathname);
    
    return (
        <Layout currentPageName={currentPage}>
            <Routes>            
                
                    <Route path="/" element={<Home />} />
                
                
                <Route path="/Home" element={<Home />} />
                
                <Route path="/BookDemo" element={<BookDemo />} />
                
                <Route path="/Services" element={<Services />} />
                
                <Route path="/About" element={<About />} />
                
                <Route path="/HumanAssist" element={<HumanAssist />} />
                
                <Route path="/HumanDesign" element={<HumanDesign />} />
                
                <Route path="/HumanCulture" element={<HumanCulture />} />
                
                <Route path="/HumanInsight" element={<HumanInsight />} />
                
            </Routes>
        </Layout>
    );
}

export default function Pages() {
    return (
        <Router>
            <PagesContent />
        </Router>
    );
}