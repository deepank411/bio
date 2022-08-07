function FamilySection() {
	const details = [
		{
			title: 'Dadaji',
			details: 'Late Sh. Tikam Chand Ji Agarwal, Retd. Asst. Director, Mails, CPMG Office, Rajasthan, Jaipur',
		},
		{
			title: 'Dadiji',
			details: 'Smt. Kamla Agarwal, Housemaker',
		},
		{
			title: 'Father',
			details: 'Kamal Kishore Agarwal, IRS. Assistant Commissioner, CGST & Customs Posted at Palghar Mumbai Zone.',
		},
		{
			title: 'Mother',
			details: 'Neema Agarwal, Housemaker',
		},
		{
			title: 'Sister',
			details: 'Astha Agarwal, Pursuing BBA in Surat (Younger sister)',
		},
		{
			title: 'Tauji',
			details: 'Shri Chandra Bhan Agarwal, Retd. District Employment Officer, Govt. of Rajasthan. Settled in Ajmer.',
		},
		{
			title: 'Buaji',
			details: [
				"1. Smt. Suman Lata Agarwal, Retd. Teacher, Settled in Beawar",
				<br />,
				"2. Smt. Lata Goyal, Housemaker, Settled in Jaipur",
				<br />,
				"3. Smt. Mamta Agarwal, Housemaker, Settled in Surat",
			],
		},
		{
			title: 'Cousins',
			details: [
				"1. Rohit Agarwal, B.Tech. (Computer Science) from IIT Delhi, CTO, ElectricPe, Married to Antulika Goyal, B.Tech. working in Infosys, Gurgaon",
				<br />,
				"2. Rishi Agarwal, M.Tech. (Mathematics & Computing) from IIT Delhi, Product Manager, Slintel, Married to Arpita Agarwal, MCA. working in Accenture, Bangalore.",
			],
		},
		{
			title: 'Nanaji',
			details: 'Late Sh. B.M. Jain, Businessman',
		},
		{
			title: 'Mamaji',
			details: 'Sh. Arul Jain, Delhi, Businessman',
		},
		{
			title: 'Maasiji',
			details: 'Settled in Delhi',
		},
		{
			title: 'Parental House',
			details: 'House No. 5/514, Saraogi Mohalla, Beawar, Dist. Ajmer, Rajasthan',
		},
		{
			title: 'Address',
			details: '18, Neelam Society, Near Passport Office, Dumas Road, Surat, Gujarat',
		},
	]
	return (
		<div className="FamilySection">
			<section className="family-section" id="skills">
				<h2 className="uppercase center invert-color">
					My Family
				</h2>
				<div className="content custom-container">
					{details.map(x => <div className="row">
						<div className="col s12 m4 l3 frow title">
							<h6 className="h6">{x.title}</h6>
						</div>
						<div className="col s12 m8 l9 frow details">
							<h6 className="h6">{x.details}</h6>
						</div>
					</div>)}
				</div>
			</section>
		</div>
	)
}

export default FamilySection;
