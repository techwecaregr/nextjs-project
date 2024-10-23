import Link from 'next/link';
import { Button } from '@/components/ui/button';
import HeroCarousel from './HeroCarousel';

function Hero() {
  return (
    <section className='grid grid-cols-1 lg:grid-cols-2 gap-24 items-center'>
      <div>
        <h1 className='max-w-2xl font-bold text-4xl tracking-tight sm:text-6xl'>
        Tech<span className='text-[#5dedf8]'>WeCare</span> <br/>
        </h1>
        <br/>
        <h2 className='max-w-xl font-bold text-2xl tracking-tight sm:text-4xl'>Η φροντίδα που χρειάζονται <br/> οι συσκευές σας!</h2>
        <p className='mt-8 max-w-xl text-lg leading-8 text-muted-foreground'>
        Ό,τι κι αν χρειάζεται η συσκευή σας, το αναλαμβάνουμε με φροντίδα και συνέπεια. Από την επισκευή μιας σπασμένης οθόνης μέχρι την ανάκτηση πολύτιμων δεδομένων, σας προσφέρουμε υπηρεσίες με πάθος, ακρίβεια και ταχύτητα. <br/><br/>Εξυπηρετούμε κινητά, υπολογιστές, laptops και tablets με επαγγελματισμό και ανθρώπινη προσέγγιση, γιατί η τεχνολογία σας αξίζει την απόλυτη φροντίδα!
        </p>
        <Button asChild size='lg' className='mt-10'>
          <Link href='/repairs'>Repairs</Link>
        </Button>
      </div>
      <HeroCarousel />
    </section>
  );
}
export default Hero;