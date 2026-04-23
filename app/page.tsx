import RapidFireGame from '@/components/game';

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary/30">
      <div className="container mx-auto py-12 px-4">
        <RapidFireGame />
      </div>
      
      {/* Footer / Info */}
      <footer className="mt-20 py-8 border-t border-border/40">
        <div className="container mx-auto px-4 text-center text-muted-foreground text-sm">
          <p>© 2026 Rapid Fire Speaking. Built for English learners.</p>
          <p className="mt-2">Best experienced in Chrome or Safari with a microphone.</p>
        </div>
      </footer>
    </main>
  );
}
