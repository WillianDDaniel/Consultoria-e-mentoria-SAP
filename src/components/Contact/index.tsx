export default function Contact() {
	return (
		<div className="flex gap-10">
			<div className="flex items-center gap-2">
				<img className="h-6"
					src="/email-lucas-lins.png"
					alt="Email Lucas Lins - Consultoria e Mentoria SAP"
        	title="Email Lucas Lins - Consultoria e Mentoria SAP" 
				/>

				<span className="font-bold text-xl">
					contato@lucas-lins.com
				</span>
			</div>
			
			<div className="flex items-center gap-2">
				<img className="h-6"
					src="/phone-lucas-lins.png"
					alt="Telefone de Lucas Lins Consultoria e Mentoria SAP"
					title="Telefone de Lucas Lins Consultoria e Mentoria SAP"
				/>

				<span className="font-bold text-xl">
					+55 11 99999-9999
				</span>
			</div>
			
		</div>
	);
}