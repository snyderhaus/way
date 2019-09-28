import React, { Fragment } from 'react';

const McAfee = () => {
	return (
		<Fragment>
			<div className="row justify-content-md-center animated delay-1">
			<div className="col-md-8">
				<p className="mb-4">Gamer is a next-generation product and entrepreneurial in nature unlike any customer McAfee serves today. It optimizes online gameplay by assigning higher OS priority to provide a faster experience.</p>
				<p className="mb-4">Our dashboard shows which apps are impacting the system and allows the gamer to either close or deprioritize them when games launch. The monitoring peice allows users to verify that McAfee is taking up low amounts of CPU in real-time, and past game sessions.</p>
				<p className="mb-5 pb-5">This project is on-going and currently being developed for CES and beta release. My responsibility includes redesign, prototyping, and rapid-iteration off the initial designs. </p>
			</div>
			</div>
			<img src="../images/game_1.png" className="mb-5 animated delay-2 img-fluid" alt="" height="auto" width="100%" />
			<div className="row justify-content-md-center py-5">
			<div className="col-md-8">
				<h3 className="mb-5">Design Process</h3>
				<p className="mb-4">In mid 2018, two other designers were tasked with interaction and visual design for this project. This intiative would be a stepping stone to innovate based on personas – with customer centricity at the core. This would also be the first McAfee product that featured a dark UI.</p>
				<p className="mb-4">This original team had four months to complete a competitive analysis, define a product strategy, build an information architecture, create user flows, and deliver visual and IX designs. </p>
				<p className="mb-4">Three months later, we went through an organizational change. Our new Director re-evaluated the project and was ultimately dissatisfied with the lack of progress and lack of quality so far. She felt the designs were subpar and needed more experienced hands to take the reins. </p>
			</div>
			</div>
			<div className="row justify-content-md-center py-5">
			<div className="col-md-8">
				<h3 className="mb-5">My Role</h3>
				<p className="mb-4">On her first day of work, our new Director called me and another Interaction Designer into her office and pleaded with us to take over this project. She needed the “best” for this project because she “couldn’t afford to let this fail.” </p>
				<p className="mb-4">We took the weekend to mull over the decision. Quite naturally there was some apprehension about timelines, team dynamics, and managing expectations. Neither of us were gamers and this would be new territory for us. Still, she had faith that we would be successful.</p>
				<p className="mb-4">We later agreed to take on the challenge, and the knowledge transfer began.</p>
			</div>
			</div>
			<div className="row justify-content-md-center py-5">
			<div className="col-md-8">
				<h3 className="mb-5">Evaluating the Initial Designs</h3>
				<h4 className="mb-4">UX Assessment</h4>
				<p className="mb-4">To ensure proper assessment of the intial designs and avoid subjectivity, we selected the targeted dimensions and deployed research methodologies specific to our persona base.</p>
				<p className="mb-4">High-level constructs that were used as the basis for defining the user experience measures.</p>
				<ul className="list">
					<li className="mb-3">
						<p><b>Utility</b></p>
						<p>Is the interface functional and purposeful to the gamer?</p>
					</li>
					<li className="mb-3">
						<p><b>Usability</b></p>
						<p>Is the design intuitive and efficient for the gamer to complete their task?</p>
					</li>
					<li className="mb-3">
						<p><b>Aesthetics</b></p>
						<p>Is the product visually appealing to gamers? Is it on par with the high-end graphical games they are used to seeing?</p>
					</li>
					<li className="mb-3">
						<p><b>Value</b></p>
						<p>Is the product important to users? Does it solve the problems users are faced with?</p>
					</li>
				</ul>
			</div>
			</div>
			<img src="../images/mcafee_gamer.png" className="img-fluid mt-5 mb-3" alt="" height="auto" width="100%"/>
			<div className="row justify-content-md-center">
			<div className="col-md-8">
				<p className="text-center"><small>Mockups created by original designers, Oct 2018.</small></p>
				<div className="py-5 mt-5">
					<h4 className="mb-5">Reviewing the Problem Statement</h4>
					<ul className="list">
						<li className="mb-3">
						<p><b>User wants to</b></p>
						<p>have an immersive gameplay experience or play a game as a break from ongoing activities on the computer</p>
						</li>
						<li className="mb-3">
						<p><b>But...</b></p>
						<p>they get interrupted with popups and unexpected lags </p>
						</li>
						<li className="mb-3">
						<p><b>Which makes them feel...</b></p>
						<p>irritated and annoyed</p>
						</li>
					</ul>
				</div>
				<div className="pt-5">
					<h4 className="mb-5">Personas</h4>
					<p>Who are our customers?</p>
				</div>
			</div>
			</div>
			<img src="../images/mcafee_persona.png" className="img-fluid" alt="" height="auto" width="100%"/>
			<div className="row justify-content-md-center py-5">
			<div className="col-md-8">
				<h4 className="mb-5">Value Testing</h4>
				<p className="mb-5">Users were tested on whether they understood the value of the product, what it does, and what benefit it was providing.</p>
			</div>
			</div>
			<div className="row mb-5">
			<div className="col-md-7"><img src="../images/gamer_example.png" className="img-fluid" alt="" height="auto" width="100%"/></div>
			<div className="col pl-5">
				<h4 className="mb-5">Scenario Test</h4>
				<p className="mb-5">During gameplay, you experience a performance dip. You Alt + Tab to your McAfee product to see what is wrong…</p>
				<p className="mb-3"><i className="fas fa-check mr-1 text-success"></i> Issues clearly recognized with tabs</p>
				<p className="mb-3"><i className="fas fa-times mr-1 text-danger"></i> Unclear troubleshooting methods</p>
				<p className="mb-3"><i className="fas fa-times mr-1 text-danger"></i> Red misinterpreted as danger</p>
			</div>
			</div>
			<div className="row justify-content-md-center">
			<div className="col-md-8">
				<p>Users needed help understanding the data shown and wanted tools or advice to help them troubleshoot any issues. The new design should focus on helping Enthusiasts interpret the data better and move quickly to fix issues. </p>
			</div>
			</div>
			<div className="row justify-content-md-center py-5">
			<div className="col-md-8">
				<h4 className="my-5">Security</h4>
				<p className="mb-5">McAfee is well known as a security software giant. Most customers consider us as an AV company while others associate us with online protection. ​We are also widely considered a system hog and are often uninstalled because of the plethora of annoying pop-ups and high computing resource utilization.​</p>
				<p className="my-5">Survey details are from 1,000 adult online respondents who live in the U.S. and was conducted in Nov, 2018​.</p>
				<p className="mb-4">The following key findings show that gamers value & use AV to stay protected online:</p>
				<ul className="list mb-5">
					<li className="mb-3">
						<p><b>39% say AV is important</b></p>
						<p>83% use a non-Defender AV and 50% claim they’ve had maclious attacks. Top drivers are spending less than $60, low impact on PC performance, & trusted company.</p>
					</li>
					<li className="mb-3">
						<p><b>75% are worried about hackers</b></p>
						<p>Future worries also included costs to own a powerful gaming PC, and gaming performance being held back by other programs.</p>
					</li>
					<li className="mb-3">
						<p><b>Graphics is most important</b></p>
						<p>Other important components include CPU, RAM, security, storage capacity, and budget.</p>
					</li>
				</ul>
				<p>Despite our reputation for being annoying and a performance hog, our findings revealed that gamers value & use AV to stay protected online.</p>
			</div>
			</div>
			<div className="row justify-content-md-center py-5">
			<div className="col-md-8">
				<h4 className="mb-5">Problem Space</h4>
				<p className="mb-5">After reviewing user research, personas, and the initial designs, three major pain points emerged from the study.</p>
			</div>
			</div>
			<div className="row justify-content-md-center">
			<div className="col-md-12"><img src="../images/problem_space.png" className="img-fluid mb-5"  alt="" height="auto" width="100%"/></div>
			</div>
			<div className="row justify-content-md-center py-5">
			<div className="col-md-8">
				<h3 className="mb-5">Iterative Design Process</h3>
				<p>Given the transitional period required to get us up to speed and the aggressive timelines, we decided it was best to adopt an iterative working model. After the initial planning phase, various stages of ideation, implentation, and testing are repeated over and over, with each completion of the cycle incrementally improving and iterating on the design. With this process, improvements are easily recognized and implemented throughout each iteration allowing for rapid turnaround and quality of deliverables.</p>
			</div>
			</div>
			<div className="row justify-content-md-center py-5 mb-5">
			<div className="col-md-10"><img src="../images/gamer_graphs.png" className="img-fluid mb-5" alt="" height="auto" width="100%"/></div>
			</div>
			<div className="row justify-content-md-center py-5">
			<div className="col-md-8">
				<h3 className="mb-5">Drop Schedule</h3>
			</div>
			</div>
			<div className="row justify-content-md-center">
			<div className="col-md-10"><img src="../images/gamer_drop.png" className="img-fluid mb-5 pb-5" alt="" height="auto" width="100%"/></div>
			</div>
			<div className="row justify-content-md-center py-5">
			<div className="col-md-8">
				<h3 className="my-5">2-day Workshop</h3>
				<p className="mb-5">The objective of the workshop was to re-confirm our understanding of our research, requirements and use cases so that the IX designer and I could move quickly with our task.</p>
				<p className="mb-3">Attendees:</p>
				<ul className="list mb-5">
					<li>
						<p className="mb-2">Don M. – Vice President, Engineering</p>
					</li>
					<li>
						<p className="mb-2">Nancy V. – Director, UX </p>
					</li>
					<li>
						<p className="mb-2">Eli D. – Director, Product</p>
					</li>
					<li>
						<p className="mb-2">Shalini S. – Product Manager</p>
					</li>
					<li>
						<p className="mb-2">Alex S. – Researcher</p>
					</li>
					<li>
						<p className="mb-2">Mike D. – Designer, IX</p>
					</li>
					<li>
						<p className="mb-2"><b>Myself. – Designer, UI</b></p>
					</li>
				</ul>
			</div>
			</div>
			<div className="row justify-content-md-center">
			<div className="col-md-8"><img src="../images/IMG_5299.png" className="img-fluid" alt="" height="auto" width="100%"/></div>
			</div>
			<div className="row justify-content-md-center mt-5 py-5">
			<div className="col-md-8">
				<p className="mb-3">Agenda:</p>
				<ul className="list">
					<li className="mb-3">
						<p><b>Pre-read</b></p>
						<p>Read primary research deck provided by the research team</p>
					</li>
					<li className="mb-3">
						<p><b>Brainstorm Exercise</b></p>
						<p>Answer top 7 questions together, through an exercise led by the VP</p>
					</li>
					<li className="mb-3">
						<p><b>MVP</b></p>
						<p>Inventory our value propositions and the key requirements to support them</p>
					</li>
					<li className="mb-3">
						<p><b>Use Cases</b></p>
						<p>Write use case(s) for each requirement, following a template</p>
					</li>
					<li className="mb-3">
						<p><b>Sketch Concepts</b></p>
						<p>Play around with basic UX concepts - on paper - like interactions, navigation etc.</p>
					</li>
				</ul>
			</div>
			</div>
			<div className="row justify-content-md-center py-5">
			<div className="col-md-8">
				<h4 className="mb-5">Brainstorm Exercise</h4>
				<p className="mb-5">Our VP came up with 7 questions we would answer as a group to help us understand the problems we are trying to solve. We then took a few minutes to write down our individual insights on sticky notes.</p>
			</div>
			</div>
			<div className="row justify-content-md-center pb-5">
			<div className="col-md-10"><img src="../images/gamer_brainstorms.png" className="img-fluid" alt="" height="auto" width="100%"/></div>
			</div>
			<div className="row justify-content-md-center my-5">
			<div className="col-md-4"><img src="../images/IMG_5272.png" className="img-fluid" alt="" height="auto" width="100%"/></div>
			<div className="col-md-4"><img src="../images/IMG_5273.png" className="img-fluid" alt="" height="auto" width="100%"/></div>
			</div>
			<div className="row justify-content-md-center">
			<div className="col-md-8 py-5">
				<p className="mb-5">Then we paired off to organize the ideas based on natural relationships. Each pair took turns parsing the info and this further refined the groups we created.</p>
				<p className="mb-5"><a href="">See full notes <i className="fas fa-arrow-right ml-3"></i></a></p>
			</div>
			</div>
			<div className="row justify-content-md-center">
			<div className="col-md-8"><img src="../images/IMG_5282.png" className="img-fluid" alt="" height="auto" width="100%"/></div>
			</div>
			<div className="row justify-content-md-center py-5">
			<div className="col-md-8">
				<h4 className="my-5">Sketch Concepts</h4>
				<p>I collaborated with the IX designer and explored user flows and basic concepts on a whiteboard. We then shared our sketches with the group, and everyone loved them. I jokingly suggested that our VP should autograph our designs. He not only signed it, but he dated it also.</p>
			</div>
			</div>
			<div>
			<div className="row justify-content-md-center mb-5">
				<div className="col-md-4"><img src="../images/IMG_5274.png" className="img-fluid" alt="" height="auto" width="100%"/></div>
				<div className="col-md-4"><img src="../images/IMG_5275.png" className="img-fluid" alt="" height="auto" width="100%"/></div>
			</div>
			</div>
			<div className="row justify-content-md-center pt-5">
			<div className="col-md-8">
				<h3 className="mb-5">Wireframe</h3>
				<p className="mb-5">Once we reconfirmed our understanding of the requirements and clearly understood the problem we wanted to design for, we created wireframes to make the functionality of every section in the app tangible. From performance to security, we laid out all the flows.</p>
				<p className="mb-5"><a href="../images/wireframe.pdf" target="_blank"> See full image <i className="fas fa-arrow-right ml-3"></i></a></p>
			</div>
			</div>
			<img src="../images/wireframing.png" className="img-fluid mb-5" alt="" height="auto" width="100%"/>
			<div className="row justify-content-md-center py-5">
			<div className="col-md-8">
				<h3 className="mb-5">Prototype</h3>
				<p className="mb-5">We then created a clickable, interactive prototype using Invision. This came in handy for quick reviews and dev consumption without real need for specs.</p>
				<p><a href="https://bit.ly/2ENl75H" rel="noopener noreferrer" target="_blank">Check the prototype online <i className="fas fa-arrow-right ml-3"></i></a></p>
			</div>
			</div>
			<div className="row justify-content-md-center py-5">
			<div className="col-md-8">
				<h3 className="mb-5">Solutions</h3>
				<h4 className="mb-4">Confidence & Belief</h4>
				<p>Enthusiasts desired an easy monitoring view to interpret the data better. Our performance dashboard provides certainty that all metrics are effectively being monitored and that our tools are effective.</p>
			</div>
			</div>
			<img src="../images/game_overview.png" className="img-fluid mb-5" alt="" height="auto" width="100%" />
			<div className="row justify-content-md-center py-5">
			<div className="col-md-8">
				<h4 className="mb-5">Troubleshooting</h4>
				<p className="mb-5">The settings dropdown along with the App Manager provide optimizations so gamers can move quickly to fix issues. To prevent slow-downs, the right actions to take are clear. </p>
			</div>
			</div>
			<img src="../images/game_overview2.png" className="img-fluid mb-5" alt="" height="auto" width="100%" />
			<div className="row justify-content-md-center">
			<div className="col-md-10"><img src="../images/3_headed.png" className="img-fluid my-5" alt="" height="auto" width="100%" /></div>
			</div>
			<div className="row justify-content-md-center py-5">
			<div className="col-md-8">
				<h4 className="mb-5">Light AV</h4>
				<p>Our trusted low-impact solution protects gamers online without features that hog system resources. Disruptive notifications and updates are easily managed within our console. </p>
			</div>
			</div>
			<img src="../images/gamer_lightav.png" className="img-fluid mb-5" alt="" height="auto" width="100%" />
			<div className="row justify-content-md-center py-5">
			<div className="col-md-8">
				<h3 className="mb-5">Updates</h3>
				<h4 className="mb-5">Onboarding Experience</h4>
				<p className="mb-0">Enthusiasts are known to skip welcome tours and jump directly to gaming. Advisors, however, are more inclined to engage in an onboarding experience and preferred learning about the product before diving in. It was important for us to satisfy both personas.</p>
			</div>
			</div>
			<img src="../images/mcafee_update.png" className="img-fluid mb-5" alt="" height="auto" width="100%" />
			<div className="row justify-content-md-center py-5">
			<div className="col-md-8">
				<h3 className="mb-5">Coming soon...</h3>
				<p className="mb-5">After several rounds of iteration, we landed on a solution with a clean interface that satisfies our target persona (Enthusiast). With our iterative design process, I anticipate many more updates and changes as we refine our designs.</p>
				<p className="mb-5">We have several more requirements in the works. Mini UI, welcome XP, install/uninstall flow, and a minimal view…just to name a few.</p>
			</div>
			</div>
			<div className="row justify-content-md-center py-5">
			<div className="col-md-8">
				<h3 className="mb-5">From the Peanut Gallery</h3>
				<div className="media mb-5">
					<img src="../images/user1.png" className="align-self-start mr-5" height="80" width="80" style={{ borderRadius: "50%" }} alt=""/>
					<div className="media-body">
						<p className="mb-3">&quot;I know at times working on the Gamer product feels like we&#39;re trying to launch a rocket into orbit. <b>I can&#39;t think of a better person</b> to take on such a challenge. Thanks for your commitment and support.&quot;</p>
						<small className="mt-0"><b className="text-danger mr-2">NANCY VEGA</b><b className="text-secondary">DIRECTOR</b></small>
					</div>
				</div>
				<div className="media my-5 py-5">
					<img src="../images/user2.png" className="align-self-start mr-5" height="80" width="80" style={{ borderRadius: "50%" }} alt=""/>
					<div className="media-body">
						<p className="mb-3">&quot;You always show an eagerness to deliver value to our customers. You are constantly advocating for the users through your designs. I appreciate <b>your focus on leveraging user research</b> to make the best design possible.&quot;</p>
						<small className="mt-0"><b className="text-danger mr-2">ALEXANDER SCOTT</b><b className="text-secondary">RESEARCHER</b></small>
					</div>
				</div>
				<div className="media my-5">
					<img src="../images/user3.png" className="align-self-start mr-5" height="80" width="80" style={{borderRadius: "50%"}} alt=""/>
					<div className="media-body">
						<p className="mb-3">&quot;Thanks for always supporting me and getting my back when I want to do something crazy to the UI. Together, we are building a pretty sweet product that will be something that&#39s not a pain for people to use.&quot;</p>
						<small className="mt-0"><b className="text-danger mr-2">BRYCE SNYDER</b><b className="text-secondary">DEVELOPER</b></small>
					</div>
				</div>
			</div>
			</div>
		</Fragment>
	);
}

export default McAfee;