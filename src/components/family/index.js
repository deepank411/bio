function FamilySection() {
	const details = [
		{
			title: 'Parental House',
			details: 'House No. 5/514, Saraogi Mohalla, Beawar, Dist. Ajmer, Rajasthan',
		},
		{
			title: 'Dadji',
			details: 'Late Sh. Tikam Chand Agarwal (Retd. Asst. Director, Mails, CPMG Office, Rajasthan, Jaipur)',
		},
		{
			title: 'Dadiji',
			details: 'Smt. Kamla Agarwal (Housemaker)',
		},
		{
			title: 'Father',
			details: 'Kamal Kishore Agarwal, IRS. Assistant Commissioner, CGST & Customs Posted at Palghar Mumbai Zone.',
		},
		{
			title: 'Mother',
			details: 'Neema Agarwal, (Housemaker)',
		},
		{
			title: 'Younger Sister',
			details: 'Astha Agarwal, Pursuing  BBA at Surat',
		},
		{
			title: 'Uncle (Tauji)',
			details: 'Shri Chandra Bhan Agarwal, Retd. District Employment Officer, Govt. of Rajasthan. Settled at Ajmer.',
		},
		{
			title: 'Aunt (Bua)',
			details: ["1. Smt. Suman Lata Agarwal (Retd. Teacher),  Beawar, Married to Shri Om Prakash Agarwal Retd. Principal, Sr. Sec. School,", <br />, "2. Smt.Lata Goyal(House maker) Married to Sh.Mukesh Kumar Goyal, Retd.DET, BSNL, Jaipur.", <br />, "3. Smt.Mamta Agarwal(House maker) Married to Sh.Harish Agarwal, Businessman, Surat."],
		},
		{
			title: 'Cousins',
			details: ["1. Rohit Agarwal, B.Tech.(Computer Science) from IIT Delhi, Product Engineer, UDAAN, Hiveloop Technology Pvt, Ltd. Married to Antulika Goyal, B.Tech. working in Infosys, Gurgaon", <br />,"2. Rishi Agarwal, M.Tech.(Mathematics & Computing) from IIT Delhi, Married to Arpita Agarwal, MCA.working in Accenture, Bangalore."],
		},
		{
			title: 'Nanaji',
			details: 'Late Sh. B.M. Jain (Businessman)',
		},
		{
			title: 'Mamaji',
			details: 'Sh. Arul Jain, Delhi, (Businessman)',
		},
		{
			title: 'Maternal Aunt (Maasi)',
			details: 'Two settled in Delhi',
		},
	]
	return (
		<div className="FamilySection">
			<section className="skills-section" id="skills">
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
