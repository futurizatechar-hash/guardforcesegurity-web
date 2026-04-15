import React, { Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';

// Lazy loaded below-the-fold components
const ProblemSolution = lazy(() => import('./sections/ProblemSolution'));
const Authority = lazy(() => import('./sections/Authority'));
const SaasFeatures = lazy(() => import('./sections/SaasFeatures'));
const SuccessStories = lazy(() => import('./sections/SuccessStories'));
const LeadForm = lazy(() => import('./sections/LeadForm'));
const Footer = lazy(() => import('./components/Footer'));

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 overflow-x-hidden w-full">
      <Navbar />
      <main>
        <Hero />

        <Suspense fallback={<div className="h-40 flex items-center justify-center">Cargando...</div>}>
          <SaasFeatures />
        </Suspense>
        <Suspense fallback={<div className="h-40 flex items-center justify-center">Cargando...</div>}>
          <ProblemSolution />
        </Suspense>
        <Suspense fallback={<div className="h-40 flex items-center justify-center">Cargando...</div>}>
          <Authority />
        </Suspense>
        <Suspense fallback={<div className="h-40 flex items-center justify-center">Cargando...</div>}>
          <SuccessStories />
        </Suspense>
        <Suspense fallback={<div className="h-40 flex items-center justify-center">Cargando...</div>}>
          <LeadForm />
        </Suspense>
      </main>
      <Suspense fallback={<div className="h-40 bg-slate-900 border-t border-slate-800"></div>}>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
