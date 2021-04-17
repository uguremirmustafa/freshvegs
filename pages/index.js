import Categories from '@components/Categories';
import Hero from '@components/Hero';
import Process from '@components/Process';

export default function Home() {
  return (
    <div>
      <Hero />
      <div className="main">
        <Process />
        <Categories />
      </div>
    </div>
  );
}
