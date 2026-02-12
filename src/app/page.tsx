import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Home() {
	return (
		<>
			<Header/>
        <main className="min-h-90 flex items-center justify-center bg-amber-200 rounded-lg">
          Ola Mundo!
        </main>
			<Footer	/>
		</>
	);
}
