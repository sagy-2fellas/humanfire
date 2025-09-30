import Layout from "./Layout.jsx";

import Home from "./Home";

import BookDemo from "./BookDemo";

import Services from "./Services";

import About from "./About";

import HumanAssist from "./HumanAssist";

import HumanDesign from "./HumanDesign";

import HumanCulture from "./HumanCulture";

import HumanInsight from "./HumanInsight";

import { BrowserRouter as Router, Route, Routes, useLocation, Navigate } from 'react-router-dom';

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
                
                
                {/* canonical, normalized lowercase routes */}
                <Route path="/home" element={<Home />} />
                
                <Route path="/bookdemo" element={<BookDemo />} />
                
                <Route path="/services" element={<Services />} />
                
                <Route path="/about" element={<About />} />
                
                <Route path="/humanassist" element={<HumanAssist />} />
                
                <Route path="/humandesign" element={<HumanDesign />} />
                
                <Route path="/humanculture" element={<HumanCulture />} />
                
                <Route path="/humaninsight" element={<HumanInsight />} />

                {/* redirects from legacy capitalized paths */}
                <Route path="/Home" element={<Navigate to="/home" replace />} />
                <Route path="/BookDemo" element={<Navigate to="/bookdemo" replace />} />
                <Route path="/Services" element={<Navigate to="/services" replace />} />
                <Route path="/About" element={<Navigate to="/about" replace />} />
                <Route path="/HumanAssist" element={<Navigate to="/humanassist" replace />} />
                <Route path="/HumanDesign" element={<Navigate to="/humandesign" replace />} />
                <Route path="/HumanCulture" element={<Navigate to="/humanculture" replace />} />
                <Route path="/HumanInsight" element={<Navigate to="/humaninsight" replace />} />
                <Route path="*" element={<Navigate to="/home" replace />} />
                
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