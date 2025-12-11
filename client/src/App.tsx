import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import { BuilderComponent, builder, useIsPreviewing } from '@builder.io/react';
import { useEffect, useState } from 'react';
import './builder-registry';

function BuilderPage() {
  const [location] = useLocation();
  const isPreviewingInBuilder = useIsPreviewing();
  const [notFound, setNotFound] = useState(false);
  const [content, setContent] = useState<any>(null);

  useEffect(() => {
    async function fetchContent() {
      const content = await builder
        .get('page', {
          url: location,
        })
        .promise();

      setContent(content);
      setNotFound(!content);
    }
    fetchContent();
  }, [location]);

  if (notFound && !isPreviewingInBuilder) {
    return <NotFound />;
  }

  return <BuilderComponent model="page" content={content} />;
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/builder/*" component={BuilderPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
